// app/admin/announcements/page.js
"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminAnnouncementsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Mohon isi semua bidang.");
      return;
    }

    const newAnnouncement = {
      title,
      content,
      published_by: 1, // ID dari admin atau government official
    };

    const response = await fetch("/api/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnnouncement),
    });

    if (response.ok) {
      toast.success("Pengumuman berhasil ditambahkan!");
      setTitle("");
      setContent("");
    } else {
      toast.error("Terjadi kesalahan saat menambahkan pengumuman.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={5000} />

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Tambah Pengumuman</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-2">Judul</label>
            <input
              type="text"
              className="border rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-custom-yellow"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Masukkan judul pengumuman"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Konten</label>
            <textarea
              className="border rounded w-full p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-custom-yellow"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Masukkan konten pengumuman"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-custom-yellow hover:bg-yellow-500 text-white px-4 py-3 rounded-lg font-semibold transition duration-300"
          >
            Tambah Pengumuman
          </button>
        </form>
      </div>
    </div>
  );
}
