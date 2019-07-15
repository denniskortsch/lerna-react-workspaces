import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Common from "@sm/common";

const SearchExperience = React.lazy(() => {
  return import(
    /* webpackChunkName: 'search-experience' */ "@sm/search-experience"
  );
});

const ContentExperience = React.lazy(() => {
  return import(
    /* webpackChunkName: 'content-experience' */ "@sm/content-experience"
  );
});

const Loading = <div>Loading...</div>;

const App = ({ children }) => <div>App</div>;

const Bootstrap = () => (
  <Suspense fallback={Loading}>
    <Router>
      <div>
        <div>Searchmetrics</div>
        <Common.Navigation />
        <Switch>
          <Route
            path="/content-experience"
            component={() => <ContentExperience />}
          />
          <Route
            path="/search-experience"
            render={() => <SearchExperience />}
          />
        </Switch>
      </div>
    </Router>
  </Suspense>
);

const container = document.getElementById("react-root");
render(<Bootstrap />, container);
