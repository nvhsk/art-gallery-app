import Image from "next/image";

export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <div>
      <Image src={image} alt={name} width={250} height={250} />
      <h2>{name}</h2>
      <p>By: {artist}</p>
    </div>
  );
}
