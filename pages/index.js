import Spotlight from "@/components/Spotlight/Spotlight";

function getRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function SpotlightPage({ data, onToggleFavorite }) {
  // Komponente wird neugeladen, wenn Favorite Button gedrückt wird
  // => wenn der State sich ändert
  // heißt, es kommt wieder ein neues randomPiece

  const spotlightPiece = getRandomPiece(data);

  return (
    <Spotlight
      image={spotlightPiece.imageSource}
      artist={spotlightPiece.artist}
      title={spotlightPiece.name}
      onToggleFavorite={onToggleFavorite}
      slug={spotlightPiece.slug}
    />
  );
}
