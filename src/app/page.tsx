export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      
      <h1 className="text-4xl font-bold mb-6">
        Antaryatra
      </h1>

      <p className="text-gray-500 mb-8">
        Awaken Your Inner Energy
      </p>

      <a
        href="/booking"
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Book a Class
      </a>

    </main>
  );
}