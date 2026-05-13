# Travel Guide Design System
*Inspired by Lonely Planet's "The Best Things in Life are Free"*

## Design Philosophy

This design system captures the spirit of exploration, adventure, and cultural discovery. It combines Lonely Planet's iconic aesthetic with modern web design principles to create an engaging travel guide blog experience.

**Core Values:**
- **Adventurous**: Bold colors and typography that inspire wanderlust
- **Accessible**: Clean, readable designs for long-form travel content
- **Authentic**: Imagery and elements that reflect real travel experiences
- **Inviting**: Warm, friendly tone that encourages exploration

---

## Color System

### Primary Colors

```css
/* Lonely Planet Signature Blue/Teal */
--color-primary-900: #0a3d62;  /* Deep ocean blue */
--color-primary-800: #0f4c75;  /* Nautical blue */
--color-primary-700: #1b6ca8;  /* Classic LP blue */
--color-primary-600: #2089dc;  /* Bright travel blue */
--color-primary-500: #3498db;  /* Sky blue */
--color-primary-400: #5dade2;  /* Light sky */
--color-primary-300: #85c1e9;  /* Pale blue */
--color-primary-200: #aed6f1;  /* Soft blue */
--color-primary-100: #d6eaf8;  /* Whisper blue */
--color-primary-50: #ebf5fb;   /* Ice blue */
```

### Secondary Colors (Sunset & Adventure)

```css
/* Warm Sunset Tones */
--color-secondary-900: #b83a00;  /* Deep sunset */
--color-secondary-800: #d84a1b;  /* Burnt orange */
--color-secondary-700: #e67e22;  /* Sunset orange */
--color-secondary-600: #f39c12;  /* Golden hour */
--color-secondary-500: #f8b739;  /* Warm amber */
--color-secondary-400: #fac55e;  /* Soft gold */
--color-secondary-300: #fcd885;  /* Light honey */
--color-secondary-200: #fde8ac;  /* Pale yellow */
--color-secondary-100: #fef3d2;  /* Cream */
--color-secondary-50: #fffbf0;   /* Soft cream */
```

### Accent Colors (Cultural Vibrancy)

```css
/* Vibrant Accents */
--color-accent-coral: #ff6b6b;      /* Coral reef */
--color-accent-emerald: #1abc9c;    /* Tropical waters */
--color-accent-terracotta: #c0504d; /* Earth tones */
--color-accent-sage: #95a57c;       /* Natural greens */
--color-accent-sand: #d4a574;       /* Desert sands */
--color-accent-lavender: #9b59b6;   /* Cultural purple */
```

### Neutral Colors

```css
/* Grays & Neutrals */
--color-neutral-900: #1a1a1a;  /* Almost black */
--color-neutral-800: #2d2d2d;  /* Dark charcoal */
--color-neutral-700: #4a4a4a;  /* Charcoal */
--color-neutral-600: #6b6b6b;  /* Medium gray */
--color-neutral-500: #8c8c8c;  /* Gray */
--color-neutral-400: #adadad;  /* Light gray */
--color-neutral-300: #d1d1d1;  /* Soft gray */
--color-neutral-200: #e8e8e8;  /* Pale gray */
--color-neutral-100: #f5f5f5;  /* Off white */
--color-neutral-50: #fafafa;   /* Almost white */
--color-white: #ffffff;
```

### Semantic Colors

```css
--color-success: #27ae60;   /* Adventure green */
--color-warning: #f39c12;   /* Caution amber */
--color-error: #e74c3c;     /* Alert red */
--color-info: #3498db;      /* Info blue */
```

---

## Typography

### Font Families

```css
/* Headlines - Bold & Adventurous */
--font-display: 'Poppins', system-ui, -apple-system, sans-serif;

/* Body - Clean & Readable */
--font-body: 'Inter', system-ui, -apple-system, sans-serif;

/* Monospace - Technical */
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Type Scale

```css
/* Display Sizes - Hero Headlines */
--text-display-2xl: 4.5rem;    /* 72px */
--text-display-xl: 3.75rem;    /* 60px */
--text-display-lg: 3rem;       /* 48px */

/* Heading Sizes */
--text-heading-xl: 2.25rem;    /* 36px - H1 */
--text-heading-lg: 1.875rem;   /* 30px - H2 */
--text-heading-md: 1.5rem;     /* 24px - H3 */
--text-heading-sm: 1.25rem;    /* 20px - H4 */
--text-heading-xs: 1.125rem;   /* 18px - H5 */

/* Body Sizes */
--text-body-xl: 1.25rem;       /* 20px */
--text-body-lg: 1.125rem;      /* 18px */
--text-body-md: 1rem;          /* 16px - Base */
--text-body-sm: 0.875rem;      /* 14px */
--text-body-xs: 0.75rem;       /* 12px */
```

### Font Weights

```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights

```css
--line-height-tight: 1.2;      /* Headlines */
--line-height-snug: 1.375;     /* Subheadings */
--line-height-normal: 1.5;     /* Body text */
--line-height-relaxed: 1.625;  /* Long-form content */
--line-height-loose: 2;        /* Spacious text */
```

### Letter Spacing

```css
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

---

## Spacing System

```css
/* Base: 4px */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

---

## Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px - Subtle */
--radius-md: 0.5rem;     /* 8px - Cards */
--radius-lg: 0.75rem;    /* 12px - Prominent cards */
--radius-xl: 1rem;       /* 16px - Hero elements */
--radius-2xl: 1.5rem;    /* 24px - Special features */
--radius-full: 9999px;   /* Pills & circles */
```

---

## Shadows

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25);

/* Colored Shadows for Travel Cards */
--shadow-primary: 0 10px 30px rgba(52, 152, 219, 0.2);
--shadow-secondary: 0 10px 30px rgba(230, 126, 34, 0.2);
```

---

## Component Patterns

### Destination Card

**Purpose**: Showcase travel destinations with imagery and key information.

**Anatomy**:
- Hero image (16:9 or 4:3 ratio)
- Destination name (Heading MD, Bold)
- Short description (Body MD)
- Call-to-action button
- Optional: Price tag, rating, or badge

**Style**:
```css
- Background: white
- Border radius: --radius-lg
- Shadow: --shadow-md (hover: --shadow-xl)
- Padding: --space-6
- Image overlay gradient for text readability
```

**States**: Default, Hover (lift + shadow increase), Active

---

### Travel Tip Banner

**Purpose**: Highlight important travel tips and advice.

**Anatomy**:
- Icon (left side)
- Tip text (Body MD)
- Optional action link

**Style**:
```css
- Background: --color-primary-50 or --color-secondary-50
- Border-left: 4px solid --color-primary-600 or --color-secondary-600
- Padding: --space-4
- Border radius: --radius-md
```

---

### Itinerary Timeline

**Purpose**: Display day-by-day travel itineraries.

**Anatomy**:
- Vertical line connector
- Day markers (circles)
- Activity cards for each day
- Time stamps

**Style**:
```css
- Connector line: 2px solid --color-primary-300
- Day markers: --color-primary-600 circles (32px)
- Activity cards: white background, --shadow-sm
- Padding between days: --space-8
```

---

### Hero Section

**Purpose**: Capture attention on landing pages.

**Anatomy**:
- Full-width background image
- Overlay gradient (dark bottom for text)
- Large headline (Display XL or LG)
- Subheadline (Body XL)
- Primary CTA button

**Style**:
```css
- Min height: 60vh
- Overlay: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)
- Text color: white
- Headline: --font-display, --font-weight-bold
```

---

### Navigation Bar

**Purpose**: Primary site navigation.

**Anatomy**:
- Logo (left)
- Navigation links (center)
- Search + User actions (right)

**Style**:
```css
- Background: white with --shadow-sm
- Height: 64px
- Sticky positioning
- Links: --color-neutral-700 (hover: --color-primary-600)
```

---

### Photo Gallery Grid

**Purpose**: Display multiple travel photos.

**Patterns**:
- **Masonry**: Varying heights, natural flow
- **Grid**: 2-4 columns, consistent aspect ratios
- **Featured**: One large + smaller thumbnails

**Style**:
```css
- Gap: --space-4
- Border radius: --radius-md
- Hover: scale(1.05) with smooth transition
- Lightbox on click
```

---

### Feature Icon Card

**Purpose**: Highlight key features or benefits.

**Anatomy**:
- Icon (top, 48x48px)
- Title (Heading SM)
- Description (Body SM)

**Style**:
```css
- Text align: center
- Padding: --space-8
- Icon color: --color-primary-600 or --color-secondary-600
- Background: --color-neutral-50 (optional)
- Border radius: --radius-lg
```

---

### Badge & Pill

**Purpose**: Labels, categories, and tags.

**Anatomy**:
- Text (Body XS or SM, Uppercase)
- Optional icon

**Styles**:
```css
/* Pill (rounded) */
- Border radius: --radius-full
- Padding: --space-1 --space-3
- Font weight: --font-weight-semibold
- Letter spacing: --letter-spacing-wide

/* Badge (rectangular) */
- Border radius: --radius-sm
- Padding: --space-1 --space-2
```

**Variants**: Primary, Secondary, Success, Neutral

---

### Button System

**Variants**:

1. **Primary**: Bold actions
   - Background: --color-primary-600
   - Color: white
   - Hover: --color-primary-700

2. **Secondary**: Supporting actions
   - Background: --color-secondary-600
   - Color: white
   - Hover: --color-secondary-700

3. **Outline**: Subtle actions
   - Border: 2px solid --color-primary-600
   - Color: --color-primary-600
   - Hover: filled

4. **Ghost**: Minimal actions
   - Background: transparent
   - Color: --color-primary-600
   - Hover: --color-primary-50

**Sizes**:
```css
- Small: padding --space-2 --space-4, text --text-body-sm
- Medium: padding --space-3 --space-6, text --text-body-md
- Large: padding --space-4 --space-8, text --text-body-lg
```

**Border radius**: --radius-md

---

## Layout Principles

### Container Widths

```css
--container-sm: 640px;   /* Articles */
--container-md: 768px;   /* Forms */
--container-lg: 1024px;  /* Content */
--container-xl: 1280px;  /* Full layouts */
--container-2xl: 1536px; /* Max width */
```

### Grid System

- **12-column grid** for layouts
- **Gap**: --space-6 (desktop), --space-4 (mobile)
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Content Spacing

- Section padding: --space-16 (desktop), --space-8 (mobile)
- Content blocks: --space-12 between
- Related elements: --space-6 between

---

## Image Treatments

### Aspect Ratios

```css
--aspect-square: 1 / 1;      /* Profile images */
--aspect-landscape: 16 / 9;   /* Hero images */
--aspect-portrait: 3 / 4;     /* Feature images */
--aspect-panorama: 21 / 9;    /* Wide shots */
```

### Effects

- **Hover zoom**: scale(1.1) over 0.3s
- **Overlay gradient**: For text readability
- **Border radius**: --radius-lg for featured images
- **Lazy loading**: Always implement

---

## Motion & Animation

### Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations

```css
--duration-fast: 150ms;      /* Micro-interactions */
--duration-normal: 300ms;    /* Standard transitions */
--duration-slow: 500ms;      /* Emphasized transitions */
```

### Common Transitions

- **Hover states**: 300ms ease-out
- **Page transitions**: 500ms ease-in-out
- **Modal open/close**: 300ms ease-in-out
- **Image zoom**: 300ms ease-out

---

## Accessibility Guidelines

1. **Color Contrast**: Maintain WCAG AA standards (4.5:1 for body text)
2. **Focus States**: Visible 2px outline with --color-primary-600
3. **Alt Text**: Always provide for images
4. **Keyboard Navigation**: Tab order must be logical
5. **Screen Readers**: Use semantic HTML and ARIA labels
6. **Font Size**: Minimum 16px for body text

---

## Usage Examples

### Travel Blog Post Header

```jsx
<header className="relative h-[60vh] overflow-hidden">
  <img src="destination.jpg" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
    <h1 className="text-display-lg font-display font-bold mb-4">
      Hidden Gems of Kyoto
    </h1>
    <p className="text-body-xl font-body max-w-2xl">
      Discover the secret temples and quiet neighborhoods beyond the tourist trail
    </p>
  </div>
</header>
```

### Destination Card Grid

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {destinations.map(dest => (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <img src={dest.image} className="w-full aspect-landscape object-cover" />
      <div className="p-6">
        <h3 className="text-heading-md font-display font-bold text-neutral-900 mb-2">
          {dest.name}
        </h3>
        <p className="text-body-md text-neutral-600 mb-4">
          {dest.description}
        </p>
        <button className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700">
          Explore
        </button>
      </div>
    </article>
  ))}
</div>
```

---

## Design System Notes

- **Photography First**: Always lead with strong, inspiring travel photography
- **White Space**: Don't overcrowd - let content breathe
- **Hierarchy**: Use size and weight to guide the eye
- **Color Purpose**: Primary for actions, Secondary for highlights, Neutrals for content
- **Mobile First**: Design for mobile, enhance for desktop
- **Performance**: Optimize images, lazy load below fold

---

*This design system is optimized for travel content, combining Lonely Planet's adventurous spirit with modern web design best practices. Use it to create engaging, accessible, and inspiring travel experiences.*
