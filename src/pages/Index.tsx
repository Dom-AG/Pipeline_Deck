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
  SectionHeading,
  MatrixTable,
  ImageComparison,
  LauncherMockup,
  QualityInvestmentChart,
} from "@/components/deck";
import { Code, Globe, Users, Box, Monitor, Layers, Cpu, ChevronUp, Timer, Grid, Download, GitBranch, Palette, Shield, Zap, Target, Lightbulb, CheckCircle2, XCircle, TrendingUp, TrendingDown, Brain, AlertTriangle, Rocket, BarChart3, Users2, Wrench } from "lucide-react";
import { activeTheme } from "@/config";
import { content } from "@/config/content";
import { getChartColor } from "@/lib/theme-helpers";
// import { useInfinitePanels } from "@/hooks/use-infinite-panels"; // Disabled - using natural scroll
// import { useScrollSmoother } from "@/hooks/use-scroll-smoother"; // Disabled - ScrollSmoother is premium plugin

// Import images
import gsgLibrary from "@/assets/gsg-library.png";
import acesDiagram from "@/assets/aces-diagram.png";
import acesSrgb from "@/assets/aces-srgb.png";
import srgbDust from "@/assets/sRGB_Dust_v02.jpg";
import acescgDust from "@/assets/ACEScg_Dust_v02.jpg";
import materialx from "@/assets/materialx.png";
import metalnessVideo from "@/assets/rsOpenPBR_Base_Metalness_0-1_anim.mp4";
import subsurfaceVideo from "@/assets/rsOpenPBR_SSS_Weight_0-1_anim.mp4";
import transmissionVideo from "@/assets/rsOpenPBR_Transm_Depth_0-10_anim.mp4";
import rezTerminal from "@/assets/rez-terminal.png";
import rezImage from "@/assets/REZ.jpg";
import gitWorkflow from "@/assets/git-workflow.png";
import launcherUi from "@/assets/launcher-ui.png";
import cursorLogo from "@/assets/cursor-ai.png";
import perplexityLogo from "@/assets/Perplexity.webp";
import comfyLogo from "@/assets/new-comfyui-logo-icon-v0-c05cowjywfze1.webp";
import lovableLogo from "@/assets/Lovable.jpg";
import v0Logo from "@/assets/v0.png";
import acesWorkflow1 from "@/assets/aces-workflow-1.png";
import acesWorkflow2 from "@/assets/aces-workflow-2.png";
import acesWorkflow3 from "@/assets/aces-workflow-3.png";

const navItems = [
  { id: "title", label: "Overview" },
  { id: "structure", label: "Structure" },
  { id: "roles", label: "Roles" },
  { id: "disruption", label: "Disruption" },
  { id: "assets", label: "Assets" },
  { id: "aces", label: "ACES" },
  { id: "rez", label: "Management" },
  { id: "render", label: "Infrastructure" },
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
      {/* Navbar - Fixed layer */}
        <Navigation items={navItems} />
      
      {/* Main content container */}
      <main className="panels-container" style={{ position: 'relative' }}>
      {/* Title Slide */}
            <SlideSection id="title">
        <TitleSlide
                title={content.title.title}
                subtitle={content.title.subtitle}
        />
      </SlideSection>

      {/* Studio Structure */}
      <SlideSection id="structure">
        <FeatureColumns
                heading={content.structure.heading}
                subheading={content.structure.subheading}
                features={content.structure.features.map((feature, idx) => ({
                  icon: idx === 0 ? <Code className="w-6 h-6" /> : idx === 1 ? <Globe className="w-6 h-6" /> : <Users className="w-6 h-6" />,
                  title: feature.title,
                  description: feature.description,
                  subdescription: feature.subdescription,
                }))}
        />
      </SlideSection>

      {/* VFX Studio Technical Roles */}
      <SlideSection id="roles">
        <div className="space-y-16">
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

          {/* Responsibility Matrix - Merged into Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
              <SectionHeading 
                text={content.responsibility.heading}
                size="xl"
              />
            <ul className="space-y-4 text-sm text-muted-foreground">
                {content.responsibility.summary.map((item, idx) => {
                  const [role, ...descriptionParts] = item.split(':');
                  const description = descriptionParts.join(':');
                  return (
                    <li key={idx}>
                      <span className="text-foreground font-medium">{role}:</span> {description}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="lg:col-span-2">
              <MatrixTable
              columns={[
                { key: "task", header: "Task/Project" },
                { key: "lead", header: "Pipeline Lead/TD" },
                { key: "dev", header: "Pipeline Developer" },
                { key: "junior", header: "Junior Engineer" },
                { key: "it", header: "IT Specialist" },
              ]}
              data={responsibilityData}
                variant="dark"
                showVerticalBorders={true}
                cellHover={true}
            />
            </div>
          </div>
        </div>
      </SlideSection>

      {/* AI Disruption & Studio Resilience */}
      <SlideSection id="disruption">
        <div className="space-y-12">
          <div>
            <SectionHeading 
              text={content.disruption.heading}
              size="xl"
            />
          </div>

          {/* The Problem */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {content.disruption.problem.heading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border/30 rounded-lg p-6 bg-[#0e100f]">
                <TrendingUp className="w-6 h-6 mb-4 text-white" />
                <h4 className="text-lg font-semibold text-white mb-4">
                  {content.disruption.problem.bubbleEra.title}
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  {content.disruption.problem.bubbleEra.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border/30 rounded-lg p-6 bg-[#0e100f]">
                <TrendingDown className="w-6 h-6 mb-4 text-white" />
                <h4 className="text-lg font-semibold text-white mb-4">
                  {content.disruption.problem.marketCorrection.title}
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  {content.disruption.problem.marketCorrection.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Strategic Response */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {content.disruption.response.heading}
            </h3>
            
            {/* What Works */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                {content.disruption.response.whatWorks.heading}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.disruption.response.whatWorks.items.map((item, idx) => {
                  const icons = [CheckCircle2, Rocket, Layers, Brain];
                  const Icon = icons[idx] || CheckCircle2;
                  return (
                    <div key={idx} className="border border-border/30 rounded-lg p-6 bg-[#0e100f]">
                      <Icon className="w-6 h-6 mb-3 text-white" />
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm text-white/80 mb-3">
                        {item.description}
                      </p>
                      {item.benefits && (
                        <ul className="space-y-1 text-xs text-white/70">
                          {item.benefits.map((benefit, bidx) => (
                            <li key={bidx} className="flex items-start gap-2">
                              <span className="text-white mt-0.5">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What Doesn't Work */}
            <div className="space-y-4 mt-8">
              <h4 className="text-xl font-semibold text-foreground">
                {content.disruption.response.whatDoesntWork.heading}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.disruption.response.whatDoesntWork.items.map((item, idx) => {
                  const icons = [XCircle, AlertTriangle, Globe];
                  const Icon = icons[idx] || XCircle;
                  return (
                    <div key={idx} className="border border-border/30 rounded-lg p-6 bg-[#0e100f]">
                      <Icon className="w-6 h-6 mb-3 text-white" />
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm text-white/80 mb-3">
                        {item.description}
                      </p>
                      {item.issues && (
                        <ul className="space-y-1 text-xs text-white/70">
                          {item.issues.map((issue, iidx) => (
                            <li key={iidx} className="flex items-start gap-2">
                              <span className="text-white mt-0.5">•</span>
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quality vs Investment */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              {content.disruption.qualityVsInvestment.heading}
            </h3>
            
            {/* Quality vs Investment Chart */}
            <QualityInvestmentChart height={300} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.disruption.qualityVsInvestment.paths.map((path, idx) => {
                const icons = [XCircle, BarChart3, CheckCircle2];
                const Icon = icons[idx] || BarChart3;
                return (
                  <div key={idx} className={`border rounded-lg p-6 ${path.recommended ? 'border-accent/50 bg-[#0e100f]' : 'border-border/30 bg-[#0e100f]'}`}>
                    <Icon className={`w-6 h-6 mb-3 ${path.recommended ? 'text-accent' : 'text-white'}`} />
                    <h4 className={`text-lg font-semibold mb-2 ${path.recommended ? 'text-accent' : 'text-white'}`}>
                      {path.title}
                    </h4>
                    <p className="text-sm text-white/80 mb-3">
                      {path.investment}
                    </p>
                    <p className="text-sm text-white/80 mb-3">
                      {path.quality}
                    </p>
                    {path.useCase && (
                      <p className="text-xs text-white/70">
                        <span className="font-medium text-white">Use case:</span> {path.useCase}
                      </p>
                    )}
                    {path.result && (
                      <p className="text-xs text-white/70 mt-2">
                        <span className="font-medium text-white">Result:</span> {path.result}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border border-border/30 rounded-lg p-8 bg-[#0e100f]">
            <Target className="w-6 h-6 mb-4 text-white" />
            <h3 className="text-xl font-semibold text-white mb-4">
              {content.disruption.bottomLine.heading}
            </h3>
            <p className="text-white/80 mb-4">
              {content.disruption.bottomLine.goal}
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-white">
                {content.disruption.bottomLine.strategy.heading}
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                {content.disruption.bottomLine.strategy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SlideSection>

      {/* Assets Section - Combined Asset Management and Building Asset Libraries */}
      <SlideSection id="assets">
        <div className="w-full space-y-24">
          {/* Asset Management / USD Section */}
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
          
          {/* Building Asset Libraries Section */}
          <div className="flex flex-col items-center justify-center">
            <SectionHeading 
              text={content.assets.heading}
              size="lg"
              className="mb-4"
            />
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl text-center">
              {content.assets.subheading}
            </p>
            
            <div className="space-y-6 max-w-3xl w-full">
              {content.assets.infoCards.map((card, index) => {
                const chartColors = ['planning', 'execution', 'support'] as const;
                const colorKey = chartColors[index] || 'planning';
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0e100f] flex items-center justify-center border-2 border-white/20">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getChartColor(colorKey) }} />
          </div>
                    <p className="text-lg text-foreground pt-2">{card}</p>
            </div>
                );
              })}
          </div>
            </div>
            </div>

        {/* MaterialX (MTLX) & OpenPBR Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-foreground mb-4">MaterialX (MTLX) & OpenPBR</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">Open standard for rich material/shader definitions and exchange across DCCs and renderers.</p>
        </div>

          {/* Three videos horizontally */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <video
                src={metalnessVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full max-w-md mb-3"
              />
              <p className="text-sm font-medium text-foreground">Metalness</p>
          </div>
            <div className="flex flex-col items-center">
              <video
                src={subsurfaceVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full max-w-md mb-3"
              />
              <p className="text-sm font-medium text-foreground">Subsurface</p>
          </div>
            <div className="flex flex-col items-center">
              <video
                src={transmissionVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg w-full max-w-md mb-3"
              />
              <p className="text-sm font-medium text-foreground">Transmission</p>
          </div>
        </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
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
      </SlideSection>

            {/* ACES Color Management */}
            <SlideSection id="aces">
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto">
                  <SectionHeading 
                    text={content.aces.heading}
                    size="lg"
                    className="mb-4"
                  />
                  <p className="text-lg text-muted-foreground">
                    {content.aces.description}
                  </p>
                </div>

                {/* Large centered image comparison */}
                <div className="flex justify-center">
                  <ImageComparison
                    leftImage={srgbDust}
                    rightImage={acescgDust}
                    leftLabel="sRGB"
                    rightLabel="ACEScg"
                    className="max-w-5xl w-full"
                  />
                </div>

                {/* Three cards horizontally */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-[#0e100f] rounded-xl p-6 border border-border/30 aces-dark-card">
                    <Grid className="w-6 h-6 mb-3 aces-card-icon" />
                    <p className="text-base aces-card-text">Required by high-end productions</p>
                  </div>
                  <div className="bg-[#0e100f] rounded-xl p-6 border border-border/30 aces-dark-card">
                    <Target className="w-6 h-6 mb-3 aces-card-icon" />
                    <p className="text-base aces-card-text">Ensures consistency in color workflows</p>
                  </div>
                  <div className="bg-[#0e100f] rounded-xl p-6 border border-border/30 aces-dark-card">
                    <Shield className="w-6 h-6 mb-3 aces-card-icon" />
                    <p className="text-base aces-card-text">Protects image quality from burnout</p>
                  </div>
                </div>
              </div>

        {/* ACES Workflow Timeline */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* CG-output */}
            <div className="flex flex-col items-center text-center flex-1 max-w-xs">
              <h3 className="text-foreground font-semibold mb-2">CG-output</h3>
              <p className="text-sm text-muted-foreground">Textures and input images digested through OCIO ACES presets</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block flex-shrink-0">
              <svg className="w-12 h-12 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Comp / Retouch */}
            <div className="flex flex-col items-center text-center flex-1 max-w-xs">
              <h3 className="text-foreground font-semibold mb-2">Comp / Retouch</h3>
              <p className="text-sm text-muted-foreground">Editorial may convert to ACEScc, for compositing ACEScg is fine</p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block flex-shrink-0">
              <svg className="w-12 h-12 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Deliverable */}
            <div className="flex flex-col items-center text-center flex-1 max-w-xs">
              <h3 className="text-foreground font-semibold mb-2">Deliverable</h3>
              <p className="text-sm text-muted-foreground">Editorial converts to delivery format using Output Transform/LUT</p>
            </div>
          </div>
        </div>
      </SlideSection>

      {/* REZ Environment Management */}
      <SlideSection id="rez">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
                  <SectionHeading 
                    text={content.rez.heading}
                    size="lg"
                    className="mb-6"
                  />
            <p className="text-lg text-muted-foreground mb-8">
                    {content.rez.description}
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">SQLite Database</h3>
                  <p className="text-lg text-muted-foreground">
                    SQLite is a lightweight, serverless relational database that stores data in a single file. It's embedded directly into applications rather than running as a separate server, making it ideal for mobile apps, desktop applications, and local data storage. SQLite supports standard SQL operations but is not suited for high-concurrency scenarios or distributed systems.
            </p>
          </div>
          <div>
            <img src={rezImage} alt="REZ" className="rounded-lg w-full" />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              (not the video game)
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
              <LauncherMockup />
          </div>
          <div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">Unified Interface</h3>
              <p className="text-muted-foreground">
              Project Launchers: One-click environment setup, DCC startup, shot/asset assignment, render queue integration.
            </p>
                </div>
            </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Task Management</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">ftrack:</strong> Most powerful for deep DCC and pipeline integration, but more complex and mid-priced. Worth it if you need a "mini enterprise" setup and can invest time in configuration.
                  </p>
                  <p>
                    <strong className="text-foreground">Kitsu:</strong> Best cost–benefit for pure production tracking. Very suitable if you are comfortable self-hosting or paying a modest cloud fee and scripting your own Houdini/Nuke hooks.
                  </p>
                  <p>
                    <strong className="text-foreground">Frame.io:</strong> Not a tracker, but an excellent companion tool for client feedback and approvals on animation, edit, and print exports. Often paired with a tracker like Kitsu or ftrack rather than used alone.
                  </p>
                </div>
              </div>
              <div>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/ZnSeHSu5kvw"
                    title="Ftrack Connect"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <MatrixTable
              columns={[
                { key: "feature", header: "Feature / Aspect", width: "25%" },
                { key: "ftrack", header: "ftrack Studio", width: "25%" },
                { key: "kitsu", header: "Kitsu (CGWire)", width: "25%" },
                { key: "frameio", header: "Frame.io", width: "25%" },
              ]}
              data={[
                { feature: "Primary purpose", ftrack: "Full production tracking for VFX/animation", kitsu: "Production tracking for CG/animation (shots/assets)", frameio: "Review & approval for video/visual content" },
                { feature: "Best fit studio size", ftrack: "Small–enterprise", kitsu: "Freelancers, small–mid studios", frameio: "Freelancers, small–mid studios" },
                { feature: "Hosting model", ftrack: "Cloud SaaS only", kitsu: "Self-hosted (open source) + cloud SaaS", frameio: "Cloud SaaS only" },
                { feature: "Typical cost level", ftrack: "Mid; per-seat subscription", kitsu: "Low; free self-hosted or low cloud subscription", frameio: "Low–mid; per-seat or team plans" },
                { feature: "Shot & asset tracking", ftrack: "Yes – robust, hierarchical", kitsu: "Yes – designed for this use case", frameio: "No (only media items, not tasks/shots)" },
                { feature: "Task management", ftrack: "Yes – tasks, statuses, assignments", kitsu: "Yes – tasks, statuses, productions", frameio: "Limited – comments/approvals, not tasks" },
                { feature: "DCC integration (Maya/Houdini/Nuke/etc.)", ftrack: "Yes – via ftrack Connect & plugins", kitsu: "Possible via Python API and community bridges", frameio: "Indirect; NLE integrations (Premiere, Resolve, FCP)" },
                { feature: "Render/pipeline integration", ftrack: "Strong via API + Connect plugins", kitsu: "Strong via API; DIY scripting", frameio: "Via API/webhooks; mostly for media publish" },
                { feature: "API / SDK", ftrack: "Full REST API & Python API", kitsu: "REST API (Gazu), Python clients", frameio: "REST API, webhooks, SDKs" },
                { feature: "Review & annotations (web UI)", ftrack: "Yes – media review & notes", kitsu: "Yes – web player with comments/notes", frameio: "Yes – excellent frame-accurate review tools" },
                { feature: "Client-facing review experience", ftrack: "Good but more production-oriented", kitsu: "Basic; more crew-oriented than client-polished", frameio: "Excellent; made for client approvals" },
                { feature: "Versioning of media/assets", ftrack: "Yes – versions tied to tasks/shots", kitsu: "Yes – versions per shot/asset", frameio: "Yes – media version stacks" },
                { feature: "Time tracking / timesheets", ftrack: "Yes (depends on plan)", kitsu: "Yes – built-in timesheets", frameio: "No dedicated timesheet feature" },
                { feature: "Resource planning / scheduling", ftrack: "Yes – depends on tier", kitsu: "Basic via tasks and episodes/projects", frameio: "No; focus on review, not scheduling" },
                { feature: "Notifications / collaboration", ftrack: "In-app + email notifications", kitsu: "In-app updates, email; depends on setup", frameio: "Strong email/app notifications" },
                { feature: "Print/illustration workflows", ftrack: "Possible but optimized for shots/sequences", kitsu: "Possible (treat as assets/shots)", frameio: "Yes, if exported as images/video for review" },
                { feature: "AI / experimental workflows fit", ftrack: "Good if tracked as tasks/assets", kitsu: "Good; flexible schema for experiments", frameio: "Good for reviewing AI-generated outputs" },
                { feature: "Setup complexity", ftrack: "Medium–high; needs configuration", kitsu: "Self-host: higher; Cloud: moderate", frameio: "Low; sign up and upload" },
                { feature: "Learning curve for artists", ftrack: "Moderate; more \"enterprise\" UI", kitsu: "Moderate; simpler than ftrack/ShotGrid", frameio: "Low; very intuitive" },
                { feature: "Free / trial options", ftrack: "14-day trial only", kitsu: "Free self-host; trials for cloud", frameio: "Free tier and trials depending on plan" },
              ]}
              variant="dark"
              showVerticalBorders={true}
              cellHover={true}
              className="max-w-6xl mx-auto"
            />
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

        {/* Render Farm Cost Breakdown */}
        <div className="mt-24 space-y-16">
          {/* Table 1: Per-Blade Component Cost Breakdown */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">1. Per-Blade Component Cost Breakdown</h3>
            <MatrixTable
              columns={[
                { key: "component", header: "Component", width: "20%" },
                { key: "spec", header: "Recommended Model / Spec", width: "30%" },
                { key: "priceEx", header: "Est. Price (Ex VAT)", width: "15%" },
                { key: "priceInc", header: "Est. Price (Inc VAT)", width: "15%" },
                { key: "notes", header: "Notes / Risk Check", width: "20%" },
              ]}
              data={[
                {
                  component: "Chassis",
                  spec: "Silverstone RM51 (5U Rackmount)",
                  priceEx: "£390",
                  priceInc: "£470",
                  notes: "Must use RM51 (not RM44) to fit RTX 5090 height + power cable.",
                },
                {
                  component: "GPU",
                  spec: "NVIDIA RTX 5090 32GB (Consumer)",
                  priceEx: "£1,665",
                  priceInc: "£2,000",
                  notes: "Requires 3.5 slots. Ensure \"Blower\" or \"Founders\" style if possible.",
                },
                {
                  component: "CPU",
                  spec: "AMD Ryzen 9 9950X (16-Core, 5.7GHz)",
                  priceEx: "£440",
                  priceInc: "£530",
                  notes: "Top-tier single-core speed for scene prep.",
                },
                {
                  component: "Motherboard",
                  spec: "ASUS ProArt X870E (or similar)",
                  priceEx: "£290",
                  priceInc: "£350",
                  notes: "Must have 10GbE port onboard to save PCIe slots.",
                },
                {
                  component: "RAM",
                  spec: "128GB DDR5 Kit (4x32GB) 5200MHz",
                  priceEx: "£290",
                  priceInc: "£350",
                  notes: "Run at 4800/5200MHz for stability. Do not use XMP/EXPO 6000.",
                },
                {
                  component: "PSU",
                  spec: "1300W ATX 3.1 (e.g., Corsair/Seasonic)",
                  priceEx: "£210",
                  priceInc: "£250",
                  notes: "Must have native 12V-2x6 cable. Do not use adapters.",
                },
                {
                  component: "Storage",
                  spec: "2TB NVMe Gen4 (e.g., Samsung 990 Pro)",
                  priceEx: "£100",
                  priceInc: "£120",
                  notes: "Used for OS and local \"Buffer\" cache during rendering.",
                },
                {
                  component: "Cooling",
                  spec: "Noctua NH-D12L (Low Height 4U)",
                  priceEx: "£75",
                  priceInc: "£90",
                  notes: "Standard 140mm coolers will not fit in 4U/5U cases.",
                },
                {
                  component: "Rails",
                  spec: "Silverstone RMS05-22 Rail Kit",
                  priceEx: "£45",
                  priceInc: "£55",
                  notes: "Essential for racking. Often sold separately.",
                },
                {
                  component: "Misc",
                  spec: "Thermal paste, cable ties, specialized 90° power cable",
                  priceEx: "£40",
                  priceInc: "£50",
                  notes: "Cabling for 5090 is tight; budget for premium flexible cables.",
                },
                {
                  component: "TOTAL",
                  spec: "PER BLADE",
                  priceEx: "£3,545",
                  priceInc: "£4,265",
                  notes: "",
                },
              ]}
              variant="dark"
              showVerticalBorders={true}
              cellHover={true}
              className="max-w-7xl mx-auto"
            />
          </div>

          {/* Table 2: Shared Infrastructure Cost Matrix */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">2. Shared Infrastructure Cost Matrix</h3>
            <p className="text-sm text-muted-foreground mb-4">One-off costs to support the 8 nodes.</p>
            <MatrixTable
              columns={[
                { key: "category", header: "Category", width: "25%" },
                { key: "item", header: "Item / Spec", width: "35%" },
                { key: "cost", header: "Est. Cost (Inc VAT)", width: "20%" },
                { key: "function", header: "Critical Function", width: "20%" },
              ]}
              data={[
                {
                  category: "Power",
                  item: "2x APC 32A Commando PDUs (IEC309)",
                  cost: "£900",
                  function: "Safety: Splits 7kW load across two independent circuits.",
                },
                {
                  category: "Rack",
                  item: "42U Server Rack (1200mm Depth)",
                  cost: "£800",
                  function: "Depth: Must be 1200mm to fit 5090s + cabling comfortably.",
                },
                {
                  category: "Cooling",
                  item: "7kW (24,000 BTU) Industrial Portable AC",
                  cost: "£2,000",
                  function: "Heat Removal: A standard office AC will fail. Requires ducting.",
                },
                {
                  category: "Network",
                  item: "8-Port 10GbE Switch (Unmanaged)",
                  cost: "£400",
                  function: "Throughput: Essential for loading assets to VRAM.",
                },
                {
                  category: "Cabling",
                  item: "10x CAT6a Shielded Cables (3m)",
                  cost: "£100",
                  function: "Shielded required for 10GbE over distance.",
                },
                {
                  category: "Control",
                  item: "PiKVM / KVM Switch",
                  cost: "£300",
                  function: "Remote BIOS access (Consumer mobos lack IPMI).",
                },
                {
                  category: "Install",
                  item: "Electrician (2x 32A Sockets)",
                  cost: "£500",
                  function: "Site work to install \"Commando\" sockets.",
                },
                {
                  category: "TOTAL",
                  item: "INFRASTRUCTURE",
                  cost: "£5,000",
                  function: "",
                },
              ]}
              variant="dark"
              showVerticalBorders={true}
              cellHover={true}
              className="max-w-6xl mx-auto"
            />
          </div>

          {/* Table 3: Total Project Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">3. Total Project Summary</h3>
            <MatrixTable
              columns={[
                { key: "item", header: "Item", width: "40%" },
                { key: "qty", header: "Qty", width: "15%" },
                { key: "unitCost", header: "Unit Cost (Inc VAT)", width: "20%" },
                { key: "total", header: "Total (Inc VAT)", width: "25%" },
              ]}
              data={[
                {
                  item: "Render Blades",
                  qty: "8",
                  unitCost: "£4,265",
                  total: "£34,120",
                },
                {
                  item: "Infrastructure",
                  qty: "1",
                  unitCost: "£5,000",
                  total: "£5,000",
                },
                {
                  item: "Contingency",
                  qty: "1",
                  unitCost: "£880",
                  total: "£880",
                },
                {
                  item: "GRAND TOTAL",
                  qty: "",
                  unitCost: "",
                  total: "£40,000",
                },
              ]}
              variant="dark"
              showVerticalBorders={true}
              cellHover={true}
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
      </SlideSection>

      {/* AI Integration */}
      <SlideSection id="ai">
              <SectionHeading 
                text={content.ai.heading}
                size="lg"
                className="mb-4"
              />
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
          {content.ai.description}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12 justify-items-center">
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <img src={cursorLogo} alt="Cursor AI" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <img src={perplexityLogo} alt="Perplexity AI" className="w-[140%] h-[140%] object-contain" style={{ transform: "scale(1.4)" }} />
          </div>
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <img src={comfyLogo} alt="ComfyUI" className="w-full h-full object-contain p-4" />
          </div>
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <svg width="109" height="16" fill="#1273EB" viewBox="0 0 109 16" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
              <path d="M28.6279 10.0932C28.5821 10.0476 28.6126 9.95621 28.689 9.95621H28.9947H29.01C31.6235 9.69741 33.8091 8.0076 33.8091 5.02378C33.8091 1.58325 31.0274 0 27.8331 0H12.901C12.7023 0 12.5342 0.167458 12.5342 0.365365V15.6194C12.5342 15.8173 12.7023 15.9847 12.901 15.9847H17.6695C17.8682 15.9847 18.0363 15.8173 18.0363 15.6194V10.7478C18.0363 10.5499 18.2044 10.3825 18.4031 10.3825H21.5057C21.9336 10.3825 22.3463 10.5652 22.6367 10.8849L27.0537 15.8477C27.1454 15.8934 27.2371 15.9239 27.3288 15.9695H33.6257C33.9466 15.9695 34.1147 15.5889 33.8855 15.3606L28.6279 10.0932ZM26.641 6.82016H18.3878C18.1891 6.82016 18.021 6.6527 18.021 6.45479V4.14081C18.021 3.94291 18.1891 3.77544 18.3878 3.77544H26.5188C27.6803 3.77544 28.4445 4.33872 28.4445 5.25213C28.4445 6.28733 27.7414 6.82016 26.641 6.82016Z"></path>
              <path d="M88.9058 0.015625H84.1373C83.9386 0.015625 83.7705 0.183083 83.7705 0.38099V10.5047C83.7705 10.7026 83.9386 10.87 84.1373 10.87H88.9058C89.1045 10.87 89.2726 10.7026 89.2726 10.5047V0.38099C89.2573 0.183083 89.1045 0.015625 88.9058 0.015625Z"></path>
              <path d="M88.9058 13.0156H84.1373C83.9386 13.0156 83.7705 13.1831 83.7705 13.381V15.6341C83.7705 15.832 83.9386 15.9994 84.1373 15.9994H88.9058C89.1045 15.9994 89.2726 15.832 89.2726 15.6341V13.381C89.2573 13.1831 89.1045 13.0156 88.9058 13.0156Z"></path>
              <path d="M108.53 15.5132L102.401 7.4295C102.264 7.24682 102.279 7.00324 102.432 6.83578L108.225 0.502776C108.393 0.320094 108.255 0.0308495 108.011 0.0308495H102.997C102.86 0.0308495 102.738 0.0917438 102.646 0.183085L97.0521 6.30296C97.0369 6.31818 97.0063 6.3334 96.9757 6.3334H96.777C96.7312 6.3334 96.6853 6.28773 96.6853 6.24206V0.350541C96.6853 0.167858 96.5325 0.015625 96.3491 0.015625H91.764C91.5806 0.015625 91.4277 0.167858 91.4277 0.350541V15.635C91.4277 15.8025 91.5653 15.9395 91.7334 15.9395H96.3644C96.5325 15.9395 96.67 15.8025 96.67 15.635V12.7882C96.67 12.6664 96.7159 12.5598 96.7923 12.4685L98.825 10.3068C98.825 10.3068 98.8403 10.2763 98.8862 10.2763C98.932 10.2763 99.1307 10.2763 99.1613 10.2763C99.1919 10.2763 99.2224 10.3068 99.2224 10.3068L103.318 15.7568C103.41 15.8786 103.548 15.9395 103.701 15.9395H108.301C108.545 15.9395 108.668 15.6807 108.53 15.5132Z"></path>
              <path d="M41.2214 3.66928H45.8829C46.0816 3.66928 46.2497 3.50182 46.2497 3.30392V0.38099C46.2497 0.183083 46.0816 0.015625 45.8829 0.015625H36.2389C36.0402 0.015625 35.8721 0.183083 35.8721 0.38099V15.635C35.8721 15.8329 36.0402 16.0004 36.2389 16.0004H45.8829C46.0816 16.0004 46.2497 15.8329 46.2497 15.635V12.7121C46.2497 12.5142 46.0816 12.3467 45.8829 12.3467H41.1908C40.9921 12.3467 40.824 12.1793 40.824 11.9813V10.0784C40.824 9.86527 41.0074 9.68259 41.2214 9.68259H45.8829C46.0816 9.68259 46.2497 9.51513 46.2497 9.31723V6.45519C46.2497 6.25729 46.0816 6.08983 45.8829 6.08983H41.2214C41.0074 6.08983 40.824 5.90714 40.824 5.69401V4.04987C40.824 3.83674 41.0074 3.66928 41.2214 3.66928Z"></path>
              <path d="M53.7546 3.66928H58.4161C58.6148 3.66928 58.7829 3.50182 58.7829 3.30392V0.38099C58.7829 0.183083 58.6148 0.015625 58.4161 0.015625H48.7721C48.5734 0.015625 48.4053 0.183083 48.4053 0.38099V15.635C48.4053 15.8329 48.5734 16.0004 48.7721 16.0004H58.4161C58.6148 16.0004 58.7829 15.8329 58.7829 15.635V12.7121C58.7829 12.5142 58.6148 12.3467 58.4161 12.3467H53.724C53.5253 12.3467 53.3572 12.1793 53.3572 11.9813V10.0784C53.3572 9.86527 53.5406 9.68259 53.7546 9.68259H58.4161C58.6148 9.68259 58.7829 9.51513 58.7829 9.31723V6.45519C58.7829 6.25729 58.6148 6.08983 58.4161 6.08983H53.7546C53.5406 6.08983 53.3572 5.90714 53.3572 5.69401V4.04987C53.3572 3.83674 53.5406 3.66928 53.7546 3.66928Z"></path>
              <path d="M5.35124 3.66928H10.0128C10.2115 3.66928 10.3796 3.50182 10.3796 3.30392V0.38099C10.3796 0.183083 10.2115 0.015625 10.0128 0.015625H0.368765C0.170077 0.015625 0.00195312 0.183083 0.00195312 0.38099V15.635C0.00195312 15.8329 0.170077 16.0004 0.368765 16.0004H4.58706C4.78575 16.0004 4.95387 15.8329 4.95387 15.635V10.0936C4.95387 9.88049 5.13727 9.69781 5.35124 9.69781H10.0128C10.2115 9.69781 10.3796 9.53035 10.3796 9.33245V6.47042C10.3796 6.27251 10.2115 6.10505 10.0128 6.10505H5.35124C5.13727 6.10505 4.95387 5.92237 4.95387 5.70924V4.06509C4.95387 3.83674 5.12199 3.66928 5.35124 3.66928Z"></path>
              <path d="M75.7474 0.015625H61.3043C61.1056 0.015625 60.9375 0.183083 60.9375 0.38099V15.635C60.9375 15.8329 61.1056 16.0004 61.3043 16.0004H66.0728C66.2715 16.0004 66.4396 15.8329 66.4396 15.635V10.596C66.4396 10.4894 66.516 10.4133 66.623 10.4133H67.3108H75.7627C79.4307 10.4133 82.2124 8.51037 82.2124 5.14596C82.2124 1.65977 79.4308 0.015625 75.7474 0.015625ZM75.0596 6.82056H66.8064C66.6077 6.82056 66.4396 6.6531 66.4396 6.45519V4.14121C66.4396 3.94331 66.6077 3.77584 66.8064 3.77584H74.9374C76.0989 3.77584 76.8631 4.33912 76.8631 5.25253C76.8631 6.28773 76.1448 6.82056 75.0596 6.82056Z"></path>
            </svg>
          </div>
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <svg aria-label="Krea Logo" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain" style={{ color: 'currentColor' }}>
              <path d="M8.34057 1.26646C10.1061 1.14218 11.6638 2.37142 11.8911 4.06824C12.1069 5.68015 11.0037 7.23915 9.34608 7.60419C8.93062 7.69566 8.46886 7.67023 8.02919 7.72601C6.95925 7.86191 6.04308 8.30843 5.2807 9.06558L5.27279 9.06966L5.26385 9.0689L5.2568 9.06354L5.25394 9.05533C5.25366 9.04931 5.25521 9.04398 5.25861 9.03933C5.26343 9.03249 5.26583 9.02497 5.26583 9.01677C5.25535 7.76661 5.2521 6.253 5.25606 4.47593C5.25946 2.79675 6.58613 1.38951 8.34057 1.26646Z" fill="currentColor"></path>
              <path d="M8.5264 15.3045C6.27918 15.2869 4.66832 13.0758 5.44996 11.0041C5.88114 9.86055 6.9457 9.0267 8.20737 8.89545C8.59097 8.85566 9.05188 8.86591 9.42189 8.79701C11.322 8.44386 12.7897 6.99068 13.0867 5.14047C13.1525 4.7299 13.1181 4.24058 13.215 3.805C13.6636 1.78908 15.9736 0.657869 17.9137 1.56924C18.9252 2.04502 19.6032 2.94326 19.771 4.01623C19.8055 4.23634 19.8167 4.50896 19.8045 4.83408C19.5845 10.6755 14.5956 15.3529 8.5264 15.3045Z" fill="currentColor"></path>
              <path d="M11.3567 16.2337C11.3465 16.229 11.3396 16.2222 11.3359 16.2132C11.3352 16.2114 11.3349 16.2094 11.335 16.2075C11.3351 16.2056 11.3356 16.2037 11.3366 16.202C11.3375 16.2003 11.3388 16.1988 11.3403 16.1976C11.3419 16.1964 11.3437 16.1956 11.3457 16.1951C13.6512 15.6674 15.6487 14.6058 17.338 13.0102C17.3683 12.9815 17.3959 12.9837 17.4208 13.0168C17.6918 13.3736 17.9748 13.7571 18.2016 14.1234C19.1336 15.6279 19.6617 17.2574 19.7857 19.0121C19.8106 19.3659 19.8184 19.6392 19.8091 19.832C19.7254 21.537 18.2985 22.9126 16.4998 22.9229C14.9072 22.9315 13.5071 21.845 13.2046 20.325C13.1333 19.9653 13.1553 19.4669 13.0946 19.0867C12.9071 17.9169 12.3355 16.9702 11.3797 16.2464C11.3754 16.2428 11.3678 16.2386 11.3567 16.2337Z" fill="currentColor"></path>
              <path d="M7.98752 22.874C6.63495 22.6386 5.5466 21.5882 5.30446 20.2814C5.27132 20.1026 5.25476 19.8301 5.25476 19.464C5.25447 18.0227 5.25419 16.5813 5.25391 15.1397C5.25391 15.1255 5.25929 15.1232 5.27005 15.1327C6.15449 15.919 7.08397 16.3993 8.29806 16.4793C8.29919 16.4795 8.40794 16.4831 8.62431 16.4899C10.205 16.5404 11.544 17.5764 11.8528 19.0813C12.3099 21.3064 10.2955 23.2756 7.98752 22.874Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <img src={lovableLogo} alt="Lovable" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-center justify-center aspect-square rounded-lg overflow-hidden w-32">
            <img src={v0Logo} alt="v0" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">{content.ai.generativeModel.heading}</h3>
            {content.ai.generativeModel.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-muted-foreground ${index < content.ai.generativeModel.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Risk Assessment Table */}
        <div className="mt-12">
          <RiskMatrix risks={content.ai.riskAssessment.risks} title={content.ai.riskAssessment.title} />
        </div>
      </SlideSection>

      {/* Timeline */}
      <SlideSection id="timeline">
              <SectionHeading 
                text={content.timeline.heading}
                size="lg"
                className="mb-8"
              />
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl">
                {content.timeline.description}
              </p>

              {/* Timeline Visualization */}
              <div className="mb-16">
                <GanttChart 
                  phases={content.timeline.phases}
                  totalWeeks={48}
                />
              </div>

              {/* Scrum Framework Section */}
              <div className="mb-16 pt-12 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {content.timeline.scrum.heading}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
                  {content.timeline.scrum.description}
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {content.timeline.scrum.principles.heading}
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    {content.timeline.scrum.principles.intro}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {content.timeline.scrum.principles.items.map((principle, index) => (
                      <div
                        key={index}
                        className="border border-border rounded-lg p-6 bg-muted/10"
                      >
                        <h5 className="text-lg font-semibold text-foreground mb-2">
                          {principle.title}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          {principle.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Phase Breakdown */}
              <div className="space-y-12">
                {content.timeline.phases.map((phase) => (
                  <div key={phase.number} className="space-y-6">
                    {/* Phase Header */}
                    <div className="border-b border-border pb-4">
                      <h3 className="text-2xl font-semibold text-foreground mb-1">
                        Phase {phase.number}: {phase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {phase.weeks}
                        {phase.status && (
                          <span className="ml-2 text-foreground font-medium">
                            {phase.status}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Sprints within Phase */}
                    <div className="space-y-4">
                      {phase.sprints.map((sprint) => (
                        <div
                          key={sprint.number}
                          className="border border-border rounded-lg p-6 bg-muted/10"
                        >
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-foreground mb-1">
                              Sprint {sprint.number} ({sprint.weeks})
                            </h4>
                          </div>
                          {sprint.tasks.length > 0 && (
                            <ul className="space-y-2">
                              {sprint.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start gap-2 text-muted-foreground">
                                  <span className="text-foreground mt-1.5">•</span>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
        </div>
      </SlideSection>

      {/* Footer */}
      <div className="py-16 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
            {content.footer.text}
        </p>
      </div>
      </main>
    </DeckProvider>
  );
};

export default Index;
