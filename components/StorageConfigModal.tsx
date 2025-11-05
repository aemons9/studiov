import React from 'react';
import type { StorageSettings, StorageProvider } from '../types';

interface StorageConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: StorageSettings;
  onSettingsChange: (newSettings: StorageSettings) => void;
}

const ToggleSwitch: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}> = ({ checked, onChange, label }) => (
  <label className="flex items-center cursor-pointer">
    <div className="relative">
      <input type="checkbox" className="sr-only" checked={checked} onChange={e => onChange(e.target.checked)} />
      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
      <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${checked ? 'transform translate-x-full bg-indigo-400' : ''}`}></div>
    </div>
    <div className="ml-3 text-white font-medium">{label}</div>
  </label>
);


const StorageProviderCard: React.FC<{
  name: string;
  description: string;
  tag: string;
  tagColor: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ name, description, tag, tagColor, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
      isSelected ? 'bg-indigo-900/50 border-indigo-500' : 'bg-gray-700/50 border-gray-600 hover:border-gray-500'
    }`}
  >
    <div className={`absolute top-2 right-2 px-2 py-0.5 text-xs font-bold text-white rounded-full ${tagColor}`}>
      {tag}
    </div>
    <h3 className="font-bold text-lg text-white">{name}</h3>
    <p className="text-sm text-gray-400 mt-1">{description}</p>
  </div>
);


const StorageConfigModal: React.FC<StorageConfigModalProps> = ({ isOpen, onClose, settings, onSettingsChange }) => {
  if (!isOpen) return null;

  const handleFieldChange = <K extends keyof StorageSettings>(field: K, value: StorageSettings[K]) => {
    onSettingsChange({ ...settings, [field]: value });
  };
  
  const handleProviderSelect = (provider: StorageProvider) => {
    onSettingsChange({ ...settings, provider });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      aria-labelledby="storage-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all p-6 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-600">
          <h2 id="storage-modal-title" className="text-2xl font-bold text-white flex items-center gap-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" /></svg>
            Storage Settings
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <ToggleSwitch
            checked={settings.enableStorage}
            onChange={(checked) => handleFieldChange('enableStorage', checked)}
            label="Enable Cloud Saving"
          />

          {settings.enableStorage && (
            <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StorageProviderCard 
                        name="Google Drive"
                        description="Saves images to a folder in your personal Google Drive (up to 15GB free)."
                        tag="FREE"
                        tagColor="bg-green-600"
                        isSelected={settings.provider === 'google-drive'}
                        onClick={() => handleProviderSelect('google-drive')}
                    />
                     <StorageProviderCard 
                        name="Google Cloud Storage"
                        description="Saves images to a Google Cloud Storage bucket (requires billing)."
                        tag="PAID"
                        tagColor="bg-amber-600"
                        isSelected={settings.provider === 'cloud-storage'}
                        onClick={() => handleProviderSelect('cloud-storage')}
                    />
                </div>

                {settings.provider === 'google-drive' && (
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 space-y-4 animate-fade-in">
                        <h4 className="font-semibold text-white">Google Drive Configuration</h4>
                        <div>
                            <label htmlFor="driveFolderName" className="font-medium text-gray-300 block mb-2 text-sm">Drive Folder Name</label>
                            <input id="driveFolderName" type="text" value={settings.driveFolderName} 
                                onChange={(e) => handleFieldChange('driveFolderName', e.target.value)} 
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                         <div>
                            <label htmlFor="driveAccessToken" className="font-medium text-gray-300 block mb-2 text-sm">Separate Drive Access Token (Optional)</label>
                            <input id="driveAccessToken" type="password" placeholder="Leave empty to use main token" value={settings.driveAccessToken || ''} 
                                onChange={(e) => handleFieldChange('driveAccessToken', e.target.value)} 
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                             <p className="text-xs text-gray-500 mt-1">Use a different Google account for Drive? Paste its token here.</p>
                        </div>
                    </div>
                )}

                 {settings.provider === 'cloud-storage' && (
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 space-y-4 animate-fade-in">
                        <h4 className="font-semibold text-white">Cloud Storage Configuration</h4>
                        <div>
                            <label htmlFor="bucketName" className="font-medium text-gray-300 block mb-2 text-sm">Cloud Storage Bucket Name</label>
                            <input id="bucketName" type="text" value={settings.bucketName} 
                                onChange={(e) => handleFieldChange('bucketName', e.target.value)} 
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            <p className="text-xs text-gray-500 mt-1">Your Google Cloud Project ID and Access Token from the Generation Settings will be used.</p>
                        </div>
                    </div>
                )}
            </div>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-600 flex justify-end">
            <button
                onClick={onClose}
                className="px-6 py-2 bg-indigo-600 text-white font-semibold text-base rounded-md hover:bg-indigo-500 transition-colors"
            >
                Close
            </button>
        </div>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}</style>

      </div>
    </div>
  );
};

export default StorageConfigModal;