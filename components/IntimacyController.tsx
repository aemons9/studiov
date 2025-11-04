import React from 'react';

interface IntimacyControllerProps {
  level: number;
  onLevelChange: (level: number) => void;
  disabled: boolean;
}

const getLevelInfo = (level: number): { name: string; description: string; color: string; } => {
  if (level <= 3) return { name: 'Conservative', description: 'Fully clothed, professional, and corporate contexts.', color: 'text-sky-400' };
  if (level <= 6) return { name: 'Editorial', description: 'High-fashion, artistic, and stylized concepts.', color: 'text-teal-400' };
  if (level <= 8) return { name: 'Sensual Art', description: 'Intimate, fine-art focus on form, light, and shadow.', color: 'text-amber-400' };
  return { name: 'Private Collection', description: 'Maximum artistic freedom, abstract and avant-garde.', color: 'text-rose-400' };
};

const IntimacyController: React.FC<IntimacyControllerProps> = ({ level, onLevelChange, disabled }) => {
  const levelInfo = getLevelInfo(level);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="intimacy-level" className="font-semibold text-gray-300">
          Artistic Intimacy Level
        </label>
        <span className={`font-bold text-lg ${levelInfo.color}`}>{level}</span>
      </div>
      <input
        id="intimacy-level"
        type="range"
        min="1"
        max="10"
        value={level}
        onChange={(e) => onLevelChange(Number(e.target.value))}
        disabled={disabled}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 disabled:opacity-50"
      />
      <div className="mt-2 text-center">
        <p className={`font-semibold ${levelInfo.color}`}>{levelInfo.name}</p>
        <p className="text-xs text-gray-400">{levelInfo.description}</p>
      </div>
    </div>
  );
};

export default IntimacyController;
