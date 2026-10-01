import { useAuth } from '../../contexts/AuthContext';

export default function AdminDashboard() {
  const { adminUser, signOut } = useAuth();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      {/* Admin Header */}
      <header style={{
        backgroundColor: '#121212',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>BB AI Tech Admin</h1>
          <p style={{ fontSize: '0.875rem', margin: '0.25rem 0 0', opacity: 0.7 }}>
            Welcome back, {adminUser?.full_name || adminUser?.email}
          </p>
        </div>
        <button
          onClick={signOut}
          style={{
            backgroundColor: '#DC2626',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B91C1C'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
        >
          Sign Out
        </button>
      </header>

      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.875rem', color: '#121212', marginBottom: '1.5rem' }}>
          Dashboard Overview
        </h2>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Total Products
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#121212', margin: 0 }}>
              4
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Active Leads
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#121212', margin: 0 }}>
              0
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Demo Requests
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#121212', margin: 0 }}>
              0
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Blog Posts
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#121212', margin: 0 }}>
              0
            </p>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ fontSize: '1.125rem', color: '#121212', marginBottom: '1rem' }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{
              backgroundColor: '#F5A623',
              color: '#121212',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
            }}>
              View All Leads
            </button>
            <button style={{
              backgroundColor: '#F5A623',
              color: '#121212',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
            }}>
              Create Blog Post
            </button>
            <button style={{
              backgroundColor: '#F5A623',
              color: '#121212',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
            }}>
              Manage Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}