export const config = {
  //apiUrl: "http://localhost:6060",
  //apiUrl: "https://devcmsapi.c-paas.com",
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/auth/v1/get-api-token",
  apiUser: "vuedata",
  apiPassword: "vuedata@123",
  cryptoCipherKey: "VueData",
  cryptoCipherIv: "VueData@123",
};

export const themeConfig = {
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/v1/tentkotta/themes",
  apiUser: "vuedata",
  apiPassword: "vuedata@123",
  cryptoCipherKey: "VueData",
  cryptoCipherIv: "VueData@123",
};

export const preSignInEmailVal = {
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/v1/tentkotta/user/validate-email",
};

export const signIn = {
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/v1/tentkotta/user/login",
};
export const signOut = {
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/v1/tentkotta/user/logout",
};

export const rotateSignInKey = {
  apiUrl: "https://devapp-api.c-paas.com",
  getAccessKeyToken: "/cpaas/v1/tentkotta/user/refresh-token",
};

export const resetPassEmail = {
  apiUrl: "https://devapp-api.c-paas.com",
  resetPassword: "/cpaas/v1/tentkotta/user/send-resetpwd-email",
};

export const resetPass = {
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/v1/tentkotta/user/reset-password",
};

export const signup = {
  apiUrl: "https://devapp-api.c-paas.com",
  getApiToken: "/cpaas/v1/tentkotta/user/signup",
};

export const tos = {
  url: "https://devapp-api.c-paas.com",
  pattern: "/cpaas/v1/tentkotta/pages/terms-of-service",
};
export const privacy = {
  url: "https://devapp-api.c-paas.com",
  pattern: "/cpaas/v1/tentkotta/pages/privacy-policy",
};
export const about = {
  url: "https://devapp-api.c-paas.com",
  pattern: "/cpaas/v1/tentkotta/pages/about-us",
};

export const updateEmail = {
  url: "https://devapp-api.c-paas.com",
  path: "/cpaas/v1/tentkotta/email",
};

export const updatePassword = {
  url: "https://devapp-api.c-paas.com",
  path: "/cpaas/v1/tentkotta/updatepassword",
};

export const updatePhoneNo = {
  url: "https://devapp-api.c-paas.com",
  path: "/cpaas/v1/tentkotta/updatephonenumber",
};

export const cancelmembershipcofig = {
  url: "https://devapp-api.c-paas.com",
  path: "/cpaas/v1/tentkotta/cancelmembershipreq",
};

export const analyticsApi = {
  url: "https://analytics.c-paas.com",
  path: "/cpaas/v1/tentkotta/analytics/event",
};

export const loggerApi = {
  url: "http://localhost:7000",
  path: "/logger",
};
