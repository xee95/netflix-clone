"use server";

import { revalidatePath } from "next/cache";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import prismadb from "./prismadb";


export async function addTowatchlist(formData: FormData) {
  "use server";

  const movieId = formData.get("movieId");
  const pathname = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);

  const data = await prismadb.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export async function deleteFromWatchlist(formData: FormData) {
  "use server";

  const watchlistId = formData.get("watchlistId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prismadb.watchList.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
}