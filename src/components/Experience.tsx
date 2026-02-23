import { Briefcase, Calendar, Building } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'ELEGANCE CONSULTANT Co., Ltd.',
      period: '12/2024 - 3/2025',
      achievements: [
        'SingleSignOn Service (C# .NET, Keycloak API)',
        'SSO Client Realm Management (NextJS, Keycloak Admin REST API)',
        'Authentication Features with SSO (C# .NET)',
        'DevOps implementation (Docker, CI/CD)',
      ],
      isCurrent: false,
    },
    {
      role: 'Developer',
      company: 'OpenSource',
      period: '2024',
      achievements: [
        'Development of e-GP Module (Thai Government Procurement)',
        'Development of Discord Bot (TikTok Live Alerts with Webhook)',
        'Technologies: NodeJS, DiscordJS',
      ],
      isCurrent: false,
    },
    {
      role: 'Developer (Parttime)',
      company: 'STS System & Development Co., Ltd.',
      period: '2022 - 2024',
      achievements: [
        'Development of Auto e-GP Thai Government Procurement System',
        'Database management (Python, MySQL, e-GP Module)',
      ],
      isCurrent: false,
    },
    {
      role: 'Developer',
      company: 'STS System & Development Co., Ltd.',
      period: '2022',
      achievements: [
        'Development of Auto e-GP Thai Government Procurement (Python, MySQL)',
        'Database conversion from Access to MariaDB',
        'Customer support and maintenance',
      ],
      isCurrent: false,
    },
    {
      role: 'Student Developer',
      company: 'Academic Project',
      period: '2022',
      achievements: [
        'Development of A Management System For Teaching Materials',
        'Database design and implementation',
        'Full stack development (PHP, JavaScript, jQuery, AJAX, Bootstrap, MySQL)',
        'Manual testing',
      ],
      isCurrent: false,
    },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg">
            Professional journey and key projects
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 md:pl-12 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-400 before:rounded-full before:z-10 md:before:left-1/2 md:before:-translate-x-1/2 md:before:top-8"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-slate-700 hidden md:block md:left-1/2 md:-translate-x-1/2"></div>
              )}

              <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'}`}>
                {exp.isCurrent && (
                  <div className="inline-block mb-3 px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                    Current Position
                  </div>
                )}

                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-slate-400 mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 mb-4 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-3">
                      <span className="text-cyan-400 font-bold mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
