import styled from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Spotlight from "../Spotlight/Spotlight";

export default function ArtPieces({ pieces }) {
  let cachedPiece = null;

  function getRandomPieceObject() {
    const randomNumberFromArrayLength = Math.floor(
      Math.random() * pieces.length
    );
    const randomPiece = pieces[randomNumberFromArrayLength];
    cachedPiece = randomPiece;
    return randomPiece;
  }

  function getSpotlightPiece() {
    const newPiece = cachedPiece || getRandomPieceObject();
    const randomPieceImage = newPiece.imageSource;
    const randomPieceArtist = newPiece.artist;

    return { image: randomPieceImage, artist: randomPieceArtist };
  }

  return (
    <>
      <Spotlight
        image={getSpotlightPiece().image}
        artist={getSpotlightPiece().artist}
      />
      <StyledSection>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.name}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        ))}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 1rem;
  column-gap: 5px;
`;
