import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ data, artPiecesInfo, onToggleFavorite }) {
  const filteredData = artPiecesInfo.map((piece) => {
    const matchingData = data.find((dataPiece) => dataPiece.slug === piece.id);
    return matchingData;
  });

  return (
    <ArtPieces
      pieces={filteredData}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
