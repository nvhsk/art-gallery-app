import ArtPieces from "@/components/ArtPieces/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage({ fetcher }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
    </>
  );
}
