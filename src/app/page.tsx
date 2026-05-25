"use client"

import { useState } from "react"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import ShaderBackground from "@/components/ui/shader-background"
import { ShaderLines } from "@/components/ui/shader-lines"
import Hero from "@/components/ui/animated-shader-hero"
import PaperShadersWrapper from "@/components/ui/background-paper-shaders"
import CyberneticGridShader from "@/components/ui/cybernetic-grid-shader"
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero"
import { GLSLHills } from "@/components/ui/glsl-hills"
import { Phosphor30 } from "@/components/ui/phosphor-30"
import { GeometricBlurMesh } from "@/components/ui/geometric-blur-mesh"
import { GradientDots } from "@/components/ui/gradient-dots"
import { AnoAI } from "@/components/ui/animated-shader-background"

export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState<"vector-field" | "rgb-sine" | "plasma-grid" | "shader-lines" | "plasma-nebula" | "paper-vortex" | "cyber-grid" | "anomalous-matter" | "glsl-hills" | "phosphor-30" | "geometric-blur" | "gradient-dots" | "ano-ai">("vector-field")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const designs = [
    {
      id: "vector-field" as const,
      title: "Vibrant Vector Fields",
      description: "2D mathematical vector field visualization using custom fragment math and high-performance WebGL plane mesh.",
      renderer: "Three.js PlaneGeometry",
      complexity: "Medium",
    },
    {
      id: "rgb-sine" as const,
      title: "RGB Sine Distortion",
      description: "Interactive real-time RGB chromatic aberration wave distortion powered by custom orthographic projection matrix shaders.",
      renderer: "Three.js OrthographicCamera",
      complexity: "High",
    },
    {
      id: "plasma-grid" as const,
      title: "Plasma Electric Grid",
      description: "Custom mathematical electric plasma particle grid rendering directly through pure WebGL context pipelines.",
      renderer: "Raw WebGL API",
      complexity: "Extreme",
    },
    {
      id: "shader-lines" as const,
      title: "Abstract Mosaic Lines",
      description: "Interactive abstract neon wave lines with dynamic grid pixelization using custom WebGL vertex coordinates.",
      renderer: "Three.js Script Load",
      complexity: "High",
    },
    {
      id: "plasma-nebula" as const,
      title: "Plasma Cloud Nebula",
      description: "Interactive cosmic dust nebula rendered using high-performance WebGL2 context fragment shaders.",
      renderer: "WebGL2 Context API",
      complexity: "Extreme",
    },
    {
      id: "paper-vortex" as const,
      title: "Energy Vortex Paper",
      description: "Organic mesh distortion paper shader coupled with high-frequency neon energy ring rendering.",
      renderer: "React Three Fiber Canvas",
      complexity: "High",
    },
    {
      id: "cyber-grid" as const,
      title: "Cybernetic Pulse Grid",
      description: "Interactive cybernetic cyan-magenta matrix grid with interactive cursor gravity ripples.",
      renderer: "Pure Three.js WebGL2",
      complexity: "High",
    },
    {
      id: "anomalous-matter" as const,
      title: "Anomalous Matter",
      description: "Interactive real-time 3D deformed icosahedron vertex displacement using 3D Perlin noise and high-fidelity Fresnel glow shader.",
      renderer: "Three.js Custom Shader",
      complexity: "Extreme",
    },
    {
      id: "glsl-hills" as const,
      title: "GLSL Hills",
      description: "Atmospheric mathematical glowing wireframe terrain hills rendering via raw Three.js vertex noise distortion.",
      renderer: "Three.js RawShaderMaterial",
      complexity: "High",
    },
    {
      id: "phosphor-30" as const,
      title: "Phosphor 30",
      description: "Mesmerizing high-performance 3D abstract fluid recursion fractal simulation rendered via full-screen WebGL2 fragment shaders.",
      renderer: "WebGL2 Fragment Shader",
      complexity: "Extreme",
    },
    {
      id: "geometric-blur" as const,
      title: "Geometric Blur",
      description: "Interactive real-time 3D wireframe math geometries with dynamic mouse-reactive focal length blur.",
      renderer: "WebGL Fragment Shader",
      complexity: "High",
    },
    {
      id: "gradient-dots" as const,
      title: "Gradient Dots",
      description: "Fascinating animated color-cycling halftone dot pattern rendering using dynamic radial-gradients and hue rotation.",
      renderer: "CSS Radial Gradient",
      complexity: "Medium",
    },
    {
      id: "ano-ai" as const,
      title: "Ano AI Aurora",
      description: "Breathtaking interactive cosmic northern lights aurora field rendered using Fractional Brownian Motion (fBm) noise.",
      renderer: "Three.js WebGL Shader",
      complexity: "Extreme",
    },
  ]

  const activeDesign = designs.find((d) => d.id === selectedDesign)!

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans select-none">
      {/* Dynamic Background Shader Rendering */}
      <div className="absolute inset-0 z-0">
        {selectedDesign === "vector-field" && <ShaderAnimation />}
        {selectedDesign === "rgb-sine" && <WebGLShader />}
        {selectedDesign === "plasma-grid" && <ShaderBackground />}
        {selectedDesign === "shader-lines" && <ShaderLines />}
        {selectedDesign === "plasma-nebula" && (
          <Hero headline={{ line1: "", line2: "" }} subtitle="" />
        )}
        {selectedDesign === "paper-vortex" && <PaperShadersWrapper />}
        {selectedDesign === "cyber-grid" && <CyberneticGridShader />}
        {selectedDesign === "anomalous-matter" && (
          <AnomalousMatterHero
            title="Quantum Lab: Anomaly 7"
            subtitle="Quantum Technologies"
            description="Matter in a state of constant, flux. Drag and interact using the mouse pointer to distort the gravitational field."
          />
        )}
        {selectedDesign === "glsl-hills" && (
          <GLSLHills width="100vw" height="100vh" speed={0.4} />
        )}
        {selectedDesign === "phosphor-30" && <Phosphor30 />}
        {selectedDesign === "geometric-blur" && <GeometricBlurMesh />}
        {selectedDesign === "gradient-dots" && (
          <GradientDots dotSize={8} spacing={14} duration={35} colorCycleDuration={8} backgroundColor="black" />
        )}
        {selectedDesign === "ano-ai" && <AnoAI />}
      </div>

      {/* Modern gradient vignette overlay for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Floating Glassmorphic Sidebar */}
      <div
        className={`absolute top-0 left-0 h-full z-30 flex items-center p-4 transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[20rem]"
        }`}
      >
        <div className="relative w-72 h-[calc(100vh-2rem)] border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl flex flex-col justify-between p-6 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-300">
          <div className="space-y-6 flex-1 flex flex-col min-h-0">
            {/* Logo and Header */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 animate-spin-slow flex items-center justify-center font-bold text-black text-sm tracking-wider">
                Q
              </div>
              <div>
                <h2 className="font-extrabold tracking-wider text-sm text-zinc-100">Quantum</h2>
                <p className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase">Quantum Technologies</p>
              </div>
            </div>

            {/* Design Switcher Section */}
            <div className="space-y-3 flex-1 flex flex-col min-h-0">
              <h3 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider shrink-0">Select Shader Design</h3>
              <div className="space-y-2 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {designs.map((design) => {
                  const isActive = selectedDesign === design.id
                  return (
                    <button
                      key={design.id}
                      onClick={() => setSelectedDesign(design.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-white/20 bg-white/10 text-white shadow-lg"
                          : "border-white/5 bg-white/0 text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">{design.title}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                      <p className="text-[10px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
                        {design.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Footer & Active Specs Card */}
          <div className="space-y-4">
            <div className="p-3 rounded-xl border border-white/5 bg-white/5 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 uppercase tracking-wider">Active Renderer</span>
                <span className="font-semibold text-zinc-300">{activeDesign.renderer}</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 uppercase tracking-wider">Complexity</span>
                <span className={`font-semibold ${
                  activeDesign.complexity === "Extreme"
                    ? "text-fuchsia-400"
                    : activeDesign.complexity === "High"
                    ? "text-amber-400"
                    : "text-emerald-400"
                }`}>{activeDesign.complexity}</span>
              </div>
            </div>

            <div className="text-[10px] text-zinc-500 flex justify-between items-center">
              <span>Next.js 15 App Workspace</span>
              <a
                href="https://21st.dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-300 underline transition-colors"
              >
                21st.dev
              </a>
            </div>
          </div>

          {/* Toggle Sidebar Button (Attached to right of card) */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            ←
          </button>
        </div>
      </div>

      {/* Floating Expand Sidebar Button (Only visible when sidebar closed) */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute top-6 left-6 z-40 px-4 py-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-300 shadow-2xl"
        >
          <span>→</span>
          <span>Workspace</span>
        </button>
      )}

      {/* Top Banner overlay info */}
      <div className="absolute top-6 right-6 z-20 pointer-events-auto flex items-center gap-4">
        <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/5 rounded-full">
          WebGL Live
        </span>
      </div>

      {/* Centered Hero Brand Text Overlay (Visible for other designs) */}
      {selectedDesign !== "anomalous-matter" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none select-none">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white/95 to-zinc-400/20 bg-clip-text text-transparent drop-shadow-[0_15px_50px_rgba(0,0,0,0.9)] text-center px-4 transform hover:scale-[1.01] transition-all duration-500">
            Quantum Technologies
          </h1>
          <div className="mt-4 flex flex-col items-center gap-2">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-zinc-400 font-semibold opacity-70">
              Digital Innovation Lab
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-emerald-400 uppercase border border-emerald-500/20 bg-emerald-500/5 rounded-full">
                {activeDesign.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
