function ProgramCard({
  number,
  title,
  description,
  image,
  onSelect,
}) {
  const handleSelect = () => {
    onSelect(title);

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <article className="group relative min-h-[390px] overflow-hidden border border-white/10 bg-zinc-950">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-black/75 transition-all duration-500 group-hover:bg-black/65" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-8 md:p-10">

        {/* Top */}
        <div className="flex items-start justify-between gap-4">
          <span className="font-[var(--font-display)] text-6xl font-black leading-none text-white/20 sm:text-7xl">
            {number}
          </span>

          <span className="border border-orange-500/40 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500">
            Training Program
          </span>
        </div>

        {/* Bottom */}
        <div className="max-w-2xl">

          <h3 className="font-[var(--font-display)] text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
            {description}
          </p>

          {/* Learn More Button */}
          <button
            type="button"
            onClick={handleSelect}
            className="group/button mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-white"
          >
            <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover/button:border-orange-500 group-hover/button:text-orange-500">
              Learn More
            </span>

            <span className="text-orange-500 transition-transform duration-300 group-hover/button:translate-x-2">
              →
            </span>
          </button>

        </div>
      </div>
    </article>
  );
}

export default ProgramCard;