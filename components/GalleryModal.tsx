/**
 * GALLERY MODAL COMPONENT
 *
 * Displays all generated images from Cloud Storage with:
 * - Thumbnail grid view
 * - Filtering by concept, date, intimacy level
 * - Image preview and metadata
 * - Download and delete functionality
 * - Storage statistics
 */

import React, { useState, useEffect } from 'react';
import type { ImageMetadata, GalleryFilters, CloudStorageConfig } from '../types';
import { listImagesFromCloudStorage, deleteImageFromCloudStorage, downloadImage, getStorageStats } from '../services/cloudStorageService';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CloudStorageConfig;
  onSelectImage?: (metadata: ImageMetadata) => void;
}

export default function GalleryModal({ isOpen, onClose, config, onSelectImage }: GalleryModalProps) {
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageMetadata[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(null);
  const [filters, setFilters] = useState<GalleryFilters>({});
  const [stats, setStats] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Load images when modal opens
  useEffect(() => {
    if (isOpen) {
      loadImages();
    }
  }, [isOpen]);

  // Apply filters whenever images or filters change
  useEffect(() => {
    applyFilters();
  }, [images, filters]);

  const loadImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const loadedImages = await listImagesFromCloudStorage(config);
      setImages(loadedImages);

      // Load stats
      const statsData = await getStorageStats(config);
      setStats(statsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...images];

    if (filters.conceptName) {
      filtered = filtered.filter(img =>
        img.conceptName.toLowerCase().includes(filters.conceptName!.toLowerCase())
      );
    }

    if (filters.intimacyLevel !== undefined) {
      filtered = filtered.filter(img => img.intimacyLevel === filters.intimacyLevel);
    }

    if (filters.startDate) {
      filtered = filtered.filter(img => img.date >= filters.startDate!);
    }

    if (filters.endDate) {
      filtered = filtered.filter(img => img.date <= filters.endDate!);
    }

    if (filters.aspectRatio) {
      filtered = filtered.filter(img => img.aspectRatio === filters.aspectRatio);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(img =>
        img.filename.toLowerCase().includes(query) ||
        img.conceptName.toLowerCase().includes(query) ||
        JSON.stringify(img.promptData).toLowerCase().includes(query)
      );
    }

    setFilteredImages(filtered);
  };

  const handleDelete = async (metadata: ImageMetadata) => {
    if (!confirm(`Delete "${metadata.filename}"?`)) return;

    try {
      await deleteImageFromCloudStorage(metadata, config);
      setImages(prev => prev.filter(img => img.id !== metadata.id));
      setSelectedImage(null);
    } catch (err) {
      alert(`Failed to delete: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const handleDownload = (metadata: ImageMetadata) => {
    // Open the storage URL in a new tab (will download)
    window.open(metadata.downloadUrl, '_blank');
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleString();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content gallery-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2>🖼️ Image Gallery</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        {/* Stats Bar */}
        {stats && (
          <div className="gallery-stats">
            <span>📸 {stats.totalImages} images</span>
            <span>💾 {formatFileSize(stats.totalSize)}</span>
            <button onClick={loadImages} disabled={loading} className="btn-small">
              🔄 Refresh
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="gallery-filters">
          <input
            type="text"
            placeholder="🔍 Search..."
            value={filters.searchQuery || ''}
            onChange={e => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
            className="filter-input"
          />

          <select
            value={filters.intimacyLevel || ''}
            onChange={e => setFilters(prev => ({
              ...prev,
              intimacyLevel: e.target.value ? parseInt(e.target.value) : undefined
            }))}
            className="filter-select"
          >
            <option value="">All Intimacy Levels</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
              <option key={level} value={level}>Level {level}</option>
            ))}
          </select>

          <select
            value={filters.aspectRatio || ''}
            onChange={e => setFilters(prev => ({ ...prev, aspectRatio: e.target.value || undefined }))}
            className="filter-select"
          >
            <option value="">All Ratios</option>
            <option value="16:9">16:9</option>
            <option value="9:16">9:16</option>
            <option value="1:1">1:1</option>
            <option value="4:3">4:3</option>
            <option value="3:4">3:4</option>
          </select>

          <input
            type="date"
            value={filters.startDate || ''}
            onChange={e => setFilters(prev => ({ ...prev, startDate: e.target.value || undefined }))}
            className="filter-input-small"
            placeholder="Start Date"
          />

          <input
            type="date"
            value={filters.endDate || ''}
            onChange={e => setFilters(prev => ({ ...prev, endDate: e.target.value || undefined }))}
            className="filter-input-small"
            placeholder="End Date"
          />

          <button
            onClick={() => setFilters({})}
            className="btn-small btn-secondary"
          >
            Clear Filters
          </button>

          <div className="view-mode-toggle">
            <button
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'active' : ''}
            >
              ⊞ Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'active' : ''}
            >
              ☰ List
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="gallery-content">
          {loading && <div className="loading-spinner">Loading images...</div>}

          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
              <button onClick={loadImages} className="btn-primary">Retry</button>
            </div>
          )}

          {!loading && !error && filteredImages.length === 0 && (
            <div className="empty-state">
              <p>📭 No images found</p>
              <p className="hint">Generate some images to see them here!</p>
            </div>
          )}

          {!loading && !error && filteredImages.length > 0 && (
            <div className={`gallery-${viewMode}`}>
              {filteredImages.map(metadata => (
                <div
                  key={metadata.id}
                  className="gallery-item"
                  onClick={() => setSelectedImage(metadata)}
                >
                  <img
                    src={metadata.storageUrl}
                    alt={metadata.filename}
                    className="gallery-thumbnail"
                    loading="lazy"
                  />
                  <div className="gallery-item-info">
                    <div className="gallery-item-title">{metadata.conceptName}</div>
                    <div className="gallery-item-meta">
                      Level {metadata.intimacyLevel} • {metadata.aspectRatio}
                    </div>
                    <div className="gallery-item-date">
                      {formatDate(metadata.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <div className="image-preview-overlay" onClick={() => setSelectedImage(null)}>
            <div className="image-preview-content" onClick={e => e.stopPropagation()}>
              <div className="image-preview-header">
                <h3>{selectedImage.conceptName}</h3>
                <button onClick={() => setSelectedImage(null)}>✕</button>
              </div>

              <div className="image-preview-body">
                <img
                  src={selectedImage.storageUrl}
                  alt={selectedImage.filename}
                  className="preview-image"
                />

                <div className="image-preview-metadata">
                  <h4>📋 Details</h4>
                  <dl>
                    <dt>Filename:</dt>
                    <dd>{selectedImage.filename}</dd>

                    <dt>Date:</dt>
                    <dd>{formatDate(selectedImage.timestamp)}</dd>

                    <dt>Intimacy Level:</dt>
                    <dd>Level {selectedImage.intimacyLevel}</dd>

                    <dt>Aspect Ratio:</dt>
                    <dd>{selectedImage.aspectRatio}</dd>

                    <dt>Dimensions:</dt>
                    <dd>{selectedImage.width} × {selectedImage.height} px</dd>

                    <dt>Size:</dt>
                    <dd>{formatFileSize(selectedImage.size)}</dd>

                    <dt>Model:</dt>
                    <dd>{selectedImage.modelId}</dd>

                    {selectedImage.seed && (
                      <>
                        <dt>Seed:</dt>
                        <dd>{selectedImage.seed}</dd>
                      </>
                    )}
                  </dl>

                  <div className="preview-actions">
                    <button
                      onClick={() => handleDownload(selectedImage)}
                      className="btn-primary"
                    >
                      ⬇️ Download
                    </button>
                    <button
                      onClick={() => handleDelete(selectedImage)}
                      className="btn-danger"
                    >
                      🗑️ Delete
                    </button>
                    {onSelectImage && (
                      <button
                        onClick={() => {
                          onSelectImage(selectedImage);
                          onClose();
                        }}
                        className="btn-secondary"
                      >
                        ✨ Use Settings
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-modal {
          max-width: 95vw;
          max-height: 90vh;
          width: 1400px;
          display: flex;
          flex-direction: column;
        }

        .gallery-stats {
          display: flex;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background: #f5f5f5;
          border-radius: 4px;
          margin-bottom: 1rem;
          align-items: center;
        }

        .gallery-stats span {
          font-size: 0.9rem;
          color: #666;
        }

        .gallery-filters {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #ddd;
        }

        .filter-input, .filter-select, .filter-input-small {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 0.9rem;
        }

        .filter-input {
          flex: 1;
          min-width: 200px;
        }

        .filter-select {
          min-width: 150px;
        }

        .filter-input-small {
          width: 140px;
        }

        .view-mode-toggle {
          display: flex;
          gap: 0;
          margin-left: auto;
        }

        .view-mode-toggle button {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          background: white;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .view-mode-toggle button:first-child {
          border-radius: 4px 0 0 4px;
        }

        .view-mode-toggle button:last-child {
          border-radius: 0 4px 4px 0;
          border-left: none;
        }

        .view-mode-toggle button.active {
          background: #007bff;
          color: white;
          border-color: #007bff;
        }

        .gallery-content {
          flex: 1;
          overflow-y: auto;
          min-height: 300px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        .gallery-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .gallery-item {
          cursor: pointer;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          background: white;
        }

        .gallery-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .gallery-thumbnail {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
        }

        .gallery-item-info {
          padding: 0.75rem;
        }

        .gallery-item-title {
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .gallery-item-meta {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.25rem;
        }

        .gallery-item-date {
          font-size: 0.75rem;
          color: #999;
        }

        .empty-state {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .empty-state p {
          margin: 0.5rem 0;
        }

        .empty-state .hint {
          font-size: 0.9rem;
          color: #999;
        }

        .image-preview-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.9);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .image-preview-content {
          background: white;
          border-radius: 8px;
          max-width: 1200px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .image-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #ddd;
        }

        .image-preview-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .image-preview-header button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #666;
        }

        .image-preview-body {
          display: flex;
          overflow: hidden;
        }

        .preview-image {
          flex: 1;
          max-width: 70%;
          object-fit: contain;
          padding: 1rem;
        }

        .image-preview-metadata {
          width: 300px;
          padding: 1.5rem;
          overflow-y: auto;
          border-left: 1px solid #ddd;
        }

        .image-preview-metadata h4 {
          margin: 0 0 1rem 0;
          font-size: 1rem;
        }

        .image-preview-metadata dl {
          margin: 0;
        }

        .image-preview-metadata dt {
          font-weight: 600;
          font-size: 0.85rem;
          color: #666;
          margin-top: 0.75rem;
        }

        .image-preview-metadata dd {
          margin: 0.25rem 0 0 0;
          font-size: 0.9rem;
          color: #333;
        }

        .preview-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .btn-small {
          padding: 0.4rem 0.8rem;
          font-size: 0.85rem;
        }

        .btn-primary, .btn-secondary, .btn-danger {
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: opacity 0.2s;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn-primary:hover, .btn-secondary:hover, .btn-danger:hover {
          opacity: 0.9;
        }

        .loading-spinner, .error-message {
          text-align: center;
          padding: 3rem;
        }
      `}</style>
    </div>
  );
}