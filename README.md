# LegendX

A modern Next.js website showcasing cutting-edge technology and AI-driven robotics solutions.

## 🚀 Features

- **Hero Section**: Dynamic video background with compelling messaging
- **Product Showcase**: Interactive product cards with hover effects
- **About Section**: Company information with visual elements
- **Partners Section**: Animated partner carousel
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations

## 📁 Project Structure

```
LegendX/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── page.tsx          # Home page component
│   │   │   └── layout.tsx        # Home page layout
│   │   ├── layout.tsx            # Root layout with Navbar & Footer
│   │   ├── page.tsx              # Root page (redirects to /home)
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Navigation component
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   └── index.ts          # Layout exports
│   │   └── sections/
│   │       ├── HeroSection.tsx   # Hero section with video background
│   │       ├── ProductShowcase.tsx # Product cards section
│   │       ├── AboutSection.tsx  # About company section
│   │       ├── PartnersSection.tsx # Partners carousel
│   │       └── index.ts          # Section exports
│   ├── hooks/
│   │   └── use-media-query.ts    # Media query hook
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   └── types/
│       └── index.ts              # TypeScript type definitions
├── public/
│   ├── logo/
│   │   ├── legendx-logo.svg      # Main logo
│   │   └── footer-logo.svg       # Footer logo
│   ├── product-card-template.png # Product card background
│   └── favicon.ico               # Site favicon
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library (for partners carousel)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🎨 Design System

### Colors
- Primary: `#5E366D` (Purple)
- Secondary: `#EE8900` (Orange)
- Background: `#FFFFFF` (White)
- Text: `#000000` (Black) / `#6B7280` (Gray)

### Typography
- Headings: Bold, responsive sizing
- Body: Regular weight, optimized readability

## 🔧 Configuration

### Next.js Config
- Image optimization with remote patterns for CDN
- Environment variables support
- TypeScript strict mode enabled

### Tailwind Config
- Custom color palette
- Responsive breakpoints
- Animation utilities

## 📄 Pages

- **Home** (`/home`): Main landing page with all sections
- **Root** (`/`): Redirects to home page

## 🎯 Sections

1. **Hero Section**: Video background with call-to-action
2. **Product Showcase**: Interactive product cards
3. **About Section**: Company information with visuals
4. **Partners Section**: Animated partner logos carousel

## 🚀 Deployment

The project is configured for deployment on Vercel with:
- Optimized build process
- Image optimization
- Static generation where possible

## 📝 License

This project is proprietary to Legend Holding Group. 