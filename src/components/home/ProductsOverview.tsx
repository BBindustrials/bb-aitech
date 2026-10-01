/* eslint-disable react-hooks/immutability */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import WaitlistModal from '../common/WaitlistModal';
import './ProductsOverview.css';

// ---- JustCBT AI screenshots -----------------------------------------
import justCbtHome from '../../assets/projects/justcbt/home.png';
import justCbtExam from '../../assets/projects/justcbt/exam.png';
import justCbtResult from '../../assets/projects/justcbt/result.png';

// ---- BroadOak Schools screenshots -----------------------------------
import broadoakHome from '../../assets/projects/broadoak/home.png';
import broadoakAdmission from '../../assets/projects/broadoak/admission.png';
import broadoakGallery from '../../assets/projects/broadoak/gallery.png';

// ---- iQuire screenshots ---------------------------------------------
import iquireHome from '../../assets/projects/iquire/home.png';
import iquireCourses from '../../assets/projects/iquire/courses.png';
import iquireOpportunities from '../../assets/projects/iquire/opportunities.png';

// ---- Teach IDD screenshot -------------------------------------------
import teachIddHome from '../../assets/projects/teach-idd/home.png';

// ---- Types -----------------------------------------------------------
type ProductStatus = 'live' | 'beta' | 'development' | 'planned';
type ProductKind = 'product' | 'client';

interface ProductLocal {
  id: string;
  name: string;
  slug: string;
  kind: ProductKind;
  category: string;
  status: ProductStatus;
  tagline: string;
  description: string;
  problemStatement: string;
  keyBenefits: string[];
  shots: string[];
  ctaLink: string | null;
}

interface SelectedProduct {
  id: string;
  name: string;
  slug: string;
}

// ---- Our products & client work -------------------------------------
const PRODUCTS: ProductLocal[] = [
  {
    id: 'justcbt-ai',
    name: 'JustCBT AI',
    slug: 'justcbt-ai',
    kind: 'product',
    category: 'CBT Platform',
    status: 'live',
    tagline: 'Anti-cheating theory CBT — graded by AI, controlled by you.',
    description:
      'An anti-cheating theory-based CBT platform that helps you save money on theory exam printing and saves you the stress of marking endless scripts. AI grades the theory itself while you maintain 100% control over the system.',
    problemStatement:
      'Traditional CBT platforms cannot grade theory answers effectively, leading to manual marking stress, high printing costs, and vulnerability to cheating.',
    keyBenefits: [
      'Save money on printing',
      'Eliminate manual marking stress',
      'AI-powered theory grading',
      '100% admin control',
      'Advanced anti-cheating',
    ],
    shots: [justCbtHome, justCbtExam, justCbtResult],
    ctaLink: 'https://justcbtai.com',
  },
  {
    id: 'teach-idd',
    name: 'Teach IDD',
    slug: 'teach-idd',
    kind: 'product',
    category: 'EdTech',
    status: 'development',
    tagline: 'A personalized AI assistant for teachers of students with IDD.',
    description:
      'Personalized AI assistant for teachers of students with intellectual and developmental disabilities. It provides personalized learning content for each student, helps measure comprehension, and gives parents daily progress reports on improvement and learning.',
    problemStatement:
      'Teachers of students with IDD struggle to create personalized content for each student, track individual progress, and communicate effectively with parents.',
    keyBenefits: [
      'Personalized learning for each student',
      'Automatic comprehension tracking',
      'Daily parent progress reports',
      'Adaptive content delivery',
    ],
    shots: [teachIddHome],
    ctaLink: null,
  },
  {
    id: 'broadoak-schools',
    name: 'The BroadOak Schools',
    slug: 'broadoak-schools',
    kind: 'client',
    category: 'School Website',
    status: 'live',
    tagline:
      'Client project — a modern digital home for one of Nigeria’s leading schools.',
    description:
      'A full digital presence for The BroadOak Schools — a modern, mobile-first website that showcases the school’s programmes, admissions process, and campus life to prospective parents and students.',
    problemStatement:
      'Schools need a credible, fast, and easy-to-update online presence to compete for admissions and communicate with parents — without hiring a full-time web team.',
    keyBenefits: [
      'Mobile-first, fast-loading',
      'Clear admissions funnel',
      'Easy content updates',
      'Credible brand presence',
    ],
    shots: [broadoakHome, broadoakAdmission, broadoakGallery],
    ctaLink: 'https://broadoakschools.com',
  },
  {
    id: 'iquire',
    name: 'iQuire',
    slug: 'iquire',
    kind: 'client',
    category: 'EdTech Platform',
    status: 'live',
    tagline:
      'A client platform we designed & built — connecting learners with market-ready skills.',
    description:
      'IQuire is a global learning and career platform providing affordable, interactive live classes in digital and life skills. Built for fresh graduates, entry-level professionals, and career changers, it equips individuals with the entrepreneurial, soft, and technical skills to thrive in today’s competitive global job market.',
    problemStatement:
      'Millions of talented individuals worldwide lack access to quality training and meaningful career opportunities — not because they lack potential, but because the path to market-ready skills is often expensive, inaccessible, or disconnected from real-world jobs.',
    keyBenefits: [
      'Live interactive classes',
      'Job-market-ready skills',
      'Affordable & accessible globally',
      'Built for career changers',
    ],
    shots: [iquireHome, iquireCourses, iquireOpportunities],
    ctaLink: 'https://iquire.vercel.app',
  },
];

// ---- Status lookups (typed) -----------------------------------------
const STATUS_CLASS: Record<ProductStatus, string> = {
  live: 'product-status--live',
  beta: 'product-status--beta',
  development: 'product-status--development',
  planned: 'product-status--planned',
};

const STATUS_TEXT: Record<ProductStatus, string> = {
  live: 'LIVE',
  beta: 'BETA',
  development: 'IN DEVELOPMENT',
  planned: 'PLANNED',
};

// ---- Component -------------------------------------------------------
export default function ProductsOverview() {
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(
    null
  );

  const ourProducts = PRODUCTS.filter((p) => p.kind === 'product');
  const clientWork = PRODUCTS.filter((p) => p.kind === 'client');

  // Global row index across BOTH groups — keeps the even/odd alternation
  // flowing continuously down the page.
  let rowIndex = -1;

  const renderGroup = (label: string, items: ProductLocal[]) => (
    <div className="product-group">
      <div className="product-group-head">
        <span className="product-group-label">{label}</span>
        <span className="product-group-rule" />
      </div>

      {items.map((product) => {
        rowIndex += 1;
        const isLive = product.status === 'live';
        const isEven = rowIndex % 2 === 0;
        const fanSize =
          product.shots.length >= 3
            ? 'triple'
            : product.shots.length === 2
            ? 'double'
            : 'single';
        const isClient = product.kind === 'client';

        return (
          <div
            key={product.id}
            className={`product-row ${
              isEven ? 'product-row-even' : 'product-row-odd'
            }`}
          >
            {/* Fanned screenshots */}
            <div className="product-image">
              <div className={`product-fan product-fan--${fanSize}`}>
                {product.shots[1] && (
                  <div className="product-fan-sheet product-fan-sheet--left">
                    <img
                      src={product.shots[1]}
                      alt={`${product.name} — secondary view`}
                      loading="lazy"
                    />
                  </div>
                )}

                {product.shots[2] && (
                  <div className="product-fan-sheet product-fan-sheet--right">
                    <img
                      src={product.shots[2]}
                      alt={`${product.name} — detail view`}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="product-fan-sheet product-fan-sheet--center">
                  <img
                    src={product.shots[0]}
                    alt={`${product.name} — main view`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="product-content">
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
                <span
                  className={`product-status ${STATUS_CLASS[product.status]}`}
                >
                  {STATUS_TEXT[product.status]}
                </span>
              </div>

              <h3 className="product-name">{product.name}</h3>

              {product.tagline && (
                <p className="product-tagline">{product.tagline}</p>
              )}

              <p className="product-description">{product.description}</p>

              <div className="product-challenge">
                <p>
                  <strong>The Challenge:</strong> {product.problemStatement}
                </p>
              </div>

              <p className="product-benefits-label">Key Benefits:</p>
              <div className="product-benefits">
                {product.keyBenefits.slice(0, 4).map((benefit, idx) => (
                  <span key={idx} className="product-benefit">
                    ✓ {benefit}
                  </span>
                ))}
              </div>

              {isLive && product.ctaLink ? (
                <a
                  href={product.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-cta"
                >
                  <button className="btn btn-primary">
                    {isClient ? 'View project' : `Visit ${product.name}`} →
                  </button>
                </a>
              ) : (
                <button
                  onClick={() =>
                    setSelectedProduct({
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                    })
                  }
                  className="btn-waitlist product-cta"
                >
                  Join the waitlist →
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <section className="section products-section">
        <div className="container">
          {/* Section Header */}
          <div className="products-header">
            <h2>
              Products we&rsquo;ve built,{' '}
              <span className="gold-italic">clients we&rsquo;ve shipped for</span>
            </h2>
            <p>
              A look at the platforms we&rsquo;ve built &mdash; some are our own
              products, others are custom work we delivered for clients.
            </p>
          </div>

          {/* Our products group */}
          {renderGroup('Our Products', ourProducts)}

          {/* Client work group */}
          {renderGroup('Client Work', clientWork)}

          {/* Footer link */}
          <div className="products-footer">
            <Link to="/solutions">
              <button className="btn btn-secondary">
                Explore all solutions →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      {selectedProduct && (
        <WaitlistModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          productName={selectedProduct.name}
          productId={selectedProduct.id}
          productSlug={selectedProduct.slug}
        />
      )}
    </>
  );
}