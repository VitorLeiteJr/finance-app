import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[500px] flex-col justify-center p-8">
        <Image
          src="/logo-finance-app.png"
          width={173}
          height={39}
          alt="finance app"
          className="mb-8"
        />

        <h1 className="mb-3 text-4xl font-bold">Welcome</h1>
        <p className="mb-8 text-muted-foreground">
          The Finance app is a plataform to manager your finance that use the AI
          to monitor your translations.
        </p>

        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Login
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login-image.png"
          fill
          className="object-cover"
          alt="Finance app"
        />
      </div>
    </div>
  );
};

export default LoginPage;
