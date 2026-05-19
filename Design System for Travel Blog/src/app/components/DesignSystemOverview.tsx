import { MapPin, Plane, Heart, Star, Calendar, Users, Camera, Coffee } from 'lucide-react';

export function DesignSystemOverview() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        boxShadow: 'var(--shadow-sm)',
        zIndex: 'var(--z-sticky)',
        borderBottom: '1px solid var(--color-neutral-200)',
      }}>
        <div className="container mx-auto px-6 py-4">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-sm)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-900)',
            }}>
              Travel Design System
            </h1>
            <div style={{
              display: 'flex',
              gap: 'var(--space-6)',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'Colors', href: '#colors' },
                { label: 'Typography', href: '#typography' },
                { label: 'Buttons', href: '#buttons' },
                { label: 'Components', href: '#components' },
                { label: 'Images', href: '#images' },
                { label: 'Gallery', href: '#gallery' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-neutral-700)',
                    textDecoration: 'none',
                    transition: 'color var(--duration-fast) var(--ease-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary-600)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-neutral-700)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1620424722820-c86c2672d7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3YW5kZXJsdXN0fGVufDF8fHx8MTc3ODY1OTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative h-full container mx-auto flex flex-col justify-center items-center text-white text-center px-6">
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display-lg)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--line-height-tight)',
            marginBottom: 'var(--space-6)'
          }}>
            Travel Guide Design System
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-xl)',
            maxWidth: '600px',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Inspired by Lonely Planet's "The Best Things in Life are Free"
          </p>
        </div>
      </header>

      <div className="container mx-auto py-16 px-6">
        {/* Color System */}
        <Section title="Color System" id="colors">
          <ColorPalette
            title="Primary Colors (Stanton Cobalt)"
            colors={[
              { name: '50', var: '--color-primary-50' },
              { name: '100', var: '--color-primary-100' },
              { name: '200', var: '--color-primary-200' },
              { name: '300', var: '--color-primary-300' },
              { name: '400', var: '--color-primary-400' },
              { name: '500', var: '--color-primary-500' },
              { name: '600', var: '--color-primary-600' },
              { name: '700', var: '--color-primary-700' },
              { name: '800', var: '--color-primary-800' },
              { name: '900', var: '--color-primary-900' },
            ]}
          />

          <ColorPalette
            title="Secondary Colors (Pyro Magma)"
            colors={[
              { name: '50', var: '--color-secondary-50' },
              { name: '100', var: '--color-secondary-100' },
              { name: '200', var: '--color-secondary-200' },
              { name: '300', var: '--color-secondary-300' },
              { name: '400', var: '--color-secondary-400' },
              { name: '500', var: '--color-secondary-500' },
              { name: '600', var: '--color-secondary-600' },
              { name: '700', var: '--color-secondary-700' },
              { name: '800', var: '--color-secondary-800' },
              { name: '900', var: '--color-secondary-900' },
            ]}
          />

          <div style={{ marginTop: 'var(--space-8)' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-md)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-neutral-900)'
            }}>
              Accent Colors (Cultural Vibrancy)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Coral', var: '--color-accent-coral' },
                { name: 'Emerald', var: '--color-accent-emerald' },
                { name: 'Terracotta', var: '--color-accent-terracotta' },
                { name: 'Sage', var: '--color-accent-sage' },
                { name: 'Sand', var: '--color-accent-sand' },
                { name: 'Lavender', var: '--color-accent-lavender' },
              ].map(color => (
                <div key={color.name} className="text-center">
                  <div
                    style={{
                      backgroundColor: `var(${color.var})`,
                      height: '80px',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-sm)',
                      marginBottom: 'var(--space-2)'
                    }}
                  />
                  <p style={{
                    fontSize: 'var(--text-body-sm)',
                    color: 'var(--color-neutral-700)'
                  }}>
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography" id="typography">
          <div className="space-y-8">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Display Sizes (Poppins)
              </h3>
              <div className="space-y-4">
                <TypeSample size="Display 2XL" cssVar="--text-display-2xl" text="Explore the World" />
                <TypeSample size="Display XL" cssVar="--text-display-xl" text="Explore the World" />
                <TypeSample size="Display LG" cssVar="--text-display-lg" text="Explore the World" />
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Heading Sizes (Poppins)
              </h3>
              <div className="space-y-3">
                <TypeSample size="Heading XL" cssVar="--text-heading-xl" text="Hidden Gems of Southeast Asia" />
                <TypeSample size="Heading LG" cssVar="--text-heading-lg" text="Best Budget Travel Destinations" />
                <TypeSample size="Heading MD" cssVar="--text-heading-md" text="Essential Travel Tips" />
                <TypeSample size="Heading SM" cssVar="--text-heading-sm" text="Packing Guide" />
                <TypeSample size="Heading XS" cssVar="--text-heading-xs" text="Quick Tips" />
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Body Sizes (Inter)
              </h3>
              <div className="space-y-3">
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-xl)',
                    color: 'var(--color-neutral-700)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    Body XL - Travel opens doors to incredible experiences, from ancient temples to bustling markets.
                  </p>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-lg)',
                    color: 'var(--color-neutral-700)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    Body LG - Discover authentic local cuisine and immerse yourself in different cultures.
                  </p>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-md)',
                    color: 'var(--color-neutral-700)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    Body MD - Every journey begins with a single step and a sense of adventure.
                  </p>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-sm)',
                    color: 'var(--color-neutral-700)',
                    lineHeight: 'var(--line-height-normal)'
                  }}>
                    Body SM - Pack light, travel far, and collect memories instead of things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons" id="buttons">
          <div className="space-y-8">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Variants
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="small">Small</Button>
                <Button variant="primary" size="medium">Medium</Button>
                <Button variant="primary" size="large">Large</Button>
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                With Icons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon={<Plane size={18} />}>Book Flight</Button>
                <Button variant="secondary" icon={<MapPin size={18} />}>View Location</Button>
                <Button variant="outline" icon={<Camera size={18} />}>Photo Gallery</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Badges & Pills */}
        <Section title="Badges & Pills" id="badges">
          <div className="space-y-6">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                POI Type Badges (Star Citizen)
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="easter-egg" rounded>🎄 Easter Egg</Badge>
                <Badge variant="natural-wonder" rounded>🏔️ Natural Wonder</Badge>
                <Badge variant="urban-sight" rounded>🏢 Urban Sight</Badge>
                <Badge variant="technical" rounded>🛸 Technical Curiosity</Badge>
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Pills (Rounded)
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary" rounded>Adventure</Badge>
                <Badge variant="secondary" rounded>Budget Friendly</Badge>
                <Badge variant="success" rounded>Popular</Badge>
                <Badge variant="neutral" rounded>Culture</Badge>
                <Badge variant="accent-coral" rounded>Food & Drink</Badge>
                <Badge variant="accent-emerald" rounded>Nature</Badge>
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-neutral-900)'
              }}>
                Badges (Rectangular)
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Must See</Badge>
                <Badge variant="secondary">Local Favorite</Badge>
                <Badge variant="success">Top Rated</Badge>
                <Badge variant="neutral">Historical</Badge>
              </div>
            </div>
          </div>
        </Section>

        {/* Cards */}
        <Section title="Component Patterns" id="components">
          <div className="space-y-12">
            {/* Destination Cards */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Destination Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <DestinationCard
                  title="Kyoto, Japan"
                  description="Ancient temples, zen gardens, and traditional geisha culture"
                  badge="Cultural"
                  rating={4.9}
                  imageUrl="https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLeW90byUyMEphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc3ODY1OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                />
                <DestinationCard
                  title="Bali, Indonesia"
                  description="Tropical paradise with stunning beaches and rice terraces"
                  badge="Adventure"
                  rating={4.8}
                  imageUrl="https://images.unsplash.com/photo-1674976291654-c69978326276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWxpJTIwSW5kb25lc2lhJTIwYmVhY2glMjByaWNlJTIwdGVycmFjZXN8ZW58MXx8fHwxNzc4NjU5NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                />
                <DestinationCard
                  title="Iceland"
                  description="Land of fire and ice, northern lights, and dramatic landscapes"
                  badge="Nature"
                  rating={4.7}
                  imageUrl="https://images.unsplash.com/photo-1634661522215-9441dbd96083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxJY2VsYW5kJTIwbGFuZHNjYXBlJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzc4NjU5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                />
              </div>
            </div>

            {/* Travel Tip Banners */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Travel Tip Banners
              </h3>
              <div className="space-y-4">
                <TravelTipBanner
                  type="info"
                  icon={<Star size={20} />}
                  text="Book accommodations at least 3 months in advance for peak season travel to save up to 40%."
                />
                <TravelTipBanner
                  type="warning"
                  icon={<Calendar size={20} />}
                  text="Monsoon season runs from June to September in Southeast Asia. Plan accordingly for outdoor activities."
                />
                <TravelTipBanner
                  type="success"
                  icon={<Coffee size={20} />}
                  text="Try local street food for authentic cuisine at a fraction of restaurant prices. Look for busy stalls with locals."
                />
              </div>
            </div>

            {/* Feature Icon Cards */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Feature Icon Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FeatureCard
                  icon={<MapPin size={48} />}
                  title="Expert Guides"
                  description="Detailed destination guides written by local experts"
                />
                <FeatureCard
                  icon={<Camera size={48} />}
                  title="Photo Stories"
                  description="Stunning photography from travelers around the world"
                />
                <FeatureCard
                  icon={<Heart size={48} />}
                  title="Curated Lists"
                  description="Hand-picked recommendations for every type of traveler"
                />
                <FeatureCard
                  icon={<Users size={48} />}
                  title="Community"
                  description="Connect with fellow adventurers and share experiences"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Image Treatments */}
        <Section title="Image Treatments & Overlays" id="images">
          <div className="space-y-8">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Hero Image with Gradient Overlay
              </h3>
              <div style={{
                position: 'relative',
                height: '400px',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1619456613769-1cd2c8f6ea90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3YW5kZXJsdXN0fGVufDF8fHx8MTc3ODY1OTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mountain adventure"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'var(--space-8)',
                  color: 'white',
                }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-heading-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--space-3)',
                  }}>
                    Adventure Awaits
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-lg)',
                    maxWidth: '600px',
                    lineHeight: 'var(--line-height-relaxed)',
                  }}>
                    Discover breathtaking landscapes and unforgettable experiences around the world
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Image Cards with Category Overlays
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    url: 'https://images.unsplash.com/photo-1755496333129-adfa1f2421d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMG91dGRvb3J8ZW58MXx8fHwxNzc4NjU5NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    category: 'Hiking',
                    title: 'Mountain Peaks',
                    color: 'var(--color-accent-emerald)',
                  },
                  {
                    url: 'https://images.unsplash.com/photo-1770024598483-b8e109485d7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdHJlZXQlMjBmb29kJTIwbWFya2V0JTIwY3VsdHVyZXxlbnwxfHx8fDE3Nzg2NTk1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    category: 'Culture',
                    title: 'Local Markets',
                    color: 'var(--color-accent-coral)',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'relative',
                      height: '300px',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: 'var(--space-4)',
                      left: 'var(--space-4)',
                    }}>
                      <span style={{
                        display: 'inline-block',
                        padding: 'var(--space-2) var(--space-4)',
                        backgroundColor: item.color,
                        color: 'white',
                        fontSize: 'var(--text-body-sm)',
                        fontWeight: 'var(--font-weight-bold)',
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase',
                        letterSpacing: 'var(--letter-spacing-wide)',
                        borderRadius: 'var(--radius-full)',
                      }}>
                        {item.category}
                      </span>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: 'var(--space-6)',
                      left: 'var(--space-6)',
                      right: 'var(--space-6)',
                      color: 'white',
                    }}>
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-heading-lg)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Photo Gallery */}
        <Section title="Photo Gallery Patterns" id="gallery">
          <div className="space-y-8">
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Grid Layout
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { url: 'https://images.unsplash.com/photo-1681118143075-5f5a10c9c092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3YW5kZXJsdXN0fGVufDF8fHx8MTc3ODY1OTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'City exploration' },
                  { url: 'https://images.unsplash.com/photo-1528364226066-ec76a960030b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMG91dGRvb3J8ZW58MXx8fHwxNzc4NjU5NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Mountain hiking' },
                  { url: 'https://images.unsplash.com/photo-1716732361474-a2a2ccdd504a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwbWFya2V0JTIwY3VsdHVyZXxlbnwxfHx8fDE3Nzg2NTk1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Street food market' },
                  { url: 'https://images.unsplash.com/photo-1639976519358-19cadf2e1d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3YW5kZXJsdXN0fGVufDF8fHx8MTc3ODY1OTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Mountain photography' },
                  { url: 'https://images.unsplash.com/photo-1711948699135-779c6ba1f805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxCYWxpJTIwSW5kb25lc2lhJTIwYmVhY2glMjByaWNlJTIwdGVycmFjZXN8ZW58MXx8fHwxNzc4NjU5NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Rice terraces' },
                  { url: 'https://images.unsplash.com/photo-1643702144048-c16e1e079a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxJY2VsYW5kJTIwbGFuZHNjYXBlJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzc4NjU5NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Northern lights' },
                ].map((photo, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 'var(--radius-md)',
                      aspectRatio: 'var(--aspect-square)',
                      cursor: 'pointer',
                      transition: 'transform var(--duration-normal) var(--ease-out)',
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform var(--duration-normal) var(--ease-out)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-md)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-neutral-900)'
              }}>
                Featured + Thumbnails Layout
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-lg)',
                    aspectRatio: 'var(--aspect-landscape)',
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1639973549199-7e27f244acb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjB3YW5kZXJsdXN0fGVufDF8fHx8MTc3ODY1OTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Road trip adventure"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                      padding: 'var(--space-6)',
                      color: 'white',
                    }}>
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-heading-md)',
                        fontWeight: 'var(--font-weight-bold)',
                        marginBottom: 'var(--space-2)',
                      }}>
                        The Ultimate Road Trip
                      </h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-body-sm)',
                      }}>
                        Exploring remote landscapes by van
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-2 gap-4">
                  {[
                    { url: 'https://images.unsplash.com/photo-1669954791643-bbe3824aaa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxLeW90byUyMEphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc3ODY1OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Traditional architecture' },
                    { url: 'https://images.unsplash.com/photo-1707378545015-2cceaebf57fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGhpa2luZyUyMG5hdHVyZSUyMG91dGRvb3J8ZW58MXx8fHwxNzc4NjU5NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Mountain valley' },
                  ].map((photo, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 'var(--radius-md)',
                        aspectRatio: 'var(--aspect-landscape)',
                      }}
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Spacing */}
        <Section title="Spacing System" id="spacing">
          <div className="space-y-4">
            {[
              { name: 'space-1', size: '4px' },
              { name: 'space-2', size: '8px' },
              { name: 'space-3', size: '12px' },
              { name: 'space-4', size: '16px' },
              { name: 'space-6', size: '24px' },
              { name: 'space-8', size: '32px' },
              { name: 'space-12', size: '48px' },
              { name: 'space-16', size: '64px' },
            ].map(space => (
              <div key={space.name} className="flex items-center gap-4">
                <div
                  style={{
                    width: `var(--${space.name})`,
                    height: '24px',
                    backgroundColor: 'var(--color-primary-500)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                />
                <span style={{
                  fontSize: 'var(--text-body-sm)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-neutral-700)'
                }}>
                  --{space.name} ({space.size})
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Shadows */}
        <Section title="Shadows" id="shadows">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(size => (
              <div key={size} className="text-center">
                <div
                  style={{
                    height: '100px',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: `var(--shadow-${size})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-3)'
                  }}
                >
                  <span style={{
                    fontSize: 'var(--text-body-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-neutral-700)'
                  }}>
                    {size}
                  </span>
                </div>
                <p style={{
                  fontSize: 'var(--text-body-xs)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-neutral-600)'
                }}>
                  shadow-{size}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Real World Example */}
        <Section title="Real World Example: Travel Blog Post" id="example">
          <div style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{
              position: 'relative',
              height: '400px',
            }}>
              <img
                src="https://images.unsplash.com/photo-1699102603938-b83d4f9d70c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxCYWxpJTIwSW5kb25lc2lhJTIwYmVhY2glMjByaWNlJTIwdGVycmFjZXN8ZW58MXx8fHwxNzc4NjU5NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bali rice terraces"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ padding: 'var(--space-12)' }}>
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-4)',
              }}>
                <Badge variant="accent-emerald" rounded>Nature</Badge>
                <Badge variant="secondary" rounded>Budget Travel</Badge>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-heading-xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--space-4)',
                lineHeight: 'var(--line-height-tight)',
              }}>
                A Week in Bali: Rice Terraces, Temples, and Island Life
              </h2>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)',
                paddingBottom: 'var(--space-6)',
                borderBottom: '1px solid var(--color-neutral-200)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}>
                  <Users size={16} style={{ color: 'var(--color-neutral-500)' }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-sm)',
                    color: 'var(--color-neutral-600)',
                  }}>
                    Sarah Chen
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}>
                  <Calendar size={16} style={{ color: 'var(--color-neutral-500)' }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-sm)',
                    color: 'var(--color-neutral-600)',
                  }}>
                    May 10, 2026
                  </span>
                </div>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-lg)',
                color: 'var(--color-neutral-700)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--space-6)',
              }}>
                Bali has long been on my bucket list, and after finally spending a week there, I understand why
                it captivates travelers from around the world. From the emerald rice terraces of Tegallalang to
                the ancient temples of Ubud, every moment felt like stepping into a postcard.
              </p>
              <TravelTipBanner
                type="success"
                icon={<Coffee size={20} />}
                text="Visit the rice terraces early in the morning (around 6-7 AM) to avoid crowds and catch the magical golden hour light."
              />
              <div style={{ marginTop: 'var(--space-8)' }}>
                <Button variant="primary" size="large" icon={<MapPin size={18} />}>
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Border Radius */}
        <Section title="Border Radius" id="radius">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'sm', size: '4px' },
              { name: 'md', size: '8px' },
              { name: 'lg', size: '12px' },
              { name: 'xl', size: '16px' },
              { name: '2xl', size: '24px' },
            ].map(radius => (
              <div key={radius.name} className="text-center">
                <div
                  style={{
                    height: '100px',
                    backgroundColor: 'var(--color-primary-500)',
                    borderRadius: `var(--radius-${radius.name})`,
                    marginBottom: 'var(--space-3)'
                  }}
                />
                <p style={{
                  fontSize: 'var(--text-body-sm)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-neutral-700)'
                }}>
                  radius-{radius.name}
                </p>
                <p style={{
                  fontSize: 'var(--text-body-xs)',
                  color: 'var(--color-neutral-500)'
                }}>
                  {radius.size}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Sample Travel Guide Page */}
      <Section title="Sample Travel Guide Page" id="sample-page">
        <div style={{
          backgroundColor: 'white',
          padding: 'var(--space-12)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)',
        }}>
          <TravelGuidePage />
        </div>
      </Section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-neutral-900)',
        color: 'var(--color-white)',
        padding: 'var(--space-16) 0',
        marginTop: 'var(--space-24)'
      }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              marginBottom: 'var(--space-4)'
            }}>
              Travel Guide Design System
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-sm)',
              color: 'var(--color-neutral-400)'
            }}>
              Inspired by Lonely Planet's "The Best Things in Life are Free"
            </p>
          </div>
          <div style={{
            borderTop: '1px solid var(--color-neutral-700)',
            paddingTop: 'var(--space-6)',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-xs)',
              color: 'var(--color-neutral-500)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              Photography by talented photographers on{' '}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-primary-400)',
                  textDecoration: 'underline',
                }}
              >
                Unsplash
              </a>
              : Claudia Lam, Jeroen van Nierop, Shubhankar Joshi, Leo_Visions, Hiromu Ozaki, Serly Rezkiana,
              Sean Gatz, Pascal Debrunner, Colin Moldenhauer, and more.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components

function Section({ title, id, children }: { title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: 'var(--space-24)' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-heading-xl)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-neutral-900)',
        marginBottom: 'var(--space-8)',
        paddingBottom: 'var(--space-4)',
        borderBottom: '2px solid var(--color-neutral-200)'
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ColorPalette({ title, colors }: { title: string; colors: Array<{ name: string; var: string }> }) {
  return (
    <div style={{ marginBottom: 'var(--space-8)' }}>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-heading-md)',
        fontWeight: 'var(--font-weight-semibold)',
        marginBottom: 'var(--space-4)',
        color: 'var(--color-neutral-900)'
      }}>
        {title}
      </h3>
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
        {colors.map(color => (
          <div key={color.name} className="text-center">
            <div
              style={{
                backgroundColor: `var(${color.var})`,
                height: '60px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-neutral-200)',
                marginBottom: 'var(--space-1)'
              }}
            />
            <p style={{
              fontSize: 'var(--text-body-xs)',
              color: 'var(--color-neutral-600)'
            }}>
              {color.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypeSample({ size, cssVar, text }: { size: string; cssVar: string; text: string }) {
  return (
    <div>
      <p style={{
        fontSize: 'var(--text-body-xs)',
        color: 'var(--color-neutral-500)',
        marginBottom: 'var(--space-2)',
        fontFamily: 'var(--font-mono)'
      }}>
        {size}
      </p>
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: `var(${cssVar})`,
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-neutral-900)',
        lineHeight: 'var(--line-height-tight)'
      }}>
        {text}
      </p>
    </div>
  );
}

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function Button({ variant, size = 'medium', icon, children }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--font-weight-semibold)',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'all var(--duration-normal) var(--ease-out)',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
  };

  const sizeStyles = {
    small: {
      padding: 'var(--space-2) var(--space-4)',
      fontSize: 'var(--text-body-sm)',
    },
    medium: {
      padding: 'var(--space-3) var(--space-6)',
      fontSize: 'var(--text-body-md)',
    },
    large: {
      padding: 'var(--space-4) var(--space-8)',
      fontSize: 'var(--text-body-lg)',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-primary-600)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary-600)',
      color: 'white',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-600)',
      border: '2px solid var(--color-primary-600)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-600)',
    },
  };

  return (
    <button style={{ ...baseStyles, ...sizeStyles[size], ...variantStyles[variant] }}>
      {icon}
      {children}
    </button>
  );
}

interface BadgeProps {
  variant: 'primary' | 'secondary' | 'success' | 'neutral' | 'accent-coral' | 'accent-emerald' | 'easter-egg' | 'natural-wonder' | 'urban-sight' | 'technical';
  rounded?: boolean;
  children: React.ReactNode;
}

function Badge({ variant, rounded = false, children }: BadgeProps) {
  const variantColors = {
    primary: { bg: 'var(--color-primary-100)', text: 'var(--color-primary-700)' },
    secondary: { bg: 'var(--color-secondary-100)', text: 'var(--color-secondary-700)' },
    success: { bg: '#d1fae5', text: '#065f46' },
    neutral: { bg: 'var(--color-neutral-200)', text: 'var(--color-neutral-700)' },
    'accent-coral': { bg: '#ffe4e6', text: '#9f1239' },
    'accent-emerald': { bg: '#d1fae5', text: '#047857' },
    // SC-specific POI types
    'easter-egg': { bg: '#7c3aed', text: '#ffffff' },
    'natural-wonder': { bg: '#059669', text: '#ffffff' },
    'urban-sight': { bg: 'var(--color-primary-600)', text: '#ffffff' },
    'technical': { bg: '#d97706', text: '#ffffff' },
  };

  const colors = variantColors[variant];

  return (
    <span style={{
      display: 'inline-block',
      padding: 'var(--space-1) var(--space-3)',
      backgroundColor: colors.bg,
      color: colors.text,
      fontSize: 'var(--text-body-xs)',
      fontWeight: 'var(--font-weight-semibold)',
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--letter-spacing-wide)',
      borderRadius: rounded ? 'var(--radius-full)' : 'var(--radius-sm)',
    }}>
      {children}
    </span>
  );
}

interface DestinationCardProps {
  title: string;
  description: string;
  badge: string;
  rating: number;
  imageUrl: string;
}

function DestinationCard({ title, description, badge, rating, imageUrl }: DestinationCardProps) {
  return (
    <article style={{
      backgroundColor: 'white',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      transition: 'all var(--duration-normal) var(--ease-out)',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      <div style={{
        height: '200px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 'var(--space-4)',
          left: 'var(--space-4)',
        }}>
          <Badge variant="primary" rounded>{badge}</Badge>
        </div>
      </div>
      <div style={{ padding: 'var(--space-6)' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-heading-md)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-neutral-900)',
          marginBottom: 'var(--space-2)',
        }}>
          {title}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)',
          marginBottom: 'var(--space-3)',
        }}>
          <Star size={16} fill="var(--color-secondary-600)" color="var(--color-secondary-600)" />
          <span style={{
            fontSize: 'var(--text-body-sm)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-neutral-700)',
          }}>
            {rating}
          </span>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body-md)',
          color: 'var(--color-neutral-600)',
          lineHeight: 'var(--line-height-relaxed)',
          marginBottom: 'var(--space-4)',
        }}>
          {description}
        </p>
        <Button variant="primary" size="medium">Explore</Button>
      </div>
    </article>
  );
}

interface TravelTipBannerProps {
  type: 'info' | 'warning' | 'success';
  icon: React.ReactNode;
  text: string;
}

function TravelTipBanner({ type, icon, text }: TravelTipBannerProps) {
  const typeStyles = {
    info: {
      bg: 'var(--color-primary-50)',
      border: 'var(--color-primary-600)',
      icon: 'var(--color-primary-600)',
    },
    warning: {
      bg: 'var(--color-secondary-50)',
      border: 'var(--color-secondary-600)',
      icon: 'var(--color-secondary-600)',
    },
    success: {
      bg: '#d1fae5',
      border: '#059669',
      icon: '#059669',
    },
  };

  const styles = typeStyles[type];

  return (
    <div style={{
      backgroundColor: styles.bg,
      borderLeft: `4px solid ${styles.border}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
    }}>
      <div style={{ color: styles.icon, flexShrink: 0 }}>
        {icon}
      </div>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-md)',
        color: 'var(--color-neutral-700)',
        lineHeight: 'var(--line-height-relaxed)',
        margin: 0,
      }}>
        {text}
      </p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div style={{
      backgroundColor: 'var(--color-neutral-50)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      textAlign: 'center',
    }}>
      <div style={{
        color: 'var(--color-primary-600)',
        marginBottom: 'var(--space-4)',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {icon}
      </div>
      <h4 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-heading-sm)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-neutral-900)',
        marginBottom: 'var(--space-2)',
      }}>
        {title}
      </h4>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-sm)',
        color: 'var(--color-neutral-600)',
        lineHeight: 'var(--line-height-normal)',
      }}>
        {description}
      </p>
    </div>
  );
}

// Travel Guide Page Component
function TravelGuidePage() {
  return (
    <div>
      {/* Page Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-8)',
        paddingBottom: 'var(--space-6)',
        borderBottom: '3px solid var(--color-primary-600)',
      }}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-2)',
          }}>
            <MapPin size={24} style={{ color: 'var(--color-primary-600)' }} />
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'var(--color-neutral-900)',
              margin: 0,
            }}>
              KYOTO
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-lg)',
            color: 'var(--color-neutral-600)',
            margin: 0,
          }}>
            Japan's cultural heart
          </p>
        </div>
        <div style={{
          backgroundColor: 'var(--color-secondary-50)',
          padding: 'var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-heading-md)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-secondary-700)',
          }}>
            $50-80
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-body-xs)',
            color: 'var(--color-neutral-600)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wide)',
          }}>
            Per Day
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: 'var(--aspect-landscape)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1614334342593-656fdf19525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLeW90byUyMEphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc3ODY1OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Kyoto temple"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Introduction */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-lg)',
              color: 'var(--color-neutral-700)',
              lineHeight: 'var(--line-height-relaxed)',
              marginBottom: 'var(--space-4)',
            }}>
              Ancient capital of Japan for over a millennium, Kyoto is a living museum where traditional wooden
              machiya houses line narrow streets, and over 2,000 temples and shrines preserve centuries of history.
              Despite its reputation as an expensive destination, countless free and budget-friendly experiences
              await those willing to explore.
            </p>
          </div>

          {/* Top Free Experiences */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-lg)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-primary-700)',
              marginBottom: 'var(--space-6)',
            }}>
              TOP FREE EXPERIENCES
            </h3>
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Fushimi Inari Shrine',
                  description: 'Walk through thousands of vermillion torii gates winding up the mountainside. This iconic shrine is free to enter and explore at any time, with the hike taking 2-3 hours to reach the summit.',
                  icon: '⛩️',
                },
                {
                  number: '2',
                  title: 'Philosopher\'s Path',
                  description: 'Stroll along this peaceful canal-side walkway lined with cherry trees. The 2km path connects several temples and is especially stunning during cherry blossom season in early April.',
                  icon: '🌸',
                },
                {
                  number: '3',
                  title: 'Nishiki Market',
                  description: 'Browse through this narrow shopping street known as "Kyoto\'s Kitchen." While food costs money, wandering and watching vendors prepare traditional ingredients is free entertainment.',
                  icon: '🏮',
                },
              ].map((item) => (
                <div
                  key={item.number}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    backgroundColor: 'var(--color-neutral-50)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--color-primary-600)',
                  }}
                >
                  <div style={{
                    fontSize: '2rem',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-2)',
                    }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        backgroundColor: 'var(--color-primary-600)',
                        color: 'white',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-body-sm)',
                        fontWeight: 'var(--font-weight-bold)',
                      }}>
                        {item.number}
                      </span>
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-heading-sm)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-neutral-900)',
                        margin: 0,
                      }}>
                        {item.title}
                      </h4>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-md)',
                      color: 'var(--color-neutral-700)',
                      lineHeight: 'var(--line-height-relaxed)',
                      margin: 0,
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1669954791643-bbe3824aaa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxLeW90byUyMEphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc3ODY1OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Traditional architecture"
              style={{
                width: '100%',
                aspectRatio: 'var(--aspect-square)',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1711372722468-5fa032b56bc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxLeW90byUyMEphcGFuJTIwdGVtcGxlfGVufDF8fHx8MTc3ODY1OTUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Temple visit"
              style={{
                width: '100%',
                aspectRatio: 'var(--aspect-square)',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
              }}
            />
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <div style={{
            backgroundColor: 'var(--color-surface-paper)',
            borderLeft: '4px solid var(--color-primary-600)',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-sm)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-primary-800)',
              marginBottom: 'var(--space-4)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
            }}>
              Quick Facts
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Population', value: '1.5 million' },
                { label: 'Best Time', value: 'Mar-May, Sep-Nov' },
                { label: 'Language', value: 'Japanese' },
                { label: 'Currency', value: 'Japanese Yen (¥)' },
              ].map((fact) => (
                <div key={fact.label}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-xs)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-primary-700)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--letter-spacing-wider)',
                    marginBottom: 'var(--space-1)',
                  }}>
                    {fact.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-md)',
                    color: 'var(--color-neutral-800)',
                  }}>
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Tips */}
          <div style={{
            backgroundColor: 'var(--color-secondary-50)',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--color-secondary-600)',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-sm)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-secondary-800)',
              marginBottom: 'var(--space-4)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}>
              <span>💰</span>
              BUDGET TIPS
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}>
              {[
                'Buy a one-day bus pass (¥700) for unlimited city travel',
                'Visit temples early morning to avoid crowds and entrance fees',
                'Eat at standing sushi bars for quality at half the price',
                'Stay in guesthouses outside tourist areas',
              ].map((tip, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-body-sm)',
                    color: 'var(--color-neutral-700)',
                    lineHeight: 'var(--line-height-relaxed)',
                    paddingLeft: 'var(--space-4)',
                    position: 'relative',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--color-secondary-600)',
                    fontWeight: 'var(--font-weight-bold)',
                  }}>
                    •
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Getting Around */}
          <div style={{
            backgroundColor: 'var(--color-neutral-50)',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-sm)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-800)',
              marginBottom: 'var(--space-4)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
            }}>
              Getting Around
            </h4>
            <div className="space-y-3">
              {[
                { icon: '🚌', label: 'City Bus', detail: '¥230 per ride' },
                { icon: '🚇', label: 'Subway', detail: '¥220-360' },
                { icon: '🚲', label: 'Bicycle Rental', detail: '¥1000/day' },
              ].map((transport) => (
                <div
                  key={transport.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                  }}
                >
                  <span style={{ fontSize: '1.5rem' }}>{transport.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-neutral-800)',
                    }}>
                      {transport.label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-body-xs)',
                      color: 'var(--color-neutral-600)',
                    }}>
                      {transport.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local Tip */}
          <div style={{
            backgroundColor: 'var(--color-accent-emerald)',
            color: 'white',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-heading-sm)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--space-3)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
            }}>
              <Star size={20} />
              LOCAL TIP
            </h4>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body-sm)',
              lineHeight: 'var(--line-height-relaxed)',
              margin: 0,
            }}>
              Wake up early to experience Kyoto at its most magical. The city transforms before 7am when
              temples are quiet and locals sweep the streets in traditional dress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
