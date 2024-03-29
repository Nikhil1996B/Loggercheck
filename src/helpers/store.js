import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

export const middleWares = [thunkMiddleware];

console.log(process.env.REACT_APP_ENV);
const composeEnhancers =
  process.env.REACT_APP_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
// const loggerMiddleware = createLogger();

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
  whitelist: ["userAuth", "ThemeState"],
};

// const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer
const persistedReducer = persistReducer(
  {
    ...persistConfig,
    transforms: [
      encryptTransform({
        secretKey: `${process.env.REACT_APP_STOREENCRYPTOR}`,
        onError: function (error) {
          // Handle the error.
        },
      }),
    ],
  },
  rootReducer
);
export const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  composeEnhancers(applyMiddleware(...middleWares)) // add any middlewares here
);

export const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

// export { store, persistor };
