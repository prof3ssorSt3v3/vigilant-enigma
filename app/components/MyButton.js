'use client';
import { waitZeroOne } from '@/app/actions';

export default function MyButton({ page }) {
  return (
    <div className="p-8">
      <button className="bg-blue-500 text-white py-1 px-4 hover:bg-blue-900" onClick={() => waitZeroOne(page)}>
        click me
      </button>
      <p>Watch the query string after clicking the button</p>
    </div>
  );
}
