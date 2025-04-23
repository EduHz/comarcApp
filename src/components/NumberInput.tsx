
import React from 'react';
import { Input } from '@/components/ui/input';

interface NumberInputProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  placeholder?: string;
}

const NumberInput = ({ id, value, onChange, label, min, max, placeholder }: NumberInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-cyber-text">
        {label}
      </label>
      <Input
        type="number"
        id={id}
        value={value || ''}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        placeholder={placeholder}
        className="bg-cyber-bg/50 border-cyber-muted text-cyber-text placeholder:text-cyber-muted/70 focus:border-primary hover:border-primary/80 transition-colors"
      />
    </div>
  );
};

export default NumberInput;
