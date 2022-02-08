import React, { useEffect } from "react";

import NoQuotesFound from "../../components/quotes/NoQuotesFound";
import QuoteList from "../../components/quotes/QuoteList";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";

const AllQuotes = () => {
  const {
    sendRequest,
    data: loadedQuotes,
    status,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered focused">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (status === "success" && loadedQuotes.length === 0) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
};

export default AllQuotes;
