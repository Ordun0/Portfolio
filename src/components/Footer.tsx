import { Mail, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-2">Portafolio de Evidencias</h3>
            <p className="text-sm text-muted max-w-md">Documentación académica de prácticas y proyectos desarrollados durante el semestre.</p>
          </div>
          <div className="md:text-right">
            <h4 className="text-sm font-semibold mb-3">Contacto</h4>
            <div className="flex md:justify-end gap-4">
              <a href="mailto:tu@email.com" className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} Portafolio de Evidencias. Todos los derechos reservados.</p>
          <p>Diseñado con dedicación académica.</p>
        </div>
      </div>
    </footer>
  )
}