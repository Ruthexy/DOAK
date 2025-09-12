# Doak - Commercial Agribusiness Website

A modern, high-performance single-page website for Doak, a commercial agribusiness and food-ag supply-chain management company. Built with React 18, Tailwind CSS 3, and Vite for optimal performance and SEO.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and responsive layout
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and JSON-LD schema
- **Performance**: Lazy loading, optimized images, and efficient code splitting
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Lead Generation**: Contact forms, newsletter signup, and clear CTAs
- **Mobile First**: Fully responsive design that works on all devices

## 📋 Sections

1. **Hero Section** - Compelling headline with tagline and trust indicators
2. **Services** - Four core service areas with detailed descriptions
3. **Case Studies** - Proven results with metrics and testimonials
4. **Testimonials** - Client feedback and social proof
5. **Blog Preview** - Latest insights and industry trends
6. **Contact CTA** - Lead capture forms and FAQ section

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks and concurrent features
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **React Helmet Async** - SEO and meta tag management
- **React Router DOM** - Navigation and routing (ready for multi-page expansion)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd doak
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure custom domain and SSL

## 🎨 Customization

### Brand Colors
Edit the color variables in `src/index.css`:
```css
:root {
  --primary-red: #DC2626;
  --black: #111111;
  --white: #FFFFFF;
  --gray-light: #F5F5F5;
  --gray-medium: #6B7280;
}
```

### Content Updates
- **Hero Section**: Edit `src/sections/Hero.jsx`
- **Services**: Update `src/sections/Services.jsx`
- **Case Studies**: Modify `src/sections/CaseStudies.jsx`
- **Testimonials**: Change `src/sections/Testimonials.jsx`
- **Contact Info**: Update `src/sections/ContactCTA.jsx`

### Images
Place images in `public/img/` directory and update references in components.

## 📊 SEO Configuration

### Meta Tags
Update the meta information in `src/App.jsx`:
```jsx
<title>Doak - Commercial Agribusiness & Food-Ag Supply-Chain Management</title>
<meta name="description" content="Your description here" />
```

### JSON-LD Schema
Modify the organization schema in `src/App.jsx`:
```javascript
"@type": "Organization",
"name": "Doak",
"url": "https://your-domain.com",
// ... other properties
```

## 📧 Form Integration

### Contact Form
The contact form is ready for integration with:
- **Netlify Forms**: Add `netlify` attribute to form
- **Formspree**: Update form action URL
- **Custom Backend**: Replace form submission logic in `ContactForm.jsx`

### Newsletter
Configure newsletter signup in `Newsletter.jsx`:
```javascript
// Add your Mailchimp, ConvertKit, or other service URL
const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:
```bash
# Newsletter service URL
REACT_APP_MAILCHIMP_URL=your-newsletter-service-url

# Analytics (optional)
REACT_APP_GA_ID=your-google-analytics-id
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, email info@doak.com or join our Slack channel.

## 🙏 Acknowledgments

- Tailwind CSS team for the amazing utility framework
- Vite team for the fast build tool
- React team for the powerful UI library
- Unsplash for placeholder images

---

**Ready to transform your agribusiness?** 
Get started today and see the Doak difference!
