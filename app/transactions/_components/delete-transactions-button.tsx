"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { TrashIcon } from "lucide-react";
import { DeleteTransactions } from "../_actions/delete-transactions";

interface DeleteTransactionsButtonProps {
  idTransaction: string;
}

export const DeleteTransactionsButton = ({
  idTransaction,
}: DeleteTransactionsButtonProps) => {
  const handleDelete = async () => {
    await DeleteTransactions(idTransaction);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TrashIcon />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Voce tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
