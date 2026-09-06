function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`mb-12 md:mb-14 max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {/* Eyebrow */}
      <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
        {eyebrow}
      </p>

      {/* Main Heading */}
      <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="font-[var(--font-body)] mt-5 text-sm sm:text-base text-gray-400 leading-7">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;