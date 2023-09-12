import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      <Image src={image} alt={title} width={250} height={250} />
      <h2>{title}</h2>
      <p>from {artist}</p>
    </article>
  );
}
