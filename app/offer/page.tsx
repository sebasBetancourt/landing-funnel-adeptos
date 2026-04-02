import { Button } from '@/presentation/components/atoms/Button';

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="bg-indigo-500/20 text-indigo-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block uppercase tracking-wider">
          Acceso Exclusivo Concedido
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Transforma tu Negocio con IA Generativa
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Descubre cómo implementar agentes autónomos que autogestionan tus ventas y atención al cliente 24/7.
        </p>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-2">Plan Enterprise</h2>
              <ul className="text-slate-400 space-y-2">
                <li>• Agentes Personalizados</li>
                <li>• Integración con CRM</li>
                <li>• Soporte 24/7</li>
              </ul>
            </div>
            <div className="text-4xl font-bold font-mono">$499<span className="text-lg text-slate-500">/mes</span></div>
            <Button variant="primary" size="lg" className="w-full md:w-auto">
              Reservar Mi Cupo
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
