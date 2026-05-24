export default function AIWindow() {
  return (
    <div className="p-8 text-white/90 space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.3em] text-white/30 uppercase">Manifiesto</p>
        <h1 className="text-4xl font-bold text-white leading-tight">
          Sobre la<br />
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>Inteligencia</span><br />
          Artificial
        </h1>
      </div>

      <div
        className="py-5 px-6 rounded-lg"
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderLeft: '2px solid rgba(255,255,255,0.15)',
        }}
      >
        <p className="text-white/60 text-sm leading-relaxed italic">
          "La IA no crea. Predice. Y esa es exactamente la diferencia entre una herramienta y un artista."
        </p>
      </div>

      <div className="space-y-6 text-white/65 text-sm leading-relaxed">
        <p>
          Hice un máster en Inteligencia Artificial. Sé cómo funciona por dentro. Y precisamente por eso 
          tengo una relación complicada con ella cuando se aplica al diseño y la creatividad.
        </p>

        <p>
          La IA es la herramienta más potente que ha pasado por mis manos. Puedo hacer en horas lo que 
          antes llevaba días. Puedo explorar cien variantes de una idea antes de elegir una. Puedo generar, 
          iterar, probar y descartar a una velocidad que antes era imposible.
        </p>

        <p>
          Pero hay algo que la IA no puede hacer: <strong className="text-white">decidir qué vale la pena decir.</strong>
        </p>

        <div className="space-y-4 py-2">
          {[
            {
              title: "La IA optimiza. El diseño elige.",
              body: "Un modelo de lenguaje predice el siguiente token. Un algoritmo de imagen genera lo más probable. Yo decido lo que no encaja, lo que chirría, lo que hace que algo sea memorable.",
            },
            {
              title: "El criterio no es entrenable.",
              body: "Puedes entrenar un modelo con millones de imágenes. No puedes entrenarle a saber cuándo una marca necesita silencio y cuándo necesita ruido. Eso es criterio. Eso lo construyes viviendo.",
            },
            {
              title: "La IA es mi herramienta, no mi voz.",
              body: "Uso IA a diario. Para investigar, para prototipar, para acelerar producción. Pero la dirección, la intención, el punto de vista — eso sigue siendo mío.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-lg space-y-2"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-xs">
          Si estás buscando a alguien que te diga que la IA lo hace todo mejor, no soy tu persona. 
          Si buscas a alguien que sepa usarla sin perder la cabeza en el proceso — aquí estoy.
        </p>
      </div>
    </div>
  );
}
