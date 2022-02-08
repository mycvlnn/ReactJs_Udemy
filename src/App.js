import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import NewQuote from "./pages/Quotes/NewQuote";
import AllQuotes from "./pages/Quotes/AllQuotes";
import QuoteDetail from "./pages/Quotes/QuoteDetail";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
