import { PracticeCard } from './PracticeCard'
import { practices } from '../data/practices'

export function Practices() {
  const unit1Practices = practices.filter(p => p.unit === 1)
  const unit2Practices = practices.filter(p => p.unit === 2)
  const unit3Practices = practices.filter(p => p.unit === 3)

  return (
    <section id="practicas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Evidencias del semestre</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Prácticas Realizadas</h2>
          <p className="text-muted max-w-xl mx-auto">Compilación de las prácticas desarrolladas durante el curso, organizadas por unidad.</p>
        </div>

        {/* Unidad 1 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">Unidad 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unit1Practices.map((p) => (
              <PracticeCard key={p.number} practice={p} />
            ))}
          </div>
        </div>

        {/* Unidad 2 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">Unidad 2</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unit2Practices.map((p) => (
              <PracticeCard key={p.number} practice={p} />
            ))}
          </div>
        </div>

        {/* Unidad 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary">Unidad 3</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unit3Practices.map((p) => (
              <PracticeCard key={p.number} practice={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
