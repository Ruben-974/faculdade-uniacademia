---
name: VemJunto Mobility
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#424754'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  grid_columns: '12'
  gutter: 16px
  margin: 20px
---

## Brand & Style

The brand personality of this design system is rooted in **Community, Reliability, and Vitality**. It aims to dismantle the friction of travel by fostering a sense of shared purpose and neighborly trust. The target audience includes budget-conscious students, daily commuters, and gig-economy drivers who value efficiency and human connection.

The visual style is **Modern / Approachable**, blending clean structural layouts with soft, organic touchpoints. It avoids the coldness of high-tech "disruptor" aesthetics in favor of a "human-first" interface. Key principles include:
- **Clarity over Cleverness:** Information is presented with high legibility and obvious affordances.
- **Warmth:** Use of soft shadows and generous white space to make the app feel welcoming.
- **Optimism:** Vibrant accents that signify movement and progress.

## Colors

This design system utilizes a palette that balances trust (Blue) with energy (Orange). 

- **Primary (Friendly Blue):** Used for main actions, brand identity, and secure elements. It conveys stability and professionalism.
- **Secondary (Energetic Orange):** Used for highlights, promotional banners, and elements that denote "sharing" or "extra income" to spark interest.
- **Success (Green):** Specifically for completed rides, verified profiles, and payment confirmations to build trust.
- **Neutrals:** A range of Slate grays ensure the UI remains clean and readable, avoiding pitch black to keep the interface feeling light and airy.
- **Backgrounds:** Off-white surfaces differentiate the "page" from the "cards," creating a natural depth without heavy styling.

## Typography

This design system employs **Plus Jakarta Sans** for its friendly, rounded terminals and exceptional legibility. This choice moves away from the corporate rigidity of Inter while maintaining professional clarity.

- **Headlines:** Set with tighter letter-spacing and heavier weights to create a strong visual anchor for screen titles and destination names.
- **Body Text:** Standardized at 16px to ensure accessibility for all age groups. Line heights are generous (1.5x) to prevent eye fatigue during long browsing sessions.
- **Labels:** Used for metadata like "Seats Available" or "Price per mile," utilizing a medium weight to stand out against body text.

## Layout & Spacing

This design system uses a **Fluid Grid** model with a base-8 rhythm to ensure consistency across mobile and web platforms. 

- **Mobile Layout:** A single-column layout with 20px side margins. Cards span the full width of the safe area.
- **Desktop/Tablet Layout:** A 12-column grid. Information is grouped into cards that span 4 to 6 columns depending on content density.
- **Vertical Rhythm:** Elements are separated by "md" (16px) or "lg" (24px) units. Content within a card uses "sm" (12px) to maintain a tight, organized relationship.

## Elevation & Depth

To maintain an approachable and lightweight feel, this design system uses **Tonal Layering** combined with **Ambient Shadows**.

- **Z-0 (Background):** The base layer using the background color hex.
- **Z-1 (Cards/Surfaces):** White surfaces with a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)). This makes elements feel like they are resting gently on the background.
- **Z-2 (Modals/Active States):** Elevated surfaces with a more pronounced shadow to indicate focus and draw the eye.
- **Interactive Depth:** Buttons should use a subtle inner-glow on hover rather than heavy drop shadows to keep the interface looking clean and modern.

## Shapes

The shape language is defined by **Rounded Corners**, reinforcing the "friendly" and "community" attributes of the brand.

- **Primary Containers:** 0.5rem (8px) corner radius for most cards and input fields.
- **Secondary Elements:** 1rem (16px) for larger featured cards or profile containers.
- **Buttons:** 0.5rem (8px) for standard actions, or full pill-shaped for "Join Ride" buttons to make them feel highly clickable.
- **Icons:** Should feature rounded caps and corners to match the UI's softness.

## Components

- **Buttons:** Primary buttons use the Friendly Blue with white text. Secondary buttons use a light-blue tint with blue text. Use large touch targets (minimum 48px height).
- **Ride Cards:** The centerpiece of the app. Features the driver’s profile photo (circular), departure time (Bold H2), and a "Price Tag" badge in the top-right using the Secondary Orange.
- **Input Fields:** Soft-bordered fields with a 1px Slate-200 stroke. On focus, the stroke should change to Friendly Blue with a subtle 2px outer glow.
- **Chips:** Used for ride attributes like "Non-smoking," "Pets welcome," or "Music." Use a light gray background with Slate-700 text.
- **Progressive Disclosure:** Use accordion-style lists for trip details (stops, passenger list) to keep the initial search view uncluttered.
- **Trust Badges:** Verified user icons should be displayed next to names using the Tertiary Green.
- **Community Feed:** A dedicated component for rider/driver reviews, styled as mini-cards with star ratings.