import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ data, artPiecesInfo, onToggleFavorite }) {
  // console.log(data);
  // [{},{},{}]
  // console.log(artPiecesInfo);
  // erst [], dann [{},{},{}]
  // ---------------------------
  // filter returnt immer ein Array []. Also kommt [[{}],[{}],[{}]]
  // über data mappen macht kein Sinn, weil zu viele Einträge
  // über artPiecesInfo mappen macht Sinn. Filter returnt aber Array in Array
  // Wie bekomme ich die Einträge aus data gefiltert, wo data.slug === artPiecesInfo.id ist?
  // ===== data.find gibt das Objekt zurück ohne ein neues Array zu erstellen.
  const filteredData = artPiecesInfo.map((piece) => {
    const matchingData = data.find((dataPiece) => dataPiece.slug === piece.id);
    return matchingData;
  });

  console.log(filteredData);

  // * Jetzt haben wir die korrekte Datenstruktur, aber das Löschen funktioniert noch nicht.
  // * Bei Neuladen der Seite, gehen alle Favoriten verloren.

  return (
    <ArtPieces pieces={filteredData} onToggleFavorite={onToggleFavorite} />
  );
}
