import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = data.find((piece) => piece.slug === slug);

  if (!currentPiece) {
    return <p>Something went wrong :( </p>;
  }

  return (
    <>
      <ArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
      />
      <button>
        <Link href="/art-pieces">Back to all Art Pieces</Link>
      </button>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        id={currentPiece.slug}
      />
    </>
  );
}
