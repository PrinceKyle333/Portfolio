import { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  MapPin,
  Scan,
  BarChart3,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export default function ProjectShowcase() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">02 //</span>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
            Selected Projects
          </h2>
          <div className="h-px bg-neutral-200 flex-1 ml-4" />
        </div>

        {/* Projects List */}
        <div className="space-y-28 md:space-y-36">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  if (project.id === 'cmu-geoasset') {
    return <FlagshipGisProject project={project} />;
  }

  if (project.id === 'philippine-coin-recognition') {
    return <CoinRecognitionProject project={project} />;
  }

  return <EventEvaluationProject project={project} />;
}

/* =========================================================================
   PROJECT 01: CMU GeoAsset (Largest Editorial Flagship)
   ========================================================================= */
function FlagshipGisProject({ project }: { project: Project }) {
  const [activeLayer, setActiveLayer] = useState<'all' | 'parcels' | 'assets'>('all');
  const [selectedAsset, setSelectedAsset] = useState<string>('CMU-BLDG-042');

  return (
    <article
      id="project-01"
      aria-labelledby="project-01-title"
      className="border border-neutral-200 bg-white"
    >
      {/* Top Editorial Bar */}
      <div className="border-b border-neutral-200 px-6 sm:px-10 py-5 bg-neutral-50/70 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-950">
            PROJECT {project.number}
          </span>
          <span className="text-neutral-300">/</span>
          <span className="font-mono text-xs text-neutral-500 uppercase">
            FLAGSHIP GIS & DATABASE SYSTEM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-neutral-950 animate-pulse" />
          <span className="text-xs font-mono text-neutral-600">CENTRAL MINDANAO UNIVERSITY</span>
        </div>
      </div>

      <div className="p-6 sm:p-10 lg:p-12 space-y-10">
        {/* Project Header Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            <h3 id="project-01-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              {project.title}
            </h3>
            <p className="text-base sm:text-xl font-medium text-neutral-700">
              {project.subtitle}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl pt-2">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-neutral-200 lg:pl-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Core Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Large GIS / Map Interface Mockup Showcase */}
        <div className="border border-neutral-300 bg-neutral-900 text-white overflow-hidden shadow-xs">
          {/* Map Chrome */}
          <div className="px-4 py-3 bg-neutral-950 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-neutral-200 font-semibold">
                <Layers className="w-3.5 h-3.5 text-neutral-400" />
                CMU GIS MAP VIEW
              </span>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline">EPSG:4326 (WGS 84)</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-neutral-300">
                <MapPin className="w-3 h-3 text-neutral-400" />
                <span>7°51&apos;15&quot;N 125°03&apos;06&quot;E · Musuan, Maramag, Bukidnon</span>
              </div>
            </div>
          </div>

          {/* Interactive Layer Filter Bar */}
          <div className="px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 text-[11px] flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3" />
                LAYERS:
              </span>
              <button
                type="button"
                onClick={() => setActiveLayer('all')}
                className={`px-2.5 py-1 text-[11px] transition-colors ${
                  activeLayer === 'all'
                    ? 'bg-white text-neutral-950 font-bold'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                All Data
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer('parcels')}
                className={`px-2.5 py-1 text-[11px] transition-colors ${
                  activeLayer === 'parcels'
                    ? 'bg-white text-neutral-950 font-bold'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Parcels
              </button>
              <button
                type="button"
                onClick={() => setActiveLayer('assets')}
                className={`px-2.5 py-1 text-[11px] transition-colors ${
                  activeLayer === 'assets'
                    ? 'bg-white text-neutral-950 font-bold'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Assets
              </button>
            </div>

            <div className="text-neutral-400 text-[11px] hidden md:block">
              ENGINE: CesiumJS 3D Globe + PostGIS Spatial Engine
            </div>
          </div>

          {/* GIS Visual Stage Grid */}
          <div className="relative min-h-[380px] sm:min-h-[440px] bg-neutral-950 p-4 sm:p-6 overflow-hidden flex flex-col justify-between select-none">
            {/* Background Spatial Grid Wireframe */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="gis-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#525252" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gis-grid-pattern)" />
            </svg>

            {/* Campus Spatial Map Graphic Elements */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">
              {/* Central Map Canvas Simulation */}
              <div className="lg:col-span-8 relative border border-neutral-800 bg-neutral-900/90 p-4 sm:p-6 min-h-[300px] flex flex-col justify-between">
                {/* HUD Compass / Scale */}
                <div className="flex justify-between items-start text-[11px] font-mono text-neutral-400">
                  <div className="space-y-1">
                    <div className="text-white font-medium">CENTRAL MINDANAO UNIVERSITY</div>
                    <div className="text-neutral-500">MAIN CAMPUS SPATIAL INVENTORY</div>
                  </div>
                  <div className="text-right">
                    <div className="text-neutral-300">SCALE 1:5,000</div>
                    <div className="text-neutral-500">CONTOUR: 10m INTERVAL</div>
                  </div>
                </div>

                {/* Vector Layout of Campus Parcels */}
                <div className="my-6 relative h-48 sm:h-56 flex items-center justify-center">
                  <svg
                    viewBox="0 0 600 240"
                    className="w-full h-full max-w-xl"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Campus Boundary Polygon */}
                    {(activeLayer === 'all' || activeLayer === 'parcels') && (
                      <polygon
                        points="50,40 220,20 480,35 550,140 430,220 180,210 60,160"
                        stroke="#737373"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="#262626"
                        fillOpacity="0.4"
                      />
                    )}

                    {/* Road Network Lines */}
                    <path
                      d="M 60,100 Q 220,110 540,90"
                      stroke="#525252"
                      strokeWidth="2"
                    />
                    <path
                      d="M 280,30 L 280,215"
                      stroke="#525252"
                      strokeWidth="2"
                    />

                    {/* Building Parcels & Interactive Markers */}
                    {(activeLayer === 'all' || activeLayer === 'assets') && (
                      <>
                        {/* College of Info Tech / Computer Science */}
                        <g
                          onClick={() => setSelectedAsset('CMU-BLDG-042')}
                          className="cursor-pointer group"
                        >
                          <rect
                            x="220"
                            y="60"
                            width="90"
                            height="45"
                            fill={selectedAsset === 'CMU-BLDG-042' ? '#ffffff' : '#404040'}
                            stroke="#e5e5e5"
                            strokeWidth="1.5"
                          />
                          <text
                            x="265"
                            y="86"
                            fill={selectedAsset === 'CMU-BLDG-042' ? '#0a0a0a' : '#ffffff'}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            BLDG-042
                          </text>
                        </g>

                        {/* Admin Complex */}
                        <g
                          onClick={() => setSelectedAsset('CMU-ADMIN-001')}
                          className="cursor-pointer group"
                        >
                          <rect
                            x="340"
                            y="50"
                            width="110"
                            height="50"
                            fill={selectedAsset === 'CMU-ADMIN-001' ? '#ffffff' : '#333333'}
                            stroke="#a3a3a3"
                            strokeWidth="1.5"
                          />
                          <text
                            x="395"
                            y="78"
                            fill={selectedAsset === 'CMU-ADMIN-001' ? '#0a0a0a' : '#e5e5e5'}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            ADMIN-001
                          </text>
                        </g>

                        {/* University Library & Data Center */}
                        <g
                          onClick={() => setSelectedAsset('CMU-LIB-014')}
                          className="cursor-pointer group"
                        >
                          <rect
                            x="180"
                            y="130"
                            width="80"
                            height="55"
                            fill={selectedAsset === 'CMU-LIB-014' ? '#ffffff' : '#333333'}
                            stroke="#a3a3a3"
                            strokeWidth="1.5"
                          />
                          <text
                            x="220"
                            y="160"
                            fill={selectedAsset === 'CMU-LIB-014' ? '#0a0a0a' : '#e5e5e5'}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            LIB-014
                          </text>
                        </g>

                        {/* Science & Research Center */}
                        <g
                          onClick={() => setSelectedAsset('CMU-SCI-088')}
                          className="cursor-pointer group"
                        >
                          <rect
                            x="320"
                            y="135"
                            width="95"
                            height="50"
                            fill={selectedAsset === 'CMU-SCI-088' ? '#ffffff' : '#333333'}
                            stroke="#a3a3a3"
                            strokeWidth="1.5"
                          />
                          <text
                            x="367"
                            y="163"
                            fill={selectedAsset === 'CMU-SCI-088' ? '#0a0a0a' : '#e5e5e5'}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            SCI-088
                          </text>
                        </g>
                      </>
                    )}
                  </svg>
                </div>

                {/* Footer Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                    <span>PostGIS Spatial Query: ST_Contains(campus_geom, asset_geom)</span>
                  </div>
                  <div>Click any parcel to inspect schema</div>
                </div>
              </div>

              {/* Spatial Asset Inspector Sidebar */}
              <div className="lg:col-span-4 border border-neutral-800 bg-neutral-900 p-4 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400 uppercase tracking-wider text-[11px]">
                    Asset Inspector
                  </span>
                  <span className="text-neutral-200 font-bold">{selectedAsset}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Designation</div>
                    <div className="text-neutral-200 text-xs font-semibold">
                      {selectedAsset === 'CMU-BLDG-042'
                        ? 'College of Information Sciences & Tech'
                        : selectedAsset === 'CMU-ADMIN-001'
                        ? 'University Administration Complex'
                        : selectedAsset === 'CMU-LIB-014'
                        ? 'Central Library & Spatial Data Node'
                        : 'Science & Agricultural Research Lab'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase">Geometry</div>
                      <div className="text-neutral-300">Polygon (2D/3D)</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase">Status</div>
                      <div className="text-white font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-neutral-300" />
                        Verified Active
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Database Table</div>
                    <div className="text-neutral-300 text-[11px] bg-neutral-950 p-2 border border-neutral-800">
                      cmu_assets_inventory_2026
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Spatial Query Response</div>
                    <div className="text-neutral-400 text-[10px] bg-neutral-950 p-2 border border-neutral-800 font-mono space-y-1">
                      <div>geom_type: &quot;MULTIPOLYGON&quot;</div>
                      <div>srid: 4326 (WGS84)</div>
                      <div>area_sqm: 3,420.50</div>
                      <div>custodian: &quot;CMU Facilities&quot;</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-neutral-500 border-t border-neutral-800">
                  Data synchronized with Central Mindanao University repository schema.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================================
   PROJECT 02: Philippine Coin Recognition
   ========================================================================= */
function CoinRecognitionProject({ project }: { project: Project }) {
  return (
    <article
      id="project-02"
      aria-labelledby="project-02-title"
      className="border border-neutral-200 bg-white"
    >
      {/* Top Editorial Bar */}
      <div className="border-b border-neutral-200 px-6 sm:px-10 py-5 bg-neutral-50/70 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-950">
            PROJECT {project.number}
          </span>
          <span className="text-neutral-300">/</span>
          <span className="font-mono text-xs text-neutral-500 uppercase">
            COMPUTER VISION & OBJECT DETECTION
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Scan className="w-3.5 h-3.5 text-neutral-700" />
          <span className="text-xs font-mono text-neutral-600">YOLO INFERENCE MODEL</span>
        </div>
      </div>

      <div className="p-6 sm:p-10 lg:p-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            <h3 id="project-02-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              {project.title}
            </h3>
            <p className="text-base sm:text-xl font-medium text-neutral-700">
              {project.subtitle}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl pt-2">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-neutral-200 lg:pl-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Model Detection Results Placeholder Visualizer */}
        <div className="border border-neutral-300 bg-neutral-950 text-white overflow-hidden shadow-xs">
          <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Scan className="w-3.5 h-3.5 text-neutral-400" />
                DETECTION RESULTS FRAME
              </span>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline">TARGET: BSP 10-PESO BIMETALLIC COIN</span>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              INFERENCE: 14.6ms · CONFIDENCE: 98.4%
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Detection Bounding Box Schematic */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative border border-dashed border-neutral-700 p-6 bg-neutral-900/60 max-w-sm w-full">
                {/* Bounding Box Header */}
                <div className="absolute -top-3 left-4 bg-white text-neutral-950 font-mono text-[11px] font-bold px-2 py-0.5 uppercase tracking-wider">
                  10_PESO_COIN · 0.984
                </div>

                {/* Coin Diagram (Monochrome BSP 10-Peso Coin Schematic) */}
                <div className="my-4 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-44 h-44 sm:w-52 sm:h-52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer Coin Ring (Nickel-Brass Rim) */}
                    <circle cx="100" cy="100" r="92" stroke="#d4d4d4" strokeWidth="3" />
                    <circle cx="100" cy="100" r="88" stroke="#525252" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Inner Coin Core (Cupro-Nickel Core) */}
                    <circle cx="100" cy="100" r="58" stroke="#ffffff" strokeWidth="2" fill="#262626" />

                    {/* Technical Markings */}
                    <text
                      x="100"
                      y="40"
                      fill="#a3a3a3"
                      fontSize="7"
                      fontFamily="monospace"
                      textAnchor="middle"
                      letterSpacing="2"
                    >
                      REPUBLIKA NG PILIPINAS
                    </text>

                    {/* Center 10 Pesos denomination engraving */}
                    <text
                      x="100"
                      y="98"
                      fill="#ffffff"
                      fontSize="24"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      10
                    </text>
                    <text
                      x="100"
                      y="114"
                      fill="#d4d4d4"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      PISO
                    </text>

                    {/* Year stamp */}
                    <text
                      x="100"
                      y="140"
                      fill="#737373"
                      fontSize="7"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      BANGKO SENTRAL
                    </text>

                    {/* Target crosshairs */}
                    <line x1="100" y1="10" x2="100" y2="30" stroke="#737373" strokeWidth="1" />
                    <line x1="100" y1="170" x2="100" y2="190" stroke="#737373" strokeWidth="1" />
                    <line x1="10" y1="100" x2="30" y2="100" stroke="#737373" strokeWidth="1" />
                    <line x1="170" y1="100" x2="190" y2="100" stroke="#737373" strokeWidth="1" />
                  </svg>
                </div>

                {/* Bounding box coordinate tags */}
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                  <span>[xmin: 112, ymin: 78]</span>
                  <span>[xmax: 342, ymax: 308]</span>
                </div>
              </div>
            </div>

            {/* Inference Telemetry Column */}
            <div className="lg:col-span-5 space-y-4 font-mono text-xs">
              <div className="border border-neutral-800 bg-neutral-900 p-4 space-y-3">
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider pb-2 border-b border-neutral-800">
                  Model Detection Telemetry
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Detected Class:</span>
                    <span className="text-white font-bold">10_PESO_PHP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Confidence Score:</span>
                    <span className="text-neutral-200">0.984 (98.4%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Processing Latency:</span>
                    <span className="text-neutral-200">14.6 ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Architecture:</span>
                    <span className="text-neutral-200">YOLO Object Detection</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Input Resolution:</span>
                    <span className="text-neutral-200">640 × 640 px</span>
                  </div>
                </div>
              </div>

              <div className="p-3 border border-neutral-800 text-[11px] text-neutral-400 leading-relaxed">
                Trained on Philippine currency datasets to discern 10-peso bimetallic coins under variable lighting, rotations, and surface reflections.
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================================
   PROJECT 03: Event Evaluation System
   ========================================================================= */
function EventEvaluationProject({ project }: { project: Project }) {
  return (
    <article
      id="project-03"
      aria-labelledby="project-03-title"
      className="border border-neutral-200 bg-white"
    >
      {/* Top Editorial Bar */}
      <div className="border-b border-neutral-200 px-6 sm:px-10 py-5 bg-neutral-50/70 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-950">
            PROJECT {project.number}
          </span>
          <span className="text-neutral-300">/</span>
          <span className="font-mono text-xs text-neutral-500 uppercase">
            NLP & SENTIMENT ANALYSIS SYSTEM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <BarChart3 className="w-3.5 h-3.5 text-neutral-700" />
          <span className="text-xs font-mono text-neutral-600">PARTICIPANT FEEDBACK ANALYTICS</span>
        </div>
      </div>

      <div className="p-6 sm:p-10 lg:p-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-3">
            <h3 id="project-03-title" className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950">
              {project.title}
            </h3>
            <p className="text-base sm:text-xl font-medium text-neutral-700">
              {project.subtitle}
            </p>
            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl pt-2">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-neutral-200 lg:pl-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Technologies
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Sentiment Analysis Interface Mockup Placeholder */}
        <div className="border border-neutral-300 bg-neutral-950 text-white overflow-hidden shadow-xs">
          <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-neutral-400" />
                SENTIMENT EVALUATION DASHBOARD
              </span>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline">SAMPLE EVENT: IT RESEARCH SYMPOSIUM</span>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              RESPONSES: 384 · OVERALL POLARITY: +0.76
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Polarity Distribution Bar */}
            <div className="border border-neutral-800 bg-neutral-900 p-4 sm:p-5 space-y-3 font-mono">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 uppercase tracking-wider">
                  Sentiment Distribution
                </span>
                <span className="text-white font-medium">81.5% Favorable Rating</span>
              </div>

              {/* Segmented Bar */}
              <div className="w-full h-6 bg-neutral-950 border border-neutral-700 flex overflow-hidden">
                <div
                  className="h-full bg-white text-neutral-950 flex items-center justify-center text-[10px] font-bold"
                  style={{ width: '74%' }}
                  title="Positive: 74%"
                >
                  Positive (74%)
                </div>
                <div
                  className="h-full bg-neutral-400 text-neutral-950 flex items-center justify-center text-[10px] font-bold"
                  style={{ width: '18%' }}
                  title="Neutral: 18%"
                >
                  Neutral (18%)
                </div>
                <div
                  className="h-full bg-neutral-700 text-neutral-200 flex items-center justify-center text-[10px]"
                  style={{ width: '8%' }}
                  title="Negative: 8%"
                >
                  8%
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-neutral-400 pt-1">
                <span>Positive: 284 feedback logs</span>
                <span>Neutral: 69 logs</span>
                <span>Negative: 31 logs</span>
              </div>
            </div>

            {/* NLP Token Breakdown Sample */}
            <div className="border border-neutral-800 bg-neutral-900 p-4 sm:p-5 space-y-3 font-mono">
              <div className="text-xs text-neutral-400 uppercase tracking-wider">
                Natural Language Feedback Tokenization Sample
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                &quot;The information system presentation was{' '}
                <span className="bg-neutral-800 text-white px-1.5 py-0.5 border border-neutral-600 font-semibold">
                  very well-organized
                </span>{' '}
                and the database query optimizations were{' '}
                <span className="bg-neutral-800 text-white px-1.5 py-0.5 border border-neutral-600 font-semibold">
                  exceptionally clear
                </span>{' '}
                and practical.&quot;
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-2.5 bg-neutral-950 border border-neutral-800">
                  <div className="text-[10px] text-neutral-500 uppercase">Token Extracted</div>
                  <div className="text-white font-medium">&quot;well-organized&quot;</div>
                  <div className="text-[10px] text-neutral-400 mt-1">Weight: +0.88</div>
                </div>
                <div className="p-2.5 bg-neutral-950 border border-neutral-800">
                  <div className="text-[10px] text-neutral-500 uppercase">Token Extracted</div>
                  <div className="text-white font-medium">&quot;exceptionally clear&quot;</div>
                  <div className="text-[10px] text-neutral-400 mt-1">Weight: +0.92</div>
                </div>
                <div className="p-2.5 bg-neutral-950 border border-neutral-800">
                  <div className="text-[10px] text-neutral-500 uppercase">Token Extracted</div>
                  <div className="text-white font-medium">&quot;practical&quot;</div>
                  <div className="text-[10px] text-neutral-400 mt-1">Weight: +0.79</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
