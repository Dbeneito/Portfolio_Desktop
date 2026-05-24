export default function CVWindow() {
  return (
    <div className="p-8 text-white/90 space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Curriculum</p>
          <h1 className="text-3xl font-bold text-white">David Beneito Pastor</h1>
          <p className="text-white/40 text-sm">Diseñador Gráfico & Desarrollador Web</p>
        </div>
        <div className="text-right space-y-1">
          <a href="mailto:glaaxstudio@gmail.com" className="text-xs text-white/40 hover:text-white transition-colors block">
            glaaxstudio@gmail.com
          </a>
          <a href="https://www.instagram.com/glax.xyz/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white transition-colors block">
            @glax.xyz
          </a>
          <p className="text-xs text-white/25">Sevilla, España</p>
        </div>
      </div>

      <div className="border-t border-white/6" />

      {/* Perfil */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Perfil</h2>
        <p className="text-sm text-white/60 leading-relaxed">
          Diseñador gráfico con más de 4 años de experiencia en identidad de marca, dirección de arte y 
          diseño editorial. Actualmente completando formación en Desarrollo de Aplicaciones Web, integrando 
          diseño y código para crear experiencias digitales completas.
        </p>
      </section>

      {/* Experiencia */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Experiencia</h2>
        <div className="space-y-4">
          {[
            {
              role: "Diseñador Freelance",
              company: "Glax Studio",
              period: "2022 — Presente",
              items: [
                "Identidades visuales para marcas y artistas",
                "Dirección de arte en campañas de comunicación",
                "Diseño de packaging y material editorial",
                "Branding con integración de motion y sonido",
              ],
            },
            {
              role: "Prácticas en Diseño Gráfico",
              company: "Barreira A+D",
              period: "2021 — 2022",
              items: [
                "Diseño de piezas para clientes reales del centro",
                "Producción gráfica y preparación de archivos",
              ],
            },
          ].map((exp) => (
            <div key={exp.company} className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{exp.role}</p>
                  <p className="text-xs text-white/40">{exp.company}</p>
                </div>
                <span className="text-xs text-white/25 font-mono">{exp.period}</span>
              </div>
              <ul className="space-y-1 pl-3">
                {exp.items.map((item) => (
                  <li key={item} className="text-xs text-white/50 flex gap-2">
                    <span className="text-white/20 flex-shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Formación */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Formación</h2>
        <div className="space-y-3">
          {[
            { year: "2024–2026", title: "CFGS Desarrollo de Aplicaciones Web", place: "CEI Sevilla" },
            { year: "2023", title: "Máster Online en Inteligencia Artificial", place: "Founderz" },
            { year: "2022–2024", title: "CFGS Artes Gráficas Publicitarias", place: "Barreira A+D" },
            { year: "2020–2022", title: "CFGM Imagen Gráfica Interactiva", place: "Barreira A+D" },
          ].map((item) => (
            <div key={item.year} className="flex gap-4 items-start">
              <span className="text-xs text-white/25 font-mono mt-0.5 w-20 flex-shrink-0">{item.year}</span>
              <div>
                <p className="text-sm text-white/75">{item.title}</p>
                <p className="text-xs text-white/30">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Habilidades</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-xs text-white/40 font-medium">Diseño</p>
            {["Adobe Illustrator", "Adobe Photoshop", "After Effects", "Figma", "InDesign"].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs text-white/55">{skill}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs text-white/40 font-medium">Desarrollo</p>
            {["HTML / CSS", "JavaScript", "React + TypeScript", "Tailwind CSS", "Git / GitHub"].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs text-white/55">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idiomas */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Idiomas</h2>
        <div className="flex gap-6">
          <div>
            <p className="text-sm text-white/70">Español</p>
            <p className="text-xs text-white/30">Nativo</p>
          </div>
          <div>
            <p className="text-sm text-white/70">Inglés</p>
            <p className="text-xs text-white/30">Avanzado (C1)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
