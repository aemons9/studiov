
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface LockFieldsDropdownProps {
  lockedFields: string[];
  onLockedFieldsChange: (fields: string[]) => void;
  isBusy: boolean;
}

const fieldStructure: { path: string; label: string; level: number }[] = [
    { path: 'shot', label: 'Shot', level: 0 },
    { path: 'subject', label: 'Subject (Entire)', level: 0 },
    { path: 'subject.variant', label: 'Model Variant', level: 1 },
    { path: 'subject.pose', label: 'Pose', level: 1 },
    { path: 'subject.hair_color', label: 'Hair Color', level: 1 },
    { path: 'subject.hair_style', label: 'Hair Style', level: 1 },
    { path: 'subject.skin_finish', label: 'Skin Finish', level: 1 },
    { path: 'subject.hand_and_nail_details', label: 'Hand & Nail Details', level: 1 },
    { path: 'subject.tattoos', label: 'Tattoos', level: 1 },
    { path: 'subject.piercings', label: 'Piercings', level: 1 },
    { path: 'subject.body_art', label: 'Body Art', level: 1 },
    { path: 'subject.nail_art', label: 'Nail Art', level: 1 },
    { path: 'subject.high_heels', label: 'High Heels', level: 1 },
    { path: 'wardrobe', label: 'Wardrobe', level: 0 },
    { path: 'environment', label: 'Environment', level: 0 },
    { path: 'lighting', label: 'Lighting', level: 0 },
    { path: 'camera', label: 'Camera (Entire)', level: 0 },
    { path: 'camera.focal_length', label: 'Focal Length', level: 1 },
    { path: 'camera.aperture', label: 'Aperture', level: 1 },
    { path: 'camera.distance', label: 'Distance', level: 1 },
    { path: 'camera.angle', label: 'Angle', level: 1 },
    { path: 'camera.framing', label: 'Framing', level: 1 },
    { path: 'color_grade', label: 'Color Grade', level: 0 },
    { path: 'style', label: 'Style', level: 0 },
    { path: 'quality', label: 'Quality', level: 0 },
    { path: 'figure_and_form', label: 'Figure & Form', level: 0 },
    { path: 'skin_micro_details', label: 'Skin Micro-Details', level: 0 },
    { path: 'fabric_physics', label: 'Fabric Physics', level: 0 },
    { path: 'material_properties', label: 'Material Properties', level: 0 },
];

const isChildOf = (childPath: string, parentPath: string) => 
  childPath.startsWith(parentPath + '.') && childPath !== parentPath;

const LockFieldsDropdown: React.FC<LockFieldsDropdownProps> = ({ lockedFields, onLockedFieldsChange, isBusy }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggleField = useCallback((path: string) => {
        const children = fieldStructure.filter(f => isChildOf(f.path, path)).map(f => f.path);
        const isParent = children.length > 0;
        const newLockedSet = new Set(lockedFields);
        const isCurrentlyLocked = newLockedSet.has(path);
    
        if (isParent) {
            if (isCurrentlyLocked) {
                // Unchecking a parent unchecks itself and all children
                newLockedSet.delete(path);
                children.forEach(child => newLockedSet.delete(child));
            } else {
                // Checking a parent checks itself and all children
                newLockedSet.add(path);
                children.forEach(child => newLockedSet.add(child));
            }
        } else {
            // It's a child or a top-level item without children
            if (isCurrentlyLocked) {
                newLockedSet.delete(path);
            } else {
                newLockedSet.add(path);
            }
        }

        // After any change, re-evaluate all parent states
        fieldStructure.forEach(field => {
            const childrenOfField = fieldStructure.filter(f => isChildOf(f.path, field.path)).map(f => f.path);
            if (childrenOfField.length > 0) { // It's a parent
                const allChildrenLocked = childrenOfField.every(child => newLockedSet.has(child));
                if (allChildrenLocked) {
                    newLockedSet.add(field.path);
                } else {
                    newLockedSet.delete(field.path);
                }
            }
        });

        onLockedFieldsChange(Array.from(newLockedSet));
    }, [lockedFields, onLockedFieldsChange]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isBusy}
                title="Select fields to lock during AI weaving."
                className="flex items-center justify-center gap-2 px-3 py-1.5 bg-indigo-700 text-white font-semibold text-sm rounded-md shadow-md hover:bg-indigo-600 disabled:bg-indigo-800/50 disabled:cursor-not-allowed transition-all duration-300 h-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                Lock Fields ({lockedFields.filter(f => !f.includes('.')).length})
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            {isOpen && (
                 <div className="absolute bottom-full mb-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20">
                    <div className="p-3 border-b border-gray-700">
                      <p className="font-semibold text-white">Lock Fields for Weaving</p>
                      <p className="text-xs text-gray-400">Locked fields will be used verbatim by the AI.</p>
                    </div>
                    <ul className="py-1 max-h-80 overflow-y-auto">
                        {fieldStructure.map(({ path, label, level }) => {
                            const children = fieldStructure.filter(f => isChildOf(f.path, path));
                            const isParent = children.length > 0;
                            const lockedChildrenCount = children.filter(c => lockedFields.includes(c.path)).length;
                            
                            const isChecked = lockedFields.includes(path);
                            const isIndeterminate = isParent && lockedChildrenCount > 0 && lockedChildrenCount < children.length && !isChecked;

                             return (
                                <li key={path}>
                                   <label className="w-full text-left px-3 py-2 hover:bg-gray-700/50 transition-colors flex items-center gap-3 cursor-pointer"
                                    style={{ paddingLeft: `${0.75 + level * 1.25}rem`}}
                                   >
                                        <input
                                            type="checkbox"
                                            ref={el => { if (el) el.indeterminate = isIndeterminate; }}
                                            checked={isChecked}
                                            onChange={() => handleToggleField(path)}
                                            className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-indigo-600 focus:ring-indigo-500 flex-shrink-0"
                                        />
                                        <span className="text-sm text-gray-200">{label}</span>
                                   </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LockFieldsDropdown;
