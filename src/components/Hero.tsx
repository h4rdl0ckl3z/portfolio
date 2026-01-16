import { Github, Youtube, MapPin, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                h4rd
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Avatart0Dev
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          h4rdl0ckl3z
        </p>

        <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
          <MapPin className="w-4 h-4" />
          <span>Thailand (UTC +7)</span>
        </div>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A developer and reverse engineer who loves exploring how software works under the hood.
          Building tools, automating workflows, and investigating software internals to address challenging problems.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <a
            href="https://github.com/h4rdl0ckl3z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCDVWbPPx5-WJtcn8YZ_k0Bg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
          >
            <Youtube className="w-5 h-5" />
            <span>YouTube</span>
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
