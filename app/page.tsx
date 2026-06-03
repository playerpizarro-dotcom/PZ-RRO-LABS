"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="bg-black">
      <nav className="fixed left-0 top-0 z-[10000] flex w-full items-center justify-between border-b border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl md:px-8">
        <a href="#hero" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c77a2a] text-[10px] font-black text-[#c77a2a]">
            PP
          </span>
          <span className="text-xs font-bold tracking-[0.3em] text-[#d8a15b]">
            PZ-RRO LABS
          </span>
        </a>

        <div className="hidden gap-6 text-xs tracking-[0.25em] text-white md:flex">
          <a href="#drumkits">DRUMKITS</a>
          <a href="#beats">BEATS</a>
          <a href="#store">THE VAULT</a>
          <a href="#soundlab">SOUND LAB</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#store"
            onClick={closeMenu}
            className="border border-[#c77a2a] bg-[#c77a2a] px-4 py-3 text-[10px] font-bold tracking-[0.16em] text-black"
          >
            REQUEST ACCESS
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[10001] border border-white/30 px-3 py-2 text-sm font-bold text-white md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-black text-sm font-bold tracking-[0.3em] text-white md:hidden">
          <a href="#drumkits" onClick={closeMenu}>DRUMKITS</a>
          <a href="#beats" onClick={closeMenu}>BEATS</a>
          <a href="#store" onClick={closeMenu}>THE VAULT</a>
          <a href="#soundlab" onClick={closeMenu}>SOUND LAB</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
        </div>
      )}

      <section id="hero" className="flex items-center justify-center bg-black pt-24 pb-2 md:min-h-screen md:pt-0 md:pb-0">
        <img src="/hero-v2.png" alt="Hero" className="h-auto w-full object-contain md:max-h-screen" />
      </section>

      <section id="drumkits" className="reveal flex items-center justify-center bg-black py-2 md:min-h-screen md:py-0">
        <img src="/drumkit-archive.png" alt="Drumkit Archive" className="h-auto w-full object-contain md:max-h-screen" />
      </section>

      <section id="beats" className="reveal flex items-center justify-center bg-black py-2 md:min-h-screen md:py-0">
        <img src="/beat-vault.png" alt="Beat Vault" className="h-auto w-full object-contain md:max-h-screen" />
      </section>

      <section id="store" className="reveal bg-black px-6 py-16 text-[#e7e1d8] md:min-h-screen md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm tracking-[0.4em] text-[#c77a2a]">/// PZ-RRO LABS</p>
          <h2 className="mb-14 text-4xl font-black tracking-[-0.04em] md:text-8xl">PZ-RRO LIBRARIES</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {["PZ-KIT I", "PZ-KIT II", "PZ-KIT III"].map((kit) => (
              <div key={kit} className="border border-[#c77a2a]/30 bg-[#080808] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#c77a2a]">
                <h3 className="mb-10 text-4xl font-black tracking-[-0.04em]">{kit}</h3>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=playerpizarro@gmail.com&su=${encodeURIComponent(`${kit} ACCESS REQUEST`)}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#c77a2a] px-6 py-4 text-xs font-bold tracking-[0.22em] text-black">
                  REQUEST ACCESS
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="soundlab" className="reveal flex items-center justify-center bg-black py-2 md:min-h-screen md:py-0">
        <img src="/sound-lab.png" alt="Sound Lab" className="h-auto w-full object-contain md:max-h-screen" />
      </section>

      <section id="contact" className="reveal relative flex items-center justify-center bg-black py-2 md:min-h-screen md:py-0">
        <img src="/final-section.png" alt="Final Section" className="h-auto w-full object-contain md:max-h-screen" />

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col gap-3 md:flex-row">
          <a href="https://www.instagram.com/damipizarro.as" target="_blank" rel="noopener noreferrer" className="border border-[#c77a2a]/60 bg-black/70 px-5 py-3 text-center text-xs tracking-[0.2em] text-white">INSTAGRAM</a>
          <a href="https://www.youtube.com/@PIZARROPLAYER" target="_blank" rel="noopener noreferrer" className="border border-[#c77a2a]/60 bg-black/70 px-5 py-3 text-center text-xs tracking-[0.2em] text-white">YOUTUBE</a>
          <a href="mailto:playerpizarro@gmail.com" className="border border-[#c77a2a]/60 bg-black/70 px-5 py-3 text-center text-xs tracking-[0.2em] text-white">EMAIL</a>
        </div>
      </section>
    </main>
  );
}