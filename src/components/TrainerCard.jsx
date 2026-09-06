function TrainerCard({ image, role, name, description }) {
  return (
    <article className="group h-full overflow-hidden border border-white/10 bg-black transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2">
      {/* Image */}
      <div className="aspect-4/5 overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={`${name} - ${role}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[220px] flex-col p-6 sm:p-7">
        <p className="text-orange-500 text-[11px] font-bold uppercase tracking-[0.2em]">
          {role}
        </p>

        <h3 className="font-[var(--font-display)] mt-2 text-3xl sm:text-4xl font-black uppercase leading-none tracking-tight text-white">
          {name}
        </h3>

        <p className="mt-5 text-sm sm:text-base leading-7 text-gray-400">
          {description}
        </p>
      </div>
    </article>
  );
}

export default TrainerCard;