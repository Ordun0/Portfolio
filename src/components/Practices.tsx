import { PracticeCard } from './PracticeCard'
import { practices } from '../data/practices'

export function Practices() {
  return (
    <section id="practicas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Evidencias del semestre</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Prácticas Realizadas</h2>
          <p className="text-muted max-w-xl mx-auto">Compilación de las nueve prácticas desarrolladas durante el curso, cada una con su evidencia correspondiente.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p, i) => (
            <PracticeCard key={p.number} practice={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}