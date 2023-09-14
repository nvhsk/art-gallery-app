import Spotlight from "@/components/Spotlight/Spotlight";

function getRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function SpotlightPage({ data }) {
  const spotlightPiece = getRandomPiece(data);

  return (
    <Spotlight
      image={spotlightPiece.imageSource}
      artist={spotlightPiece.artist}
      title={spotlightPiece.title}
      slug={spotlightPiece.slug}
    />
  );
}
