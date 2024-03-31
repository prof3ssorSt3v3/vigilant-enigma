import Link from 'next/link';

export default async function Home() {
  const base = process.env.BASE;
  console.log(base);
  const url = base + '/api/person';
  const resp = await fetch(url);
  if (!resp.ok) return <main>FAIL</main>;
  let data = await resp.json();
  console.log(data);
  let pg = '/' + crypto.randomUUID();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href={pg} className="hover:text-amber-600 p-8">
        Goto a random page
      </Link>
      {resp && (
        <div>
          <p className="p-4">Data from a call to a route.js file:</p>
          <p className="p-4">{JSON.stringify(data, null, 2)}</p>
          <p className="p-4">Notice the data is not changing thanks to the next: setting inside the GET function.</p>
        </div>
      )}
    </main>
  );
}
