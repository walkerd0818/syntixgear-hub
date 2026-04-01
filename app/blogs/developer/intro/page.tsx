import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '01 // Initial_Commit: The SyntixGear Manifesto',
  description: 'Introducing SyntixGear: The intersection of functional logic and industrial design.',
};

export default function BlogPost() {
  return (
    <main className="page max-w-4xl mx-auto px-6 py-12 font-sans text-slate-300">
 
      {/* NEW BREADCRUMB NAVIGATION */}
      <nav className="mb-8 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
        <Link href="/" className="text-slate-500 hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <Link href="/blogs" className="text-slate-500 hover:text-cyan-400 transition-colors">
          Blogs
        </Link>
        <span className="text-slate-700">/</span>
        <Link href="/blogs/developer" className="text-slate-500 hover:text-cyan-400 transition-colors">
          Developer Blogs
        </Link>
        <span className="text-slate-700">/</span>
        <span className="text-cyan-500">Initial Commit</span>
      </nav>

      {/* HEADER SECTION */}
      <header className="mb-12 border-b border-slate-800 pb-8">
        <div className="text-cyan-500 font-mono text-sm mb-2 tracking-widest">
          // LOG_ENTRY: 01 // STATUS: ONLINE //
        </div>
        <h1 className="text-sm md:text-base font-bold text-white mb-4 uppercase font-mono">
          Initial Commit: The Syntix Gear Manifesto
        </h1>
        <p className="text-slate-500 font-mono italic text-xs">
          Timestamp: 2026.04.01 // Author: Syntix Gear
        </p>
      </header>
      {/* INTRO IMAGE */}
      <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden border border-slate-700">
        <Image 
          src="/StartingSystem.png" 
          alt="Syntix Gear Aesthetic Background" 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-cyan-400 font-mono text-2xl bg-black/50 px-4 py-2 border border-cyan-500/30 backdrop-blur-sm">
          </span>
        </div>
        <p>&nbsp;</p>
      </div>

      {/* ARTICLE CONTENT */}
      <article className="prose prose-invert prose-cyan max-w-none leading-relaxed">
        <p className="text-lg">
          In a world of bloated software and generic fast-fashion, <strong>Syntix Gear</strong> was born from a simple realization: the tools we use and the gear we wear should reflect the logic we live by.
        </p>
        <p>&nbsp;</p>
        <h2 className="text-white mt-12 mb-4 border-l-4 border-cyan-600 pl-4">
          Why "Syntix Gear"?
        </h2>
        <p>&nbsp;</p>
        <p>
          The name is a fusion of <strong>Syntax</strong> (the rules that make code functional) and <strong>Gear</strong> (the physical tools that make a builder effective). 
        </p>
        <p>
          We believe that there is a specific beauty in clean code and industrial design. Whether it’s a line of React or a heavy-weight cotton hoodie, if the "syntax" isn't right, the whole system fails. We built this brand for the architects, the engineers, and the late-night refactorers who appreciate that precision is an aesthetic of its own.
        </p>
        <p>&nbsp;</p>
        {/* CALCVAULT HIGHLIGHT */}
        <div className="my-16 grid md:grid-cols-2 gap-8 items-center bg-slate-900/50 p-6 rounded-xl border border-slate-800">
          <div>
            <h3 className="text-cyan-400 font-mono mb-4">// Protocol: CalcVault</h3>
            <p className="text-sm text-slate-400 mb-4">
              Our first major deployment is <strong>CalcVault</strong>. We built it because most web tools are either buried in cookies or look like they’re from 1998.
            </p>
            <ul className="text-sm space-y-2 text-slate-300 list-none p-0">
              <li><span className="text-cyan-500">▹</span> <strong>Privacy-First:</strong> Local processing only.</li>
              <li><span className="text-cyan-500">▹</span> <strong>High-Precision:</strong> No rounding errors.</li>
              <li><span className="text-cyan-500">▹</span> <strong>Zero-Friction:</strong> No accounts needed.</li>
            </ul>
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden border border-slate-700">
            <Image 
              src="/CalcVault.png" 
              alt="Calc Vault Interface Concept" 
              fill 
              className="object-cover"
            />
          </div>
          <p>&nbsp;</p>
        </div>
        <p>&nbsp;</p>
        <h2 className="text-white mt-12 mb-4 border-l-4 border-orange-600 pl-4">
          Why the Humor? (Error 404: Boredom Not Found)
        </h2>
        <p>&nbsp;</p>
        <p>
          When you browse our <strong>Design Shops</strong>, you’ll notice a heavy dose of developer humor—from "Works on My Machine" blueprints to hex-code deep cuts. 
        </p>

        <section className="my-16 px-4">
          <h2 className="text-orange-500 font-mono text-center mb-8 uppercase tracking-widest">// Blueprint_Gallery //</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-800 p-2 bg-slate-900/50 rounded hover:border-orange-500 transition-all">
              <Image src="/CodeConvo.png" alt="Schrödinger's Code Design" width={400} height={400} className="rounded" />
              <p className="mt-2 text-[10px] font-mono text-center text-slate-500 tracking-tighter">ID: QUANTUM_01</p>
            </div>
           <div className="border border-slate-800 p-2 bg-slate-900/50 rounded hover:border-orange-500 transition-all">
              <Image src="/BinaryMood.png" alt="Schrödinger's Code Design" width={400} height={400} className="rounded" />
              <p className="mt-2 text-[10px] font-mono text-center text-slate-500 tracking-tighter">ID: QUANTUM_01</p>
            </div>
           <div className="border border-slate-800 p-2 bg-slate-900/50 rounded hover:border-orange-500 transition-all">
              <Image src="/NetworkNerdOut.png" alt="Schrödinger's Code Design" width={400} height={400} className="rounded" />
              <p className="mt-2 text-[10px] font-mono text-center text-slate-500 tracking-tighter">ID: QUANTUM_01</p>
            </div>
            {/* Repeat for other designs... */}
          </div>
          <p>&nbsp;</p>
        </section>
        <p>
          We use humor as a "handshake." It’s our way of saying, <em>“We’ve been in the trenches, too.”</em> We know what it’s like to debug a ghost in the machine at 3:00 AM. If you find the joke funny, you’re probably the person we built this gear for.
        </p>
        <p>&nbsp;</p>
        <h2 className="text-white mt-12 mb-4 border-l-4 border-slate-500 pl-4">
          The Roadmap
        </h2>
        <p>&nbsp;</p>
        <p>
          This blog will serve as our documentation for new tool releases, design deep-dives, and technical tutorials. SyntixGear is an evolving ecosystem, and we’re glad to have you in the loop.
        </p>

      {/* FOOTER NAVIGATION */}
      <footer className="mt-16 pt-8 border-t border-slate-800 text-center font-mono">
        <div className="mb-8">
          <Link 
            href="/blogs" 
            className="inline-block border border-slate-700 px-6 py-3 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all rounded"
          >
            ← Return to Blog
          </Link>
        </div>
        <div className="text-cyan-500 text-xl animate-pulse">
          System Status: [ONLINE]
        </div>
        <div className="text-slate-600 mt-2 text-xs uppercase tracking-[0.3em]">
          End of Transmission
        </div>
      </footer>      
      </article>
    </main>
  );
}
