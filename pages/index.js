import Spotlight from "@/components/Spotlight/Spotlight";
import { useEffect, useState } from "react";

function getRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function SpotlightPage({
  data,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [piece, setPiece] = useState(null);

  useEffect(() => {
    setPiece(getRandomPiece(data));
  }, []);

  if (!piece) {
    return;
  }

  return (
    <Spotlight
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.name}
      onToggleFavorite={onToggleFavorite}
      slug={piece.slug}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
