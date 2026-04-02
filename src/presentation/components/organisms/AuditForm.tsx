"use client";

import React, { useState, useEffect } from 'react';
import { FormInput, FormRadio } from '../atoms/FormAtoms';

export default function AuditForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    adSpend: '',
    readyToInvest: '',
    businessName: '',
    storeUrl: ''
  });

  // Calculate progress percentage
  const progress = (step / 3) * 100;

  const handleNext = () => {
    if (step < 3) setStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Auto-advance for choice questions
    setTimeout(() => {
      handleNext();
    }, 400); // Slight delay for visual feedback of selection
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate real submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Audit Application Submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 py-16">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
           <span className="text-4xl text-black">✓</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-brand font-black uppercase text-white leading-none tracking-tighter">
           APPLICATION RECEIVED
        </h2>
        <div className="space-y-4 max-w-xl mx-auto">
           <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              Thank you for applying. Ryan Hamill and the Adeptos team will personally review your business data within the next 24-48 hours.
           </p>
           <p className="text-primary text-xs font-black uppercase tracking-[0.4em] pt-4">
              Watch your inbox/WhatsApp for our analysis.
           </p>
        </div>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-primary text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-95"
        >
          Return to Hub
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-10 md:py-16">
      
      {/* Progress Indicator */}
      <div className="mb-16 space-y-4">
         <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
            <span>Step {step} of 3</span>
            <span>{Math.round(progress)}% Complete</span>
         </div>
         <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
              style={{ width: `${progress}%` }}
            />
         </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        
        {/* Step 1: Ad Spend */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <FormRadio 
              label="What was your total Ad Spend in the last 30 days?"
              name="adSpend"
              required
              selectedValue={formData.adSpend}
              onChange={(val) => handleSelect('adSpend', val)}
              options={[
                { label: "$0 - $5K USD", value: "0-5k" },
                { label: "$5K - $10K USD", value: "5k-10k" },
                { label: "$10K - $50K USD", value: "10k-50k" },
                { label: "$50K - $100K USD", value: "50k-100k" },
                { label: "$100K - $500K USD", value: "100k-500k" },
                { label: "$500K - $1M USD", value: "500k-1m" },
                { label: "+ $1M USD", value: "1m+" }
              ]}
            />
          </div>
        )}

        {/* Step 2: Investment Readiness */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
            <FormRadio 
              label="If accepted, are you ready to invest at least $2,500 USD to launch your AI Revenue System?"
              name="readyToInvest"
              required
              selectedValue={formData.readyToInvest}
              onChange={(val) => handleSelect('readyToInvest', val)}
              options={[
                { label: "Yes, I'm ready to scale.", value: "yes" },
                { label: "No, I'm not ready yet.", value: "no" }
              ]}
            />
            <button 
              type="button" 
              onClick={handleBack}
              className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
            >
              ← Back to Ad Spend
            </button>
          </div>
        )}

        {/* Step 3: Business Details */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-12">
            <div className="space-y-8">
              <FormInput 
                label="What is the name of your E-commerce Brand?"
                placeholder="Brand Name"
                required
                value={formData.businessName}
                onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
              />
              <FormInput 
                label="What is your store's URL?"
                placeholder="https://yourstore.com"
                required
                value={formData.storeUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, storeUrl: e.target.value }))}
              />
            </div>
            
            <div className="flex flex-col gap-6">
              <button 
                type="submit"
                disabled={isLoading || !formData.businessName || !formData.storeUrl}
                className={`w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl relative overflow-hidden ${
                  isLoading || !formData.businessName || !formData.storeUrl
                    ? 'bg-white/10 text-white/20 cursor-not-allowed'
                    : 'bg-primary text-black hover:bg-white active:scale-95'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-black animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:0.4s]" />
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
              <button 
                type="button" 
                onClick={handleBack}
                className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors text-center"
              >
                 ← Edit Investment Status
              </button>
            </div>

            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 text-center">
               BY SUBMITTING, YOU AGREE TO OUR PRIVACY POLICY AND DATA PROCESSING TERMS.
            </p>
          </div>
        )}

      </form>
    </div>
  );
}
