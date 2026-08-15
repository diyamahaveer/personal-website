import { Link } from 'react-router-dom';

function Navbar() {
  const navLinks = [
    { label: 'Projects', to: '/projects', external: false },
    { label: 'Resume', to: '/resume', external: false },
    { label: 'Internet Brain', to: 'https://diyaveer-bulletin-board.vercel.app', external: true },
    { label: 'Distudio', to: 'https://www.youtube.com/@diya.mahaveer', external: true },
    { label: 'Archive', to: '/archive', external: false },
  ];

  return (
    <header className="w-full">
      <div className="relative flex items-center justify-between px-6 py-4">
        <span className="text-sm">✉️</span>
        <h1 className="absolute left-1/2 -translate-x-1/2 font-serif italic text-5xl text-red-600">
          diya mahaveer
        </h1>
        <nav className="flex gap-16 text-4xl font-medium text-red-600">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className="hover:underline">
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>

      <div className="border-t-8 border-red-600" />
      <div className="border-t-4 border-pink-300" />
      <div className="border-t-4 border-red-600" />
    </header>
  );
}

export default Navbar;