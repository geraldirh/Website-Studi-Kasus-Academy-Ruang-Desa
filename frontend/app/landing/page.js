// app/landing/page.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/announcements")
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setError("Terjadi kesalahan saat memuat pengumuman.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Ruang Desa
          </Link>
          <nav className="flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-custom-yellow transition">
              Tentang
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-custom-yellow transition">
              Kontak
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-64" style={{ backgroundImage: "url('/assets/announcement-hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-white">Pengumuman Terbaru</h1>
            <p className="text-white mt-2">Tetap terinformasi dengan pengumuman terkini dari kami</p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <main className="container mx-auto px-6 py-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : announcements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <div key={announcement.announcement_id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">{announcement.title}</h2>
                  <p className="mt-4 text-gray-600">{announcement.content}</p>
                </div>
                <div className="p-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Dipublikasikan pada {new Date(announcement.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Belum ada pengumuman.</p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 mt-10">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>2024. Hak Cipta Dilindungi | © Ruang Desa</p>
        </div>
      </footer>

      {/* Loader Styles */}
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          animation: spinner 0.6s linear infinite;
        }

        @keyframes spinner {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
