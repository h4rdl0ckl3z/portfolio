import { Code, Users, Star, GitFork } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code, label: 'Public Repos', value: '16' },
    { icon: Star, label: 'Total Stars', value: '33' },
    { icon: Users, label: 'Followers', value: '5' },
    { icon: GitFork, label: 'Following', value: '5' },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Welcome! I'm a passionate developer and reverse engineer based in Thailand.
              I specialize in understanding how software works at its core, building robust tools,
              and creating automation solutions that solve real-world problems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With expertise in multiple programming languages including JavaScript, TypeScript,
              Python, and PHP, I focus on creating practical solutions and exploring the inner
              workings of complex systems.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My work includes developing e-Government procurement modules, API integrations,
              and various automation tools. I'm particularly interested in security concepts
              and software internals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Journey</h3>
          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <p className="text-lg">
                Active on GitHub since <span className="text-cyan-400 font-semibold">August 2019</span>
              </p>
              <p className="text-slate-400">
                Contributing to open source and building innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
