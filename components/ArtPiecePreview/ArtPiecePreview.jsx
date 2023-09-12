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
  background-color: #e9e7e7;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`;

const StyledImage = styled(Image)`
  border-radius: 15px;
  margin-bottom: 0.5rem;
`;

const StyledArtTitle = styled.h3`
  margin-bottom: 5px;
`;
