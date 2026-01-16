import { ExternalLink, Star, GitFork, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'e-GP_Module',
      description: 'e-GP (Thai e-Government Procurement) Module - A comprehensive solution for Thai government procurement systems.',
      language: 'JavaScript',
      stars: 0,
      forks: 1,
      url: 'https://github.com/h4rdl0ckl3z/e-GP_Module',
      featured: true,
    },
    {
      name: 'PHPe-GP_module',
      description: 'PHP implementation of the e-Government Procurement module, providing robust backend functionality.',
      language: 'PHP',
      stars: 2,
      forks: 1,
      url: 'https://github.com/h4rdl0ckl3z/PHPe-GP_module',
      featured: false,
    },
    {
      name: 'TSe-GP-Module',
      description: 'TypeScript version of the e-GP module, bringing type safety and modern development practices.',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/h4rdl0ckl3z/TSe-GP-Module',
      featured: false,
    },
    {
      name: 'PYe-GP_module',
      description: 'Python implementation offering flexibility and ease of integration for procurement systems.',
      language: 'Python',
      stars: 1,
      forks: 0,
      url: 'https://github.com/h4rdl0ckl3z/PYe-GP_module',
      featured: false,
    },
    {
      name: 'TiktokLive-Connector-API',
      description: 'JavaScript API connector for TikTok Live, enabling real-time interaction and data streaming.',
      language: 'JavaScript',
      stars: 1,
      forks: 0,
      url: 'https://github.com/h4rdl0ckl3z/TiktokLive-Connector-API',
      featured: false,
    },
    {
      name: 'Discord-Bot',
      description: 'Feature-rich Discord bot built with JavaScript for community management and automation.',
      language: 'JavaScript',
      stars: 1,
      forks: 0,
      url: 'https://github.com/h4rdl0ckl3z/Discord-Bot',
      featured: false,
    },
    {
      name: 'pricing-platform',
      description: 'TypeScript-based pricing platform for managing and calculating complex pricing structures.',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/h4rdl0ckl3z/pricing-platform',
      featured: false,
    }
  ];

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      PHP: 'bg-purple-500',
      Python: 'bg-green-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Open source projects and tools I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 mb-3">{project.description}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </div>
                </div>
              </a>
            ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/h4rdl0ckl3z?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
