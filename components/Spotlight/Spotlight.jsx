import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist }) {
  return (
    <StyledSection>
      <h2>Todays Spotlight Art Piece</h2>
      <article>
        <Image src={image} alt="Random Image" width={250} height={250} />
        <h4>From: {artist}</h4>
      </article>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  text-align: center;
  background-image: linear-gradient(180deg, #ffdde1, #ee9ca7);
  border-radius: 10px;
  outline: 1px solid hsl(351.95121951219517, 70.68965517241381%, 50%);
  gap: 1rem;
  color: #151515;
  padding: 1rem 0 1rem 0;
`;
