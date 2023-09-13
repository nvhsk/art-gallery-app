import Layout from "@/components/Layout/Layout";
import useSWR from "swr";
import GlobalStyle from "../styles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <GlobalStyle />
      <main>
        <h1>Art Gallery</h1>
        <Component {...pageProps} data={data} />
      </main>
      <Layout />
    </>
  );
}
