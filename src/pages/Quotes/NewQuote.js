import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../../components/quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

const NewQuote = () => {
  const { sendRequest, status, error } = useHttp(addQuote);
  const history = useHistory();

  const addQuoteHandler = (quoteFormData) => {
    sendRequest(quoteFormData);
  };

  useEffect(() => {
    if (status === "success") {
      history.push("/quotes");
    }
    if (status === "failed") {
      alert(error);
    }
  }, [status, history, error]);

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
