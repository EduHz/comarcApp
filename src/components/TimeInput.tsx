
import React from 'react';
import { Input } from '@/components/ui/input';

interface TimeInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const TimeInput = ({ id, value, onChange, label }: TimeInputProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-cyber-text">
        {label}
      </label>
      <Input
        type="time"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-cyber-bg/50 border-cyber-muted text-cyber-text placeholder:text-cyber-muted/70 focus:border-primary hover:border-primary/80 transition-colors"
      />
    </div>
  );
};

export default TimeInput;
