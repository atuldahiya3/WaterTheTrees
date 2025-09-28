import { Link } from 'react-router-dom';

const Footer = () => {
  // Define navigation items (modify this array to add/remove links)
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Logo/Name */}
          <div className="mb-6 md:mb-0 flex items-center">
            <span className="text-2xl font-bold mr-2">🌿</span>
            <span className="text-xl font-semibold">LetTreeTalk</span>
          </div>

          {/* Navigation Links */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-green-300 hover:text-green-100 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Placeholder */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.96 8-4.99 8-9.95z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.41.58.22 1.01.48 1.46.93.45.45.71.88.93 1.46.17.46.35 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.41 2.43-.22.58-.48 1.01-.93 1.46-.45.45-.88.71-1.46.93-.46.17-1.26.35-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.41-.58-.22-1.01-.48-1.46-.93-.45-.45-.71-.88-.93-1.46-.17-.46-.35-1.26-.41-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.17.24-1.97.41-2.43.22-.58.48-1.01.93-1.46.45-.45.88-.71 1.46-.93.46-.17 1.26-.35 2.43-.41 1.27-.06 1.65-.07 4.85-.07m0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.69.36 3.79.73c-.95.39-1.75.91-2.54 1.7s-1.31 1.59-1.7 2.54c-.37.9-.6 1.99-.66 3.26C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.29 2.36.66 3.26.39.95.91 1.75 1.7 2.54s1.59 1.31 2.54 1.7c.9.37 1.99.6 3.26.66 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.36-.29 3.26-.66.95-.39 1.75-.91 2.54-1.7s1.31-1.59 1.7-2.54c.37-.9.6-1.99.66-3.26.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.29-2.36-.66-3.26-.39-.95-.91-1.75-1.7-2.54s-1.59-1.31-2.54-1.7c-.9-.37-1.99-.6-3.26-.66C15.67.01 15.26 0 12 0z" />
                <path d="M12 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-10.4c0 .79-.64 1.44-1.44 1.44s-1.44-.65-1.44-1.44.64-1.44 1.44-1.44 1.44.65 1.44 1.44z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm">&copy; 2025 LetTreeTalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;