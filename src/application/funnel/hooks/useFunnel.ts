'use client';

import { useState } from 'react';
import { Lead } from '../../../domain/entities/Lead';
import { SubmitLeadUseCase } from '../../../domain/use-cases/SubmitLeadUseCase';
import { ApiLeadRepository } from '../../../infrastructure/repositories/ApiLeadRepository';

/**
 * A hook to manage funnel progress and logic.
 * This connects the UI layer to the Application/Domain layer.
 */
export function useFunnel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Here we inject the infrastructure into the domain logic (Dependency Injection)
  const leadRepo = new ApiLeadRepository();
  const submitLead = new SubmitLeadUseCase(leadRepo);

  const registerLead = async (email: string, name?: string) => {
    setLoading(true);
    setError(null);
    try {
      const lead: Lead = { email, name, source: 'funnel-landing' };
      await submitLead.execute(lead);
      // Logic for transition to next step...
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerLead, loading, error };
}
