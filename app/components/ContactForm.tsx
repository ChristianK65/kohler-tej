export default function ContactForm() {
  return (
    <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Üzenet Küldése</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">Név</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 text-zinc-100 rounded-md placeholder:text-zinc-400 focus:ring-amber-400 focus:border-amber-400"
            placeholder="Az Ön neve"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 text-zinc-100 rounded-md placeholder:text-zinc-400 focus:ring-amber-400 focus:border-amber-400"
            placeholder="email@example.com"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">Üzenet</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 text-zinc-100 rounded-md placeholder:text-zinc-400 focus:ring-amber-400 focus:border-amber-400"
            placeholder="Az Ön üzenete..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-400 text-zinc-950 px-6 py-3 rounded-md hover:bg-amber-300 transition-colors font-semibold"
        >
          Üzenet Küldése
        </button>
      </form>
    </div>
  );
}
