import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

interface WindowProps {
  title: string;
  icon: string;
  onClose: () => void;
  children: ReactNode;
  width?: number;
  height?: number;
  initialX?: number;
  initialY?: number;
  zIndex: number;
  onFocus: () => void;
}

export default function Window({
  title,
  icon,
  onClose,
  children,
  width = 680,
  height = 520,
  initialX,
  initialY,
  zIndex,
  onFocus,
}: WindowProps) {
  const isMobile = window.innerWidth < 768;

  const effectiveWidth = isMobile ? window.innerWidth : width;
  const effectiveHeight = isMobile ? window.innerHeight - 80 : height;

  const [pos, setPos] = useState({
    x: isMobile ? 0 : (initialX ?? Math.max(40, (window.innerWidth - width) / 2)),
    y: isMobile ? 0 : (initialY ?? Math.max(40, (window.innerHeight - height) / 3)),
  });

  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ mx: 0, my: 0, wx: 0, wy: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStart.current.mx;
      const dy = e.clientY - dragStart.current.my;
      setPos({
        x: Math.max(0, Math.min(window.innerWidth - effectiveWidth, dragStart.current.wx + dx)),
        y: Math.max(0, Math.min(window.innerHeight - 100, dragStart.current.wy + dy)),
      });
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, effectiveWidth, isMobile]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    onFocus();
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, wx: pos.x, wy: pos.y };
  };

  return (
    <div
      ref={windowRef}
      className="window-enter absolute flex flex-col rounded-xl overflow-hidden"
      style={{
        left: pos.x,
        top: pos.y,
        width: effectiveWidth,
        height: effectiveHeight,
        zIndex,
        boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)',
        background: 'rgba(28, 28, 30, 0.92)',
        backdropFilter: 'blur(40px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(40px) saturate(1.8)',
      }}
      onClick={onFocus}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 select-none flex-shrink-0"
        style={{
          background: 'rgba(44, 44, 46, 0.95)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          cursor: isMobile ? 'default' : dragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={onMouseDown}
      >
        <div className="flex gap-2">
          <button
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }}
          >
            <span className="text-red-900 opacity-0 group-hover:opacity-100 text-[8px] font-bold leading-none">✕</span>
          </button>
          <div className="w-3 h-3 rounded-full bg-yellow-400" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }} />
          <div className="w-3 h-3 rounded-full bg-green-500" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }} />
        </div>

        <div className="flex-1 flex items-center justify-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-white/70 tracking-wide">{title}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" style={{ userSelect: 'text' }}>
        {children}
      </div>
    </div>
  );
}