import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ data, artPiecesInfo, onToggleFavorite }) {
  const filteredData = artPiecesInfo.filter((piece) => piece.isFavorite);
  const favorites = filteredData.map((piece) => {
    const matchingData = data.find((dataPiece) => dataPiece.slug === piece.id);
    return matchingData;
  });

  if (!favorites) {
    return;
  }

  return (
    <ArtPieces
      pieces={favorites}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
