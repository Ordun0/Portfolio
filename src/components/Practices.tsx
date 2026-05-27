import { PracticeCard } from './PracticeCard'
import { practices } from '../data/practices'

export function Practices() {
  // Group practices by unit
  const practicesByUnit = practices.reduce((acc, practice) => {
    const unit = practice.unit || 0;
    if (!acc[unit]) {
      acc[unit] = [];
    }
    acc[unit].push(practice);
    return acc;
  }, {} as Record<number, typeof practices>);

  const unitNames: Record<number, string> = {
    1: "Unidad 1",
    2: "Unidad 2",
    3: "Unidad 3",
  };

  return (
    <section id="practicas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">Evidencias del semestre</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Prácticas Realizadas</h2>
          <p className="text-muted max-w-xl mx-auto">Compilación de las prácticas desarrolladas durante el curso, organizadas por unidad.</p>
        </div>
        
        {Object.entries(practicesByUnit).sort(([a], [b]) => Number(a) - Number(b)).map(([unit, unitPractices]) => (
          <div key={unit} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-6 text-foreground border-l-4 border-primary pl-4">
              {unitNames[Number(unit)] || `Unidad ${unit}`}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unitPractices.map((p) => (
                <PracticeCard key={p.number} practice={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
