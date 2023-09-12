import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <div key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        </div>
      ))}
    </div>
  );
}
