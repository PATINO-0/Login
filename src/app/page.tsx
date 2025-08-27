import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Columna izquierda: imagen grande */}
        <div className="bg-slate-50 p-6 lg:p-8 flex items-center justify-center">
          <div className="w-full max-w-[520px] aspect-[4/5] bg-white rounded-[28px] border border-slate-200 overflow-hidden flex items-center justify-center">
            <Image
              src="/69fb3029c678102abca434c73654f4cc.jpg"
              alt="Illustration"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Columna derecha: formulario */}
        <div className="px-6 py-10 lg:px-14 flex items-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-400 text-sm">Don’t have an account?</span>
              <a href="#" className="text-emerald-600 font-medium hover:underline">Sign up</a>
            </div>

            <h1 className="text-4xl font-semibold text-slate-900">Sign in</h1>
            <p className="mt-2 text-slate-500">Sign in with Open account</p>

            {/* Botones sociales */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 hover:bg-slate-50">
                {/* Logo Google (simple G) */}
                <svg width="18" height="18" viewBox="0 0 48 48" className="opacity-80">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.9 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.4 6.2 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.9C14.7 16.2 19 13.5 24 13.5c3 0 5.8 1.1 7.9 3l5.7-5.7C34.4 6.2 29.5 4 24 4 16.2 4 9.5 8.4 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.3 0 10.1-2 13.6-5.2l-6.3-5.2c-2.1 1.6-4.8 2.4-7.3 2.4-5.4 0-9.9-3.1-11.8-7.6l-6.5 5C8.2 39.4 15.5 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-3 5-5.6 6.4l6.3 5.2C39.3 36.6 44 31 44 24c0-1.2-.1-2.3-.4-3.5z"/>
                </svg>
                Google
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 hover:bg-slate-50">
                {/* Logo Apple minimal */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800 opacity-90">
                  <path d="M16.365 1.43c0 1.14-.468 2.193-1.232 2.96-.78.78-1.86 1.31-2.98 1.23-.06-1.1.45-2.21 1.22-2.98.78-.78 1.92-1.31 2.99-1.21zm3.44 16.14c-.65 1.47-1.44 2.94-2.59 2.96-1.1.03-1.45-.71-2.7-.71-1.24 0-1.64.69-2.68.74-1.07.05-1.88-1.32-2.54-2.79-1.38-3.02-1.52-6.58-.34-8.47.95-1.52 2.45-2.41 4.15-2.41 1.22 0 2.37.77 3.16.77.75 0 1.98-.86 3.35-.74.57.02 2.18.23 3.22 1.72-.08.05-1.93 1.13-1.93 3.37 0 2.66 2.36 3.57 2.4 3.59-.02.07-.38 1.32-1.2 2.34z"/>
                </svg>
                Apple ID
              </button>
            </div>

            <div className="relative my-6">
              <div className="h-px bg-slate-200"></div>
              <span className="absolute inset-0 -top-3 mx-auto w-max px-3 bg-white text-xs text-slate-500">
                Or continue with email address
              </span>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-400"><path fill="currentColor" d="M12 13L2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13Zm0-2L22 4H2l10 7Z"/></svg>
                  <input
                    id="email"
                    type="email"
                    placeholder="tam@ui8.net"
                    className="w-full outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-400"><path fill="currentColor" d="M12 1a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 1 1 6 0v3Z"/></svg>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-blue-600 text-white py-2.5 font-medium hover:bg-blue-500"
              >
                Start trading
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
