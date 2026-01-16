import { Code, Terminal, Shield, Wrench, Cpu, Network } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Node.js'],
      color: 'cyan',
    },
    {
      icon: Terminal,
      title: 'Reverse Engineering',
      skills: ['Software Analysis', 'Binary Inspection', 'Debugging', 'Decompilation'],
      color: 'blue',
    },
    {
      icon: Shield,
      title: 'Security',
      skills: ['Security Concepts', 'Vulnerability Research', 'Code Analysis', 'System Hardening'],
      color: 'green',
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      skills: ['Git', 'API Development', 'Automation', 'Discord Bots'],
      color: 'orange',
    },
    {
      icon: Cpu,
      title: 'Specializations',
      skills: ['e-Government Systems', 'API Integration', 'Real-time Systems', 'TikTok Live API'],
      color: 'violet',
    },
    {
      icon: Network,
      title: 'System Architecture',
      skills: ['Workflow Automation', 'Module Development', 'System Design', 'Integration'],
      color: 'teal',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; text: string; bg: string }> = {
      cyan: { border: 'border-cyan-500/50', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
      blue: { border: 'border-blue-500/50', text: 'text-blue-400', bg: 'bg-blue-500/10' },
      green: { border: 'border-green-500/50', text: 'text-green-400', bg: 'bg-green-500/10' },
      orange: { border: 'border-orange-500/50', text: 'text-orange-400', bg: 'bg-orange-500/10' },
      violet: { border: 'border-violet-500/50', text: 'text-violet-400', bg: 'bg-violet-500/10' },
      teal: { border: 'border-teal-500/50', text: 'text-teal-400', bg: 'bg-teal-500/10' },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Technologies and areas I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`bg-slate-800/50 backdrop-blur-sm border ${colors.border} rounded-xl p-6 hover:scale-105 transition-all`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
