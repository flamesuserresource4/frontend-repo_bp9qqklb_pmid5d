import { motion } from "framer-motion";
import { Home, MapPin } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Downtown, Metro City",
    price: "$1,250,000",
    img:
      "https://images.unsplash.com/photo-1505692794403-34c5c7b5b4c4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Family Villa",
    location: "Greenfield Suburbs",
    price: "$890,000",
    img:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Coastal Glass House",
    location: "Seaview Heights",
    price: "$2,300,000",
    img:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function PropertyGrid() {
  return (
    <section id="listings" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Listings</h2>
            <p className="mt-2 text-white/60">
              Handpicked homes that blend design, comfort, and location.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/10 sm:inline-flex"
          >
            Request Full Catalog
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300">
                    {item.price}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" /> {item.location}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-fuchsia-300 hover:text-fuchsia-200"
                  >
                    Schedule a Tour →
                  </a>
                  <div className="flex items-center gap-1 text-white/60">
                    <Home className="h-4 w-4" />
                    <span className="text-xs">Exclusive</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
