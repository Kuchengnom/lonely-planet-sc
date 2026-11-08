/**
 * Canonical POI (Point of Interest) type definitions
 * 
 * This module centralizes the POI type taxonomy and their visual properties.
 * All components that display POI types should import from here to ensure
 * consistency across the site.
 * 
 * The taxonomy includes 10 distinct types with associated:
 * - label: Human-readable display name
 * - emoji: Visual icon for badges
 * - color: CSS custom property for background/border colors
 */

export interface POITypeConfig {
  label: string;
  emoji: string;
  color: string;
}

/**
 * Canonical POI type definitions
 * 
 * Type values: natural-wonder, easter-egg, urban-sight, technical, 
 *              photo-spot, anomaly, hidden-find, mystery, abandoned-site, observation-point
 */
export const POI_TYPES: Record<string, POITypeConfig> = {
  'natural-wonder': {
    label: 'Natural Wonder',
    emoji: '🏔️',
    color: 'var(--color-category-wonder)',
  },
  'easter-egg': {
    label: 'Easter Egg',
    emoji: '🎄',
    color: 'var(--color-category-hidden)',
  },
  'urban-sight': {
    label: 'Urban Sight',
    emoji: '🏢',
    color: 'var(--color-primary-600)',
  },
  'technical': {
    label: 'Technical',
    emoji: '🛸',
    color: 'var(--color-difficulty-moderate)',
  },
  'photo-spot': {
    label: 'Photo Spot',
    emoji: '📸',
    color: '#db2777',
  },
  'anomaly': {
    label: 'Anomaly',
    emoji: '🌀',
    color: '#0891b2',
  },
  'hidden-find': {
    label: 'Hidden Find',
    emoji: '🗝️',
    color: '#059669',
  },
  'mystery': {
    label: 'Mystery',
    emoji: '🔮',
    color: '#4f46e5',
  },
  'abandoned-site': {
    label: 'Abandoned Site',
    emoji: '🏚️',
    color: '#6b7280',
  },
  'observation-point': {
    label: 'Observation Point',
    emoji: '🔭',
    color: '#7c3aed',
  },
} as const;

/**
 * Type guard for POI type validation
 */
export function isValidPOIType(type: string): type is keyof typeof POI_TYPES {
  return type in POI_TYPES;
}

/**
 * Get POI type configuration by type string
 * Returns undefined if type is not recognized
 */
export function getPOIConfig(type: string): POITypeConfig | undefined {
  return POI_TYPES[type as keyof typeof POI_TYPES];
}