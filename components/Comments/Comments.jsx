export default function Comments({ comments, id }) {
  const matchingPieceComments = comments.find((comment) => comment.id === id);

  let newComments;
  if (matchingPieceComments) {
    newComments = matchingPieceComments.comments.map((comment) => comment);
  }

  if (newComments) {
    return (
      <ul>
        {newComments.map((comment, index) => {
          return <li key={index}>{comment}</li>;
        })}
      </ul>
    );
  }
}
