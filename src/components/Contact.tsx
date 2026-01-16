import { Mail, Github, Youtube, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Interested in collaboration? Feel free to reach out
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/h4rdl0ckl3z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Github className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">GitHub</div>
                <div className="text-sm text-slate-400">@h4rdl0ckl3z</div>
              </div>
            </a>

            <a
              href="https://www.youtube.com/channel/UCDVWbPPx5-WJtcn8YZ_k0Bg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-red-500/50 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <Youtube className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <div className="text-white font-semibold mb-1">YouTube</div>
                <div className="text-sm text-slate-400">My Channel</div>
              </div>
            </a>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-2">Open for Opportunities</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm always interested in hearing about new projects, collaboration opportunities,
                  or just connecting with fellow developers. Whether you have a question about my work
                  or want to discuss potential collaborations, feel free to reach out through GitHub.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 mb-4">Find me on GitHub for the fastest response</p>
            <a
              href="https://github.com/h4rdl0ckl3z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Github className="w-5 h-5" />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
