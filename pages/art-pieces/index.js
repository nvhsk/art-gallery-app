import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ data, onToggleFavorite }) {
  return <ArtPieces pieces={data} onToggleFavorite={onToggleFavorite} />;
}
