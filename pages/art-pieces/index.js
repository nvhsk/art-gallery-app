import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}