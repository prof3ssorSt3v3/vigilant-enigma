import MyButton from '@/app/components/MyButton';
import Link from 'next/link';

export default function Page({ params, searchParams }) {
  const { something } = params;
  const num = searchParams.num;

  return (
    <div className="p-8">
      <h1 className="p-8 text-2xl">Page {something}</h1>
      {num && <p>The number is {num}</p>}
      <MyButton page={something} />
      <div className="p-8">
        <Link href="/" className="hover:text-amber-600">
          Back Home
        </Link>
      </div>
    </div>
  );
}
