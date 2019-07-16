import React, { Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Common from "@sm/common";

const SearchExperience = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve(
          import(
            /* webpackChunkName: 'search-experience' */ "@sm/search-experience"
          )
        ),
      3000
    );
  });
});

const ContentExperience = React.lazy(() => {
  return import(
    /* webpackChunkName: 'content-experience' */ "@sm/content-experience"
  );
});

const Bootstrap = () => (
  <Router>
    <div>
      <div>Searchmetrics</div>
      <Common.Navigation />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  </Router>
);

const container = document.getElementById("react-root");
render(<Bootstrap />, container);
