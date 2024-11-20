// app/signin/page.js
"use client";

export default function SignIn() {
    return (
      <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/bgsignin.jpg')" }}
        >
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-black text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form method="POST" action="/api/authenticate">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="role" className="block text-black">
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="warga" className="text-black">Warga</option>
                <option value="admin"className="text-black">Admin</option>
                <option value="pemerintah"className="text-black">Pemerintah</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
  