import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Art Pieces</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  background-color: grey;
`;
