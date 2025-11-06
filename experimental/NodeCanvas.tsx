import React from 'react';
import VisualNode from './VisualNode';
import { nodesByCategory } from './nodeDefinitions';
import type { NodeCategory } from '../types';

interface NodeCanvasProps {
  selectedNodes: string[];
  onNodeSelect: (nodeId: string) => void;
}

const NodeCanvas: React.FC<NodeCanvasProps> = ({ selectedNodes, onNodeSelect }) => {
  const categoryLabels: Record<NodeCategory, string> = {
    concept: '🎨 PRE-BUILT CONCEPTS',
    subject: '👤 SUBJECTS',
    wardrobe: '👗 WARDROBE',
    pose: '💃 POSES',
    environment: '🏢 ENVIRONMENTS',
    lighting: '💡 LIGHTING',
    camera: '📷 CAMERA',
    weaving: '🧵 WEAVING MODES',
    style: '✨ ARTISTIC STYLES',
  };

  const categoryOrder: NodeCategory[] = [
    'concept',
    'subject',
    'wardrobe',
    'pose',
    'environment',
    'lighting',
    'camera',
    'weaving',
    'style',
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        padding: '16px',
        backgroundColor: '#0F172A',
      }}
    >
      {categoryOrder.map((category) => {
        const nodes = nodesByCategory[category];
        if (!nodes || nodes.length === 0) return null;

        return (
          <div key={category} style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#F3F4F6',
                marginBottom: '12px',
                paddingBottom: '6px',
                borderBottom: '2px solid #374151',
              }}
            >
              {categoryLabels[category]}
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: category === 'concept' ? 'repeat(auto-fill, minmax(100px, 1fr))' : 'repeat(auto-fill, minmax(90px, 1fr))',
                gap: category === 'concept' ? '16px' : '12px',
                justifyItems: 'center',
              }}
            >
              {nodes.map((node) => (
                <VisualNode
                  key={node.id}
                  node={node}
                  isSelected={selectedNodes.includes(node.id)}
                  onSelect={onNodeSelect}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NodeCanvas;
