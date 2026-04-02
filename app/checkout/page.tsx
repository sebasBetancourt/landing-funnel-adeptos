import { Button } from '@/presentation/components/atoms/Button';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 rounded-3xl shadow-lg border border-slate-200">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Resumen del Pedido</h1>
          <div className="divide-y divide-slate-200">
            <div className="flex justify-between py-4">
              <span>Plan Anual IA Generativa</span>
              <span className="font-bold">$4,999.00</span>
            </div>
            <div className="flex justify-between py-4 text-slate-500">
              <span>Implementación Local</span>
              <span>Incluido</span>
            </div>
            <div className="flex justify-between py-4 font-bold text-xl">
              <span>Total</span>
              <span className="text-indigo-600">$4,999.00</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Datos de Pago</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Nombre en la Tarjeta" className="w-full px-4 py-3 border border-slate-300 rounded-xl" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="MM/YY" className="px-4 py-3 border border-slate-300 rounded-xl" />
              <input type="text" placeholder="CVC" className="px-4 py-3 border border-slate-300 rounded-xl" />
            </div>
            <Button variant="secondary" className="w-full">
              Pagar $4,999.00
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
