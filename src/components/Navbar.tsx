import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-white font-bold text-xl cursor-pointer"
          >
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'About', to: 'about' },
              { name: 'Education', to: 'education' },
              { name: 'Certifications', to: 'certifications' },
              { name: 'Projects', to: 'projects' },
              { name: 'Skills', to: 'skills' },
              { name: 'Contact', to: 'contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-white/90 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}