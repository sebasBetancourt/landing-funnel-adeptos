// src/presentation/components/atoms/FormInput.tsx
import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormInput({ label, error, ...props }: FormInputProps) {
  return (
    <div className="space-y-3 w-full">
      <label className="text-sm font-black uppercase tracking-[0.3em] text-white/50 block">
        {label} {props.required && <span className="text-primary">*</span>}
      </label>
      <input
        {...props}
        className={`w-full bg-white/5 border-2 ${
          error ? 'border-red-500/50' : 'border-white/10'
        } focus:border-primary focus:bg-white/10 outline-none p-5 md:p-6 rounded-2xl text-white font-bold transition-all placeholder:text-white/20`}
      />
      {error && <p className="text-[10px] font-black uppercase text-red-500 tracking-widest">{error}</p>}
    </div>
  );
}

// src/presentation/components/atoms/FormRadio.tsx
interface RadioOption {
  label: string;
  value: string;
}

interface FormRadioProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function FormRadio({ label, name, options, selectedValue, onChange, required }: FormRadioProps) {
  return (
    <div className="space-y-6 w-full">
      <label className="text-sm font-black uppercase tracking-[0.2em] text-white block leading-relaxed">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="space-y-3">
        {options.map((option) => (
          <label 
            key={option.value}
            className={`flex items-center gap-4 p-5 md:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
              selectedValue === option.value 
                ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className="hidden"
            />
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedValue === option.value ? 'border-primary' : 'border-white/20'
            }`}>
              {selectedValue === option.value && <div className="w-3 h-3 rounded-full bg-primary" />}
            </div>
            <span className={`text-base font-bold ${
              selectedValue === option.value ? 'text-white' : 'text-white/70'
            }`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
