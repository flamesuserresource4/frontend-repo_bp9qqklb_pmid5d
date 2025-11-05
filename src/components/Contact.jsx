import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Let's talk about your move</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Tell us what you're looking for and our agents will reach out with
              tailored options and private viewing times.
            </p>

            <div className="mt-6 space-y-3 text-white/80">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 204-8821</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@novaestates.com</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 88 Market Street, Metro City</p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/80">First name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Alex" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Last name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text:white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="Morgan" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/80">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" placeholder="I'm interested in..." />
              </div>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
              Send message
            </button>
          </motion.form>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-white/60">
          © {new Date().getFullYear()} Nova Estates. All rights reserved.
        </div>
      </div>
    </section>
  );
}
