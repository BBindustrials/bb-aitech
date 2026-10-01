/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

interface WaitlistEntry {
  id: string;
  product_name: string;
  full_name: string;
  email: string;
  phone: string | null;
  institution_name: string | null;
  status: string;
  created_at: string;
}

export default function AdminWaitlist() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWaitlistEntries();
  }, []);

  const fetchWaitlistEntries = async () => {
    const { data, error } = await supabase
      .from('waitlist_entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setEntries(data as WaitlistEntry[]);
    }
    setLoading(false);
  };

  if (loading) return <div>Loading waitlist entries...</div>;

  return (
    <div>
      <h2>Waitlist Entries</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Institution</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.product_name}</td>
                <td>{entry.full_name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone || '-'}</td>
                <td>{entry.institution_name || '-'}</td>
                <td>{entry.status}</td>
                <td>{new Date(entry.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}