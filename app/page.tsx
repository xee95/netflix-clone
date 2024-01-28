import { getServerSession } from 'next-auth';
import Image from 'next/image'
import { authOptions } from './utils/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  } else {
    return redirect("/home");
  }
}
