import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {
    sendRequest,
    status,
    data: loadedComments,
    error,
  } = useHttp(getAllComments, true);

  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let content;

  if (status === "pending") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    content = (
      <div className="centered">
        <h3>Something went wrong !</h3>
      </div>
    );
  }

  if (status === "success" && loadedComments.length > 0) {
    content = <CommentsList comments={loadedComments} />;
  }

  if (status === "success" && loadedComments.length === 0) {
    content = (
      <div className="centered">
        <h3>No comments were added yet !</h3>
      </div>
    );
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    setIsAddingComment(false);
    //call api load list comment
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddComment={addCommentHandler} />
      )}
      {content}
    </section>
  );
};

export default Comments;
