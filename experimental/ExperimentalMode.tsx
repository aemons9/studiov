import React, { useState, useEffect } from 'react';
import NodeCanvas from './NodeCanvas';
import LevelIndicator from './LevelIndicator';
import { calculateLevelsFromNodes, generateWarnings, type LevelWarning } from './levelCalculator';
import { getNodeById } from './nodeDefinitions';
import type { CalculatedLevels } from '../types';

interface ExperimentalModeProps {
  onGenerateWithConfig: (selectedNodes: string[], levels: CalculatedLevels) => void;
  onExit: () => void;
}

const ExperimentalMode: React.FC<ExperimentalModeProps> = ({ onGenerateWithConfig, onExit }) => {
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const [calculatedLevels, setCalculatedLevels] = useState<CalculatedLevels>({
    intimacy: 1,
    seduction: 1,
    eroticism: 1,
    professionalism: 1,
    power: 1,
    abstraction: 1,
    boundary: 1,
  });
  const [warnings, setWarnings] = useState<LevelWarning[]>([]);

  useEffect(() => {
    const levels = calculateLevelsFromNodes(selectedNodes);
    setCalculatedLevels(levels);

    const newWarnings = generateWarnings(selectedNodes, levels);
    setWarnings(newWarnings);
  }, [selectedNodes]);

  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodes((prev) => {
      if (prev.includes(nodeId)) {
        // Deselect
        return prev.filter((id) => id !== nodeId);
      } else {
        // Select
        return [...prev, nodeId];
      }
    });
  };

  const handleClearAll = () => {
    setSelectedNodes([]);
  };

  const handleGenerate = () => {
    onGenerateWithConfig(selectedNodes, calculatedLevels);
  };

  const selectedNodeObjects = selectedNodes.map((id) => getNodeById(id)).filter((n) => n !== undefined);

  const getSeverityColor = (severity: LevelWarning['severity']) => {
    switch (severity) {
      case 'high':
        return '#EF4444';
      case 'medium':
        return '#F59E0B';
      case 'low':
        return '#10B981';
      default:
        return '#6B7280';
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#0F172A',
        color: '#F3F4F6',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '16px 24px',
          backgroundColor: '#1E293B',
          borderBottom: '2px solid #374151',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', background: 'linear-gradient(to right, #A855F7, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            🔬 EXPERIMENTAL MODE
          </h1>
          <span style={{ fontSize: '12px', color: '#9CA3AF', fontStyle: 'italic' }}>
            Visual Node-Based Concept Selector
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={handleClearAll}
            style={{
              padding: '8px 16px',
              backgroundColor: '#374151',
              color: '#F3F4F6',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            Clear All
          </button>
          <button
            onClick={onExit}
            style={{
              padding: '8px 16px',
              backgroundColor: '#4B5563',
              color: '#F3F4F6',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
            }}
          >
            ← Back to Classic Mode
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left: Node Canvas */}
        <div style={{ flex: '1 1 70%', overflow: 'hidden' }}>
          <NodeCanvas selectedNodes={selectedNodes} onNodeSelect={handleNodeSelect} />
        </div>

        {/* Right: Level Indicators & Config */}
        <div
          style={{
            flex: '0 0 350px',
            backgroundColor: '#1E293B',
            borderLeft: '2px solid #374151',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Level Indicators */}
          <div style={{ padding: '16px', flex: '0 0 auto' }}>
            <LevelIndicator levels={calculatedLevels} />
          </div>

          {/* Warnings */}
          {warnings.length > 0 && (
            <div style={{ padding: '0 16px 16px 16px' }}>
              <div style={{ backgroundColor: '#111827', borderRadius: '8px', padding: '12px', border: '1px solid #374151' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#F59E0B', marginBottom: '8px' }}>
                  ⚠️ WARNINGS & GUIDANCE
                </h4>
                {warnings.map((warning, idx) => (
                  <div
                    key={idx}
                    style={{
                      fontSize: '10px',
                      color: getSeverityColor(warning.severity),
                      marginBottom: '6px',
                      lineHeight: '1.4',
                    }}
                  >
                    • {warning.message}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Configuration */}
          <div style={{ padding: '0 16px 16px 16px', flex: '1 1 auto', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#111827', borderRadius: '8px', padding: '12px', border: '1px solid #374151' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 'bold', color: '#A855F7', marginBottom: '8px' }}>
                SELECTED CONFIGURATION ({selectedNodes.length} nodes)
              </h4>
              {selectedNodeObjects.length === 0 ? (
                <p style={{ fontSize: '10px', color: '#6B7280', fontStyle: 'italic' }}>
                  No nodes selected. Click nodes to build your configuration.
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {selectedNodeObjects.map((node) => (
                    <div
                      key={node!.id}
                      style={{
                        fontSize: '10px',
                        color: '#D1D5DB',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ fontSize: '12px' }}>{node!.icon}</span>
                      <span style={{ fontWeight: '500' }}>{node!.name}</span>
                      <span style={{ fontSize: '8px', color: '#6B7280' }}>({node!.category})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Generate Button */}
          <div style={{ padding: '16px', borderTop: '1px solid #374151' }}>
            <button
              onClick={handleGenerate}
              disabled={selectedNodes.length === 0}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: selectedNodes.length === 0 ? '#4B5563' : '#A855F7',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                cursor: selectedNodes.length === 0 ? 'not-allowed' : 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: selectedNodes.length === 0 ? 0.5 : 1,
              }}
            >
              <span style={{ fontSize: '20px' }}>✨</span>
              Generate with Configuration
            </button>

            {/* Quick Level Summary */}
            <div style={{ marginTop: '12px', fontSize: '10px', color: '#9CA3AF', textAlign: 'center' }}>
              <div>Intimacy: <strong>{calculatedLevels.intimacy}</strong> • Seduction: <strong>{calculatedLevels.seduction}</strong> • Eroticism: <strong>{calculatedLevels.eroticism}</strong></div>
              <div style={{ marginTop: '4px' }}>Boundary: <strong>{calculatedLevels.boundary}</strong> {calculatedLevels.boundary >= 16 && <span style={{ color: '#F59E0B' }}>⚠️ PREMIUM</span>}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentalMode;
