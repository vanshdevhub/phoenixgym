function TestimonialCard({
  name,
  role,
  text,
  rating = 5,
}) {
  return (
    <article className="group h-full border border-white/10 bg-black p-7 sm:p-8 transition-all duration-500 hover:border-orange-500/60 hover:-translate-y-2">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-7">
        {Array.from({ length: rating }).map((_, index) => (
          <span
            key={index}
            className="text-orange-500 text-sm"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <div className="text-orange-500 font-[var(--font-display)] text-5xl leading-none">
        “
      </div>

      {/* Review */}
      <p className="mt-2 text-gray-300 text-sm sm:text-base leading-7">
        {text}
      </p>

      {/* Member */}
      <div className="border-t border-white/10 mt-8 pt-6">
        <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-black uppercase leading-none">
          {name}
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gray-500">
          {role}
        </p>
      </div>
    </article>
  );
}

export default TestimonialCard;