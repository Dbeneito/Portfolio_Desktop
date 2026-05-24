export default function TrashWindow() {
  return (
    <div className="p-8 flex flex-col items-center justify-center h-full text-center space-y-6">
      <div className="text-6xl" style={{ filter: 'grayscale(0.3)' }}>🗑️</div>

      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Papelera</p>
        <h1 className="text-2xl font-bold text-white leading-tight">
          Proyectos sin<br />colaboración
        </h1>
      </div>

      <div
        className="max-w-xs py-5 px-6 rounded-lg text-left"
        style={{
          background: 'rgba(255,60,60,0.08)',
          border: '1px solid rgba(255,60,60,0.15)',
        }}
      >
        <p className="text-sm text-white/60 leading-relaxed">
          Aquí es donde van los proyectos que no quisieron apostar. Los clientes que dijeron que no. 
          Las ideas que nadie quiso financiar.
        </p>
      </div>

      <div className="space-y-3 max-w-xs">
        <p className="text-xs text-white/35 leading-relaxed">
          Si estás leyendo esto, significa que tú <strong className="text-white/60">sí</strong> apostaste. 
          Bienvenido al lado correcto de la historia.
        </p>
        <p className="text-xs text-white/20 leading-relaxed italic">
          — Papelera vacía. Por ahora.
        </p>
      </div>

      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs text-white/30"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <span>⚠️</span>
        <span>0 elementos en la papelera</span>
      </div>
    </div>
  );
}
