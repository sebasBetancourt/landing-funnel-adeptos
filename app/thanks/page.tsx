import Link from 'next/link';

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-12 rounded-3xl shadow-xl">
        <div className="mx-auto w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-slate-900">¡Pedido Confirmado!</h1>
        <p className="text-xl text-slate-600">
          En breve recibirás un email con los pasos para habilitar tu infraestructura IA.
        </p>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
          <h3 className="font-bold mb-2">Próximos Pasos:</h3>
          <ul className="space-y-2 text-slate-500">
            <li>1. Revisa tu carpeta de Spam.</li>
            <li>2. Agenda tu llamada de onboarding.</li>
            <li>3. Accede al portal de cliente.</li>
          </ul>
        </div>
        <Link href="/" className="inline-block text-indigo-600 font-semibold hover:underline">
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
