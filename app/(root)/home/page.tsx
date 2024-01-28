import { authOptions } from '@/app/utils/auth';
import MovieVideo from '@/components/MovieVideo';
import RecentlyAdded from '@/components/RecentlyAdded';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <div>
         <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold ">Recently Added</h1>
      <RecentlyAdded />
    </div>
    </div>
  )
  
}

    
