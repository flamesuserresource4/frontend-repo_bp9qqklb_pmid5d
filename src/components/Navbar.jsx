import { Home, Building2, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-white"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
                <Home className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight">Nova Estates</span>
            </motion.a>

            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              {[
                { href: "#listings", label: "Listings" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Phone className="h-4 w-4" />
              Book a Call
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
