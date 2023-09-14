import Image from "next/image";
import Link from "next/link";

export default function Spotlight({ image, artist, title, slug }) {
  return (
    <Link href={`/art-pieces/${slug}`}>
      <h3>Spotlight:</h3>
      <Image src={image} alt={title} width={250} height={250}></Image>
      <h4>{artist}</h4>
    </Link>
  );
}
