
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator as CalculatorIcon } from 'lucide-react';
import TimeInput from './TimeInput';
import NumberInput from './NumberInput';

const Calculator = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState('');
  const [resultado, setResultado] = useState<{ tiempo?: string; precio: number; precioSocio: number } | null>(null);

  const calcularPrecio = () => {
    let totalMinutos = 0;
    let mostrarTiempo = '';

    if (inicio && fin) {
      const [h1, m1] = inicio.split(':').map(Number);
      const [h2, m2] = fin.split(':').map(Number);

      const t1 = new Date(0, 0, 0, h1, m1);
      const t2 = new Date(0, 0, 0, h2, m2);

      if (t2 > t1) {
        const diffMs = t2 - t1;
        const diffMin = Math.floor(diffMs / 60000);
        totalMinutos = diffMin;
        const horasUsadas = Math.floor(diffMin / 60);
        const minutosUsados = diffMin % 60;
        mostrarTiempo = `${horasUsadas} horas y ${minutosUsados} minutos`;
      } else {
        setResultado(null);
        return;
      }
    } else {
      totalMinutos = horas * 60 + minutos;
    }

    if (totalMinutos > 0) {
      const precio = Math.round(totalMinutos * (3000 / 60));
      const precioSocio = Math.round(totalMinutos * (2500 / 60));
      setResultado({ tiempo: mostrarTiempo, precio, precioSocio });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-bg p-4">
      <div className="w-full max-w-4xl animate-fade-in">
        <h1 className="text-4xl font-bold text-center mb-8 text-cyber-accent">
          Calculadora Cyber
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-cyber-bg/30 border-cyber-muted backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-6 text-cyber-text">Cálculo Manual</h3>
            <div className="space-y-4">
              <NumberInput
                id="horas"
                value={horas}
                onChange={setHoras}
                label="Horas"
                min={0}
                placeholder="Ingrese las horas"
              />
              <NumberInput
                id="minutos"
                value={minutos}
                onChange={setMinutos}
                label="Minutos"
                min={0}
                max={59}
                placeholder="Ingrese los minutos"
              />
            </div>
          </Card>

          <Card className="p-6 bg-cyber-bg/30 border-cyber-muted backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-6 text-cyber-text">Con Horario</h3>
            <div className="space-y-4">
              <TimeInput
                id="inicio"
                value={inicio}
                onChange={setInicio}
                label="Hora de Inicio"
              />
              <TimeInput
                id="fin"
                value={fin}
                onChange={setFin}
                label="Hora de Fin"
              />
            </div>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={calcularPrecio}
            className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg transition-colors"
          >
            <CalculatorIcon className="mr-2" /> Calcular
          </Button>
        </div>

        {resultado && (
          <Card className="mt-8 p-6 bg-cyber-bg/30 border-cyber-muted backdrop-blur-lg animate-fade-in">
            {resultado.tiempo && (
              <p className="text-lg text-cyber-text mb-4">
                Tiempo total: {resultado.tiempo}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <h2 className="text-2xl font-bold text-cyber-accent">
                  ${resultado.precio.toLocaleString()}
                </h2>
                <p className="text-cyber-text/80">Precio Regular</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-cyber-accent">
                  ${resultado.precioSocio.toLocaleString()}
                </h2>
                <p className="text-cyber-text/80">Precio Socio</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Calculator;
