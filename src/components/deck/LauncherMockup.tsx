import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, X } from "lucide-react";

// Import project images
import project1 from "@/assets/Projects/portrait-image-1.jpg";
import project2 from "@/assets/Projects/portrait-image-12.jpg";
import project3 from "@/assets/Projects/portrait-image-3.jpg";
import project4 from "@/assets/Projects/portrait-image-4.jpg";
import project5 from "@/assets/Projects/portrait-image-8.jpg";
import project6 from "@/assets/Projects/portrait-pattern-1.jpg";
import project7 from "@/assets/Projects/portrait-pattern-2.jpg";
import project8 from "@/assets/Projects/portrait-pattern-3.jpg";

const PROJECT_IMAGES = [project1, project2, project3, project4, project5, project6, project7, project8];

interface LauncherMockupProps {
  className?: string;
}

// Constants matching the repository
const CLIENTS = ["Envisorus XR", "Nexus Studios", "Forge Digital", "Apex VFX", "Vertex Media"];
const PROJECTS = ["Kidney Flower", "Aurora Rising", "Cipher Protocol", "Genesis 7", "Echo Summit"];
const DCCS = ["Houdini", "Blender", "ComfyUI", "Maya", "Cinema 4D"];
const PACKAGES = ["Pipeline", "GSG Libraries", "Deadline Submitter", "Redshift", "Ftrack Submitter"];
const PACKAGES_DEFAULT_ON = ["Pipeline", "GSG Libraries", "Deadline Submitter"];

const TABS = ["Project", "Configure", "Archive"];

export function LauncherMockup({ className }: LauncherMockupProps) {
  const [activeTab, setActiveTab] = useState("Project");
  const [selectedClient, setSelectedClient] = useState(CLIENTS[0]);
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [selectedDCC, setSelectedDCC] = useState(DCCS[0]);
  const [selectedVersion, setSelectedVersion] = useState("20.0");
  const [packageStates, setPackageStates] = useState<Record<string, boolean>>(
    PACKAGES.reduce((acc, pkg) => {
      acc[pkg] = PACKAGES_DEFAULT_ON.includes(pkg);
      return acc;
    }, {} as Record<string, boolean>)
  );

  const togglePackage = (pkg: string) => {
    setPackageStates((prev) => ({ ...prev, [pkg]: !prev[pkg] }));
  };

  return (
    <div className={cn("w-full max-w-[450px] mx-auto", className)}>
      <div 
        className="rounded-2xl shadow-2xl overflow-hidden relative"
        style={{ 
          backgroundColor: "#1a1a1e",
          borderRadius: "16px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        {/* Main container with padding */}
        <div className="p-6 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold" style={{ color: "#ffffff", letterSpacing: "0.5px" }}>
              AG Launcher
            </h3>
            <div className="flex items-center gap-2">
              <button 
                className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/5 transition-colors"
                style={{ color: "#ffffff" }}
              >
                ⚙️
              </button>
              <button 
                className="w-10 h-10 flex items-center justify-center rounded hover:bg-white/5 transition-colors"
                style={{ color: "hsl(0, 84%, 60%)", fontWeight: "bold", fontSize: "18px" }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Tab Buttons - Spread evenly across width with different gradients */}
          <div className="flex gap-2 mb-4">
            {TABS.map((tab, index) => {
              // Different gradients for each tab
              const gradients = [
                "linear-gradient(135deg, #fec5fb 20%, #00bae2 80%)", // Project - Pink to Blue
                "linear-gradient(135deg, #ffd3fd 27%, #806eff 84%)", // Configure - Light Pink to Purple
                "linear-gradient(315deg, rgb(255, 135, 9) 20%, rgb(255, 180, 50) 80%)", // Archive - Orange gradient
              ];
              const gradient = gradients[index];
              
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "flex-1 py-2 rounded-md text-sm font-bold transition-all relative overflow-hidden",
                    activeTab === tab ? "text-white" : "text-white border"
                  )}
                  style={
                    activeTab === tab
                      ? {
                          background: gradient,
                          border: "1px solid transparent",
                          position: "relative",
                        }
                      : {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (activeTab !== tab) {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab) {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    }
                  }}
                >
                  {activeTab === tab && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundBlendMode: "color-dodge",
                        backgroundImage: "url('/src/assets/noise.webp')",
                        backgroundRepeat: "repeat",
                        backgroundSize: "200px 200px",
                        opacity: 0.8,
                        zIndex: 0,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "Project" && (
              <div className="space-y-3">
                {/* Client & Project Row */}
                <div className="flex items-center gap-3">
                  <label className="text-sm font-medium w-20" style={{ color: "#ffffff" }}>
                    Client
                  </label>
                  <div className="relative flex-1">
                    <select
                      value={selectedClient}
                      onChange={(e) => setSelectedClient(e.target.value)}
                      className="w-full text-sm rounded-md appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "hsl(0, 0%, 18%)",
                        color: "#ffffff",
                        border: "1px solid hsl(0, 0%, 22%)",
                        width: "120px",
                        height: "36px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingRight: "28px",
                        paddingLeft: "12px",
                        lineHeight: "1.2",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "hsl(186, 100%, 42%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "hsl(0, 0%, 22%)";
                      }}
                    >
                      {CLIENTS.map((client) => (
                        <option key={client} value={client} style={{ backgroundColor: "hsl(0, 0%, 18%)" }}>
                          {client}
                        </option>
                      ))}
                    </select>
                    <ChevronDown 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "#b3b3b3" }}
                    />
                  </div>
                  <div className="relative flex-1">
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="w-full text-sm rounded-md appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "hsl(0, 0%, 18%)",
                        color: "#ffffff",
                        border: "1px solid hsl(0, 0%, 22%)",
                        width: "120px",
                        height: "36px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingRight: "28px",
                        paddingLeft: "12px",
                        lineHeight: "1.2",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "hsl(186, 100%, 42%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "hsl(0, 0%, 22%)";
                      }}
                    >
                      {PROJECTS.map((project) => (
                        <option key={project} value={project} style={{ backgroundColor: "hsl(0, 0%, 18%)" }}>
                          {project}
                        </option>
                      ))}
                    </select>
                    <ChevronDown 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "#b3b3b3" }}
                    />
                  </div>
                </div>

                {/* DCC & Version Row */}
                <div className="flex items-center gap-3">
                  <label className="text-sm font-medium w-20" style={{ color: "#ffffff" }}>
                    DCC
                  </label>
                  <div className="relative flex-1">
                    <select
                      value={selectedDCC}
                      onChange={(e) => setSelectedDCC(e.target.value)}
                      className="w-full text-sm rounded-md appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "hsl(0, 0%, 18%)",
                        color: "#ffffff",
                        border: "1px solid hsl(0, 0%, 22%)",
                        width: "120px",
                        height: "36px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingRight: "28px",
                        paddingLeft: "12px",
                        lineHeight: "1.2",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "hsl(186, 100%, 42%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "hsl(0, 0%, 22%)";
                      }}
                    >
                      {DCCS.map((dcc) => (
                        <option key={dcc} value={dcc} style={{ backgroundColor: "hsl(0, 0%, 18%)" }}>
                          {dcc}
                        </option>
                      ))}
                    </select>
                    <ChevronDown 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "#b3b3b3" }}
                    />
                  </div>
                  <div className="relative flex-1">
                    <select
                      value={selectedVersion}
                      onChange={(e) => setSelectedVersion(e.target.value)}
                      className="w-full text-sm rounded-md appearance-none cursor-pointer"
                      style={{
                        backgroundColor: "hsl(0, 0%, 18%)",
                        color: "#ffffff",
                        border: "1px solid hsl(0, 0%, 22%)",
                        width: "120px",
                        height: "36px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingRight: "28px",
                        paddingLeft: "12px",
                        lineHeight: "1.2",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "hsl(186, 100%, 42%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "hsl(0, 0%, 22%)";
                      }}
                    >
                      <option value="20.0" style={{ backgroundColor: "hsl(0, 0%, 18%)" }}>20.0</option>
                      <option value="19.5" style={{ backgroundColor: "hsl(0, 0%, 18%)" }}>19.5</option>
                      <option value="19.0" style={{ backgroundColor: "hsl(0, 0%, 18%)" }}>19.0</option>
                    </select>
                    <ChevronDown 
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                      style={{ color: "#b3b3b3" }}
                    />
                  </div>
                </div>

                {/* Spacing */}
                <div className="h-3" />

                {/* MANAGE PACKAGES Section */}
                <div
                  className="p-3 rounded-lg"
                  style={{
                    border: "1px solid hsl(0, 0%, 22%)",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                  }}
                >
                  <label 
                    className="text-xs font-medium mb-2.5 block"
                    style={{ color: "#b3b3b3" }}
                  >
                    MANAGE PACKAGES
                  </label>
                  <div className="space-y-2.5">
                    {PACKAGES.map((pkg) => (
                      <div key={pkg} className="flex items-center justify-between">
                        <label 
                          className="text-sm"
                          style={{ color: "#ffffff", minWidth: "150px" }}
                        >
                          {pkg}
                        </label>
                        <button
                          onClick={() => togglePackage(pkg)}
                          className={cn(
                            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none",
                            packageStates[pkg] ? "" : ""
                          )}
                          style={{
                            backgroundColor: packageStates[pkg] ? "hsl(142, 71%, 45%)" : "hsl(0, 0%, 22%)",
                            borderRadius: "13px",
                          }}
                        >
                          <span
                            className={cn(
                              "inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm"
                            )}
                            style={{
                              transform: packageStates[pkg] ? "translateX(22px)" : "translateX(2px)",
                            }}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacing */}
                <div className="h-2" />

                {/* Launch Button with gradient and noise */}
                <button
                  className="w-full py-3 rounded-xl font-bold text-sm transition-all relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4 20%, #84cc16 80%)",
                    color: "#ffffff",
                    minHeight: "45px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.95";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundBlendMode: "color-dodge",
                      backgroundImage: "url('/src/assets/noise.webp')",
                      backgroundRepeat: "repeat",
                      backgroundSize: "200px 200px",
                      opacity: 0.8,
                      zIndex: 0,
                    }}
                  />
                  <span className="relative z-10">Launch</span>
                </button>
              </div>
            )}

            {activeTab === "Configure" && (
              <ConfigureForm />
            )}

            {activeTab === "Archive" && (
              <div className="space-y-3">
                <ArchiveTags />
                <BentoGallery images={PROJECT_IMAGES} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Configure Form Component
function ConfigureForm() {
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [type, setType] = useState("");
  const [deliverables, setDeliverables] = useState("");

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {/* Client Field */}
        <div>
          <label className="text-sm font-medium mb-2 block" style={{ color: "#ffffff" }}>
            Client
          </label>
          <input
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md"
            style={{
              backgroundColor: "hsl(0, 0%, 18%)",
              color: "#ffffff",
              border: "1px solid hsl(0, 0%, 22%)",
              height: "36px",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "hsl(186, 100%, 42%)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "hsl(0, 0%, 22%)";
            }}
            placeholder="Enter client name"
          />
        </div>

        {/* Project Field */}
        <div>
          <label className="text-sm font-medium mb-2 block" style={{ color: "#ffffff" }}>
            Project
          </label>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md"
            style={{
              backgroundColor: "hsl(0, 0%, 18%)",
              color: "#ffffff",
              border: "1px solid hsl(0, 0%, 22%)",
              height: "36px",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "hsl(186, 100%, 42%)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "hsl(0, 0%, 22%)";
            }}
            placeholder="Enter project name"
          />
        </div>

        {/* Type Field */}
        <div>
          <label className="text-sm font-medium mb-2 block" style={{ color: "#ffffff" }}>
            Type
          </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md"
            style={{
              backgroundColor: "hsl(0, 0%, 18%)",
              color: "#ffffff",
              border: "1px solid hsl(0, 0%, 22%)",
              height: "36px",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "hsl(186, 100%, 42%)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "hsl(0, 0%, 22%)";
            }}
            placeholder="Enter type"
          />
        </div>

        {/* Deliverables Field */}
        <div>
          <label className="text-sm font-medium mb-2 block" style={{ color: "#ffffff" }}>
            Deliverables
          </label>
          <textarea
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md resize-none"
            style={{
              backgroundColor: "hsl(0, 0%, 18%)",
              color: "#ffffff",
              border: "1px solid hsl(0, 0%, 22%)",
              minHeight: "80px",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "hsl(186, 100%, 42%)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "hsl(0, 0%, 22%)";
            }}
            placeholder="Enter deliverables"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        className="w-full py-3 rounded-xl font-bold text-sm transition-all relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #06b6d4 20%, #84cc16 80%)",
          color: "#ffffff",
          minHeight: "45px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.95";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundBlendMode: "color-dodge",
            backgroundImage: "url('/src/assets/noise.webp')",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: 0.8,
            zIndex: 0,
          }}
        />
        <span className="relative z-10">Save Settings</span>
      </button>
    </div>
  );
}

// Archive Tags Component
function ArchiveTags() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  
  const tags = [
    { name: "CG", color: "linear-gradient(135deg, #fec5fb 20%, #00bae2 80%)" },
    { name: "Bonfire", color: "linear-gradient(135deg, #ffd3fd 27%, #806eff 84%)" },
    { name: "Print", color: "linear-gradient(135deg, #06b6d4 20%, #84cc16 80%)" },
    { name: "AI", color: "linear-gradient(315deg, rgb(255, 135, 9) 20%, rgb(247, 189, 248) 70%)" },
    { name: "Saddington Baynes", color: "linear-gradient(160deg, #fec5fb 20%, #00bae2 80%)" },
  ];

  const toggleTag = (tagName: string) => {
    setActiveTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tagName)) {
        newSet.delete(tagName);
      } else {
        newSet.add(tagName);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = activeTags.has(tag.name);
        return (
          <button
            key={tag.name}
            onClick={() => toggleTag(tag.name)}
            className="px-3 py-1.5 rounded-md text-xs font-medium transition-all relative overflow-hidden"
            style={{
              background: isActive ? tag.color : "rgba(255, 255, 255, 0.1)",
              color: "#ffffff",
              border: isActive ? "1px solid transparent" : "1px solid rgba(255, 255, 255, 0.2)",
              minHeight: "28px",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }
            }}
          >
            {isActive && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundBlendMode: "color-dodge",
                  backgroundImage: "url('/src/assets/noise.webp')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "200px 200px",
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />
            )}
            <span className="relative z-10">{tag.name}</span>
          </button>
        );
      })}
    </div>
  );
}

// Bento Box Gallery Component
function BentoGallery({ images }: { images: string[] }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragCurrent, setDragCurrent] = useState({ x: 0, y: 0 });
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const dragThreshold = 5; // Minimum pixels to consider it a drag

  const projectNames = [
    "Kidney Flower",
    "Aurora Rising",
    "Cipher Protocol",
    "Genesis 7",
    "Echo Summit",
    "Nexus Project",
    "Vertex Media",
    "Forge Digital"
  ];

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setDragCurrent({ x: e.clientX, y: e.clientY });
    setActiveItem(index);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragCurrent({ x: e.clientX, y: e.clientY });
    
    // Only prevent default if we're actually dragging (moved beyond threshold)
    const deltaX = Math.abs(e.clientX - dragStart.x);
    const deltaY = Math.abs(e.clientY - dragStart.y);
    if (deltaX > dragThreshold || deltaY > dragThreshold) {
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveItem(null);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setActiveItem(null);
    }
  };

  // Calculate drag distance for overlay effect
  const dragDistance = isDragging && activeItem !== null
    ? Math.sqrt(
        Math.pow(dragCurrent.x - dragStart.x, 2) + 
        Math.pow(dragCurrent.y - dragStart.y, 2)
      )
    : 0;

  return (
    <div 
      className="w-full" 
      style={{ maxHeight: "500px", overflow: "visible", position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        .bento-gallery {
          display: grid;
          gap: 0.5rem;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 90px);
          width: 100%;
          position: relative;
        }
        
        .bento-gallery__item {
          position: relative;
          overflow: hidden;
          border-radius: 6px;
          background-position: 50% 50%;
          background-size: cover;
          cursor: grab;
          transition: transform 0.2s ease;
        }
        
        .bento-gallery__item:active {
          cursor: grabbing;
        }
        
        .bento-gallery__item:hover {
          transform: scale(1.02);
          z-index: 10;
        }
        
        .bento-gallery__item img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          display: block;
          pointer-events: none;
        }
        
        .bento-gallery__overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 20;
        }
        
        .bento-gallery__overlay.active {
          opacity: 1;
        }
        
        .bento-gallery__text {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          text-align: center;
          padding: 1rem;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        
        .bento-gallery__overlay.active .bento-gallery__text {
          transform: translateY(0);
        }
        
        .bento-gallery__item:nth-child(1) {
          grid-area: 1 / 1 / 3 / 2;
        }
        
        .bento-gallery__item:nth-child(2) {
          grid-area: 1 / 2 / 2 / 3;
        }
        
        .bento-gallery__item:nth-child(3) {
          grid-area: 2 / 2 / 4 / 3;
        }
        
        .bento-gallery__item:nth-child(4) {
          grid-area: 1 / 3 / 3 / 4;
        }
        
        .bento-gallery__item:nth-child(5) {
          grid-area: 3 / 1 / 4 / 2;
        }
        
        .bento-gallery__item:nth-child(6) {
          grid-area: 3 / 3 / 5 / 4;
        }
        
        .bento-gallery__item:nth-child(7) {
          grid-area: 4 / 1 / 5 / 2;
        }
        
        .bento-gallery__item:nth-child(8) {
          grid-area: 4 / 2 / 5 / 3;
        }
      `}</style>
      <div ref={galleryRef} className="bento-gallery">
        {images.slice(0, 8).map((image, index) => (
          <div 
            key={index} 
            className="bento-gallery__item"
            onMouseDown={(e) => handleMouseDown(e, index)}
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
            }}
          >
            <img src={image} alt={`Project ${index + 1}`} draggable={false} />
            <div 
              className={`bento-gallery__overlay ${activeItem === index && dragDistance > dragThreshold ? 'active' : ''}`}
              style={{
                opacity: activeItem === index && dragDistance > dragThreshold ? Math.min(dragDistance / 100, 1) : 0,
              }}
            >
              <div className="bento-gallery__text">
                {projectNames[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
