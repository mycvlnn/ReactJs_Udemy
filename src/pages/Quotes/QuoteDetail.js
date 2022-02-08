import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import Comments from "../../components/comments/Comments";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const { path, url } = useRouteMatch();
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getSingleQuote);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (!loadedQuote?.text) {
    return <div className="centered focused">No quote found!</div>;
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${path}/comments`} exact>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
