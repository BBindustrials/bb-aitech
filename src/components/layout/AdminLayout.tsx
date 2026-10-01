import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLayout() {
  const { adminUser, signOut } = useAuth();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      <header style={{
        backgroundColor: '#121212',
        color: 'white',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', margin: 0 }}>BB AI Tech Admin</h1>
          <p style={{ fontSize: '0.75rem', margin: '0.25rem 0 0', opacity: 0.7 }}>
            {adminUser?.role?.replace('_', ' ').toUpperCase()}
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
          }}
        >
          Sign Out
        </button>
      </header>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}