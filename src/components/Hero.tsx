import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted">Portafolio Académico</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          David Fernando <span className="text-gradient">Hernandez Orduno</span>
        </h1>
        <p className="text-lg text-muted mb-2">Gestión de la Inovación</p>
        <p className="text-sm text-muted/80 mb-10">Jorge Abdon Rosas Murillo</p>
        <a href="#practicas" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity shadow-glow">
          Ver Prácticas <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}