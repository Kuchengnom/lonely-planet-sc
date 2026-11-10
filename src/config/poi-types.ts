/**
 * Canonical POI (Point of Interest) type definitions
 * 
 * This module centralizes the POI type taxonomy and their visual properties.
 * All components that display POI types should import from here to ensure
 * consistency across the site.
 * 
 * The taxonomy includes 17 distinct types with associated:
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
 *              photo-spot, anomaly, hidden-find, mystery, abandoned-site, observation-point,
 *              mining, hunting, exploration, mission, landing-zone, habitation, rest-stop,
 *              practical, settlement
 * 
 * Note: Activity and facility types (mining, hunting, etc.) are included as POI variants
 * to provide a unified taxonomy. Components map these to appropriate visual styles.
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
  'mining': {
    label: 'Mining',
    emoji: '⛏️',
    color: 'var(--color-secondary-600)',
  },
  'hunting': {
    label: 'Hunting',
    emoji: '🎯',
    color: 'var(--color-secondary-500)',
  },
  'exploration': {
    label: 'Exploration',
    emoji: '🔭',
    color: 'var(--color-primary-600)',
  },
  'mission': {
    label: 'Mission',
    emoji: '📋',
    color: 'var(--color-success)',
  },
  'landing-zone': {
    label: 'Landing Zone',
    emoji: '🛬',
    color: 'var(--color-primary-500)',
  },
  'habitation': {
    label: 'Habitation',
    emoji: '🏠',
    color: 'var(--color-primary-400)',
  },
  'rest-stop': {
    label: 'Rest Stop',
    emoji: '☕',
    color: 'var(--color-primary-300)',
  },
  'practical': {
    label: 'Practical',
    emoji: '🛠️',
    color: 'var(--color-difficulty-easy)',
  },
  'settlement': {
    label: 'Settlement',
    emoji: '🏙️',
    color: 'var(--color-primary-600)',
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