import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import Link from "next/link";

export default function ArtPieceDetailsPage({ data }) {
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
    </>
  );
}
