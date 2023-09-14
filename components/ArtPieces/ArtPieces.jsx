import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.name}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </>
  );
}
