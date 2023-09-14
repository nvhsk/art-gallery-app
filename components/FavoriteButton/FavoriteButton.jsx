import Image from "next/image";
import FavoriteIcon from "../../assets/heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite, id }) {
  return (
    <button
      onClick={() => {
        onToggleFavorite(id, isFavorite);
      }}
      type="button"
    >
      <Image src={FavoriteIcon} width={25} height={25} alt="Favorite Button" />
    </button>
  );
}
