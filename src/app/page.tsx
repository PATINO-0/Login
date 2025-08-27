import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-md border border-slate-200">
        {/* Imagen de perfil */}
        <div className="flex justify-center mb-6">
          <Image
            src="/69fb3029c678102abca434c73654f4cc.jpg"
            alt="Avatar"
            width={96}   // 24 * 4px
            height={96}
            className="rounded-full object-cover"
            priority
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-slate-800">Iniciar Sesión</h1>
        <p className="mt-2 text-center text-slate-600">Ingresa tus credenciales</p>

        {/* Formulario */}
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tucorreo@example.com"
              className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-400"
          >
            Ingresar
          </button>
        </form>

        {/* Link de registro */}
        <p className="mt-4 text-center text-sm text-slate-600">
          ¿No tienes cuenta?{" "}
          <a href="#" className="text-emerald-500 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
