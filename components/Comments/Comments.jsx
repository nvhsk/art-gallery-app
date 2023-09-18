export default function Comments({ comments, id }) {
  const matchingPieceComments = comments.find((comment) => comment.id === id);

  if (!matchingPieceComments || !matchingPieceComments.comments) {
    return null;
  }

  const newComments = matchingPieceComments.comments.map((comment) => comment);

  return (
    <ul>
      {newComments.map((comment, index) => {
        return <li key={index}>{comment}</li>;
      })}
    </ul>
  );
}
