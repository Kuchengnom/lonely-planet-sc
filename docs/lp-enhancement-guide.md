---

# 🌟 LONELY PLANET STAR CITIZEN ENHANCEMENT GUIDE

## New Components Available

### 1. WhereToDock.astro
**Purpose**: Accommodation and docking section for "Where to Stay" equivalent

**Categories**:
- `landing-zone` - 🛬 Official spaceports and landing areas
- `habitation` - 🏠 Living quarters, bunkers, settlements
- `rest-stop` - ☕ Temporary shelters, emergency havens

**Usage**:
```md
<WhereToDock title="Lorville Workers District " category="habitation" image="/images/hurston/workers-hab.webp" imageAlt="Basic hab units in Lorville">
Description of accommodation options, pricing, atmosphere, and practical details.
</WhereToDock>
```

### 2. EatingDrinking.astro
**Purpose**: "Where to Eat & Drink" recommendations

**Usage**:
```md
<EatingDrinking number={1}>
**Establishment Name** — Brief description of the venue. What to expect, specialties, atmosphere, pricing, opening hours (if relevant), and local tips.
</EatingDrinking>
```

### 3. ActivityEntry.astro
**Purpose**: "What to Do" section for activities, missions, and adventures

**Categories**:
- `mining` - ⛏️ Mining operations and opportunities
- `hunting` - 🎯 Combat/hunting activities
- `exploration` - 🔭 Sites to discover and explore
- `mission` - 📋 Available missions and jobs

**Usage**:
```md
<ActivityEntry title="Mining at Kudre Ore Mine" category="mining" image="/images/aberdeen/mining-op.webp" imageAlt="Miners working at an exposed ore face">
Detailed description of the activity, requirements, equipment needed, expected rewards, and challenges.
</ActivityEntry>
```

---

## Suggested Planet Guide Structure

### For Habited Planets (Hurston, ArcCorp, MicroTech):

```md
## Where to Dock & Sleep
<WhereToDock title="..." category="landing-zone" ...>
<WhereToDock title="..." category="habitation" ...>
<WhereToDock title="..." category="rest-stop" ...>

## Where to Eat & Drink
<EatingDrinking number={1}>...</EatingDrinking>
<EatingDrinking number={2}>...</EatingDrinking>
<EatingDrinking number={3}>...</EatingDrinking>

## What to Do
<ActivityEntry title="..." category="mission" ...>
<ActivityEntry title="..." category="mining" ...>
<ActivityEntry title="..." category="hunting" ...>
```

### For Moons/Terrain Bodies (Yela, Daymar):

```md
## Where to Dock & Sleep
<WhereToDock title="..." category="landing-zone" ...>
<WhereToDock title="..." category="habitation" ...>

## Where to Eat & Drink
<EatingDrinking number={1}>...</EatingDrinking>
<EatingDrinking number={2}>...</EatingDrinking>

## What to Do
<ActivityEntry title="..." category="exploration" ...>
<ActivityEntry title="..." category="mining" ...>
```

---

## Content Guidelines

### Where to Dock & Sleep
- **Tone**: Practical, cautionary yet encouraging
- **Details**: Location, cost (if any), facilities available, who operates it, atmosphere/reputation
- **Safety**: Emphasize security measures, backup options, emergency plans
- **Lonely Planet style**: Include local color, operator personalities, "insider" knowledge

### Where to Eat & Drink
- **Tone**: Candid, descriptive, experienced traveler perspective
- **Details**: What to expect, specialties worth trying, what to avoid, pricing tiers
- **Atmosphere**: Describe the clientele, typical conversations,Safety/security concerns
- **Reality checks**: Be honest about quality vs convenience trade-offs

### What to Do
- **Tone**: Action-oriented, preparation-focused, reward-conscious
- **Details**: What exactly the activity involves, time commitment, skill level required
- **Equipment**: What gear/ship/classification is needed
- **Returns**: Expected financial rewards, experience gains, story potential
- **Risks**: Danger level, legal complications, environmental hazards

---

## Game-Specific Adaptations

### Instead of "Where to Stay" use:
- "Where to Dock & Sleep" - Landing zones, hab units, rest stops
- Focus on ship berths, life support recharge points, repair facilities

### Instead of "Where to Eat" use:
- "Where to Eat & Drink" - Cantinas, bars, food vendors, ship provisions
- Include shipboard ration reality vs. establishment quality

### Instead of "Activities" use:
- "What to Do" - Mining operations, bounty hunting, exploration missions
- Focus on in-game activities that provide gameplay value
- Include mission types, earning potential, skill progression

### Additional Sections:
- "Mining Spots" - Specific locations with rich ore deposits
- "Hunting Grounds" - Areas for combat, bounty hunting, wildlife
- "Job Board" - Available mission types and typical rewards
- "Survival Guide" - Environmental challenges and preparation needs

---

## Image Placeholders

Since we're using placeholder images, ensure:
- **Alt text** is descriptive even before images exist
- **Image paths** follow the pattern: `/images/[planet]/[location].webp`
- **Categories** are consistent with content types
- **Visual hierarchy** matches professional travel guides

---

## Integration Strategy

### Quick Start:
1. Pick one planet/moon guide to enhance (start with Daymar - ✅ COMPLETED)
2. Add the new import statements at the top
3. Insert new sections before the existing "Getting Around" section
4. Maintain current formatting and tone consistency
5. Test rendering with the new components

### Content Sources:
- Use existing hidden locations research for attraction entries
- Add practical mission/mission activity details from game knowledge
- Invent plausible dining/docking options that match the established lore
- Keep factual accuracy where game data exists, use creative writing where gaps exist

### Quality Control:
- Maintain the distinctive Lonely Planet voice
- Keep descriptions detailed but concise
- Balance "exciting" with "dangerous" appropriately
- Ensure all additions feel integrated, not tacked on

---

## Next Steps for Integration

1. **Hurston Enhancement**: Focus on Workers District accommodations, M&V's Bar details, strip mine missions
2. **Yela Enhancement**: GrimHEX bunkers, crystal cave tourism, asteroid mining ops
3. **ArcCorp Enhancement**: Area18 hab units, Cubby Blast as combat training ground
4. **MicroTech Enhancement**: Port Tressler dock services, cryovolcano observation missions

---

*This enhancement guide makes Lonely Planet: Star Citizen feel more like a real travel guide while maintaining the game context and playfulness that makes Star Citizen unique.*