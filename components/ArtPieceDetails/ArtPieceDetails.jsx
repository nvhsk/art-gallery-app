import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} width={350} height={350} alt={`Image of ${title}`} />
      <p>
        <strong>Artist: </strong>
        {artist}
      </p>
      <p>
        {genre} - {year}
      </p>
    </>
  );
}
