'use client';

import { FormEvent, useState } from 'react';

type UnitInputProps = {
  placeholder: string;
  value: string;
  onChangeValue: (value: string) => void;
  unit: string;
  required?: boolean;
};

function UnitInput({ placeholder, value, onChangeValue, unit, required = false }: UnitInputProps) {
  return (
    <div style={{ position: 'relative' }}>
      <input
        type="number"
        step="any"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        required={required}
        style={{ width: '100%', padding: '10px 44px 10px 12px', borderRadius: '8px', border: '1px solid #b8b8b8' }}
      />
      <span
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#666',
          fontSize: '0.9rem',
          pointerEvents: 'none'
        }}
      >
        {unit}
      </span>
    </div>
  );
}

export default function MemberResourcesPage() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [authError, setAuthError] = useState('');
  const [calcError, setCalcError] = useState('');
  const [result, setResult] = useState<{
    totalWeight: number;
    xCg: number;
    xNp: number;
    cgToNp: number;
    cgRelDatum: number;
    cgRelDatumNormalized: number;
  } | null>(null);
  const [inputs, setInputs] = useState({
    wN: '',
    wMl: '',
    wMr: '',
    xN: '',
    xM: '',
    xNp: '',
    chord: ''
  });

  const handleUnlock = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === 'BoilerUP!') {
      setIsUnlocked(true);
      setAuthError('');
      return;
    }
    setAuthError('Incorrect password.');
  };

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const W_n = Number(inputs.wN);
    const W_ml = Number(inputs.wMl);
    const W_mr = Number(inputs.wMr);
    const x_n = inputs.xN.trim() === '' ? 0.502 : Number(inputs.xN);
    const x_m = inputs.xM.trim() === '' ? 1.032 : Number(inputs.xM);
    const x_np = inputs.xNp.trim() === '' ? 1.15 : Number(inputs.xNp);
    const chord = inputs.chord.trim() === '' ? 0.728 : Number(inputs.chord);

    if ([W_n, W_ml, W_mr, x_n, x_m, x_np, chord].some((value) => Number.isNaN(value))) {
      setCalcError('Invalid input. Please enter numerical values.');
      setResult(null);
      return;
    }

    if (chord === 0) {
      setCalcError('Chord length cannot be zero.');
      setResult(null);
      return;
    }

    const W_total = W_n + W_ml + W_mr;
    if (W_total === 0) {
      setCalcError('Total weight cannot be zero.');
      setResult(null);
      return;
    }

    const x_cg = (W_n * x_n + (W_ml + W_mr) * x_m) / W_total;
    const cg_to_np = x_np - x_cg;
    const cg_rel_datum = x_cg;
    const cg_rel_datum_normalized = cg_rel_datum / chord;

    setCalcError('');
    setResult({
      totalWeight: W_total,
      xCg: x_cg,
      xNp: x_np,
      cgToNp: cg_to_np,
      cgRelDatum: cg_rel_datum,
      cgRelDatumNormalized: cg_rel_datum_normalized
    });
  };

  return (
    <main style={{ minHeight: '100vh', padding: '140px 20px 80px', background: '#f5f6f8' }}>
      <div
        style={{
          width: 'min(720px, 100%)',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '16px',
          border: '2px solid #d9aa08',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
          padding: '28px'
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: '10px', color: '#020202' }}>Member Resources</h1>
        <p style={{ marginTop: 0, color: '#444' }}>Password required to access this page.</p>

        {!isUnlocked ? (
          <form onSubmit={handleUnlock}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #b8b8b8',
                marginBottom: '12px',
                fontSize: '1rem'
              }}
            />
            {authError && <p style={{ color: '#b00020', marginTop: 0, marginBottom: '12px' }}>{authError}</p>}
            <button type="submit" className="cta-button" style={{ background: '#020202', color: '#fff' }}>
              Unlock
            </button>
          </form>
        ) : (
          <section>
            <h2 style={{ color: '#020202', marginTop: '20px', marginBottom: '14px' }}>Aircraft CG Calculator</h2>
            <p style={{ marginTop: 0, marginBottom: '14px', color: '#444' }}>
              Datum for this calculator: <strong>nose</strong> (front-most point of the aircraft).
            </p>
            <form onSubmit={handleCalculate}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                <UnitInput
                  placeholder="Nose Gear Weight"
                  value={inputs.wN}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, wN: value }))}
                  unit="kg"
                  required
                />
                <UnitInput
                  placeholder="Left Main Weight"
                  value={inputs.wMl}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, wMl: value }))}
                  unit="kg"
                  required
                />
                <UnitInput
                  placeholder="Right Main Weight"
                  value={inputs.wMr}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, wMr: value }))}
                  unit="kg"
                  required
                />
                <UnitInput
                  placeholder="Nose Gear Distance x_n (default 0.502)"
                  value={inputs.xN}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, xN: value }))}
                  unit="m"
                />
                <UnitInput
                  placeholder="Main Gear Distance x_m (default 1.032)"
                  value={inputs.xM}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, xM: value }))}
                  unit="m"
                />
                <UnitInput
                  placeholder="Neutral Point x_np (default 1.15)"
                  value={inputs.xNp}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, xNp: value }))}
                  unit="m"
                />
                <UnitInput
                  placeholder="Chord Length c (default 0.728)"
                  value={inputs.chord}
                  onChangeValue={(value) => setInputs((prev) => ({ ...prev, chord: value }))}
                  unit="m"
                />
              </div>

              <p style={{ marginTop: '10px', marginBottom: '14px', color: '#555', fontSize: '0.92rem' }}>
                Leave distance fields blank to use defaults.
              </p>
              {calcError && <p style={{ color: '#b00020', marginTop: 0, marginBottom: '12px' }}>{calcError}</p>}
              <button type="submit" className="cta-button" style={{ background: '#020202', color: '#fff' }}>
                Calculate
              </button>
            </form>

            {result && (
              <div
                style={{
                  marginTop: '18px',
                  background: 'rgba(217, 170, 8, 0.12)',
                  border: '1px solid rgba(217, 170, 8, 0.5)',
                  borderRadius: '12px',
                  padding: '14px'
                }}
              >
                <p style={{ margin: '0 0 8px 0' }}><strong>Total Weight:</strong> {result.totalWeight.toFixed(2)} kg</p>
                <p style={{ margin: '0 0 8px 0' }}><strong>Longitudinal CG (x_cg):</strong> {result.xCg.toFixed(4)} m</p>
                <p style={{ margin: '0 0 8px 0' }}><strong>Neutral Point (x_np):</strong> {result.xNp.toFixed(4)} m</p>
                <p style={{ margin: 0 }}>
                  <strong>CG Relative to NP:</strong> {result.cgToNp.toFixed(4)} m{' '}
                  {result.cgToNp > 0 && '(CG is AHEAD of NP - Statically Stable)'}
                  {result.cgToNp < 0 && '(CG is BEHIND of NP - Unstable!)'}
                  {result.cgToNp === 0 && '(CG is EXACTLY ON NP - Neutrally Stable)'}
                </p>
                <p style={{ margin: '8px 0 0 0' }}>
                  <strong>CG Position Relative to Datum:</strong> {result.cgRelDatum.toFixed(4)} m
                </p>
                <p style={{ margin: '8px 0 0 0' }}>
                  <strong>Normalized CG Position (x/c):</strong> {result.cgRelDatumNormalized.toFixed(4)}
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
