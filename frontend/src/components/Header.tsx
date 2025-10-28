import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-pink-700 text-white p-8 font-bold text-center">
      <h1 className="text-2xl">Checkpoint : frontend</h1>
      <Link to="/" className="text-xl font-light">Countries</Link>
    </header>
  );
}
