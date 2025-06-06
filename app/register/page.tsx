'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', major: '', year: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } else {
      setError(data.error || 'Something went wrong');
    }
  };

  return (
    <main className="p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        {['name', 'email', 'password', 'major', 'year'].map((field) => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full p-2 border rounded text-black"
          />
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign Up</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </main>
  );
}
