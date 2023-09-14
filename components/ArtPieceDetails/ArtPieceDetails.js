import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <article>
      <Image src={image} alt={title} width={250} height={250} />
      <h2>{title}</h2>
      <p>from {artist}</p>
      <p>painted in {year}</p>
      <p>Genre: {genre}</p>
    </article>
  );
}
