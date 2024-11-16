"use server";
import { db } from "@/app/_lib/prisma";
//import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const DeleteTransactions = async (idTransaction: string) => {
  //const {userId} = await auth();

  console.log(idTransaction);

  const deleteTransaction = await db.transaction.deleteMany({
    where: {
      id: idTransaction,
    },
  });

  if (!deleteTransaction) {
    throw new Error("something is wrong!");
  }

  revalidatePath("/transactions");
};
