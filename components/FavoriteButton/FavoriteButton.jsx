import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite, id }) {
  return (
    <button
      onClick={() => {
        onToggleFavorite(id, isFavorite);
      }}
      type="button"
    >
      <Image
        src="/assets/heart.svg"
        width={25}
        height={25}
        alt="Favorite Button"
      />
    </button>
  );
}
