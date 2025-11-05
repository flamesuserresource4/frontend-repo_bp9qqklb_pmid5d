import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur"
        >
          <Building2 className="h-4 w-4 text-fuchsia-300" />
          <span className="text-xs font-medium tracking-wide text-white/80">
            Premium Real Estate — Buy • Sell • Rent
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          Find your next home in a new dimension
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          Explore interactive 3D spaces, curated listings, and seamless guidance
          from trusted agents—everything you need to move with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#listings"
            className="inline-flex items-center justify-center rounded-xl bg-white/95 px-6 py-3 text-slate-900 shadow-lg shadow-fuchsia-500/20 transition hover:brightness-105"
          >
            Browse Listings
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            <MapPin className="h-4 w-4" />
            Book a Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
}
