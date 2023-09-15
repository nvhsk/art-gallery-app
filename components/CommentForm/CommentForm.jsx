import Comments from "../Comments/Comments";

export default function CommentForm({ onSubmitComment, id, artPiecesInfo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newCommentString = event.target.comment.value;
    onSubmitComment(id, newCommentString);
  }

  return (
    <section>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"> Your Comment:</label>
        <input type="text" id="comment" name="comment" />
        <button type="submit">Send</button>
      </form>
      <Comments comments={artPiecesInfo} id={id} />
    </section>
  );
}
