---
name: Precision Enterprise Asset Architecture
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#767680'
  outline-variant: '#c6c5d0'
  surface-tint: '#525c8a'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0c1843'
  on-primary-container: '#7781b2'
  inverse-primary: '#bac4f9'
  secondary: '#3a49d8'
  on-secondary: '#ffffff'
  secondary-container: '#5565f2'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001552'
  on-tertiary-container: '#607de8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#bac4f9'
  on-primary-fixed: '#0c1843'
  on-primary-fixed-variant: '#3a4471'
  secondary-fixed: '#dfe0ff'
  secondary-fixed-dim: '#bdc2ff'
  on-secondary-fixed: '#000865'
  on-secondary-fixed-variant: '#1e2fc3'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001552'
  on-tertiary-fixed-variant: '#193ca7'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  code-sm:
    fontFamily: Inter
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
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style
The design system reflects operational authority, technical clarity, and precision-engineered reliability tailored for large-scale enterprise asset tracking and inventory lifecycle management. Built for procurement officers, operations managers, and warehouse controllers, the interface conveys absolute data integrity, effortless scan-ability, and structured calm across dense analytical workflows.

The visual style is **Corporate / Modern High-Density**, defined by:
- Razor-sharp surface hierarchies anchored by structural slate dividers (`#E2E8F0`).
- Deep oceanic navy tones lending weight and governance, paired with electric royal blues for focused interactive pathways.
- Micro-elevations and balanced corner curvature (`rounded-xl` / 12–16px) that soften structural rigidity without sacrificing high-density utility.
- Purpose-driven status telemetry that immediately communicates operational states: healthy asset pools, scheduled maintenance, and critical lifespans.

## Colors
The palette balances authoritative deep darks, high-energy navigational blues, and pristine industrial neutrals to optimize data density and operational clarity.

### Primary Palette
- **Primary Deep Navy (`#091540`)**: Used for persistent structural shells, top-level navigation rails, high-contrast headings, and dominant brand anchors.
- **Secondary Royal Blue (`#1B2CC1`)**: The active primary action color; powers interactive controls, primary buttons, active tab indicators, and critical selected states.
- **Soft Cobalt (`#7692FF`)**: Interactive supporting accent; powers secondary links, focused outline rings, and secondary metric highlights.
- **Ice Mist Soft Blue (`#ABD2FA`)**: Low-intensity informational tint; serves as subtle container fills, selection row accents, badge backgrounds, and metric panel undertones.

### Neutral & Surface Palette
- **Canvas Base (`#F8FAFC`)**: Cool, glare-reducing application background.
- **Surface Elevation (`#FFFFFF`)**: Pure white surfaces for cards, analytical modules, data grid panels, and modal dialogs.
- **Structural Border (`#E2E8F0`)**: Crisp, 1px geometric delineator for container bounds, table dividers, and input strokes.
- **Muted Foreground (`#64748B`)**: Secondary typography, inactive states, column headers, and helper descriptions.
- **Deep Text Foreground (`#0F172A`)**: High-contrast body copy and dense alphanumeric data values.

### Functional Status System
- **Operational / Healthy (Emerald)**: `#059669` (Solid), `#ECFDF5` (Surface tint). Indicates verified assets, active assignments, and optimal operation.
- **Maintenance / Warning (Amber)**: `#D97706` (Solid), `#FFFBEB` (Surface tint). Flags maintenance due within 30 days, low stock thresholds, and inspection pending.
- **Critical / Overdue (Rose)**: `#E11D48` (Solid), `#FFF1F2` (Surface tint). Highlights decommission risks, missing telemetry, broken assets, and depleted stock.
- **In-Repair / Transit (Sky)**: `#0284C7` (Solid), `#F0F9FF` (Surface tint). Marks active workshop repairs, intra-facility transfers, and custody handoffs.

## Typography
The typographic architecture pairs the balanced, open geometry of **Plus Jakarta Sans** for headlines and brand structural zones with the high-legibility, neutral clarity of **Inter** for dense tabular data, metadata indicators, and form interfaces.

- **Tabular Figures**: Tabular numbers (`tnum` / font-variant-numeric: tabular-nums) are strictly enforced across all data tables, serial numbers, balance sheets, and SKU counts to ensure vertical alignment.
- **Serial & Barcode Identifiers**: Tag labels and SKU strings leverage uppercase semi-bold rendering with slight letter-spacing (`+0.04em`) to avoid ambiguity between characters (e.g., `0` vs `O`, `1` vs `I`).
- **Hierarchy Ratios**: Restrained size scaling ensures that dashboards balance maximum information density without sacrificing visual scan order.

## Layout & Spacing
The layout model employs a responsive, fluid enterprise grid built on a disciplined 4px base increment (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 12px, `space-lg` = 16px, `space-xl` = 24px).

### Grid and Viewport Architecture
- **Desktop (>= 1280px)**: A 12-column fluid grid system with `1.5rem` (24px) gutters, `2rem` outer page margins, and an optional collapsible 240px vertical sidebar navigation unit.
- **Tablet (768px – 1279px)**: An 8-column layout utilizing `1rem` (16px) gutters and `1.5rem` side margins; sub-navbars collapse into segmented dropdown bars or slide-over drawer drawers.
- **Mobile (< 768px)**: A 4-column layout with `0.75rem` gutters and `1rem` margins. Analytical cards stack vertically; data grids shift from columnar formats into card-based key-value summaries.

### Density Rhythm
The system prioritizes high-density compactness. Metric cards and control bars use tight inner paddings (`space-md` to `space-lg`), while macro-sections are partitioned with crisp 1px borders paired with `space-xl` element spacing to maintain air and focus.

## Elevation & Depth
Depth is maintained through structural surface boundaries and subtle, low-opacity ambient micro-elevations rather than heavy blur planes. This avoids visual fatigue in screens showing hundreds of asset entries simultaneously.

- **Level 0 (Flat Canvas)**: `#F8FAFC` canvas plane with zero elevation.
- **Level 1 (Card & Module Layer)**: Pure white `#FFFFFF` surface bordered with 1px solid `#E2E8F0`, underpinned by a soft ambient shadow: `0 1px 3px 0 rgba(9, 21, 64, 0.04), 0 1px 2px -1px rgba(9, 21, 64, 0.02)`.
- **Level 2 (Dropdowns, Popovers & Hover Cards)**: Elevated `#FFFFFF` plane, 1px solid `#E2E8F0`, with a directional shadow: `0 4px 6px -1px rgba(9, 21, 64, 0.07), 0 2px 4px -2px rgba(9, 21, 64, 0.05)`.
- **Level 3 (Modal Dialogs & Command Bars)**: Centered interactive layers elevated with `0 20px 25px -5px rgba(9, 21, 64, 0.12), 0 8px 10px -6px rgba(9, 21, 64, 0.08)` and backed by a `#091540` backdrop with 45% opacity.

## Shapes
The design system utilizes roundedness level **2**, striking an intentional balance between enterprise software rigor and modern software accessibility:

- **Standard Inputs, Badges, Table Rows & Small Buttons**: `0.375rem` (6px) to `0.5rem` (8px) for snug fit in compact layouts.
- **Data Cards, Inventory Modules & Panels**: `rounded-xl` (`1rem` / 16px) creates discrete, friendly modular cards that separate distinct analytical datasets.
- **Modal Windows & Flyouts**: `1rem` (16px) with clean cut lines.
- **Status Pills & Indicators**: Fully curved `rounded-full` (`9999px`) to immediately distinguish categorical telemetry from rectangular input fields.

## Components

### Buttons
- **Primary**: Solid Royal Blue (`#1B2CC1`) fill with white text, crisp 1px tone-on-tone border, 8px radius (`space-sm`), and a subtle hover shift to `#142299`. Focused state features an outer halo of `#7692FF` at 30% opacity.
- **Secondary / Outline**: Clean `#FFFFFF` fill with `#091540` text, surrounded by 1px `#E2E8F0` stroke. Hovers transition to `#F8FAFC` background with `#CBD5E1` border.
- **Ghost / Tertiary**: Transparent fill, `#091540` or `#64748B` typography, transitioning to an `#ABD2FA` 20% opacity wash on pointer interaction.

### Badges & Status Telemetry
Badges represent inventory conditions (SKU lifecycle, maintenance status, tracking validation) via high-legibility dual-tone combinations:
- Height fixed to 22px, padding `0 8px`, `rounded-full`, with 11px uppercase bold typography.
- **Active / Verified**: Emerald `#ECFDF5` background, `#047857` label, accompanied by a 6px pulsing emerald dot.
- **Warning / Inspection**: Amber `#FFFBEB` background, `#B45309` label.
- **Critical / Overdue**: Rose `#FFF1F2` background, `#BE123C` label.
- **In-Repair / Transit**: Sky `#F0F9FF` background, `#0369A1` label.

### Data Tables & Asset Grids
- **Header Cells**: 36px height, uppercase 11px bold text (`#64748B`), `#F8FAFC` background, 1px solid bottom border (`#E2E8F0`).
- **Data Rows**: 48px height for regular density (40px compact), `#FFFFFF` base, bottom border 1px `#E2E8F0`. Hover state triggers an instant smooth transition to `#F8FAFC`. Selected rows render with a 15% tint of Ice Mist (`#ABD2FA`) and a 2px left highlight indicator in Royal Blue (`#1B2CC1`).
- **Numerics & Metadata**: Inter font with `tabular-nums` aligned right; asset identifiers and MAC/RFID hashes rendered in muted monospace badge blocks.

### Input Fields & Search Bars
- Background `#FFFFFF`, 1px solid border `#E2E8F0`, 8px corner radius.
- Height standardized to 38px (medium) and 32px (compact data entry).
- Focused state replaces border with `#1B2CC1` and applies a 2px outer ring in `#7692FF` with 25% opacity.
- Asset barcode scan triggers include integrated right-aligned icon buttons within the input perimeter.

### Cards & Analytical Panels
- Container: `#FFFFFF` surface, 16px corner radius (`rounded-xl`), 1px solid `#E2E8F0` stroke, micro-elevation shadow.
- Header: Divided by a 1px baseline stroke, featuring a title in Plus Jakarta Sans (15px semibold) accompanied by an icon or contextual status badge.