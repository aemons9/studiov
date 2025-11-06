import React from 'react';
import type { CalculatedLevels } from '../types';
import {
  getLevelColor,
  getIntimacyCategory,
  getSeductionCategory,
  getEroticismCategory,
  getProfessionalismCategory,
  getPowerCategory,
  getAbstractionCategory,
  getBoundaryCategory,
} from './levelCalculator';

interface LevelIndicatorProps {
  levels: CalculatedLevels;
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({ levels }) => {
  const renderBar = (
    dimension: keyof CalculatedLevels,
    label: string,
    getCategoryFn: (level: number) => { label: string; description: string }
  ) => {
    const level = levels[dimension];
    const percentage = (level / 25) * 100;
    const color = getLevelColor(level, dimension);
    const category = getCategoryFn(level);
    const showWarning = dimension === 'boundary' && level >= 16;

    return (
      <div key={dimension} style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#D1D5DB', textTransform: 'uppercase' }}>
            {label}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {showWarning && <span style={{ fontSize: '14px', color: '#F59E0B' }} title="Premium Tier">⚠️</span>}
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: color }}>
              {level}/25
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '24px',
            backgroundColor: '#1F2937',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid #374151',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: '100%',
              background: `linear-gradient(to right, ${color}80, ${color})`,
              transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '8px',
            }}
          >
            <span
              style={{
                fontSize: '10px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                whiteSpace: 'nowrap',
              }}
            >
              {category.label}
            </span>
          </div>
        </div>

        {/* Category Description */}
        <div style={{ fontSize: '9px', color: '#6B7280', marginTop: '2px', fontStyle: 'italic' }}>
          {category.description}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: '#111827',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid #374151',
      }}
    >
      <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#F3F4F6', marginBottom: '16px', textAlign: 'center' }}>
        MULTI-DIMENSIONAL LEVELS
      </h3>

      {renderBar('intimacy', 'Intimacy', getIntimacyCategory)}
      {renderBar('seduction', 'Seduction', getSeductionCategory)}
      {renderBar('eroticism', 'Eroticism', getEroticismCategory)}
      {renderBar('professionalism', 'Professionalism', getProfessionalismCategory)}
      {renderBar('power', 'Power Dynamics', getPowerCategory)}
      {renderBar('abstraction', 'Artistic Abstraction', getAbstractionCategory)}
      {renderBar('boundary', 'Boundary Crossing', getBoundaryCategory)}
    </div>
  );
};

export default LevelIndicator;
