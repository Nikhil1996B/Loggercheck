import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pathOr, isNil, sortBy, pluck, compose, prop, flatten } from "ramda";
import HeaderComp from "../../components/Header/headercomponent";
import { getByGenrer } from "../../components/Carousel/api/Movies";
import MyListList from "../../components/MyListList/MyList";
import MyListPageLayout from "./mylistpagelayout";
import Footer from "../../components/Footer/footer";
import { analyticsService } from "../../services/analyticsapi.service";
import { usePrevious } from "../../helpers/prevValuehook";

// Once the user tries to navigate to the pages on website,
// there will be a configuration pertaining to the slots in which
// the contents will be layed out and which compnents should render

// TODO:
// Write an config object in which we take in the attributes to decide the slots in which the contents are loaded.
// Before all, we take in the object, create slots and add the components dynamically to these slots

// Use the following structure to avoid prop drilling on each page container

// Lookup table of components based on id
const availableSearchResultsPageComponent = [
  {
    module_id: "header-component",
    component: HeaderComp,
  },
  {
    module_id: "my-list-component",
    component: MyListList,
  },
  {
    module_id: "footer-component",
    component: Footer,
  },
];

function MyListPagePageContent({ user }) {
  // Initial setup
  const themes = useSelector((state) => state.ThemeState);
  const prevThemeValue = usePrevious(themes);
  const themeName = pathOr("", ["themeName"])(themes);
  // const themesLoading = useSelector(state => pathOr(false, ['ThemeState', 'loading'])(state))
  // const reload = useSelector(state => pathOr('', ['userAuth', 'reload'])(state));

  // React-redux setup
  const dispatch = useDispatch();
  useEffect(() => {
    analyticsService.addeventanalytics("pageview", "searchresults");
    return () => {};
  }, []);
  const pageconfiguration = {
    header: {
      position: "top",
      components: [
        {
          module_id: "header-component",
          index: 1,
        },
      ],
    },
    body: {
      position: "middle",
      components: [
        {
          module_id: "my-list-component",
          index: 2,
        },
      ],
    },
    footer: {
      position: "bottom",
      components: [
        {
          module_id: "footer-component",
          index: 2,
        },
      ],
    },
  };

  const ParseLayout = (parseHeaderComponentId) => {
    var getcompid = pluck("module_id");
    const compids = getcompid(parseHeaderComponentId);
    const filteredcompid = compids.map((id) => {
      const returnvalue = availableSearchResultsPageComponent.map((values) => {
        return id.includes(values.module_id) ? values.component : null;
      });
      return returnvalue.filter((val) => !isNil(val));
    });
    return flatten(filteredcompid);
  };

  const HeaderCompId = pathOr(null, ["header", "components"])(
    pageconfiguration
  );
  const RenderHeader = ParseLayout(HeaderCompId);

  const sortByPostionIndex = sortBy(compose(prop("index")));
  const BodyComId = pathOr(null, ["body", "components"])(pageconfiguration);
  const SortByPosition = sortByPostionIndex(BodyComId);

  const RenderBody = ParseLayout(SortByPosition);

  const FooterCompId = pathOr(null, ["footer", "components"])(
    pageconfiguration
  );
  const RederFooter = ParseLayout(FooterCompId);

  // Page wise content
  const [trending, setMovies] = useState({ trending: [] });

  useEffect(() => {
    getByGenrer("Action").then((res) => {
      setMovies({ ...trending, movies: res });
      dispatch({ type: "HOME_PAGE_CONTENT", ...{ payload: res } });
    });

    return () => {};
  }, []);

  return (
    <main className={`${themeName}-my-list-Page`}>
      <MyListPageLayout />
      <Nav>
        {RenderHeader.map((HeaderComp, key) => (
          <HeaderComp key={key} />
        ))}
      </Nav>
      <Body
        content={
          <Content
            children={RenderBody.map((Childrencomp, key) => (
              <Childrencomp key={key} />
            ))}
          />
        }
        themeName={themeName}
      />
      {RederFooter.map((Footercomp, key) => (
        <Footercomp key={key} />
      ))}
    </main>
  );
}

export default MyListPagePageContent;

// Render the nav header with children within it/ them
const Nav = ({ sidebar, children }) => (
  <header>
    {/* <SideBar>{sidebar}</SideBar> */}
    {children}
  </header>
);

// Body requirements to be decided based on the cofiguration from API call
// they can be ANYTHING!

const Body = ({ content, themeName }) => (
  <section className={`${themeName}`}>{content}</section>
);

// Sidebar
// const SideBar = ({ children, themeName }) => (
//     <aside className={`${themeName} side bar`}>
//         {children}
//     </aside>
// );

// Content
const Content = ({ children }) => <div>{children}</div>;
