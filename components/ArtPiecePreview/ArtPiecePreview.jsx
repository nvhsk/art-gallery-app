import Image from "next/image";
import styled from "styled-components";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <StyledArticle>
      <StyledImage src={image} alt={title} width={250} height={250} />
      <StyledArtTitle>{title}</StyledArtTitle>
      <p>
        from <strong>{artist}</strong>
      </p>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  background-image: linear-gradient(180deg, #525252, #2e2e2e);
  outline: 1.5px solid #2e2e2e;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  color: white;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const StyledArtTitle = styled.h3`
  margin-bottom: 5px;
`;
