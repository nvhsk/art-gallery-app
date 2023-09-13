import ArtPieces from "@/components/ArtPieces/ArtPieces";

import styled from "styled-components";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage({ fetcher }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (!data) {
    return null;
  }

  if (isLoading) {
    return <h1>Is loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <StyledMain>
      <StyledHeadline>Art Gallery</StyledHeadline>
      <ArtPieces pieces={data} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 1rem;
`;
const StyledHeadline = styled.h1`
  background-image: linear-gradient(180deg, #525252, #2e2e2e);
  outline: 1.5px solid #2e2e2e;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
`;
