function MembershipCard({
  duration,
  price,
  monthlyPrice,
  features,
  popular = false,
  onSelect,
}) {
  return (
    <article
      className={`relative h-full min-h-[560px] flex flex-col p-7 sm:p-8 md:p-10 transition-all duration-500 ${
        popular
          ? "bg-orange-500 text-black shadow-2xl shadow-orange-500/10 md:-translate-y-2"
          : "bg-zinc-950 border border-white/10 text-white hover:border-orange-500/60 hover:-translate-y-2"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-5 right-5 bg-black text-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em]">
          Most Popular
        </div>
      )}

      {/* Plan */}
      <div>
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            popular ? "text-black/60" : "text-orange-500"
          }`}
        >
          {duration}
        </p>

        <div className="mt-5">
          <h3 className="font-[var(--font-display)] text-5xl md:text-6xl font-black uppercase leading-none tracking-tight">
            {price}
          </h3>

          <p
            className={`mt-3 text-sm ${
              popular ? "text-black/60" : "text-gray-500"
            }`}
          >
            Effective ₹{monthlyPrice} / month
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`border-t mt-8 ${
          popular ? "border-black/20" : "border-white/10"
        }`}
      />

      {/* Features */}
      <div className="mt-8 flex-1">
        <p
          className={`text-xs font-bold uppercase tracking-[0.15em] mb-6 ${
            popular ? "text-black/60" : "text-gray-500"
          }`}
        >
          Included
        </p>

        <div className="space-y-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-0.5 text-sm font-bold ${
                  popular ? "text-black" : "text-orange-500"
                }`}
              >
                ✓
              </span>

              <p
                className={`text-sm leading-6 ${
                  popular ? "text-black/80" : "text-gray-300"
                }`}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={() => onSelect(duration)}
        className={`w-full mt-10 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-1 ${
          popular
            ? "bg-black text-white hover:bg-zinc-900"
            : "border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500"
        }`}
      >
        Choose {duration}
      </button>
    </article>
  );
}

export default MembershipCard;