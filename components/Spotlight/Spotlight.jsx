import Image from "next/image";

export default function Spotlight({ image, artist, title }) {
  return (
    <>
      <h3>Spotlight:</h3>
      <Image src={image} alt={title} width={250} height={250}></Image>
      <h4>{artist}</h4>
    </>
  );
}
