import { Lead } from '../entities/Lead';
import { ILeadRepository } from '../repositories/ILeadRepository';

export class SubmitLeadUseCase {
  constructor(private leadRepository: ILeadRepository) {}

  async execute(lead: Lead): Promise<void> {
    if (!lead.email.includes('@')) {
      throw new Error('Email no válido');
    }
    
    // Add business logic here (e.g., source tracking, transformations)
    await this.leadRepository.save(lead);
  }
}
