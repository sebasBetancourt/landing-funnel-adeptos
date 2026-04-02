'use client';

import React from 'react';
import { useFunnel } from '@/application/funnel/hooks/useFunnel';
import { Button } from '@/presentation/components/atoms/Button';

export default function OptInPage() {
  const { registerLead, loading, error } = useFunnel();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    await registerLead(email);
    // Success logic: redirect to /offer
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">¡Casi listo!</h1>
        <p className="text-slate-600 mb-8">Déjanos tu email para acceder a la oferta exclusiva de AdeptosIA.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Tu Email Corporativo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="nombre@empresa.com"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <Button type="submit" variant="primary" className="w-full" isLoading={loading}>
            Ver Oferta Ahora
          </Button>
        </form>
      </div>
    </main>
  );
}
