import { FileText, ExternalLink, Globe } from 'lucide-react'
import type { Practice } from '../data/practices'

interface Props {
  practice: Practice
}

export function PracticeCard({ practice }: Props) {
  const hasEvidence = practice.pdf || practice.link
  const buttonText = practice.link ? 'Ver proyecto' : 'Ver evidencia'
  const HeaderIcon = practice.link ? Globe : FileText

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 h-full">
      
      {/* 1. Área Visual (Icono + Número) */}
      <div className="aspect-[16/10] bg-secondary flex items-center justify-center border-b border-border relative">
        <div className="text-center">
          <HeaderIcon className="w-10 h-10 mx-auto mb-2 text-muted group-hover:text-primary transition-colors" />
          <span className="text-xs text-muted font-medium">
            {practice.link ? 'Proyecto externo' : 'PDF Evidence'}
          </span>
        </div>
        
        {/* Número de la práctica (ej: 01) */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-sm border border-border text-xs font-mono text-primary font-bold">
          {String(practice.number).padStart(2, '0')}
        </div>
      </div>

      {/* 2. Contenido (Título + Descripción) */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 tracking-tight text-foreground">
          {practice.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
          {practice.description}
        </p>
        
        {/* 3. Botón dinámico: PDF o Link externo */}
        <div className="mt-auto">
          {hasEvidence ? (
            <a
              href={practice.pdf || practice.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity text-sm"
            >
              {buttonText}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="w-full text-center py-2 rounded-lg border border-border text-sm text-muted/50">
              Enlace no disponible
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
