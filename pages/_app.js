import Layout from "@/components/Layout/Layout";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState("pieces", {
    defaultValue: [],
  });

  function handleArtPiecesInfo(slug) {
    const existingItem = artPiecesInfo.find((item) => item.id === slug);

    if (existingItem) {
      const updatedArtPiecesInfo = artPiecesInfo.map((item) => {
        if (item.id === slug) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });
      setArtPiecesInfo(updatedArtPiecesInfo);
    } else {
      setArtPiecesInfo([...artPiecesInfo, { id: slug, isFavorite: true }]);
    }
    console.log(artPiecesInfo);
  }

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1>Art Gallery</h1>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        onToggleFavorite={handleArtPiecesInfo}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
