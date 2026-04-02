import { Lead } from '../../domain/entities/Lead';
import { ILeadRepository } from '../../domain/repositories/ILeadRepository';

export class ApiLeadRepository implements ILeadRepository {
  async save(lead: Lead): Promise<void> {
    console.log('Sending lead to hypothetical API...', lead);
    // await fetch('/api/leads', { method: 'POST', body: JSON.stringify(lead) });
    return Promise.resolve();
  }

  async getAll(): Promise<Lead[]> {
    // return fetch('/api/leads').then(res => res.json());
    return Promise.resolve([]);
  }
}
