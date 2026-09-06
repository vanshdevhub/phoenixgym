import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Membership", href: "#membership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Phoenix Gym home"
            className="font-[var(--font-display)] flex items-center text-2xl sm:text-3xl font-black tracking-wide"
          >
            <span className="text-white">PHOENIX</span>
            <span className="text-orange-500">GYM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#membership"
            className="hidden lg:inline-flex items-center justify-center bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
          >
            Join Now
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="lg:hidden flex h-11 w-11 items-center justify-center text-white transition-colors duration-300 hover:text-orange-500"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 py-4">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center px-2 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#membership"
              onClick={closeMenu}
              className="mt-3 flex min-h-12 items-center justify-center bg-orange-500 px-5 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-orange-600"
            >
              Join Now
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;