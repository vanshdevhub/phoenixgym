function GalleryCard({ image, title, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden bg-zinc-900 ${className}`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-500" />

      {/* Caption */}
      <div className="absolute left-5 bottom-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white text-sm font-bold uppercase tracking-[0.16em]">
          {title}
        </p>

        <div className="mt-2 h-px w-10 bg-orange-500" />
      </div>
    </div>
  );
}

export default GalleryCard; 