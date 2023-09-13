import Link from "next/link";

export default function Navigation() {
  return (
    <footer>
      <nav>
        <Link href="/">Home</Link>
        <br />
        <Link href="/art-pieces">All Art</Link>
      </nav>
    </footer>
  );
}
