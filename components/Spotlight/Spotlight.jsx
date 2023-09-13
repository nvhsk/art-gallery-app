import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  return (
    <StyledSection>
      <h2>Todays Spotlight Art Piece</h2>
      <article>
        <StyledImage src={image} alt="Random Image" width={400} height={400} />
        <h4>From: {artist}</h4>
      </article>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  text-align: center;
  background-image: linear-gradient(180deg, #525252, #2e2e2e);
  outline: 1.5px solid #2e2e2e;
  border-radius: 10px;
  gap: 1rem;
  color: white;
  padding: 1rem 0 1rem 0;
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
`;
