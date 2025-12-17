import {
  SlideSection,
  TitleSlide,
  DeckTable,
  StackedBarChart,
  CardGrid,
  DeckProvider,
  Navigation,
  FeatureColumns,
  ImageGrid,
  FlowDiagram,
  RiskMatrix,
  GanttChart,
  TimelineChart,
} from "@/components/deck";
import { Code, Globe, Users, Box, Monitor, Layers, Cpu, ChevronUp, Timer, Grid, Download, GitBranch, Palette, Shield, Zap, Target, Lightbulb } from "lucide-react";

// Import images
import gsgLibrary from "@/assets/gsg-library.png";
import acesDiagram from "@/assets/aces-diagram.png";
import acesSrgb from "@/assets/aces-srgb.png";
import materialx from "@/assets/materialx.png";
import rezTerminal from "@/assets/rez-terminal.png";
import gitWorkflow from "@/assets/git-workflow.png";
import launcherUi from "@/assets/launcher-ui.png";
import aiTripo from "@/assets/ai-tripo.png";
import aiHunyuan from "@/assets/ai-hunyuan.png";
import aiKitbash from "@/assets/ai-kitbash.png";
import acesWorkflow1 from "@/assets/aces-workflow-1.png";
import acesWorkflow2 from "@/assets/aces-workflow-2.png";
import acesWorkflow3 from "@/assets/aces-workflow-3.png";

const navItems = [
  { id: "title", label: "Overview" },
  { id: "structure", label: "Structure" },
  { id: "roles", label: "Roles" },
  { id: "responsibility", label: "Matrix" },
  { id: "pipeline", label: "Pipeline" },
  { id: "usd", label: "USD" },
  { id: "assets", label: "Assets" },
  { id: "aces", label: "ACES" },
  { id: "rez", label: "REZ" },
  { id: "render", label: "Render" },
  { id: "ai", label: "AI" },
  { id: "timeline", label: "Timeline" },
];

const roleAllocationData = [
  {
    label: "Lead/TD",
    segments: [
      { label: "Direction", value: 40, color: "hsl(199, 89%, 60%)" },
      { label: "Planning", value: 30, color: "hsl(142, 71%, 45%)" },
      { label: "Problem Solving", value: 30, color: "hsl(25, 95%, 53%)" },
    ],
  },
  {
    label: "Pipeline Developer",
    segments: [
      { label: "Features", value: 60, color: "hsl(142, 71%, 45%)" },
      { label: "Maintenance", value: 25, color: "hsl(280, 65%, 60%)" },
      { label: "Support", value: 15, color: "hsl(25, 95%, 53%)" },
    ],
  },
  {
    label: "Junior Engineer",
    segments: [
      { label: "Bug Fixes", value: 70, color: "hsl(280, 65%, 60%)" },
      { label: "Features", value: 20, color: "hsl(142, 71%, 45%)" },
      { label: "Training", value: 10, color: "hsl(199, 89%, 60%)" },
    ],
  },
  {
    label: "IT Specialist",
    segments: [
      { label: "Infrastructure", value: 80, color: "hsl(199, 89%, 60%)" },
      { label: "Deployment", value: 10, color: "hsl(142, 71%, 45%)" },
      { label: "Security", value: 10, color: "hsl(25, 95%, 53%)" },
    ],
  },
];

const responsibilityData = [
  { task: "New pipeline feature design", lead: "Directs/specifies", dev: "Builds/architects", junior: "Assists/tests", it: "Supports" },
  { task: "Render farm integration", lead: "Approves/top-level", dev: "Engineers/scripts", junior: "Configures UI", it: "Deploys" },
  { task: "Asset publishing automation", lead: "Defines process", dev: "Builds core", junior: "Maintains", it: "" },
  { task: "Artist tool support", lead: "Mentors/designs", dev: "Manages refactoring", junior: "Bugfixes/test", it: "" },
  { task: "DCC integration", lead: "Approves/selects", dev: "Implements bridges", junior: "Tests/reports", it: "" },
  { task: "Environment setup", lead: "Sets standards", dev: "Automates/Rez", junior: "Assists deploy", it: "Maintains" },
  { task: "Git/Version control rules", lead: "Defines workflows", dev: "Implements logic", junior: "Provides GUI", it: "" },
  { task: "Hardware/network issues", lead: "Consults", dev: "Helps debug", junior: "Reports", it: "Owns/solves" },
  { task: "Documentation/trainings", lead: "Sets standards", dev: "Authors core guides", junior: "Updates FAQ", it: "Onboarding" },
];

const aiRisks = [
  { name: "Vendor Lock-in", likelihood: "medium" as const, impact: "high" as const },
  { name: "Cloud Misconfiguration", likelihood: "medium" as const, impact: "medium" as const },
  { name: "Data Privacy", likelihood: "low" as const, impact: "high" as const },
  { name: "Unexpected Updates", likelihood: "high" as const, impact: "low" as const },
];

const ganttTasks = [
  { id: "1", label: "Team Building & Setup", start: 0, duration: 8, color: "hsl(199, 89%, 60%)" },
  { id: "2", label: "Launcher & Asset Library", start: 4, duration: 8, color: "hsl(142, 71%, 45%)" },
  { id: "3", label: "Version Control & Pipeline", start: 12, duration: 8, color: "hsl(280, 65%, 60%)" },
  { id: "4", label: "Render Automation & Upgrades", start: 16, duration: 8, color: "hsl(25, 95%, 53%)" },
  { id: "5", label: "Advanced Features & AI", start: 20, duration: 8, color: "hsl(199, 89%, 60%)" },
  { id: "6", label: "Training & Documentation", start: 24, duration: 8, color: "hsl(142, 71%, 45%)" },
];

const Index = () => {
  return (
    <DeckProvider items={navItems}>
      <div className="min-h-screen bg-background">
        <Navigation items={navItems} />
      
      {/* Title Slide */}
      <SlideSection id="title" className="pt-16">
        <TitleSlide
          title="Pipeline Blueprint"
          subtitle="A comprehensive roadmap for implementing an AI assisted and USD-centric studio pipeline for a growing London team"
        />
      </SlideSection>

      {/* Studio Structure */}
      <SlideSection id="structure">
        <FeatureColumns
          heading="Studio structure"
          subheading="Current state of the team"
          features={[
            {
              icon: <Code className="w-6 h-6" />,
              title: "Advanced pipeline Vision",
              description: "AI augmented USD-centric workflow focused on efficiency. Houdini serves as the primary DCC tool, creating a foundation for sophisticated production capabilities.",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Remote collaboration model",
              description: "Distributed team structure enables access to diverse talent across locations. Core pipeline architecture and optimization strategies are maintained while scaling from small projects to Film and TV standard production requirements.",
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Diverse talent composition",
              description: "Senior pipeline lead, comp artist/pipeline engineer, AI-focused CG artists, and a Houdini artist form the core team.",
              subdescription: "Hiring plan: A mid-level pipeline developer role is being recruited at £40-50k/year.",
            },
          ]}
        />
      </SlideSection>

      {/* VFX Studio Technical Roles */}
      <SlideSection id="roles">
        <CardGrid
          heading="VFX studio technical roles"
          headingHighlight="technical roles"
          cards={[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Pipeline Lead / TD",
              description: "Focus: Pipeline architecture & strategy",
              subdescription: "Responsibilities: Define OS support, pipeline vision, design and testing. Owns: Overall pipeline health; leads architecture decisions; interfaces with production and artists.",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Mid-level Pipeline Developer",
              description: "Focus: Core system & tool development",
              subdescription: "Responsibilities: Build and maintain pipeline tools, workflows, mentor team. Owns: Technical implementation of pipeline systems; delivers new features; supports production needs.",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Junior Pipeline Engineer",
              description: "Focus: Day-to-day pipeline support",
              subdescription: "Responsibilities: OS support, Stability QA, testing and maintaining hardware/Software. Owns: Routine maintenance, software compatibility, benchmarking, implementation and assists in tool development.",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "IT Specialist",
              description: "Focus: Infrastructure & systems management",
              subdescription: "Responsibilities: Manage hardware, network, licenses, backups, deployments. Owns: Studio infrastructure reliability, license management, and environment setup; collaborates with pipeline team.",
            },
          ]}
          columns={4}
          variant="filled"
        />
      </SlideSection>

      {/* Responsibility Matrix */}
      <SlideSection id="responsibility">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
              Responsibility Matrix
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><span className="text-foreground font-medium">Lead/TD:</span> 40% technical direction/mentoring, 30% strategic planning, 30% complex problem-solving/troubleshooting</li>
              <li><span className="text-foreground font-medium">Pipeline Developer:</span> 60% feature/system work, 25% maintenance/refactoring, 15% support/collab</li>
              <li><span className="text-foreground font-medium">Junior Engineer:</span> 70% bugfix/support, 20% new feature assisting, 10% onboarding/training</li>
              <li><span className="text-foreground font-medium">IT Specialist:</span> 80% infrastructure, 10% deployment/collab, 10% security/backup</li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <DeckTable
              columns={[
                { key: "task", header: "Task/Project" },
                { key: "lead", header: "Pipeline Lead/TD" },
                { key: "dev", header: "Pipeline Developer" },
                { key: "junior", header: "Junior Engineer" },
                { key: "it", header: "IT Specialist" },
              ]}
              data={responsibilityData}
            />
          </div>
        </div>
      </SlideSection>

      {/* What Modern Pipeline Should Include */}
      <SlideSection id="pipeline">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-5xl">
            <span className="text-muted-foreground">What </span>
            <span className="text-foreground">modern, high‑performing</span>
            <span className="text-muted-foreground"> CGI/AI studio pipeline should include?</span>
          </h2>
        </div>
      </SlideSection>

      {/* Asset Management / USD */}
      <SlideSection id="usd">
        <FeatureColumns
          heading="Asset Management"
          headingHighlight="Asset Management"
          subheading="USD-Centric Workflow is the backbone governing all shot, asset, lighting, animation, and FX data."
          subheadingHighlight="USD-Centric Workflow"
          features={[
            {
              icon: <Box className="w-6 h-6" />,
              title: "Organized asset libraries",
              description: "Assets including models, rigs, materials, and lighting setups are organized, indexed, and versioned for easy reuse across projects.",
            },
            {
              icon: <Monitor className="w-6 h-6" />,
              title: "Fast preview capabilities",
              description: "Complete with fast preview proxies and standardized naming conventions, allowing quick visualization of assets before full implementation.",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Layered USD structure",
              description: "Enables seamless interplay between departments, portability, and robust versioning. The layered approach allows for flexible collaboration without disrupting the workflow.",
            },
          ]}
        />
      </SlideSection>

      {/* Building Asset Libraries */}
      <SlideSection id="assets">
        <ImageGrid
          heading="Building asset libraries"
          subheading="Existing libraries focus on HDRs, textures, and Maya plugins with comprehensive resources."
          images={[
            { src: gsgLibrary, alt: "GSG Materials Library", label: "GSG Materials" },
          ]}
          columns={2}
          infoCards={[
            { title: "GSG libraries provide comprehensive headstart" },
            { title: "Jorge Lega Pipeline tools templates reduce development time 30-40%" },
            { title: "Bonfire and HND offer legacy assets. HDR and textures may be salvaged." },
          ]}
        />
      </SlideSection>

      {/* ACES Color Management */}
      <SlideSection id="aces">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              ACES = USD for Editorial
            </h2>
            <p className="text-lg text-muted-foreground">
              Fixes color inconsistencies across shots, assets, and departments.
            </p>
          </div>
          <div className="flex gap-4">
            <img src={acesDiagram} alt="ACES Chromaticity Diagram" className="rounded-lg w-full max-w-md" />
            <div className="space-y-2">
              <img src={acesSrgb} alt="sRGB comparison" className="rounded-lg" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="deck-card-filled">
              <Grid className="w-6 h-6 mb-3 text-foreground" />
              <p className="text-base text-foreground font-medium">Required by high-end productions</p>
            </div>
            <div className="deck-card-filled">
              <Target className="w-6 h-6 mb-3 text-foreground" />
              <p className="text-base text-foreground font-medium">Ensures consistency in color workflows</p>
            </div>
            <div className="deck-card-filled">
              <Shield className="w-6 h-6 mb-3 text-foreground" />
              <p className="text-base text-foreground font-medium">Protects image quality from burnout</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6">
            <img src={acesWorkflow1} alt="CG Output" className="w-24 h-24 object-contain mb-4 rounded" />
            <h3 className="text-foreground font-semibold mb-2">CG-output</h3>
            <p className="text-sm text-muted-foreground">Textures and input images digested through OCIO ACES presets</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <img src={acesWorkflow2} alt="Comp/Retouch" className="w-24 h-24 object-contain mb-4 rounded" />
            <h3 className="text-foreground font-semibold mb-2">Comp / Retouch</h3>
            <p className="text-sm text-muted-foreground">Editorial may convert to ACEScc, for compositing ACEScg is fine</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <img src={acesWorkflow3} alt="Deliverable" className="w-24 h-24 object-contain mb-4 rounded" />
            <h3 className="text-foreground font-semibold mb-2">Deliverable</h3>
            <p className="text-sm text-muted-foreground">Editorial converts to delivery format using Output Transform/LUT</p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={materialx} alt="MaterialX" className="rounded-lg max-w-md" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">MaterialX (MTLX) & OpenPBR</h3>
              <p className="text-muted-foreground mb-6">Open standard for rich material/shader definitions and exchange across DCCs and renderers.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="deck-card">
                  <h4 className="text-foreground font-semibold mb-1">Cross-platform</h4>
                  <p className="text-sm text-muted-foreground">Enables high-fidelity, cross-studio asset sharing without re-authoring.</p>
                </div>
                <div className="deck-card">
                  <h4 className="text-foreground font-semibold mb-1">Industry-backed</h4>
                  <p className="text-sm text-muted-foreground">Developed by Sony/ILM, now supported by ASWF.</p>
                </div>
                <div className="deck-card">
                  <h4 className="text-foreground font-semibold mb-1">Unified model</h4>
                  <p className="text-sm text-muted-foreground">OpenPBR provides physically-based surfaces with complex layering.</p>
                </div>
                <div className="deck-card">
                  <h4 className="text-foreground font-semibold mb-1">Wide compatibility</h4>
                  <p className="text-sm text-muted-foreground">Easily transfers between Houdini, Maya, Blender, V-Ray and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideSection>

      {/* REZ Environment Management */}
      <SlideSection id="rez">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              REZ: Automated Environment and Dependency Control
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              REZ: All artist and render farm machines use dynamically-resolved environments (software, plugins, versions) so "works on my machine" bugs are eliminated. Deployment and updates are frictionless.
            </p>
          </div>
          <div>
            <img src={rezTerminal} alt="REZ Terminal" className="rounded-lg" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={launcherUi} alt="Project Launcher UI" className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-foreground mb-4">Launchers and Unified Interface</h3>
            <p className="text-muted-foreground mb-6">
              Project Launchers: One-click environment setup, DCC startup, shot/asset assignment, render queue integration.
            </p>
            <div className="space-y-3">
              {["Pipeline", "GSG Libraries", "Deadline Submitter", "Redshift", "Ftrack Submitter"].map((pkg) => (
                <div key={pkg} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-sm text-foreground">{pkg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideSection>

      {/* Integrated Render Farm */}
      <SlideSection id="render">
        <FeatureColumns
          heading="Integrated render farm"
          headingHighlight="render farm"
          subheading="Deadline offers sophisticated job orchestration with license-saving optimizations for maximum hardware ROI."
          subheadingHighlight="sophisticated job orchestration"
          features={[
            {
              icon: <Cpu className="w-6 h-6" />,
              title: "CPU/GPU scaling",
              description: "Flexible resource allocation optimizes rendering performance. Dynamically scale processing power based on job requirements and available hardware.",
            },
            {
              icon: <ChevronUp className="w-6 h-6" />,
              title: "License optimization",
              description: "Husk standalone submission for Houdini/Karma uses render licenses instead of costly DCC/interactive licenses. Maximizes ROI, especially for commercial seats.",
            },
            {
              icon: <Timer className="w-6 h-6" />,
              title: "Advanced orchestration",
              description: "Priority queuing and dependency chaining maximize workflow efficiency. Dashboard monitoring provides real-time visibility into render processes.",
            },
          ]}
        />

        <div className="mt-16">
          <CardGrid
            heading="Robust Version Control"
            subheading="Publishing tools enforce standards, automate versioning, and integrate with asset browsers and DCC GUIs."
            cards={[
              {
                icon: <GitBranch className="w-6 h-6" />,
                title: "Lowered Technical Barriers",
                description: "Artists work in feature branches with GUI-driven processes.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collaboration Framework",
                description: "Git LFS + Branching for tracking all project files.",
              },
              {
                icon: <Download className="w-6 h-6" />,
                title: "Comprehensive File Tracking",
                description: "All project files including large binaries (.hip, .blend, .usdc) are tracked.",
              },
            ]}
            columns={3}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <img src={gitWorkflow} alt="Git Workflow" className="rounded-lg max-w-2xl" />
        </div>
      </SlideSection>

      {/* AI Integration */}
      <SlideSection id="ai">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
          AI-assisted workflows in production reality
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
          AI accelerates asset ideation and repetitive tasks but stays anchored to asset library and USD workflow. Artists iterate rapidly, but final output is always actual, rendered 3D assets—not direct AI "concepts" delivered to clients.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <img src={aiTripo} alt="Tripo AI" className="rounded-lg aspect-video object-cover" />
          <img src={aiHunyuan} alt="Hunyuan AI" className="rounded-lg aspect-video object-cover" />
          <img src={aiKitbash} alt="KitBash Assets" className="rounded-lg aspect-video object-cover" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Generative Model Integration</h3>
            <p className="text-muted-foreground mb-4">
              Tools like Tripo, Hunyuan, Meshify accelerate asset creation. ComfyUI, Krea, Stable Diffusion supplement the pipeline but integrate tightly via custom scripts, with manual QC by artists.
            </p>
            <p className="text-muted-foreground">
              Adopt KitBashing for faster iteration through internal asset Libraries and AI generated assets.
            </p>
          </div>
          <RiskMatrix risks={aiRisks} title="Risk Assessment" />
        </div>
      </SlideSection>

      {/* Timeline */}
      <SlideSection id="timeline">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-8">
          8-Month Strategic Action Plan
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
          Strategic hiring, technical upgrades, and process standardization drive ROI, foster creative agility, and ensure assets and projects are easy to track, iterate, and deliver as the studio grows.
        </p>
        
        <GanttChart tasks={ganttTasks} totalWeeks={32} />
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-6">60-Day Action Plan</h3>
          <p className="text-muted-foreground mb-8">
            <span className="text-foreground font-semibold">Absolute immediate step:</span> Fast-track the hiring process for a dedicated Pipeline Developer. Their first major task can be to lead Rez/environment standardization and deepen launcher functionality with proper environment hooks.
          </p>
          <TimelineChart
            phases={[
              { label: "Job ad & Sourcing", start: 0, duration: 2, color: "hsl(199, 89%, 60%)" },
              { label: "Launcher skeleton", start: 1, duration: 4, color: "hsl(142, 71%, 45%)" },
              { label: "Asset library groundwork", start: 2, duration: 6, color: "hsl(280, 65%, 60%)" },
              { label: "Team feedback & docs", start: 7, duration: 2, color: "hsl(25, 95%, 53%)" },
            ]}
            totalUnits={9}
            unitLabel="Week"
          />
        </div>
      </SlideSection>

      {/* Footer */}
      <div className="py-16 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          Pipeline Blueprint 2025 • London VFX Studio
        </p>
      </div>
      </div>
    </DeckProvider>
  );
};

export default Index;
