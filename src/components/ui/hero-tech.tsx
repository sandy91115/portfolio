import { ArrowRight, Mail } from 'lucide-react';

export type HeroTechProps = {
  name?: string;
  role?: string;
  experience?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  leetcodeUrl?: string;
};

const GitHubIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
    />
  </svg>
);

const LinkedInIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetCodeIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.415-1.22c-.816-.194-1.636-.046-2.36.418-.724.464-1.32.993-1.802 1.58L4.693 11.12c-.933.933-1.42 2.146-1.42 3.42s.487 2.487 1.42 3.42l4.332 4.363c.933.933 2.146 1.42 3.42 1.42s2.487-.487 3.42-1.42l2.697-2.607c.514-.515.497-1.366-.038-1.9-.536-.535-1.387-.553-1.902-.039zM20.811 11.26H11.52c-.752 0-1.363.61-1.363 1.362 0 .753.61 1.364 1.363 1.364h9.291c.752 0 1.363-.61 1.363-1.364 0-.752-.61-1.362-1.363-1.362z" />
  </svg>
);

const TECH_STACK = [
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: '.NET',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
  },
];

export function HeroTech({
  name = 'Sandeep Chaudhary',
  role = 'Senior Full-Stack & Backend Developer',
  experience = '2.6+',
  email = 'sandeep@example.com',
  githubUrl = 'https://github.com/SandeepChaudhary',
  linkedinUrl = 'https://linkedin.com/in/sandeepchaudhary',
  leetcodeUrl = 'https://leetcode.com/sandeepchaudhary',
}: HeroTechProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20 pb-16">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] opacity-50 mix-blend-screen animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] opacity-50 mix-blend-screen animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar Profile */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              src="https://avatars.githubusercontent.com/u/76098193?v=4"
              alt={name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Heading Section */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-300 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {experience} Years Experience
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              {name}
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-6">{role}</h2>

          <p className="text-base md:text-lg text-zinc-500 max-w-2xl mb-10 leading-relaxed">
            Architecting high-throughput backend services with PHP 8.3/Laravel 11, .NET, Node.js,
            and React/TypeScript. 8+ live production platforms. AIR 32 national rank.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-zinc-300 font-medium border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>

            <div className="flex items-center gap-3 pl-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href={leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:scale-110"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Floating Tech Stack */}
          <div className="w-full max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-md">
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-6 font-semibold">
              Core Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex flex-col items-center justify-center"
                  title={tech.name}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-zinc-800 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-sm">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="w-7 h-7 md:w-8 md:h-8 object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <span className="absolute -bottom-6 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTech;
