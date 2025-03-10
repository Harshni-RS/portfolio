import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-500"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_30%)]"></div>
      </div>
      <div className="relative text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Harshni R S
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-12">
          Front End Developer
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}