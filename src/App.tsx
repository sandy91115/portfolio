'use client';

import { ApiPlayground } from '@/components/ui/api-playground';
import { ArchitectureDiagram } from '@/components/ui/architecture-diagram';
import { HeroTech } from '@/components/ui/hero-tech';
import { ProjectModal, type ProjectItem } from '@/components/ui/project-modal';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  Phone,
  Search,
  Trophy,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

/* ─── Social SVG Icons ─── */
function GitHubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function LeetCodeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.815 3.693 5.858 5.858 0 0 0 2.213-.198 5.925 5.925 0 0 0 1.956-.948l4.475-4.524a1.377 1.377 0 0 0-.97-2.355 1.356 1.356 0 0 0-.972.408l-4.473 4.521a3.176 3.176 0 0 1-1.047.514 3.16 3.16 0 0 1-1.18.106 3.204 3.204 0 0 1-2.602-1.996 2.982 2.982 0 0 1-.188-.549 3.064 3.064 0 0 1-.034-1.277 2.84 2.84 0 0 1 .653-1.137l3.855-4.127 5.405-5.787a1.374 1.374 0 0 0-.98-2.351zm6.05 7.158a1.377 1.377 0 0 0-.97 2.354l2.584 2.613a3.18 3.18 0 0 1 .002 4.492l-2.586 2.615a1.377 1.377 0 1 0 1.944 1.952l2.586-2.615a5.934 5.934 0 0 0 0-8.39l-2.584-2.613a1.372 1.372 0 0 0-.976-.408z" />
    </svg>
  );
}

/* ─── Devicon Logo Component ─── */
function DevIcon({ name, label, invert }: { name: string; label: string; invert?: boolean }) {
  return (
    <div className="group flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-0.5">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`}
        alt={label}
        className={`w-7 h-7 object-contain drop-shadow-sm ${invert ? 'invert' : ''}`}
      />
      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </div>
  );
}

/* ─── Projects Data ─── */
const ALL_PROJECTS: ProjectItem[] = [
  {
    id: 'bizsyncos',
    category: 'enterprise',
    title: 'BizSyncOS',
    domainUrl: 'bizsyncos.vercel.app',
    roleBadge: 'AI Business Operating System',
    description:
      'All-in-one AI-powered business OS — manage CRM, orders, inventory, warehouse, finance, marketing, automation from one connected operating system.',
    tags: ['React', 'TypeScript', 'Laravel 11', 'OpenAI', 'Redis', 'Vercel'],
    github: null,
    repoLabel: 'Private Enterprise',
    live: 'https://bizsyncos.vercel.app/',
    benchmarks: {
      label1: 'Edge Latency',
      val1: '0.4s FCP',
      label2: 'AI Operations',
      val2: 'Autonomous',
      label3: 'Multi-Tenant',
      val3: 'Isolated RBAC',
    },
    highlights: [
      'AI Business Assistant with smart insights and predictive decisions',
      'End-to-end operating flow: Cart → Inventory → Approval → Delivery → AI',
      'Setup in minutes with approval-controlled actions and AI-ready from day one',
    ],
    codePreview: `// BizSyncOS AI Business Brain\nexport const dispatchAiForecast = async (tenantId: string) => {\n  const telemetry = await db.sales.aggregate({ where: { tenantId } });\n  return await openAiBrain.predictReplenishment(telemetry);\n};`,
    architectureDetails: {
      frontend: 'React 19 + TypeScript with Tailwind CSS on Vercel Edge.',
      backend: 'PHP/Laravel microservice cluster with Sanctum token auth.',
      database: 'MySQL 8.0 multi-tenant scoping & Redis caching.',
      infra: 'Vercel Edge Global CDN, GitHub Actions CI/CD.',
    },
  },
  {
    id: 'kaira',
    category: 'ecommerce',
    title: 'KAIRA',
    domainUrl: 'mediumturquoise-bat-338796.hostingersite.com',
    roleBadge: 'Fashion E-Commerce Platform',
    description:
      'Contemporary fashion e-commerce — "Made for everyday living." Featuring new collections, best sellers, category-based shopping, search, wishlist, and cart functionality.',
    tags: ['Laravel', 'PHP 8', 'MySQL', 'Tailwind CSS', 'WhatsApp API', 'Hostinger'],
    github: null,
    repoLabel: 'Commercial Platform',
    live: 'https://mediumturquoise-bat-338796.hostingersite.com/',
    benchmarks: {
      label1: 'Catalog Speed',
      val1: '< 90ms TTFB',
      label2: 'Collections',
      val2: 'Dynamic',
      label3: 'UX',
      val3: 'Responsive',
    },
    highlights: [
      'Full product catalog with category browsing, search, and best sellers',
      'Shopping cart, wishlist, user accounts, and sale management',
      'Clean minimalist design with responsive mobile-first layout',
    ],
    codePreview: `// KAIRA Collection Filter\npublic function filterByCategory(Request $request) {\n    $products = Product::where('category', $request->category)\n        ->where('is_active', true)->latest()->paginate(12);\n    return view('shop.index', compact('products'));\n}`,
    architectureDetails: {
      frontend: 'Laravel Blade with Tailwind CSS responsive design.',
      backend: 'Laravel PHP backend with CSRF and product management.',
      database: 'MySQL catalog with categories, sizes, and inventory tracking.',
      infra: 'Hostinger Cloud with SSL and CDN.',
    },
  },
  {
    id: 'impulsivelane',
    category: 'ecommerce',
    title: 'Impulsive Lane',
    domainUrl: 'darksalmon-bee-941185.hostingersite.com',
    roleBadge: 'Furniture & Ergonomics E-Commerce',
    description:
      'Premium office furniture and ergonomic chairs e-commerce — featuring product search, bulk orders, gift cards, order tracking, and detailed ergonomic product showcases.',
    tags: ['Laravel', 'PHP 8', 'MySQL', 'E-Commerce', 'WhatsApp API', 'Hostinger'],
    github: null,
    repoLabel: 'Commercial Platform',
    live: 'https://darksalmon-bee-941185.hostingersite.com/',
    benchmarks: {
      label1: 'Products',
      val1: 'Multi-Category',
      label2: 'Orders',
      val2: 'Bulk Support',
      label3: 'Tracking',
      val3: 'Real-Time',
    },
    highlights: [
      'Product catalog with furniture, home interiors, and bulk order system',
      'Gift card functionality, order tracking, and help center integration',
      'Detailed ergonomic chair showcase with annotated feature highlights',
    ],
    codePreview: `// Impulsive Lane Bulk Order Handler\npublic function processBulkOrder(BulkOrderRequest $request) {\n    $order = BulkOrder::create($request->validated());\n    Notification::route('whatsapp', config('services.sales'))\n        ->notify(new BulkInquiry($order));\n    return response()->json(['success' => true]);\n}`,
    architectureDetails: {
      frontend: 'Laravel Blade with responsive product galleries and search.',
      backend: 'PHP 8 backend with quotation and bulk order workflows.',
      database: 'MySQL product catalog with variants, pricing, and stock.',
      infra: 'Hostinger deployment with SSL and WhatsApp integration.',
    },
  },
  {
    id: 'woods',
    category: 'ecommerce',
    title: 'Woods Book Publishing',
    domainUrl: 'goldenrod-tiger-612513.hostingersite.com',
    roleBadge: 'Educational Publishing Platform',
    description:
      'Academic book publishing platform for the 2026-27 year — textbooks, teacher manuals, and educational resources with Quick Book Finder, ISBN search, and category browsing.',
    tags: ['Laravel', 'PHP 8', 'MySQL', 'Book Catalog', 'Search', 'Hostinger'],
    github: null,
    repoLabel: 'Commercial Platform',
    live: 'https://mediumturquoise-bat-338796.hostingersite.com/',
    benchmarks: {
      label1: 'Catalog',
      val1: 'Multi-Series',
      label2: 'Search',
      val2: 'ISBN + Subject',
      label3: 'Year',
      val3: '2026-27',
    },
    highlights: [
      'Quick Book Finder with class, series, and keyword search',
      'Teacher manual and textbook catalog with Computer Connect series',
      'Category-based browsing with Hindi Darpan and Knowledge Hub sections',
    ],
    codePreview: `// Woods Quick Book Finder\npublic function quickFind(Request $request) {\n    return Book::where('class', $request->class)\n        ->where('series', $request->series)\n        ->when($request->keyword, fn($q, $k) => $q->where('title', 'like', "%$k%"))\n        ->get();\n}`,
    architectureDetails: {
      frontend: 'Laravel Blade with search, categories, and responsive layout.',
      backend: 'PHP 8 with product catalog and teacher resource management.',
      database: 'MySQL with book metadata, ISBN, class, and series indexing.',
      infra: 'Hostinger Cloud with CDN and SSL certification.',
    },
  },
  {
    id: 'wealthway',
    category: 'realty',
    title: 'WealthWay™',
    domainUrl: 'wealth-way.in',
    roleBadge: 'Gateway of Global Realty',
    description:
      'Pan India real estate platform — find premium residential & commercial property. Trusted advisory services for investors and end-users with location search and property filters.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'REST APIs', 'SEO'],
    github: null,
    repoLabel: 'Commercial Platform',
    live: 'https://wealth-way.in/',
    benchmarks: {
      label1: 'Lighthouse',
      val1: '99/100',
      label2: 'Properties',
      val2: 'Residential + Commercial',
      label3: 'Coverage',
      val3: 'Pan India',
    },
    highlights: [
      'Property search with residential, commercial, and plots filter tabs',
      'Location-based property discovery with search and builder lookup',
      'Premium advisory services for both investors and end-users',
    ],
    codePreview: `// WealthWay Property Search\nexport function searchProperties(location: string, type: 'residential' | 'commercial' | 'plots') {\n  return api.get('/properties', { params: { location, type } });\n}`,
    architectureDetails: {
      frontend: 'Vite + React SPA with luxury golden theme.',
      backend: 'RESTful property listing and lead routing APIs.',
      database: 'Relational listing DB with indexed geo-locations.',
      infra: 'Cloud CDN with image compression, SSL, auto-deploy.',
    },
  },
  {
    id: 'edigital',
    category: 'enterprise',
    title: 'eDigital ERP',
    domainUrl: 'wheat-wolverine-542451.hostingersite.com',
    roleBadge: 'AI School Management System',
    description:
      'Unified multi-tenant educational SaaS for schools, teachers, students, and exams. Integrated OpenAI API for automated curriculum test generation and evaluation.',
    tags: ['Laravel', 'PHP 8', 'MySQL', 'OpenAI API', 'Sanctum JWT'],
    github: 'https://github.com/sandy91115/e-digital',
    repoLabel: 'GitHub (sandy91115/e-digital)',
    live: 'https://wheat-wolverine-542451.hostingersite.com/login',
    secondaryLive: 'https://edigitalbook.in/login',
    benchmarks: {
      label1: 'API Latency',
      val1: '1.8ms',
      label2: 'AI Engine',
      val2: 'GPT-4',
      label3: 'Security',
      val3: 'Multi-Role RBAC',
    },
    highlights: [
      'Automated exam question synthesis via OpenAI with difficulty grading',
      'Granular RBAC separating Super Admin, Principal, Teachers, Students',
      'Optimized MySQL relational indexes for high concurrency',
    ],
    codePreview: `// eDigital OpenAI Exam Generator\nRoute::middleware(['auth:sanctum', 'role:admin|teacher'])\n  ->post('/exam/generate', [AIExamController::class, 'generateFromCurriculum']);`,
    architectureDetails: {
      frontend: 'Tailwind CSS responsive dashboard.',
      backend: 'Laravel 11 with Sanctum JWT and OpenAI pipelines.',
      database: 'Multi-tenant MySQL schema with indexed hierarchies.',
      infra: 'Hostinger Cloud with auto DB migrations and SSL.',
    },
  },
];

/* ─── Project Screenshots ─── */
const PROJECT_SCREENSHOTS: Record<string, string> = {
  bizsyncos: '/projects/bizsyncos.png',
  kaira: '/projects/kaira.png',
  impulsivelane: '/projects/impulsivelane.png',
  woods: '/projects/woods.png',
  wealthway: '/projects/wealthway.png',
};

/* ─── Category Colors ─── */
const CATEGORY_STYLES: Record<string, { badge: string; accent: string }> = {
  enterprise: { badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20', accent: 'from-blue-500' },
  ecommerce: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    accent: 'from-emerald-500',
  },
  realty: { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', accent: 'from-amber-500' },
};

/* ─── Skills Data ─── */
const SKILL_GROUPS = [
  {
    title: 'Backend & Core',
    gradient: 'from-indigo-400 to-blue-400',
    skills: [
      { name: 'php', label: 'PHP 8.3' },
      { name: 'laravel', label: 'Laravel 11' },
      { name: 'nodejs', label: 'Node.js' },
      { name: 'express', label: 'Express.js', invert: true },
      { name: 'dotnetcore', label: '.NET / C#' },
      { name: 'cplusplus', label: 'C++ (AIR 32)' },
    ],
  },
  {
    title: 'Databases & Caching',
    gradient: 'from-emerald-400 to-cyan-400',
    skills: [
      { name: 'mysql', label: 'MySQL 8' },
      { name: 'postgresql', label: 'PostgreSQL 16' },
      { name: 'redis', label: 'Redis 7' },
      { name: 'mongodb', label: 'MongoDB Atlas' },
    ],
  },
  {
    title: 'Frontend & Build',
    gradient: 'from-amber-400 to-orange-400',
    skills: [
      { name: 'typescript', label: 'TypeScript' },
      { name: 'react', label: 'React 19' },
      { name: 'tailwindcss', label: 'Tailwind CSS' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'vite', label: 'Vite' },
    ],
  },
  {
    title: 'DevOps & Tools',
    gradient: 'from-violet-400 to-purple-400',
    skills: [
      { name: 'docker', label: 'Docker' },
      { name: 'git', label: 'Git & GitHub' },
      { name: 'linux', label: 'Linux' },
      { name: 'nginx', label: 'Nginx' },
    ],
  },
];

/* ─── Work Experience Data ─── */
const EXPERIENCES = [
  {
    role: 'Senior Software Developer',
    company: 'Lets Digital Marketing',
    location: 'Laxmi Nagar, Delhi',
    period: 'Jan 2026 – Present',
    gradient: 'from-indigo-500 to-blue-500',
    dotColor: 'bg-indigo-500',
    current: true,
    points: [
      'Building and scaling PHP/Laravel backend services for high-throughput lead generation platforms',
      'Designing RESTful APIs consumed by client dashboards and marketing automation tools',
      'Implementing multi-tenant RBAC (Sanctum JWT + middleware) and database audit trails',
    ],
    techStack: [
      { name: 'php', label: 'PHP 8.3' },
      { name: 'laravel', label: 'Laravel' },
      { name: 'mysql', label: 'MySQL' },
      { name: 'redis', label: 'Redis' },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Webkul Software Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Sep 2025 – Dec 2025',
    gradient: 'from-emerald-500 to-cyan-500',
    dotColor: 'bg-emerald-500',
    current: false,
    points: [
      'Engineered CS-Cart and OpenCart e-commerce marketplace modules',
      'Integrated carrier & logistics REST APIs (ShipStation, Google Places) for real-time dispatch',
      'Designed end-to-end RFQ automation workflows with configurable quotation templates',
    ],
    techStack: [
      { name: 'php', label: 'PHP' },
      { name: 'javascript', label: 'JavaScript' },
      { name: 'mysql', label: 'MySQL' },
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Digitace Tech Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Feb 2024 – Aug 2025',
    gradient: 'from-amber-500 to-orange-500',
    dotColor: 'bg-amber-500',
    current: false,
    points: [
      'Engineered Laravel-based CMS, enterprise admin dashboards, and custom client portals',
      'Integrated payment gateways and external APIs with automated unit testing',
      'Supported CI/CD deployment pipelines and post-release performance monitoring',
    ],
    techStack: [
      { name: 'laravel', label: 'Laravel' },
      { name: 'react', label: 'React' },
      { name: 'mysql', label: 'MySQL' },
    ],
  },
];

/* ─── Main App ─── */
function App() {
  const GITHUB_URL = 'https://github.com/sandy91115';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/sandeepchaudhary-dev/';
  const LEETCODE_URL = 'https://leetcode.com/sandy9999/';
  const EMAIL = 'sandeepchaudhary46140@gmail.com';
  const PHONE_NUM = '+91-9716800995';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [projectCategory, setProjectCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectProject, setInspectProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const matchesCategory = projectCategory === 'all' || p.category === projectCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }, [projectCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      {/* ═══ Navbar ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
              SC
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-semibold text-sm text-white">Sandeep Chaudhary</div>
              <div className="text-[11px] text-zinc-500">Full-Stack Developer</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1">
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1.5 rounded-full text-xs text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/50 hover:border-zinc-700 transition-all hover:scale-110"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex p-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/50 hover:border-zinc-700 transition-all hover:scale-110"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-800/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-4 py-3 space-y-1">
            {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 text-sm transition-colors"
              >
                <span>{item}</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ═══ Main ═══ */}
      <main id="about">
        <HeroTech
          name="Sandeep Chaudhary"
          role="Senior Full-Stack & Backend Architect"
          experience="2.6+"
          email={EMAIL}
          githubUrl={GITHUB_URL}
          linkedinUrl={LINKEDIN_URL}
          leetcodeUrl={LEETCODE_URL}
        />

        {/* ─── Impact Metrics ─── */}
        <section className="relative overflow-hidden border-y border-zinc-800/50">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-blue-500/5" />
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              {
                value: '2.6+',
                label: 'Years Experience',
                sub: 'Backend & Full-Stack',
                gradient: 'from-indigo-400 to-blue-400',
              },
              {
                value: '6+',
                label: 'Live Platforms',
                sub: 'Production Deployed',
                gradient: 'from-emerald-400 to-cyan-400',
              },
              {
                value: 'AIR 32',
                label: 'National Rank',
                sub: 'Rank 1 in College',
                gradient: 'from-amber-400 to-orange-400',
              },
              {
                value: '500+',
                label: 'LeetCode Solved',
                sub: 'C++ • DP, Graphs',
                gradient: 'from-violet-400 to-purple-400',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-zinc-200 mt-1">{stat.label}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ FEATURED PROJECTS ═══ */}
        <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-400 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Live Production Systems
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                Projects
              </span>
            </h2>
            <p className="text-zinc-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Real platforms I've architected, built, and deployed — from AI business OS to
              e-commerce and real estate systems.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <div className="relative flex-1 w-full sm:max-w-xs">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 backdrop-blur-sm transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: `All (${ALL_PROJECTS.length})` },
                { id: 'enterprise', label: 'Enterprise' },
                { id: 'ecommerce', label: 'E-Commerce' },
                { id: 'realty', label: 'Real Estate' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${projectCategory === tab.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-zinc-900/50 text-zinc-400 border border-zinc-800/50 hover:text-white hover:border-zinc-700'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards with Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((p) => {
              const style = CATEGORY_STYLES[p.category] || CATEGORY_STYLES.enterprise;
              const screenshot = PROJECT_SCREENSHOTS[p.id];
              return (
                <div
                  key={p.id}
                  className="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-zinc-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/5"
                >
                  {/* Top Gradient Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${style.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Screenshot Thumbnail */}
                  {screenshot && (
                    <div className="relative h-48 overflow-hidden border-b border-zinc-800/30">
                      <img
                        src={screenshot}
                        alt={`${p.title} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                      {/* Live Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/50">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400 uppercase">
                          Live
                        </span>
                      </div>
                      {/* Domain overlay */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-zinc-600" />
                          <span className="w-2 h-2 rounded-full bg-zinc-600" />
                          <span className="w-2 h-2 rounded-full bg-zinc-600" />
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">{p.domainUrl}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border mb-2 ${style.badge}`}
                      >
                        {p.roleBadge}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-100 transition-colors">
                        {p.title}
                      </h3>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">{p.description}</p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-5">
                      {p.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/30 text-[11px] font-medium text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800/30">
                      <button
                        onClick={() => setInspectProject(p)}
                        className="text-xs font-medium text-zinc-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-zinc-800/50"
                      >
                        <Search className="w-3 h-3" />
                        Deep Inspect
                      </button>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:scale-105"
                        >
                          Visit Live
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Architecture & API ─── */}
        <section id="architecture" className="max-w-6xl mx-auto px-4 md:px-6 py-20 space-y-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-400 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              System Design
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Architecture &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Live API
              </span>
            </h2>
          </div>
          <ArchitectureDiagram />
          <ApiPlayground />
        </section>

        {/* ═══ WORK EXPERIENCE ═══ */}
        <section id="experience" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-400 mb-4 backdrop-blur-sm">
                <Briefcase className="w-3 h-3" />
                Professional Journey
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Work{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  Experience
                </span>
              </h2>
              <p className="text-zinc-500 mt-3 max-w-xl mx-auto text-sm">
                2.6+ years building scalable backend infrastructure and high-throughput web
                applications.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Gradient timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-emerald-500/30 to-amber-500/20" />

              <div className="space-y-8">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-16 md:pl-20 group">
                    {/* Timeline dot with ping */}
                    <div className="absolute left-4 md:left-6 top-8">
                      <div
                        className={`relative w-5 h-5 rounded-full ${exp.dotColor} border-4 border-zinc-950 shadow-lg`}
                      >
                        {exp.current && (
                          <span
                            className={`absolute -inset-2 rounded-full ${exp.dotColor} opacity-25 animate-ping`}
                          />
                        )}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/10">
                      {/* Top accent */}
                      <div
                        className={`absolute top-0 left-16 md:left-20 right-0 h-[2px] bg-gradient-to-r ${exp.gradient} to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                      />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <div className="text-sm text-zinc-400 mt-0.5">{exp.company}</div>
                          <div className="text-xs text-zinc-500 mt-0.5">{exp.location}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-[11px] font-mono text-zinc-400 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Points with colored dots */}
                      <ul className="space-y-3 mt-4">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} mt-2 shrink-0`}
                            />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack with real icons */}
                      <div className="flex flex-wrap items-center gap-3 mt-5 pt-5 border-t border-zinc-800/30">
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                          Stack:
                        </span>
                        {exp.techStack.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/30"
                          >
                            <img
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.name}/${tech.name}-original.svg`}
                              alt={tech.label}
                              className="w-4 h-4 object-contain"
                            />
                            <span className="text-[11px] font-medium text-zinc-300">
                              {tech.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section id="skills" className="py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-400 mb-4 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                Technical Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Skills &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  Technologies
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700 transition-all duration-300"
                >
                  <h3
                    className={`text-lg font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r ${group.gradient}`}
                  >
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {group.skills.map((skill) => (
                      <DevIcon
                        key={skill.name}
                        name={skill.name}
                        label={skill.label}
                        invert={skill.invert}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Honors & Education ─── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Honors & Awards</h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: 'Ranked 1st in College (AIR 32)',
                    desc: 'Coding Ninjas & Naukri National Contest',
                  },
                  { title: '500+ LeetCode Solutions', desc: 'DP, Graphs, Trees & Binary Search' },
                  { title: 'C++ Certified Developer', desc: 'Coding Ninjas Algorithmic Mastery' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="p-5 rounded-xl bg-zinc-800/30 border border-zinc-800/50">
                <span className="inline-flex px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[11px] font-semibold mb-3">
                  Nov 2020 – July 2024
                </span>
                <h4 className="text-base font-bold text-white">
                  B.Tech – Computer Science & Engineering
                </h4>
                <p className="text-sm text-zinc-400 mt-1">
                  G.L. Bajaj Institute Of Technology And Management
                </p>
                <p className="text-xs text-zinc-500 mt-1">Greater Noida, Uttar Pradesh, India</p>
                <div className="mt-4 pt-3 border-t border-zinc-800/50">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    <span className="text-zinc-400 font-medium">Coursework:</span> Data Structures,
                    Algorithms, DBMS, Operating Systems, Computer Networks, OOP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent" />
          <div className="max-w-2xl mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-400 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Available for Opportunities
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Let's build something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                amazing
              </span>
            </h2>
            <p className="text-zinc-500 mb-10 text-sm leading-relaxed">
              Available for Senior Backend, Full-Stack, and Software Developer positions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm flex items-center justify-between gap-3 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Email</div>
                    <div className="text-xs text-white font-medium truncate">{EMAIL}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(EMAIL, 'email')}
                  className="p-2 rounded-xl bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all shrink-0 hover:scale-110"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm flex items-center justify-between gap-3 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Phone</div>
                    <div className="text-xs text-white font-medium truncate">{PHONE_NUM}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PHONE_NUM, 'phone')}
                  className="p-2 rounded-xl bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all shrink-0 hover:scale-110"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={LEETCODE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all hover:scale-105 backdrop-blur-sm text-sm font-medium"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all hover:scale-105 backdrop-blur-sm text-sm font-medium"
              >
                <LinkedInIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all hover:scale-105 backdrop-blur-sm text-sm font-medium"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub (29+)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="border-t border-zinc-800/50 py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-[10px]">
              SC
            </div>
            <span className="text-zinc-400">Sandeep Chaudhary</span>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={LEETCODE_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LeetCode
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </footer>

      {inspectProject && (
        <ProjectModal project={inspectProject} onClose={() => setInspectProject(null)} />
      )}
    </div>
  );
}

export default App;
