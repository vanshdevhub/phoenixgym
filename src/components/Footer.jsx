function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">

      {/* ================= FOOTER CTA ================= */}
      <div className="bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-14 sm:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
                Start Your Journey
              </p>

              <h2 className="font-[var(--font-display)] mt-3 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none">
                Build Your Strongest Self.
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-gray-400">
                Train with purpose, stay consistent, and become stronger every
                day at Phoenix Gym.
              </p>
            </div>

            <a
              href="#membership"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-orange-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              View Memberships
              <span>→</span>
            </a>

          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-14 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="font-[var(--font-display)] inline-flex text-3xl sm:text-4xl font-black tracking-wide"
            >
              <span className="text-white">PHOENIX</span>
              <span className="text-orange-500">GYM</span>
            </a>

            <p className="mt-5 max-w-md text-sm sm:text-base leading-7 text-gray-400">
              A place built for people who want to train harder, stay
              consistent, and become the best version of themselves.
            </p>

            <a
              href="https://www.instagram.com/phoenixgymrohini/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-gray-300 transition-colors hover:text-orange-500"
            >
              <span className="text-lg">◎</span>
              @phoenixgymrohini
            </a>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="#home"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Home
              </a>

              <a
                href="#programs"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Programs
              </a>

              <a
                href="#trainers"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Trainers
              </a>

              <a
                href="#membership"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Membership
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                  Location
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  123 Fitness Street,
                  <br />
                  Rohini, Delhi
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                  Phone
                </p>

                <a
                  href="tel:+919876543210"
                  className="mt-1 inline-block text-sm text-gray-400 transition-colors hover:text-orange-500"
                >
                  +91 98765 43210
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                  Hours
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Monday – Sunday
                  <br />
                  6:00 AM – 10:00 PM
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-6">

          <p className="text-xs text-gray-600">
            © {currentYear} Phoenix Gym. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-xs text-gray-600">

            <span className="text-xs text-gray-600">
  Privacy Policy
</span>

<span className="text-xs text-gray-600">
  Terms & Conditions
</span>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;