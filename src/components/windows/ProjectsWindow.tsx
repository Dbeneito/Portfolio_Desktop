import { useState } from 'react';
import { projects } from '../../data/projects';

export default function ProjectsWindow() {
  const [filter, setFilter] = useState<'all' | 'design' | 'code'>('all');

  const filtered = projects
    .filter((p) => filter === 'all' || p.type === filter)
    .sort((a, b) => b.year - a.year);

  return (
    <div className="flex flex-col h-full">
      {/* Filter bar */}
      <div
        className="flex gap-2 px-6 py-4 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase mr-auto self-center">
          Proyectos
        </p>
        {(['all', 'design', 'code'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              filter === f
                ? 'bg-white text-black'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {f === 'all' ? 'Todo' : f === 'design' ? 'Diseño' : 'Código'}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Icon image */}
              <div
                className="h-28 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                }}
              >
                <img
                  src={
                    project.type === 'code'
                      ? 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779657123/git_ck3mrm.svg'
                      : 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779657224/formato_PSD_480x480_rnp9o0.webp'
                  }
                  alt={project.type}
                  className="h-14 w-14 object-contain"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}
                />
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white leading-tight">
                    {project.title}
                    <span className="text-white/25 font-normal">
                      {project.type === 'code' ? '.git' : '.psd'}
                    </span>
                  </h3>
                  <span className="text-xs text-white/25 font-mono flex-shrink-0">{project.year}</span>
                </div>

                <p className="text-xs text-white/50 leading-relaxed line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full text-white/40"
                      style={{ background: 'rgba(255,255,255,0.08)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  {project.github && (
                    
                    <a  href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-white/40 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>⬡</span> GitHub
                    </a>
                  )}
                  {project.demo && (
                    
                    <a  href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-white/40 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <span>↗</span> Ver proyecto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}