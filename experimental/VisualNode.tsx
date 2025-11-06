import React from 'react';
import type { VisualNode as VisualNodeType, NodeShape } from '../types';

interface VisualNodeProps {
  node: VisualNodeType;
  isSelected: boolean;
  isCompatible?: boolean;
  isIncompatible?: boolean;
  onSelect: (nodeId: string) => void;
}

const VisualNode: React.FC<VisualNodeProps> = ({
  node,
  isSelected,
  isCompatible = false,
  isIncompatible = false,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(node.id);
  };

  // Determine opacity and effects based on state
  const getOpacity = () => {
    if (isSelected) return '100';
    if (isIncompatible) return '40';
    if (isCompatible) return '80';
    return '60';
  };

  const getBorderStyle = () => {
    if (isSelected) return `3px solid ${node.color}`;
    if (isCompatible) return `2px solid ${node.color}80`;
    return `1px solid ${node.color}40`;
  };

  const getBoxShadow = () => {
    if (isSelected) return `0 0 20px ${node.color}80, 0 0 40px ${node.color}40`;
    if (isCompatible) return `0 0 10px ${node.color}40`;
    return 'none';
  };

  // Shape-specific styles
  const getShapeStyles = (): React.CSSProperties => {
    const baseSize = node.category === 'concept' ? 80 : 64;
    const base: React.CSSProperties = {
      width: `${baseSize}px`,
      height: `${baseSize}px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `${node.color}${getOpacity()}`,
      border: getBorderStyle(),
      boxShadow: getBoxShadow(),
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      color: '#FFFFFF',
      fontSize: node.category === 'concept' ? '24px' : '20px',
    };

    switch (node.shape) {
      case 'circle':
        return { ...base, borderRadius: '50%' };
      case 'diamond':
        return { ...base, transform: 'rotate(45deg)', borderRadius: '8px' };
      case 'hexagon':
        return {
          ...base,
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
          borderRadius: '0',
        };
      case 'square':
        return { ...base, borderRadius: '8px' };
      case 'triangle':
        return {
          ...base,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          borderRadius: '0',
        };
      case 'octagon':
        return {
          ...base,
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          borderRadius: '0',
        };
      case 'pentagon':
        return {
          ...base,
          clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          borderRadius: '0',
        };
      case 'star':
        return {
          ...base,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          borderRadius: '0',
        };
      default:
        return base;
    }
  };

  const shapeStyles = getShapeStyles();
  const isDiamond = node.shape === 'diamond';

  return (
    <div
      className="visual-node-wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        opacity: isIncompatible ? 0.5 : 1,
        filter: isIncompatible ? 'grayscale(50%)' : 'none',
      }}
      title={node.description}
    >
      <div
        onClick={handleClick}
        style={shapeStyles}
        className={`visual-node ${isSelected ? 'selected' : ''} ${isCompatible ? 'compatible' : ''}`}
        onMouseEnter={(e) => {
          if (!isIncompatible) {
            e.currentTarget.style.transform = isDiamond ? 'rotate(45deg) scale(1.1)' : 'scale(1.1)';
            e.currentTarget.style.boxShadow = `0 0 25px ${node.color}80, 0 0 50px ${node.color}40`;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isDiamond ? 'rotate(45deg)' : 'scale(1)';
          e.currentTarget.style.boxShadow = getBoxShadow();
        }}
      >
        <div
          style={{
            transform: isDiamond ? 'rotate(-45deg)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
          }}
        >
          <div style={{ fontSize: node.category === 'concept' ? '24px' : '20px' }}>
            {node.icon}
          </div>
          <div
            style={{
              fontSize: node.category === 'concept' ? '9px' : '8px',
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '1',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            {node.abbreviation}
          </div>
        </div>
        {isSelected && (
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '16px',
              height: '16px',
              backgroundColor: '#10B981',
              borderRadius: '50%',
              border: '2px solid white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              transform: isDiamond ? 'rotate(-45deg)' : 'none',
            }}
          >
            ✓
          </div>
        )}
      </div>
      <div
        style={{
          fontSize: '10px',
          color: '#9CA3AF',
          textAlign: 'center',
          maxWidth: node.category === 'concept' ? '100px' : '80px',
          lineHeight: '1.2',
          height: '24px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {node.name}
      </div>
    </div>
  );
};

export default VisualNode;
