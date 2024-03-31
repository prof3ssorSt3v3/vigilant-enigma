'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function zeroOne(something) {
  'use server';
  let num = Math.round(Math.random()); //return 0 or 1
  //save the value somewhere that can be retrieved when page.js runs again
  //then call revalidatePath or redirect
  revalidatePath(`/${something}`);
}
export async function waitZeroOne(something) {
  'use server';
  //return 0 or 1 after a one second delay
  let num = await new Promise((resolve) => setTimeout(() => resolve(Math.round(Math.random())), 1000));
  //save the value somewhere that can be retrieved when page.js runs again
  // revalidatePath(`/${something}`);
  redirect(`/${something}?${num}`);
  //redirect allows you to change the page too
}
