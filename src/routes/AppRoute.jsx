import React from "react";
import { Route } from "react-router-dom";

import Landing from "pages/Landing";
import MainPanel from "pages/MainPanel";

export default function AppRoute() {
  return (
    <>
      <Route path="/" exact component={Landing} />
      <Route path="/main" component={MainPanel} />
    </>
  );
}
