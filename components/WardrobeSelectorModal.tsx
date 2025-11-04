import React, { useState, useMemo } from 'react';
import type { WardrobeConcept, WardrobeConceptCategory, WardrobeCoverage, WardrobeFormality, WardrobeStyle } from '../types';

interface WardrobeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  concepts: WardrobeConcept[];
  onSelect: (concept: WardrobeConcept) => void;
}

const FilterButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 py-1 text-sm rounded-full transition-colors ${
            isActive
                ? 'bg-indigo-500 text-white font-semibold'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
    >
        {label}
    </button>
);

const WardrobeSelectorModal: React.FC<WardrobeSelectorModalProps> = ({ isOpen, onClose, concepts, onSelect }) => {
  const [intimacy, setIntimacy] = useState<number>(10);
  const [category, setCategory] = useState<WardrobeConceptCategory | 'All'>('All');
  const [formality, setFormality] = useState<WardrobeFormality | 'All'>('All');
  const [coverage, setCoverage] = useState<WardrobeCoverage | 'All'>('All');
  const [style, setStyle] = useState<WardrobeStyle | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConcepts = useMemo(() => {
    return concepts.filter(c => {
      const intimacyMatch = c.tags.intimacy <= intimacy;
      const categoryMatch = category === 'All' || c.category === category;
      const formalityMatch = formality === 'All' || c.tags.formality === formality;
      const coverageMatch = coverage === 'All' || c.tags.coverage === coverage;
      const styleMatch = style === 'All' || c.tags.style === style;
      const searchMatch = searchTerm.trim() === '' || 
                          c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase());
      return intimacyMatch && categoryMatch && formalityMatch && coverageMatch && styleMatch && searchMatch;
    });
  }, [concepts, intimacy, category, formality, coverage, style, searchTerm]);

  if (!isOpen) return null;

  const categories: (WardrobeConceptCategory | 'All')[] = ['All', 'Architectural Lingerie', 'Couture Intimates', 'Sensual Art', 'Private Gallery', 'Concept Art'];
  // FIX: Added 'Avant-Garde' to the filter options to match the updated type definition.
  const formalities: (WardrobeFormality | 'All')[] = ['All', 'Casual', 'Editorial', 'Haute Couture', 'Avant-Garde'];
  const coverages: (WardrobeCoverage | 'All')[] = ['All', 'Minimal', 'Moderate', 'Full'];
  const styles: (WardrobeStyle | 'All')[] = ['All', 'Classic', 'Modern', 'Avant-Garde', 'Minimalist'];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      aria-labelledby="wardrobe-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-6xl h-[90vh] flex flex-col transform transition-all border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-600 flex-shrink-0">
          <h2 id="wardrobe-modal-title" className="text-2xl font-bold text-white flex items-center gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Wardrobe Concept Library
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <div className="flex flex-grow overflow-hidden">
          {/* Filter Panel */}
          <aside className="w-72 p-6 border-r border-gray-700 overflow-y-auto flex-shrink-0">
            <div className="space-y-6">
              <div>
                <label className="font-semibold text-gray-300 block mb-3">Search</label>
                <input type="text" placeholder="Search by name..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="intimacy-slider" className="font-semibold text-gray-300 block mb-2">Max Intimacy: {intimacy}</label>
                <input id="intimacy-slider" type="range" min="1" max="10" value={intimacy} onChange={e => setIntimacy(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
              </div>
              <div>
                <label className="font-semibold text-gray-300 block mb-3">Category</label>
                <div className="flex flex-wrap gap-2">{categories.map(c => <FilterButton key={c} label={c} isActive={category === c} onClick={() => setCategory(c)} />)}</div>
              </div>
              <div>
                <label className="font-semibold text-gray-300 block mb-3">Formality</label>
                <div className="flex flex-wrap gap-2">{formalities.map(f => <FilterButton key={f} label={f} isActive={formality === f} onClick={() => setFormality(f)} />)}</div>
              </div>
               <div>
                <label className="font-semibold text-gray-300 block mb-3">Coverage</label>
                <div className="flex flex-wrap gap-2">{coverages.map(c => <FilterButton key={c} label={c} isActive={coverage === c} onClick={() => setCoverage(c)} />)}</div>
              </div>
              <div>
                <label className="font-semibold text-gray-300 block mb-3">Style</label>
                <div className="flex flex-wrap gap-2">{styles.map(s => <FilterButton key={s} label={s} isActive={style === s} onClick={() => setStyle(s)} />)}</div>
              </div>
            </div>
          </aside>
          
          {/* Content Grid */}
          <main className="flex-grow p-6 overflow-y-auto">
            {filteredConcepts.length === 0 ? (
              <div className="flex items-center justify-center h-full text-center text-gray-500">
                  <p>No concepts match your filters. Try broadening your search.</p>
              </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredConcepts.map(concept => (
                    <div key={concept.id} className="bg-gray-900/70 border border-gray-700 rounded-lg p-4 flex flex-col justify-between hover:border-indigo-500 transition-colors">
                      <div>
                        <h3 className="font-bold text-lg text-white mb-1">{concept.name}</h3>
                        <p className="text-sm text-gray-400 mb-3">{concept.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3 text-xs">
                          <span className="bg-fuchsia-800/50 text-fuchsia-300 px-2 py-0.5 rounded-full">{concept.category}</span>
                          <span className="bg-sky-800/50 text-sky-300 px-2 py-0.5 rounded-full">Intimacy: {concept.tags.intimacy}</span>
                        </div>
                      </div>
                      <button onClick={() => onSelect(concept)} className="w-full mt-auto px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-md hover:bg-indigo-500 transition-colors">
                        Select
                      </button>
                    </div>
                  ))}
                </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default WardrobeSelectorModal;