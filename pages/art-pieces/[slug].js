import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Slug({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const slugData = data.find((data) => data.slug === slug);
  if (!slugData) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <ArtPieceDetails
      image={slugData.imageSource}
      title={slugData.name}
      artist={slugData.artist}
      year={slugData.year}
      genre={slugData.genre}
    />
  );
}
