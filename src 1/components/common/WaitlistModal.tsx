import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productId: string;
  productSlug: string;
}

export default function WaitlistModal({ 
  isOpen, 
  onClose, 
  productName, 
  productId, 
  productSlug 
}: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institutionName: '',
    institutionType: 'school'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Insert into waitlist_entries
      const { error: waitlistError } = await supabase
        .from('waitlist_entries')
        .insert({
          product_id: productId,
          product_slug: productSlug,
          product_name: productName,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          institution_name: formData.institutionName || null,
          institution_type: formData.institutionType,
          status: 'pending'
        });

      if (waitlistError) throw waitlistError;

      // Also create a lead entry for general tracking
      const { error: leadError } = await supabase
        .from('leads')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          company_name: formData.institutionName || null,
          interest_area: productName,
          source: `waitlist_${productSlug}`,
          status: 'new'
        });

      if (leadError) console.error('Lead creation error:', leadError);

      setSubmitted(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          institutionName: '',
          institutionType: 'school'
        });
      }, 3000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9998,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          zIndex: 9999,
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        }}
      >
        {!submitted ? (
          <>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '400',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--charcoal)',
                  margin: 0,
                }}>
                  Join the <span className="gold-italic">Waitlist</span>
                </h3>
                <button
                  onClick={onClose}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'var(--gray-500)',
                  }}
                >
                  ✕
                </button>
              </div>
              <p style={{ 
                color: 'var(--gray-600)', 
                fontFamily: 'var(--font-serif)',
                fontSize: '0.9rem',
              }}>
                Be the first to know when <span className="gold-italic">{productName}</span> launches.
                Get early access and exclusive updates.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="fullName" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: 'var(--charcoal)',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-serif)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: 'var(--charcoal)',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-serif)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="phone" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: 'var(--charcoal)',
                }}>
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-serif)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="institutionName" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: 'var(--charcoal)',
                }}>
                  Institution/Organization (Optional)
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-serif)',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="institutionType" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: 'var(--charcoal)',
                }}>
                  Institution Type
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  <option value="school">School</option>
                  <option value="university">University</option>
                  <option value="business">Business</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="rehabilitation">Rehabilitation Centre</option>
                  <option value="government">Government Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {error && (
                <div style={{
                  backgroundColor: '#FEE2E2',
                  color: '#DC2626',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  fontSize: '0.875rem',
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--gold)',
                  color: 'var(--charcoal)',
                  padding: '0.875rem',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--gold-dark)';
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--gold)';
                }}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist →'}
              </button>

              <p style={{
                fontSize: '0.75rem',
                color: 'var(--gray-500)',
                textAlign: 'center',
                marginTop: '1rem',
              }}>
                We'll notify you when {productName} launches. No spam, ever.
              </p>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}>
              🎉
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '400',
              fontFamily: 'var(--font-serif)',
              marginBottom: '0.5rem',
            }}>
              You're on the list!
            </h3>
            <p style={{
              color: 'var(--gray-600)',
              fontFamily: 'var(--font-serif)',
            }}>
              We'll notify you when {productName} launches.
            </p>
          </div>
        )}
      </div>
    </>
  );
}