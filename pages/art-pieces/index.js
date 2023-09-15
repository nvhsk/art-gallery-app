import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  data,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <ArtPieces
      pieces={data}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
