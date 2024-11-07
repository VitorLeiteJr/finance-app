import React from "react";
import { Button } from "../_components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import { prisma } from "../_lib/prisma";

const TransactionsPage = async () => {
  const transactions = await prisma.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Translations</h1>
        <Button className="rounded-full">
          Add transaction
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
