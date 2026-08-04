import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceItem, PortfolioItem, BlogPost, Language } from '../types';

interface SEOHeadProps {
  activeSection: string;
  currentLang: Language;
  selectedService?: ServiceItem | null;
  selectedPortfolioItem?: PortfolioItem | null;
  selectedBlogPost?: BlogPost | null;
}

const SECTION_SEO_DATA: Record<string, { title: string; description: string; keywords: string }> = {
  home: {
    title: 'Namami Creation House | Premium Video Editing, AI Studio & Spiritual Media',
    description: 'Namami Creation House is a world-class creative production studio specializing in 4K video editing, Jainism & Sanatan spiritual content, AI video avatars, and branding.',
    keywords: 'Namami Creation House, video editing agency, spiritual video production, Jainism media, Sanatan videos, AI video avatars, 4K film color grading, brand design'
  },
  about: {
    title: 'About Us | Namami Creation House — Visionary Media House',
    description: 'Learn about Namami Creation House, led by senior creative directors, colorists, and AI prompt engineers crafting high-impact video & digital media.',
    keywords: 'about Namami Creation House, creative directors, video production studio, Jainism media creators, AI prompt engineers'
  },
  'why-choose-us': {
    title: 'Why Choose Namami Creation House | 4K Cinema Quality & Fast Turnaround',
    description: 'Discover why temple trusts, top creators, and luxury brands choose Namami Creation House for 4K color grading, AI voice cloning, and fast project delivery.',
    keywords: '4K cinema quality, fast video turnaround, AI voice cloning, DaVinci Resolve color grading, video editing agency India'
  },
  services: {
    title: 'Creative Services & Production | Namami Creation House',
    description: 'Explore our end-to-end creative services: Spiritual & Temple Content, 4K Video Editing, AI Video Avatars, Graphic Design, Brand Identity, and Web Dev.',
    keywords: 'video editing services, temple content creation, AI video avatars, YouTube thumbnail design, brand identity design, web development'
  },
  industries: {
    title: 'Industries We Serve | Spiritual, Real Estate, E-Commerce & Creators',
    description: 'Tailored video production and brand strategies for Religious Trusts, Real Estate Moguls, E-Commerce Brands, YouTubers, and Tech Startups.',
    keywords: 'religious trust media, real estate video editing, e-commerce promotional videos, YouTuber video editing, startup branding'
  },
  portfolio: {
    title: 'Portfolio & Showcase | Namami Creation House Masterpieces',
    description: 'View our latest 4K video edits, temple documentaries, AI avatar commercials, brand launch reels, and high-converting graphic designs.',
    keywords: 'Namami portfolio, video editing samples, temple documentary reel, AI commercial showcase, graphic design portfolio'
  },
  'social-feeds': {
    title: 'Instagram & YouTube Showcase | @namami_creation_house',
    description: 'Follow our official Instagram grid & YouTube channel for viral reels, color grading showcases, and video production work.',
    keywords: 'Namami Instagram, Namami YouTube, video editing tutorials, before after color grading, viral reels tips'
  },
  testimonials: {
    title: 'Client Reviews & Testimonials | Namami Creation House',
    description: 'Read what temple trustees, CEOs, YouTubers, and luxury jewelry brands say about our video editing and creative production house.',
    keywords: 'Namami client reviews, video editing agency reviews, temple trust testimonials, creative agency rating'
  },
  process: {
    title: 'Our 9-Step Working Process | Namami Creation House',
    description: 'From initial consultation to 4K master delivery and post-launch support, see how we execute projects with pristine quality.',
    keywords: 'video editing workflow, 9 step production process, 4K video delivery, client revision policy'
  },
  blog: {
    title: 'Namami Knowledge Hub | AI Video, Color Grading & Brand Growth',
    description: 'Read expert insights, tutorials, and guides on AI video production, DaVinci Resolve color grading, viral reels strategy, and brand design.',
    keywords: 'AI video production blog, color grading guide, viral reels strategy, thumbnail design tips, Namami blog'
  },
  faq: {
    title: 'Frequently Asked Questions | Namami Creation House',
    description: 'Get answers to common questions about project turnarounds, revision policies, raw footage transfer, and custom quote calculations.',
    keywords: 'video editing FAQ, turnaround time, raw file transfer, revision rules, Namami questions'
  },
  contact: {
    title: 'Contact Us & Instant WhatsApp Quote | Namami Creation House',
    description: 'Connect with Namami Creation House via WhatsApp (+91 8815954802), phone, or email for an instant project quotation.',
    keywords: 'contact Namami Creation House, WhatsApp video editing, hire video editor, studio phone number'
  }
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  activeSection,
  currentLang,
  selectedService,
  selectedPortfolioItem,
  selectedBlogPost
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://namamicreationhouse.com';
  const defaultImage = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&h=630&q=80';

  // Determine current active metadata
  let title = SECTION_SEO_DATA[activeSection]?.title || SECTION_SEO_DATA.home.title;
  let description = SECTION_SEO_DATA[activeSection]?.description || SECTION_SEO_DATA.home.description;
  let keywords = SECTION_SEO_DATA[activeSection]?.keywords || SECTION_SEO_DATA.home.keywords;
  let ogImage = defaultImage;
  let ogType = 'website';
  let canonicalUrl = `${baseUrl}#${activeSection}`;

  // Override metadata if modal items are selected
  if (selectedPortfolioItem) {
    title = `${selectedPortfolioItem.title} | Portfolio Showcase — Namami Creation House`;
    description = selectedPortfolioItem.description;
    ogImage = selectedPortfolioItem.thumbnail || defaultImage;
    canonicalUrl = `${baseUrl}#portfolio-${selectedPortfolioItem.id}`;
  } else if (selectedService) {
    title = `${selectedService.title} Services | Namami Creation House`;
    description = selectedService.shortDesc;
    ogImage = selectedService.image || defaultImage;
    canonicalUrl = `${baseUrl}#service-${selectedService.id}`;
  } else if (selectedBlogPost) {
    title = `${selectedBlogPost.title} | Namami Knowledge Hub`;
    description = selectedBlogPost.excerpt;
    ogImage = selectedBlogPost.image || defaultImage;
    ogType = 'article';
    canonicalUrl = `${baseUrl}#blog-${selectedBlogPost.id}`;
  }

  // Schema.org Structured Data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Namami Creation House',
    alternateName: 'Namami Media Studio',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    image: defaultImage,
    description: 'World-Class Premium Creative Agency — Specializing in Jainism & Sanatan Spiritual Media, 4K Video Editing, AI Video Avatars, and Branding.',
    telephone: '+91 8815954802',
    email: 'namamicreationhouse@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://instagram.com/namami_creation_house',
      'https://youtube.com'
    ],
    knowsAbout: [
      'Video Editing',
      'Jainism Spiritual Media',
      'Sanatan Dharm Videos',
      'AI Video Avatars',
      'Color Grading',
      'Graphic Design',
      'Web Development'
    ]
  };

  const articleSchema = selectedBlogPost
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: selectedBlogPost.title,
        description: selectedBlogPost.excerpt,
        image: selectedBlogPost.image,
        author: {
          '@type': 'Person',
          name: selectedBlogPost.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'Namami Creation House',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/icon.png`
          }
        },
        datePublished: selectedBlogPost.date
      }
    : null;

  return (
    <Helmet htmlAttributes={{ lang: currentLang }}>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Namami Creation House" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Namami Creation House" />
      <meta property="og:locale" content={currentLang === 'hi' ? 'hi_IN' : 'en_US'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};
