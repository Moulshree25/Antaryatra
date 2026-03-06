export default function BookingSuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#FAF9F7]">

      <div className="max-w-[640px] text-center space-y-8">

        <div className="flex justify-center">
          <span className="material-symbols-outlined text-[80px] text-[#ec9213]">
            local_florist
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Your session request has been received
        </h1>

        <p className="text-lg text-gray-600">
          We will contact you shortly to confirm your schedule and provide further details.
        </p>

        <a
          href="/"
          className="inline-block px-8 py-4 bg-black text-white rounded-xl font-bold"
        >
          Return to Home
        </a>

        <p className="text-sm text-gray-400 italic">
          A confirmation email is on its way to you.
        </p>

      </div>

    </main>
  );
}