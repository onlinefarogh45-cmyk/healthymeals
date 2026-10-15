# Healthify – Healthy Meals Landing Page

A fully responsive landing page for a healthy meal delivery brand, built with **React Native for Web (Expo)** and **NativeWind (Tailwind CSS)**.

**Live site:** https://YOUR-PROJECT.vercel.app  <!-- replace after deploying -->

## Tech stack

- React Native for Web via Expo (Metro web bundler)
- NativeWind v4 + Tailwind CSS v3 for styling
- react-native-reanimated for subtle motion (hero entrance, scroll fade-in, button press, FAQ expand)
- @expo/vector-icons (Ionicons)
- Deployed on Vercel

## Sections

Navbar · Hero · Stats · About · Meal Plans · Advantages · Pricing · Process · Testimonials · FAQ · Call to action · Footer (plus a floating WhatsApp button).

## Getting started

```bash
git clone <your-repo-url>
cd healthy-meals
npm install
npx expo start --web
```

Open http://localhost:8081. Run `npx expo start --web -c` to clear the Metro cache after changing config files.

> NativeWind v4 requires **Tailwind CSS v3** (pinned in `package.json`). Do not upgrade to Tailwind v4.

## Build

```bash
npx expo export --platform web
```

The static site is written to `dist/`.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel choose **Add New → Project** and import the repository.
3. Vercel reads `vercel.json` (build command `npx expo export --platform web`, output directory `dist`, SPA rewrite). Click **Deploy**.

## Environment variables

None are required. The project is purely frontend and contains no secrets.

## Project structure

```
App.js
src/
  data/          content, navigation and image URLs (single source of truth)
  hooks/         useFadeIn – scroll-triggered fade/slide
  utils/         scrollToSection – smooth scrolling for nav links
  components/
    ui/          Button, Section, SectionHeading, TextLink, Logo, RemoteImage,
                 AccordionItem, AnimatedSection, Container
    cards/       ServiceCard, PlanCard, TestimonialCard
    layout/      Navbar, Footer, WhatsAppButton
    sections/    Hero, Stats, About, MealPlans, Advantages, Pricing,
                 Process, Testimonials, FAQ, CTA
```

## Accessibility and responsiveness

- Mobile-first layouts that reorganise at `sm`, `md` and `lg` breakpoints; navigation collapses into a hamburger menu below 1024px.
- Semantic roles (`navigation`, `header` with levels, `button`, `link`, `contentinfo`), descriptive labels, `expanded` state on the menu and FAQ items, and alt text on meaningful images.
- Visible keyboard focus, hover and pressed states on interactive elements.
- Animations respect the reduced-motion setting.

## Image credits

Photos are loaded from [Unsplash](https://unsplash.com) (see `src/data/images.js` and `src/data/content.js`). Images that fail to load fall back to a neutral placeholder.
