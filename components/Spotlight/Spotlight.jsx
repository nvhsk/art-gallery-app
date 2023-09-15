import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  title,
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <>
      <h3>Spotlight: {title}</h3>
      <Image src={image} alt={title} width={250} height={250}></Image>
      <h4>{artist}</h4>
      <FavoriteButton
        id={slug}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
