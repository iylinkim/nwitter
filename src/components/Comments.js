import { dbService } from "fbase";
import { useRef, useState } from "react";
import Comment from "./Comment";
import "styles/comments.css";

const Comments = ({ mweetObj, userObj }) => {
  const [isComments, setIsComments] = useState(false);
  const commentRef = useRef();
  const handleComment = () => {
    setIsComments((state) => !state);
  };
  const onSubmit = () => {
    dbService.doc(`mweets/${mweetObj.id}`).update({
      comments: [
        ...mweetObj.comments,
        {
          displayName: userObj.displayName,
          comment: commentRef.current.value,
        },
      ],
    });

    commentRef.current.value = "";
  };

  return (
    <>
      <p className="comment_icon" onClick={handleComment}>
        <i className="far fa-comment-alt"></i>
      </p>
      <div className="comments_box">
        {isComments && (
          <>
            <form className="add_comment" onSubmit={onSubmit}>
              <input
                className="comment_input"
                ref={commentRef}
                type="text"
                placeholder="Write Comment"
              />
              <input className="comment_submit" type="submit" value="Add" />
            </form>
            <ul className="comments_list">
              {mweetObj.comments &&
                Object.keys(mweetObj.comments).map((key) => {
                  return (
                    <Comment
                      key={key}
                      each_comment={mweetObj.comments[key]}
                      userObj={userObj}
                    />
                  );
                })}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Comments;
