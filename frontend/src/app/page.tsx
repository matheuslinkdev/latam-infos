import CountryList from "@/ui/HomeCountryList";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full font-[family-name:var(--font-geist-sans)]">
      <article className="min-h-screen flex flex-col justify-center items-center gap-8">
        <section className="text-4xl flex flex-col gap-4 text-center font-medium">
          <h2>Find infos about the 20 LATAM Countries</h2>
        </section>
        <ul className="flex justify-between gap-12 list-disc font-medium text-lg">
          <li>Navigate to a specific country</li>
          <li>Compare two countries</li>
          <li>Order by some statistic</li>
        </ul>
        <button className="bg-blue-700 p-2 rounded-full w-64 text-xl">
          See ↓
        </button>
      </article>
      <article className="flex flex-wrap justify-center items-center w-full py-8">
        <CountryList />
      </article>
    </main>
  );
}
