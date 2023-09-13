import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Spotlight from "@/components/Spotlight/Spotlight";

function getRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function ArtPieces({ pieces }) {
  const spotlightPiece = getRandomPiece(pieces);

  return (
    <>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        title={spotlightPiece.title}
      />

      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.name}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </>
  );
}
