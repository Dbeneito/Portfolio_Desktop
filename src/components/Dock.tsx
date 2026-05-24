import { useState } from 'react';

export type AppId = 'about' | 'projects' | 'ai' | 'cv' | 'instagram' | 'mail' | 'trash';

interface DockItem {
  id: AppId;
  label: string;
  emoji: string;
  img: string;
  color: string;
  external?: string;
}

const DOCK_ITEMS: DockItem[] = [
  {
    id: 'about',
    label: 'AboutMe',
    emoji: '',
    img: 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779654677/MediaEncoder_yxre6n.svg',
    color: 'transparent',
  },
  {
    id: 'projects',
    label: 'Proyectos',
    emoji: '',
    img: 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779654682/Permier_vjmgtj.svg',
    color: 'transparent',
  },
  {
    id: 'ai',
    label: 'Ai',
    emoji: '',
    img: 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779654673/Illustrator_b4bp62.svg',
    color: '#8b5cf6',
  },
  {
    id: 'cv',
    label: 'Notas',
    emoji: '',
    img: 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779654697/Notas_b0wjgr.svg',
    color: 'transparent',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    emoji: '',
    img: 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779654687/Instagram_logo_2022_qnqodk.svg',
    color: 'transparent',
    external: 'https://www.instagram.com/glax.xyz/',
  },
  {
    id: 'mail',
    label: 'Mail',
    emoji: '',
    img: 'https://res.cloudinary.com/dcgb3jhf3/image/upload/v1779654690/Correo_kqcnof.svg',
    color: 'transparent',
    external: 'mailto:glaaxstudio@gmail.com',
  },
  {
    id: 'trash',
    label: 'Papelera',
    emoji: '🗑️',
    img: '',
    color: 'transparent',
  },
];

interface DockProps {
  openWindows: AppId[];
  onOpen: (id: AppId) => void;
}

export default function Dock({ openWindows, onOpen }: DockProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const iconSize = isMobile ? 48 : 52;
  const dockGap = isMobile ? 'gap-4 px-4' : 'gap-4 px-4';

  const getScale = (id: string) => {
    if (hovered === id) return 1.2;
    return 1;
  };

  const handleClick = (item: DockItem) => {
    if (item.external) {
      window.open(item.external, '_blank');
      return;
    }
    onOpen(item.id);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-3 z-50">
      <div
        className={`flex items-end ${dockGap} py-2 rounded-2xl`}
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(40px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(40px) saturate(1.8)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        {DOCK_ITEMS.map((item, index) => {
          const isOpen = openWindows.includes(item.id);
          const scale = getScale(item.id);
          const showSeparator = index === DOCK_ITEMS.length - 1;

          return (
            <div key={item.id} className="flex items-end">
              {showSeparator && (
                <div
                  className="w-px h-10 mx-2 self-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                />
              )}
              <div
                className="relative flex flex-col items-center"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleClick(item)}
              >
                {/* Label tooltip */}
                <div
                  className="absolute -top-8 px-2 py-1 rounded-md text-xs text-white font-medium whitespace-nowrap pointer-events-none"
                  style={{
                    background: 'rgba(30,30,30,0.9)',
                    backdropFilter: 'blur(8px)',
                    opacity: hovered === item.id ? 1 : 0,
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  {item.label}
                </div>

                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-xl overflow-hidden"
                  style={{
                    width: iconSize,
                    height: iconSize,
                    transform: `scale(${scale})`,
                    transformOrigin: 'bottom center',
                    transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    background: item.color !== 'transparent'
                      ? `linear-gradient(135deg, ${item.color}dd, ${item.color}88)`
                      : 'transparent',
                    boxShadow: item.color !== 'transparent'
                      ? `0 4px 12px ${item.color}44`
                      : 'none',
                  }}
                >
                  {item.img
                    ? <img src={item.img} alt={item.label} className="w-full h-full object-contain" />
                    : <span className="text-2xl">{item.emoji}</span>
                  }
                </div>

                {/* Open indicator dot */}
                <div
                  className="w-1 h-1 rounded-full mt-1"
                  style={{
                    background: isOpen ? 'rgba(255,255,255,0.6)' : 'transparent',
                    transition: 'background 0.2s ease',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}