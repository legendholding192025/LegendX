'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ContactSubmission {
  id: string;
  full_name: string;
  email: string;
  country_code: string;
  phone_number: string;
  product_of_interest: string;
  service_type: 'rental' | 'purchase';
  message: string | null;
  status: 'pending' | 'contacted' | 'completed' | 'archived';
  created_at: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'all' | 'rental' | 'purchase'>('all');
  const [adminEmail, setAdminEmail] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchSubmissions();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/admin/login');
      return;
    }

    // Set admin email
    setAdminEmail(user.email || '');

    // Check if user is admin
    const { data: adminData, error: adminError } = await supabase
      .from('legendx_admin_users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (adminError || !adminData) {
      await supabase.auth.signOut();
      router.push('/admin/login');
    }
  };

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('legendx_contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching submissions:', error);
        return;
      }

      console.log('Fetched submissions:', data?.length || 0);
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const forceRefresh = async () => {
    try {
      setLoading(true);
      console.log('Force refreshing data...');
      
      // Clear any cached data by making a fresh request
      const { data, error } = await supabase
        .from('legendx_contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error force refreshing:', error);
        return;
      }

      console.log('Force refresh completed. Submissions count:', data?.length || 0);
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error force refreshing:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: ContactSubmission['status']) => {
    setUpdating(id);
    try {
      const { error } = await supabase
        .from('legendx_contact_submissions')
        .update({ 
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
        return;
      }

      // Update local state
      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === id 
            ? { ...sub, status, updated_at: new Date().toISOString() }
            : sub
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setUpdating(null);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      return;
    }

    setDeleting(id);
    try {
      console.log('Attempting to delete submission:', id);
      
      const { data, error } = await supabase
        .from('legendx_contact_submissions')
        .delete()
        .eq('id', id)
        .select(); // Add select to see what was deleted

      if (error) {
        console.error('Error deleting submission:', error);
        alert('Failed to delete submission: ' + error.message);
        return;
      }

      console.log('Delete response:', data);
      
      // Remove from local state
      setSubmissions(prev => prev.filter(sub => sub.id !== id));
      
      // Refresh data to ensure consistency
      await fetchSubmissions();
      
      console.log('Submission deleted successfully');
    } catch (error) {
      console.error('Error deleting submission:', error);
      alert('An unexpected error occurred while deleting the submission');
    } finally {
      setDeleting(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = 
      submission.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.product_of_interest.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    
    const matchesTab = activeTab === 'all' || submission.service_type === activeTab;
    
    return matchesSearch && matchesStatus && matchesTab;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getServiceTypeColor = (serviceType: string) => {
    switch (serviceType) {
      case 'rental': return 'bg-purple-100 text-purple-800';
      case 'purchase': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-auto"
                src="/logo/logo-x-navbar.png"
                alt="LegendX Logo"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 font-heading">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">Manage contact form submissions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Profile Section */}
              <div className="flex items-center space-x-3 bg-gray-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-[#F08900] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-900">Admin</div>
                  <div className="text-gray-500">{adminEmail}</div>
                </div>
              </div>
              {/* Refresh Button */}
              <Button
                onClick={forceRefresh}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
              </Button>
              {/* Logout Button */}
              <Button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </Label>
              <Input
                id="search"
                type="text"
                placeholder="Search by name, email, or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status Filter
              </Label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F08900] focus:border-[#F08900]"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </Label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'all'
                      ? 'bg-[#F08900] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('rental')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'rental'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Rental
                </button>
                <button
                  onClick={() => setActiveTab('purchase')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'purchase'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-blue-600">{submissions.filter(s => s.status === 'pending').length}</div>
            <div className="text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-yellow-600">{submissions.filter(s => s.status === 'contacted').length}</div>
            <div className="text-gray-600">Contacted</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-green-600">{submissions.filter(s => s.status === 'completed').length}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-purple-600">{submissions.filter(s => s.service_type === 'rental').length}</div>
            <div className="text-gray-600">Rental</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-orange-600">{submissions.filter(s => s.service_type === 'purchase').length}</div>
            <div className="text-gray-600">Purchase</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-2xl font-bold text-gray-600">{submissions.length}</div>
            <div className="text-gray-600">Total</div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Contact Submissions ({filteredSubmissions.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product & Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {submission.full_name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {submission.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {submission.country_code} {submission.phone_number}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {submission.product_of_interest}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getServiceTypeColor(submission.service_type)}`}>
                            {submission.service_type}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {submission.message || "No message"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(submission.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <select
                          value={submission.status}
                          onChange={(e) => updateStatus(submission.id, e.target.value as ContactSubmission['status'])}
                          disabled={updating === submission.id}
                          className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#F08900]"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="completed">Completed</option>
                          <option value="archived">Archived</option>
                        </select>
                        <Button
                          onClick={() => deleteSubmission(submission.id)}
                          disabled={deleting === submission.id}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs"
                        >
                          {deleting === submission.id ? 'Deleting...' : 'Delete'}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">No submissions found</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 