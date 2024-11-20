// app/signup/page.js
"use client";

export default function SignUp() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/bgsignin.jpg')" }}
    >
      <div className="bg-white/80 p-8 rounded-lg shadow-md max-w-md w-full backdrop-blur-md">
        <h2 className="text-black text-2xl font-bold mb-6 text-center">
          Sign Up
        </h2>
        <form method="POST" action="/api/register">
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-700 font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Alamat Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="text-sm text-center mb-4">
            Sudah memiliki akun?{" "}
            <a href="/signin" className="text-blue-600 hover:underline">
              Masuk
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
