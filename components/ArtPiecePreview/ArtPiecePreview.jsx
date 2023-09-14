import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <article>
        <Image src={image} alt={title} width={250} height={250} />
        <h2>{title}</h2>
        <p>from {artist}</p>
      </article>
    </Link>
  );
}
