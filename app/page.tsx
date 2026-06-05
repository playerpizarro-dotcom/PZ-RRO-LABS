"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const kits = [
    { name: "PZ-KIT I", tag: "LIMITED", type: "DRUM LIBRARY" },
    { name: "PZ-KIT II", tag: "EXCLUSIVE", type: "SOUND PACK" },
    { name: "PZ-KIT III", tag: "PRIVATE", type: "CUSTOM VAULT" },
  ];

  return (
    <main className="bg-black">
      <nav className="fixed left-0 top-0 z-[10000] flex w-full items-center justify-between border-b border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl md:px-8">
        <a href="#hero" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c77a2a] text-[10px] font-black text-[#c77a2a]">PP</span>
          <span className="text-xs font-bold tracking-[0.3em] text-[#d8a15b]">PZ-RRO LABS</span>
        </a>

        <div className="hidden gap-6 text-xs tracking-[0.25em] text-white md:flex">
          <a href="#drumkits">DRUMKITS</a>
          <a href="#beats">BEATS</a>
          <a href="#store">THE VAULT</a>
          <a href="#soundlab">SOUND LAB</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#store" onClick={closeMenu} className="border border-[#c77a2a] bg-[#c77a2a] px-4 py-3 text-[10px] font-bold tracking-[0.16em] text-black">
            REQUEST ACCESS
          </a>

          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="relative z-[10001] border border-white/30 px-3 py-2 text-sm font-bold text-white md:hidden">
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

      <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-black pt-24 pb-2 md:min-h-screen md:pt-0 md:pb-0">
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-48 w-[70%] -translate-x-1/2 rounded-full bg-[#c77a2a]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <img src="/hero-v2.png" alt="Hero" className="relative z-0 h-auto w-full object-contain md:max-h-screen" />

        <div className="absolute bottom-[8%] left-[14%] z-20 flex h-[95px] w-[520px] gap-6">
          <a href="#beats" aria-label="Listen" className="block h-full w-1/2" />
          <a href="#store" aria-label="Get It Now" className="block h-full w-1/2" />
        </div>
      </section>

      <section id="drumkits" className="reveal flex items-center justify-center bg-black py-2 md:min-h-screen md:py-0">
        <img src="/drumkit-archive.png" alt="Drumkit Archive" className="h-auto w-full object-contain md:max-h-screen" />
      </section>

      <section id="beats" className="reveal flex items-center justify-center bg-black py-2 md:min-h-screen md:py-0">
        <img src="/beat-vault.png" alt="Beat Vault" className="h-auto w-full object-contain md:max-h-screen" />
      </section>

      <section id="store" className="reveal bg-black px-6 py-20 text-[#e7e1d8] md:min-h-screen md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm tracking-[0.4em] text-[#c77a2a]">/// PZ-RRO LABS</p>
          <h2 className="mb-4 text-4xl font-black tracking-[-0.04em] md:text-8xl">PZ-RRO LIBRARIES</h2>

          <p className="mb-14 max-w-2xl text-sm leading-7 tracking-[0.12em] text-white/55">
            Exclusive sound libraries crafted for producers who want raw drums, dark textures and premium underground character.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {kits.map((kit) => (
              <div key={kit.name} className="group relative overflow-hidden border border-[#c77a2a]/30 bg-[#070707] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#c77a2a] hover:shadow-[0_0_45px_rgba(199,122,42,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c77a2a]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.28em] text-[#c77a2a]">{kit.type}</span>
                    <span className="border border-[#c77a2a]/50 px-3 py-1 text-[9px] font-bold tracking-[0.22em] text-[#c77a2a]">{kit.tag}</span>
                  </div>

                  <h3 className="mb-8 text-4xl font-black tracking-[-0.04em] text-white">{kit.name}</h3>

                  <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-[#c77a2a] to-transparent" />

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=playerpizarro@gmail.com&su=${encodeURIComponent(`${kit.name} ACCESS REQUEST`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#c77a2a] px-6 py-4 text-xs font-bold tracking-[0.22em] text-black transition-all duration-300 hover:scale-105 hover:bg-[#d89b4f]"
                  >
                    REQUEST ACCESS
                  </a>
                </div>
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