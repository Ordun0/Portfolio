import { GraduationCap } from 'lucide-react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#practicas', label: 'Prácticas' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Portafolio de Evidencias</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}