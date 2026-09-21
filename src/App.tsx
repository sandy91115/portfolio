"use client";

import { useState } from "react";
import { HeroTech } from "@/components/ui/hero-tech";
import { ApiPlayground } from "@/components/ui/api-playground";
import { ArchitectureDiagram } from "@/components/ui/architecture-diagram";
import { CyberLogo } from "@/components/ui/cyber-logo";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Server,
  Cpu,
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  Layers,
  Zap,
  Copy,
  Check,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function App() {
  const GITHUB_URL = "https://github.com/sandy91115";
  const LINKEDIN_URL = "https://www.linkedin.com/in/sandeepchaudhary-dev/";
  const EMAIL = "sandeepchaudhary46140@gmail.com";
  const PHONE = "+91-9716800995";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [projectCategory, setProjectCategory] = useState<"all" | "backend" | "fullstack" | "ai">("all");
  const [projectCardTabs, setProjectCardTabs] = useState<Record<string, "code" | "benchmarks" | "highlights">>({});
  const [copiedProjectCodeId, setCopiedProjectCodeId] = useState<string | null>(null);
  const [skillCategory, setSkillCategory] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const copyProjectCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedProjectCodeId(id);
    setTimeout(() => setCopiedProjectCodeId(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allProjects = [
    {
      id: "e-digital",
      category: "backend" as const,
      title: "E-Digital: AI-Powered School Management",
      badge: "OpenAI + Laravel RBAC",
      badgeColor: "#ff2c2c",
      description:
        "Multi-school education backend with modules for schools, teachers, students, classes, books, and examinations. Integrated OpenAI API for automated test generation and educational content analysis, backed by strict Role-Based Access Control (RBAC).",
      tags: ["Laravel", "PHP", "MySQL", "OpenAI API", "REST APIs", "RBAC"],
      github: "https://github.com/sandy91115/e-digital",
      live: null,
      benchmarks: {
        label1: "API Latency",
        val1: "1.8ms",
        label2: "AI Prompts",
        val2: "Curriculum Auto",
        label3: "Access Security",
        val3: "Multi-Role RBAC",
      },
      highlights: [
        "Automated exam question generation via OpenAI API and prompt pipelines",
        "Granular multi-tenant Role-Based Access Control (Sanctum JWT + middleware)",
        "Relational MySQL schema with indexed multi-tenant school hierarchies",
      ],
      codePreview: `// RBAC & OpenAI Test Generator
Route::middleware(['auth:sanctum', 'role:admin|teacher'])
  ->post('/exam/generate', [AIExamController::class, 'generateFromCurriculum']);`,
    },
    {
      id: "quickbook",
      category: "backend" as const,
      title: "QuickBook: Polyglot Reservation Platform",
      badge: "Redis + PostgreSQL + MongoDB",
      badgeColor: "#00f2fe",
      description:
        "Full-stack reservation engine demonstrating polyglot-persistence trade-off decisions. PostgreSQL guarantees ACID transactional auth/user states, while MongoDB handles dynamic listing attributes. Implemented Redis caching for sub-millisecond listing endpoints and rate-limiting middleware with GitHub Actions CI/CD.",
      tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GitHub Actions"],
      github: "https://github.com/sandy91115",
      live: null,
      benchmarks: {
        label1: "Redis Cache Latency",
        val1: "0.3ms",
        label2: "Max Throughput",
        val2: "14,200 req/s",
        label3: "Cache Hit Rate",
        val3: "98.9%",
      },
      highlights: [
        "Polyglot database separation: PostgreSQL for transactional states + MongoDB for dynamic listings",
        "Sub-millisecond Redis caching layer with intelligent TTL eviction and token-bucket rate limiting",
        "Automated CI/CD pipeline using GitHub Actions for automated unit & integration testing",
      ],
      codePreview: `// Redis Sub-ms Cache Layer
const cachedListings = await redis.get(\`listings:\${city}\`);
if (cachedListings) return res.json(JSON.parse(cachedListings));
const fresh = await MongoListings.find({ city }).lean();
await redis.setex(\`listings:\${city}\`, 3600, JSON.stringify(fresh));`,
    },
    {
      id: "backend-ledger",
      category: "fullstack" as const,
      title: "Backend-Ledger: Double-Entry Financial Engine",
      badge: "Financial Accounting Core",
      badgeColor: "#f59e0b",
      description:
        "Full-stack double-entry accounting ledger engine for transaction tracking, balance verification, and audit logs with strict schema integrity and query optimization.",
      tags: ["JavaScript", "Node.js", "Express", "Vercel", "SQL"],
      github: "https://github.com/sandy91115/Backend-Ledger",
      live: "https://backend-ledger-alpha.vercel.app",
      benchmarks: {
        label1: "Txn Latency",
        val1: "2.1ms",
        label2: "ACID Parity",
        val2: "100% Strict",
        label3: "Balance Drift",
        val3: "0.00% Zero Drift",
      },
      highlights: [
        "Double-entry bookkeeping model ensuring debit and credit balance equality on every commit",
        "Database-level atomic transactions preventing concurrency race conditions in concurrent transfers",
        "Production deployment on Vercel with real-time audit ledger verification",
      ],
      codePreview: `// Double-Entry Ledger Transaction Commit
await db.transaction(async (trx) => {
  await trx('accounts').where('id', debitId).decrement('balance', amount);
  await trx('accounts').where('id', creditId).increment('balance', amount);
});`,
    },
    {
      id: "hand-gesture-ai",
      category: "ai" as const,
      title: "Hand-Gesture AI Controller",
      badge: "Computer Vision Controller",
      badgeColor: "#10b981",
      description:
        "Real-time browser-based computer vision application utilizing hand tracking and gesture detection to execute interactive controls and visual feedbacks.",
      tags: ["Computer Vision", "AI", "JavaScript", "PHP", "Vercel"],
      github: "https://github.com/sandy91115/hand-gesture-ai",
      live: "https://hand-gesture-ai-ashy.vercel.app",
      benchmarks: {
        label1: "Frame Rate",
        val1: "60 FPS Smooth",
        label2: "Tracking Delay",
        val2: "16ms",
        label3: "AI Landmarks",
        val3: "21 Keypoints",
      },
      highlights: [
        "High-performance MediaPipe hand tracking running directly in the browser canvas",
        "Zero-latency continuous gesture classification controlling interactive web elements",
        "Edge deployed on Vercel with touch and motion fallbacks",
      ],
      codePreview: `// Real-Time Computer Vision Tracking
const hands = new Hands({ locateFile: (f) => \`https://cdn.mediapipe/\${f}\` });
hands.onResults((results) => processGesturePoints(results.multiHandLandmarks));`,
    },
    {
      id: "veloura-studio",
      category: "fullstack" as const,
      title: "Veloura Studio: Modern Agency Platform",
      badge: "TypeScript & Modular Design",
      badgeColor: "#a855f7",
      description:
        "High-performance TypeScript digital agency showcase engineered with fluid micro-interactions, responsive modular design systems, and fast build pipelines.",
      tags: ["TypeScript", "React", "Tailwind", "Vercel"],
      github: "https://github.com/sandy91115/Veloura-Studio",
      live: "https://veloura-studio.vercel.app",
      benchmarks: {
        label1: "Lighthouse",
        val1: "99 / 100",
        label2: "FCP Speed",
        val2: "0.4s",
        label3: "Layout Shift",
        val3: "0.00 CLS",
      },
      highlights: [
        "Modular TypeScript component architecture with central design token management",
        "GPU-accelerated micro-animations delivering responsive 60 FPS interactions",
        "Automated edge build pipeline with sub-second page loads on Vercel CDN",
      ],
      codePreview: `// Modular Component Tokens
export const StudioThemeProvider: FC<Props> = ({ theme, children }) => (
  <ThemeContext.Provider value={{ mode: theme, tokens }}>{children}</ThemeContext.Provider>
);`,
    },
    {
      id: "cpp-dsa",
      category: "ai" as const,
      title: "C++ DSA Core Algorithm Repository",
      badge: "500+ LeetCode Solutions",
      badgeColor: "#06b6d4",
      description:
        "Curated library of 500+ optimized algorithmic implementations covering Dynamic Programming, Graph Traversal, Binary Trees, and advanced competitive programming patterns.",
      tags: ["C++", "DSA", "LeetCode", "Algorithms", "Graph Theory"],
      github: "https://github.com/sandy91115/cpp-dsa-solutions",
      live: null,
      benchmarks: {
        label1: "National AIR",
        val1: "AIR 32",
        label2: "College Rank",
        val2: "Rank 1",
        label3: "LeetCode Solved",
        val3: "500+ Core",
      },
      highlights: [
        "Ranked 1st in College and AIR 32 across national Naukri / Coding Ninjas coding contest",
        "500+ optimized solutions across Dynamic Programming, Graphs, and Binary Trees",
        "Coding Ninjas certified for advanced algorithms and time/space complexity optimization",
      ],
      codePreview: `// O(N) Optimized Graph Traversal
void dijkstra(int src, vector<vector<pair<int,int>>>& adj, vector<int>& dist) {
  priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
  dist[src] = 0; pq.push({0, src});
  while (!pq.empty()) { /* Shortest path execution */ }
}`,
    },
  ];

  const skillDomains = [
    {
      id: "backend",
      category: "Backend & Polyglot Core",
      icon: Server,
      color: "#ff2c2c",
      proficiency: 98,
      masteryLabel: "Commercial Production Mastery",
      description: "Enterprise PHP 8.3 & Laravel 11 services, Node.js event loops, and robust RESTful backends.",
      skills: [
        { name: "PHP 8.3", level: "Expert" },
        { name: "Laravel 11", level: "Senior Core" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Senior" },
        { name: "SQL", level: "Advanced" },
        { name: "C++", level: "AIR 32" },
        { name: "CS-Cart", level: "Commercial" },
        { name: "OpenCart", level: "Commercial" },
        { name: "REST APIs", level: "Architect" },
      ],
    },
    {
      id: "databases",
      category: "Databases & In-Memory Caching",
      icon: Database,
      color: "#00f2fe",
      proficiency: 95,
      masteryLabel: "Polyglot Persistence & 0.3ms Caching",
      description: "ACID transactional guarantees paired with high-throughput in-memory Redis cluster caching.",
      skills: [
        { name: "PostgreSQL 16", level: "ACID Master" },
        { name: "MongoDB", level: "Dynamic Docs" },
        { name: "Redis 7", level: "0.3ms Sub-ms" },
        { name: "MySQL", level: "Relational" },
        { name: "Indexing Strategies", level: "Optimized" },
        { name: "Query Optimization", level: "EXPLAIN Analyzed" },
        { name: "Schema Design", level: "3NF / BCNF" },
        { name: "ACID Transactions", level: "Strict" },
      ],
    },
    {
      id: "system-design",
      category: "System Design (HLD/LLD)",
      icon: Cpu,
      color: "#f59e0b",
      proficiency: 92,
      masteryLabel: "Distributed Microservices & OOP Patterns",
      description: "Fault-tolerant decoupled architectures, token-bucket rate limiting, and SOLID principles.",
      skills: [
        { name: "High-Level Design", level: "HLD" },
        { name: "Low-Level Design", level: "LLD" },
        { name: "SOLID Principles", level: "Clean Code" },
        { name: "Rate Limiting", level: "Token Bucket" },
        { name: "Multi-Tenant RBAC", level: "Security" },
        { name: "Caching Strategies", level: "Write-Aside" },
        { name: "Load Balancing", level: "Scale" },
        { name: "Design Patterns", level: "GoF Patterns" },
      ],
    },
    {
      id: "apis",
      category: "APIs & Cloud Integrations",
      icon: Zap,
      color: "#10b981",
      proficiency: 96,
      masteryLabel: "High-Throughput REST & Webhooks",
      description: "Third-party logistics, payment gateway processing, and OpenAI API intelligence pipelines.",
      skills: [
        { name: "RESTful Endpoints", level: "High-Throughput" },
        { name: "ShipStation API", level: "Commercial" },
        { name: "Google Places API", level: "Commercial" },
        { name: "OpenAI API", level: "Prompt Pipelines" },
        { name: "Payment Gateways", level: "PCI Compliant" },
        { name: "Webhooks", level: "Idempotent" },
        { name: "Sanctum JWT", level: "Secure Auth" },
        { name: "Carrier Logistics", level: "Integrated" },
      ],
    },
    {
      id: "devops",
      category: "DevOps & CI/CD Pipelines",
      icon: Terminal,
      color: "#a855f7",
      proficiency: 90,
      masteryLabel: "Continuous Delivery & Automation",
      description: "Reproducible GitHub Actions CI/CD workflows, Linux bash environments, and Vercel edge deploys.",
      skills: [
        { name: "GitHub Actions", level: "CI/CD Workflows" },
        { name: "Git & Version Control", level: "Trunk-Based" },
        { name: "Linux Bash CLI", level: "Admin" },
        { name: "Postman Collections", level: "API Testing" },
        { name: "Cron Schedulers", level: "Background" },
        { name: "Vercel Edge", level: "Serverless" },
        { name: "Agile & Scrum", level: "Sprint Delivery" },
      ],
    },
    {
      id: "dsa",
      category: "Algorithms & Competitive DSA",
      icon: Trophy,
      color: "#06b6d4",
      proficiency: 99,
      masteryLabel: "Rank 1 in College • AIR 32",
      description: "500+ LeetCode algorithmic solutions in C++ covering Dynamic Programming, Graphs, and Trees.",
      skills: [
        { name: "Dynamic Programming", level: "Optimal Substructure" },
        { name: "Graph Traversal", level: "BFS/DFS/Dijkstra" },
        { name: "Binary Trees & BST", level: "Traversals" },
        { name: "Binary Search", level: "Logarithmic" },
        { name: "Hash Maps & Sets", level: "O(1) Amortized" },
        { name: "Complexity Analysis", level: "Big-O Analysis" },
        { name: "Coding Ninjas Certified", level: "Rank 1 College" },
      ],
    },
  ];

  const filteredProjects = allProjects.filter((p) => {
    if (projectCategory === "all") return true;
    return p.category === projectCategory;
  });

  return (
    <div className="min-h-screen bg-[#06070a] text-[#f5f5f5] selection:bg-[#00f2fe] selection:text-black font-sans relative">
      {/* Background Matrix Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[#00f2fe]/[0.03] blur-[150px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#ff2c2c]/[0.03] blur-[160px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Floating Modern Header with Responsive Mobile Drawer */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3.5 backdrop-blur-xl bg-black/75 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={scrollToTop}>
            <CyberLogo size="md" />
            <div>
              <div className="font-bold tracking-tight text-sm text-white flex items-center gap-1.5 sm:gap-2">
                <span className="group-hover:text-[#00f2fe] transition-colors">Sandeep Chaudhary</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff2c2c]/20 to-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/30 font-mono hidden sm:inline-block shadow-[0_0_10px_rgba(0,242,254,0.2)]">
                  AIR 32
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-white/60 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white/80">Senior Backend Architect</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest text-white/60 font-mono">
            <a href="#about" className="hover:text-[#00f2fe] transition-colors">About</a>
            <a href="#architecture" className="hover:text-[#00f2fe] transition-colors">Architecture</a>
            <a href="#experience" className="hover:text-[#00f2fe] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#00f2fe] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#00f2fe] transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-[#00f2fe] transition-colors">Achievements</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white/80 hover:text-white transition-all border border-white/10"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white/80 hover:text-white transition-all border border-white/10"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#ff2c2c] to-[#ff4242] hover:from-[#ff3a3a] hover:to-[#ff5555] text-white rounded-xl transition-all shadow-[0_0_20px_rgba(255,44,44,0.35)]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 mt-3.5 pt-4 pb-3 px-2 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-1 font-mono text-xs uppercase tracking-wider">
              {[
                { href: "#about", label: "01 // About & Bio" },
                { href: "#architecture", label: "02 // Architecture & Live API" },
                { href: "#projects", label: "03 // Featured Projects" },
                { href: "#experience", label: "04 // Work Experience" },
                { href: "#skills", label: "05 // Technical Stack" },
                { href: "#achievements", label: "06 // Honors & Certifications" },
                { href: "#contact", label: "07 // Connect & Hire" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-white/[0.06] text-white/70 hover:text-[#00f2fe] flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between px-2 text-xs font-mono">
              <span className="text-white/40">External Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white flex items-center gap-1.5"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#00f2fe] flex items-center gap-1.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Redesigned Clean Hero Section with 3D Core */}
        <HeroTech
          name="Sandeep Chaudhary"
          role="Full-Stack Backend Architect & Senior Software Developer"
          email={EMAIL}
          githubUrl={GITHUB_URL}
          linkedinUrl={LINKEDIN_URL}
        />

        {/* Upgraded Impact Metrics Bar */}
        <section className="relative z-10 border-y border-white/10 bg-gradient-to-r from-[#0e111a]/80 via-black/90 to-[#0e111a]/80 backdrop-blur-xl py-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00f2fe]/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl md:text-4xl font-black text-white font-mono group-hover:text-[#00f2fe] transition-colors">
                  2.6+
                </span>
                <Briefcase className="w-5 h-5 text-[#00f2fe] opacity-75" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/90">Years Experience</div>
              <div className="text-[11px] text-white/50 font-mono mt-0.5">Commercial Backend Mastery</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#ff2c2c]/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl md:text-4xl font-black text-[#ff2c2c] font-mono">
                  AIR 32
                </span>
                <Trophy className="w-5 h-5 text-[#ff2c2c] opacity-75" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/90">Rank 1 in College</div>
              <div className="text-[11px] text-white/50 font-mono mt-0.5">Coding Ninjas & Naukri Contest</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-400/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl md:text-4xl font-black text-emerald-400 font-mono">
                  500+
                </span>
                <Code2 className="w-5 h-5 text-emerald-400 opacity-75" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/90">LeetCode DSA Solved</div>
              <div className="text-[11px] text-white/50 font-mono mt-0.5">C++ • DP, Graphs & Trees</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-400/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl md:text-4xl font-black text-purple-400 font-mono">
                  29+
                </span>
                <Server className="w-5 h-5 text-purple-400 opacity-75" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white/90">GitHub Repositories</div>
              <div className="text-[11px] text-white/50 font-mono mt-0.5">Active Open-Source Core</div>
            </div>
          </div>
        </section>

        {/* Interactive System Architecture & Live API Console Section */}
        <section id="architecture" className="max-w-7xl mx-auto px-6 py-28 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/25 mb-3">
              <Zap className="w-3.5 h-3.5" />
              System Architecture & Live Console
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Engineering High-Throughput Pipelines
            </h2>
            <p className="text-white/60 text-sm md:text-base mt-3 leading-relaxed">
              Explore the distributed polyglot architecture diagram and dispatch live mock REST API requests through the in-memory Redis cluster below.
            </p>
          </div>

          <ArchitectureDiagram />
          <ApiPlayground />
        </section>

        {/* Interactive Projects Grid with Category Filters */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#ff2c2c]/10 text-[#ff2c2c] border border-[#ff2c2c]/20 mb-3">
                <Code2 className="w-3.5 h-3.5" />
                Production Engineering
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
                Featured Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex overflow-x-auto scrollbar-none max-w-full gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs whitespace-nowrap">
              {[
                { id: "all", label: "All Projects (6)" },
                { id: "backend", label: "Backend & Polyglot" },
                { id: "fullstack", label: "Full-Stack Platforms" },
                { id: "ai", label: "AI & Algorithms" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all shrink-0 ${
                    projectCategory === tab.id
                      ? "bg-[#00f2fe] text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((p) => {
              const currentTab = projectCardTabs[p.id] || "code";

              return (
                <div
                  key={p.id}
                  className="rounded-3xl bg-gradient-to-b from-[#0e111a] via-[#090b10] to-[#06070a] border border-white/10 p-6 sm:p-7 hover:border-white/30 transition-all duration-300 shadow-[0_15px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between group relative overflow-hidden"
                  style={{
                    boxShadow: `0 10px 40px -15px ${p.badgeColor}20`,
                  }}
                >
                  {/* Glowing dynamic corner highlight */}
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                    style={{ backgroundColor: p.badgeColor }}
                  />

                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full border shadow-sm flex items-center gap-1.5"
                        style={{
                          backgroundColor: `${p.badgeColor}15`,
                          color: p.badgeColor,
                          borderColor: `${p.badgeColor}40`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.badgeColor }} />
                        {p.badge}
                      </span>

                      <div className="flex items-center gap-2">
                        {p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                          >
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 transition-all hover:scale-105"
                            title="View GitHub Repository"
                          >
                            <GitHubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Interactive Tab Switcher for Card */}
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10 mb-3.5 font-mono text-[11px]">
                      <button
                        onClick={() => setProjectCardTabs((prev) => ({ ...prev, [p.id]: "code" }))}
                        className={`flex-1 py-1 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          currentTab === "code"
                            ? "bg-white/15 text-white font-bold shadow-sm"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>Code</span>
                      </button>
                      <button
                        onClick={() => setProjectCardTabs((prev) => ({ ...prev, [p.id]: "benchmarks" }))}
                        className={`flex-1 py-1 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          currentTab === "benchmarks"
                            ? "bg-white/15 text-white font-bold shadow-sm"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>Benchmarks</span>
                      </button>
                      <button
                        onClick={() => setProjectCardTabs((prev) => ({ ...prev, [p.id]: "highlights" }))}
                        className={`flex-1 py-1 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                          currentTab === "highlights"
                            ? "bg-white/15 text-white font-bold shadow-sm"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-[#00f2fe]" />
                        <span>Specs</span>
                      </button>
                    </div>

                    {/* Tab 1: Architecture Code Preview */}
                    {currentTab === "code" && (
                      <div className="rounded-xl bg-black/80 border border-white/10 p-3.5 font-mono text-[11px] text-white/70 overflow-x-auto mb-5 select-text relative">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[10px] text-white/40">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#ff2c2c]" />
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span>Architecture Snippet</span>
                            <button
                              onClick={() => copyProjectCode(p.id, p.codePreview)}
                              className="p-1 rounded bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all flex items-center gap-1"
                              title="Copy Code"
                            >
                              {copiedProjectCodeId === p.id ? (
                                <Check className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                        <pre className="text-emerald-400/90 whitespace-pre-wrap">{p.codePreview}</pre>
                      </div>
                    )}

                    {/* Tab 2: Live Benchmarks & Telemetry */}
                    {currentTab === "benchmarks" && (
                      <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-black/80 border border-white/10 mb-5 font-mono">
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                          <div className="text-[10px] text-white/40 uppercase truncate">{p.benchmarks.label1}</div>
                          <div className="text-xs sm:text-sm font-black mt-1" style={{ color: p.badgeColor }}>
                            {p.benchmarks.val1}
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                          <div className="text-[10px] text-white/40 uppercase truncate">{p.benchmarks.label2}</div>
                          <div className="text-xs sm:text-sm font-black text-emerald-400 mt-1">
                            {p.benchmarks.val2}
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                          <div className="text-[10px] text-white/40 uppercase truncate">{p.benchmarks.label3}</div>
                          <div className="text-xs sm:text-sm font-black text-[#00f2fe] mt-1">
                            {p.benchmarks.val3}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: System Specs & Highlights */}
                    {currentTab === "highlights" && (
                      <div className="space-y-2 p-3.5 rounded-xl bg-black/80 border border-white/10 mb-5 text-xs text-white/80 font-mono">
                        {p.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: p.badgeColor }} />
                            <span className="leading-snug text-white/70">{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10 mb-4">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-white/70 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00f2fe] hover:underline"
                      >
                        <span>Explore Repository on GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Upgraded Career Experience Timeline */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#ff2c2c]/10 text-[#ff2c2c] border border-[#ff2c2c]/20 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Professional Track
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
              Work Experience
            </h2>
            <p className="text-white/50 text-sm mt-3">2.6+ years owning backend services from architecture to production deployment.</p>
          </div>

          <div className="relative pl-6 md:pl-8 border-l-2 border-white/10 space-y-12 max-w-4xl mx-auto">
            {/* Experience 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#ff2c2c] border-4 border-[#06070a] shadow-[0_0_15px_rgba(255,44,44,0.8)]" />
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#ff2c2c]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Software Developer</h3>
                    <div className="text-sm font-semibold text-[#ff2c2c]">Lets Digital Marketing • Laxmi Nagar, Delhi</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ff2c2c]/10 text-[#ff2c2c] border border-[#ff2c2c]/20 text-xs font-mono shrink-0">
                    January 2026 – Present
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc pl-4 leading-relaxed">
                  <li>Building and maintaining PHP/Laravel backend services for lead-generation, campaign-tracking, and client reporting platforms.</li>
                  <li>Designing and optimizing RESTful APIs consumed by frontend apps and third-party marketing tools.</li>
                  <li>Implementing role-based access control, secure authentication, and audit logging for multi-tenant admin dashboards.</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[11px] text-white/50">
                  <span className="px-2 py-0.5 rounded bg-white/5">PHP / Laravel</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">RESTful APIs</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Multi-Tenant RBAC</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Audit Logging</span>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#00f2fe] border-4 border-[#06070a] shadow-[0_0_15px_rgba(0,242,254,0.8)]" />
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00f2fe]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                    <div className="text-sm font-semibold text-[#00f2fe]">Webkul Software Pvt. Ltd. • Noida, India</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20 text-xs font-mono shrink-0">
                    September 2025 – December 2025
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc pl-4 leading-relaxed">
                  <li>Developed and maintained CS-Cart and OpenCart e-commerce marketplace modules using component-driven CMS architecture.</li>
                  <li>Integrated REST APIs (ShipStation, Google Places API, carrier services) for logistics and order management.</li>
                  <li>Designed end-to-end RFQ workflows with configurable templates, vendor notifications, and admin approval processes.</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[11px] text-white/50">
                  <span className="px-2 py-0.5 rounded bg-white/5">CS-Cart & OpenCart</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">ShipStation API</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Carrier Logistics</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">RFQ Workflow Automation</span>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#06070a] shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
              <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                    <div className="text-sm font-semibold text-amber-400">Digitace Tech Pvt. Ltd. • Noida, India</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono shrink-0">
                    February 2024 – August 2025
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-white/70 list-disc pl-4 leading-relaxed">
                  <li>Engineered Laravel-based CMS and admin platforms with reusable components and approval workflows.</li>
                  <li>Integrated payment gateways and third-party APIs; maintained code quality via testing and peer code reviews.</li>
                  <li>Participated in Agile/Scrum ceremonies and supported deployment pipelines with post-release monitoring.</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5 font-mono text-[11px] text-white/50">
                  <span className="px-2 py-0.5 rounded bg-white/5">Laravel CMS</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Payment Gateways</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">CI/CD Deployments</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Agile / Scrum</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categorized Skills & System Design Matrix */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20 mb-3 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
                <Layers className="w-3.5 h-3.5" />
                Technical Competencies
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
                Skills & System Mastery
              </h2>
              <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-xl">
                Commercial backend architecture, polyglot persistence, and high-throughput systems verified with metrics.
              </p>
            </div>

            {/* Domain Filter Pills */}
            <div className="flex overflow-x-auto scrollbar-none max-w-full gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-xs whitespace-nowrap">
              {[
                { id: "all", label: "All Stack (6)" },
                { id: "backend", label: "Backend Core" },
                { id: "databases", label: "Databases & Cache" },
                { id: "system-design", label: "System Design" },
                { id: "apis", label: "APIs & Cloud" },
                { id: "devops", label: "DevOps & CI/CD" },
                { id: "dsa", label: "Algorithms (AIR 32)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSkillCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                    skillCategory === tab.id
                      ? "bg-[#00f2fe] text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillDomains
              .filter((domain) => skillCategory === "all" || domain.id === skillCategory)
              .map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <div
                    key={domain.id}
                    className="p-7 rounded-3xl bg-gradient-to-b from-[#0e111a] via-[#090b10] to-[#06070a] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between group relative overflow-hidden"
                    style={{
                      boxShadow: `0 10px 40px -15px ${domain.color}20`,
                    }}
                  >
                    {/* Ambient Aura */}
                    <div
                      className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none"
                      style={{ backgroundColor: domain.color }}
                    />

                    <div>
                      {/* Top Icon & Level Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                          style={{
                            backgroundColor: `${domain.color}15`,
                            color: domain.color,
                            border: `1px solid ${domain.color}35`,
                            boxShadow: `0 0 20px ${domain.color}25`,
                          }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <span
                          className="text-[11px] font-mono px-3 py-1 rounded-full border"
                          style={{
                            backgroundColor: `${domain.color}10`,
                            color: domain.color,
                            borderColor: `${domain.color}30`,
                          }}
                        >
                          {domain.proficiency}% Proficiency
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors">
                        {domain.category}
                      </h3>
                      <p className="text-xs text-white/50 mb-4 font-mono leading-relaxed">
                        {domain.description}
                      </p>

                      {/* Visual Proficiency Progress Bar */}
                      <div className="mb-5 p-2.5 rounded-xl bg-black/60 border border-white/5">
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                          <span className="text-white/60">{domain.masteryLabel}</span>
                          <span className="font-bold" style={{ color: domain.color }}>
                            {domain.proficiency}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden relative">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${domain.proficiency}%`,
                              backgroundColor: domain.color,
                              boxShadow: `0 0 10px ${domain.color}`,
                            }}
                          />
                        </div>
                      </div>

                      {/* Interactive Skill Badges with Level Tags */}
                      <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                        {domain.skills.map((s) => (
                          <span
                            key={s.name}
                            className="px-2.5 py-1 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all flex items-center gap-1.5 hover:scale-105 group/skill"
                          >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: domain.color }} />
                            <span>{s.name}</span>
                            <span className="text-[10px] px-1 rounded bg-white/5 text-white/40 group-hover/skill:text-white/70">
                              {s.level}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        {/* Upgraded Achievements & Academic Showcase */}
        <section id="achievements" className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Honors & Certifications Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#ff2c2c]/10 via-[#090b10] to-[#06070a] border border-[#ff2c2c]/30 shadow-[0_20px_60px_rgba(255,44,44,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ff2c2c]/20 text-[#ff2c2c] flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Honors & Certifications</h3>
                  <p className="text-xs text-[#ff2c2c] font-mono">Competitive programming excellence</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#ff2c2c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">Ranked 1st in College (AIR 32)</h4>
                    <p className="text-xs text-white/60 mt-0.5">Coding Ninjas & Naukri National Coding Contest</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">C++ Certified Developer</h4>
                    <p className="text-xs text-white/60 mt-0.5">Certified by Coding Ninjas for core algorithmic mastery</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">500+ LeetCode DSA Solved</h4>
                    <p className="text-xs text-white/60 mt-0.5">Comprehensive problem solving across Dynamic Programming, Trees, and Graphs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Background Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00f2fe]/10 via-[#090b10] to-[#06070a] border border-[#00f2fe]/30 shadow-[0_20px_60px_rgba(0,242,254,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Academic Degree</h3>
                  <p className="text-xs text-[#00f2fe] font-mono">Computer Science & Engineering</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono text-[#00f2fe]">Nov 2020 – July 2024</span>
                  <h4 className="text-xl font-bold text-white mt-1">B.Tech – Computer Science and Engineering</h4>
                  <p className="text-sm text-white/80 font-semibold">G.L. Bajaj Institute Of Technology And Management</p>
                  <p className="text-xs text-white/50 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00f2fe]" /> Greater Noida, Uttar Pradesh
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/5 text-xs text-white/70 leading-relaxed font-mono">
                  Key Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Software Engineering (OOP), System Architecture.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Hub with One-Click Copy */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-28 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Connect & Hire
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
              Let's Build Scalable Systems Together
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Available for Senior Backend and Full-Stack Engineering roles. Click below to copy contact info or connect directly:
            </p>

            {/* Interactive Contact Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left font-mono">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 group hover:border-[#00f2fe]/50 transition-all">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#00f2fe]/10 text-[#00f2fe] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-white/40 uppercase">Email Address</div>
                    <div className="text-xs text-white font-semibold truncate" title={EMAIL}>{EMAIL}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(EMAIL, "email")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 group hover:border-[#ff2c2c]/50 transition-all">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-[#ff2c2c]/10 text-[#ff2c2c] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-white/40 uppercase">Phone Number</div>
                    <div className="text-xs text-white font-semibold truncate" title={PHONE}>{PHONE}</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PHONE, "phone")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all shrink-0"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 w-full">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs md:text-sm font-mono transition-all hover:scale-[1.02]"
              >
                <LinkedInIcon className="w-4 h-4 text-[#00f2fe]" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs md:text-sm font-mono transition-all hover:scale-[1.02]"
              >
                <GitHubIcon className="w-4 h-4 text-[#ff2c2c]" />
                <span>Browse GitHub (29+)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Modern High-Tech Footer */}
      <footer className="border-t border-white/10 py-10 px-6 backdrop-blur-xl bg-black/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50 font-mono">
          <div className="flex items-center gap-3">
            <CyberLogo size="sm" />
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="font-semibold text-white/90">Systems Online</span>
              <span className="text-white/30">•</span>
              <span className="text-[#00f2fe]">Redis Cluster: 0.3ms</span>
            </div>
          </div>

          <div className="text-center md:text-left text-white/60">
            © {new Date().getFullYear()} Sandeep Chaudhary. Architected for High-Concurrency Performance.
          </div>

          <div className="flex items-center gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">GitHub</a>
            <span>•</span>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">LinkedIn</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-all px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
