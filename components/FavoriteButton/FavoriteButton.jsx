import Image from "next/image";

export default function FavoriteButton({
  onToggleFavorite,
  id,
  artPiecesInfo,
}) {
  let isFavorite = false;

  function isPieceFavorite(id) {
    if (artPiecesInfo.find((piece) => piece.id === id && piece.isFavorite)) {
      isFavorite = true;
    }
  }
  isPieceFavorite(id);

  return (
    <button
      onClick={() => {
        onToggleFavorite(id);
      }}
      type="button"
    >
      {isFavorite ? (
        <Image
          src="/assets/heart.svg"
          width={25}
          height={25}
          alt="Favorite Button"
        />
      ) : (
        <Image
          src="/assets/emptyheart.png"
          width={25}
          height={25}
          alt="Favorite Button"
        />
      )}
    </button>
  );
}
