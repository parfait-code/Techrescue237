export default function Map() {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden h-[300px] relative">
      <div className="absolute inset-0 bg-accent/10 flex items-center justify-center">
        <p className="text-center text-secondary/60">
          Map integration goes here
          <br />
          (Google Maps, Mapbox, etc.)
        </p>
      </div>
    </div>
  );
}
