export default function AboutWindow() {
  return (
    <div className="p-8 text-white/90 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">About me</p>
        <h1 className="text-4xl font-bold text-white leading-tight">
          David Beneito Pastor
        </h1>
        <p className="text-white/40 text-sm tracking-widest uppercase">— Beneito</p>
      </div>

      {/* Slogan */}
      <div
        className="py-5 px-6 rounded-lg"
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderLeft: '2px solid rgba(255,255,255,0.15)',
        }}
      >
        <p className="text-white font-bold text-lg leading-snug tracking-tight italic">
          "I BUILD BRANDS THAT MAKE NOISE –<br />
          AND I DON'T CARE IF YOU UNDERSTAND IT."
        </p>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-white/70 text-sm leading-relaxed">
        <p>
          Me llamo David Beneito Pastor, pero probablemente me conozcas como <strong className="text-white">Beneito</strong>. 
          Diseñador gráfico y futuro desarrollador web. No llegué aquí por casualidad: el diseño cambió mi vida, 
          y desde entonces persigo lo que se puede decir a través de una imagen, una tipografía o un espacio en blanco.
        </p>
        <p>
          Mi trabajo tiene raíces en la nostalgia, pero siempre mira hacia adelante. Me atrae lo que inquieta, 
          lo que te obliga a parar y pensar. Busco lo esencial, no lo simplista. Lo mínimo, nunca lo vacío.
        </p>
        <p>
          No estoy aquí para endulzar nada. No voy a darte rodeos para hacerte sentir mejor. 
          Esto es diseño que habla claro, aunque escueza un poco. Ese es el punto: elegir qué decir, 
          cómo decirlo, y cuándo dejar que el silencio termine la frase.
        </p>
        <p className="text-white/90 font-medium">
          Esto no es solo un portfolio. Es un punto de no retorno. Ahora que estás aquí — míralo bien.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8" />

      {/* Studies */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Formación</p>
        <div className="space-y-2">
          {[
            { year: "2020–2022", title: "Grado Medio en Imagen Gráfica Interactiva", place: "Barreira A+D" },
            { year: "2022–2024", title: "Grado Superior en Artes Gráficas Publicitarias", place: "Barreira A+D" },
            { year: "2023", title: "Máster Online en Inteligencia Artificial", place: "Founderz" },
            { year: "2024–2026", title: "Grado Superior en Desarrollo de Aplicaciones Web", place: "CEI Sevilla" },
          ].map((item) => (
            <div key={item.year} className="flex gap-4 items-start">
              <span className="text-xs text-white/30 font-mono mt-0.5 w-20 flex-shrink-0">{item.year}</span>
              <div>
                <p className="text-sm text-white/80 font-medium">{item.title}</p>
                <p className="text-xs text-white/30">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Servicios</p>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              title: "Posicionamiento con propósito",
              desc: "¿Qué papel quieres jugar en la vida de quienes te miran? Lo hago claro. Sin rodeos, sin humo.",
            },
            {
              title: "Identidad visual que muerde",
              desc: "No necesitas hablar cuando tu imagen lo dice todo. Traduzco quién eres en forma, color y actitud.",
            },
            {
              title: "Branding con todo",
              desc: "Diseño, sonido y movimiento trabajando como uno. Una marca que no se queda en el logo.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="p-4 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">{s.title}</p>
              <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2">
        <a
          href="https://www.instagram.com/glax.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <span>📸</span> Instagram
        </a>
        <a
          href="mailto:glaaxstudio@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/60 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <span>✉️</span> Email
        </a>
      </div>
    </div>
  );
}
