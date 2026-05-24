import { useState, useCallback } from 'react';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import type { AppId } from './components/Dock';
import Window from './components/Window';
import AboutWindow from './components/windows/AboutWindow';
import ProjectsWindow from './components/windows/ProjectsWindow';
import AIWindow from './components/windows/AIWindow';
import CVWindow from './components/windows/CVWindow';
import TrashWindow from './components/windows/TrashWindow';

interface OpenWindow {
  id: AppId;
  zIndex: number;
}

const WINDOW_CONFIG: Record<
  AppId,
  { title: string; icon: string; width?: number; height?: number }
> = {
  about: { title: 'Me — David Beneito', icon: '👤', width: 620, height: 580 },
  projects: { title: 'Proyectos', icon: '📁', width: 700, height: 560 },
  ai: { title: 'Sobre la IA', icon: '◎', width: 580, height: 540 },
  cv: { title: 'Curriculum Vitae', icon: '📋', width: 640, height: 580 },
  instagram: { title: 'Instagram', icon: '📸' },
  mail: { title: 'Mail', icon: '✉️' },
  trash: { title: 'Papelera', icon: '🗑️', width: 460, height: 420 },
};

let zCounter = 10;

export default function App() {
  const [windows, setWindows] = useState<OpenWindow[]>([]);

  const openWindow = useCallback((id: AppId) => {
    setWindows((prev) => {
      if (prev.find((w) => w.id === id)) {
        zCounter++;
        return prev.map((w) => w.id === id ? { ...w, zIndex: zCounter } : w);
      }
      zCounter++;
      return [...prev, { id, zIndex: zCounter }];
    });
  }, []);

  const closeWindow = useCallback((id: AppId) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const focusWindow = useCallback((id: AppId) => {
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex));
      const current = prev.find((w) => w.id === id);
      if (current && current.zIndex === maxZ) return prev;
      zCounter++;
      return prev.map((w) => w.id === id ? { ...w, zIndex: zCounter } : w);
    });
  }, []);

  const renderWindowContent = (id: AppId) => {
    switch (id) {
      case 'about':    return <AboutWindow />;
      case 'projects': return <ProjectsWindow />;
      case 'ai':       return <AIWindow />;
      case 'cv':       return <CVWindow />;
      case 'trash':    return <TrashWindow />;
      default:         return null;
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Foto de fondo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: window.innerWidth < 768
            ? `url('https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779658558/IMG_1832_jpg_s4ormz.jpg')`
            : `url('https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779657750/IMG_2737_jpg_bkir3x.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.45,
          zIndex: 0,
        }}
      />

      {/* Grano */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.035,
          zIndex: 1,
        }}
      />

      {/* Slogan */}
      <div
        className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <p className="text-white/15 text-[11px] font-medium tracking-[0.4em] uppercase">
          I BUILD BRANDS THAT MAKE NOISE
        </p>
      </div>

      {/* Nombre */}
      <div
        className="absolute bottom-24 left-8 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <p className="text-white/10 text-xs font-medium tracking-widest uppercase">Beneito</p>
        <p className="text-white/5 text-[10px] tracking-widest">glax.xyz</p>
      </div>

      {/* Escritorio */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
        <Desktop />
      </div>

      {/* Ventanas */}
      {windows.map((win) => {
        const config = WINDOW_CONFIG[win.id];
        const content = renderWindowContent(win.id);
        if (!content) return null;

        return (
          <Window
            key={win.id}
            title={config.title}
            icon={config.icon}
            onClose={() => closeWindow(win.id)}
            width={config.width}
            height={config.height}
            zIndex={win.zIndex}
            onFocus={() => focusWindow(win.id)}
          >
            {content}
          </Window>
        );
      })}

      <Dock openWindows={windows.map((w) => w.id)} onOpen={openWindow} />
    </div>
  );
}