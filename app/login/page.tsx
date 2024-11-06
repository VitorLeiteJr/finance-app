import Image from "next/image"
import { Button } from "../_components/ui/button"
import { LogInIcon } from "lucide-react"

const LoginPage = () => {
  return (
   <div className="grid h-full grid-cols-2">  
    <div className="flex flex-col h-full justify-center p-8 max-w-[500px] mx-auto">


    <Image src="/logo-finance-app.png" width={173} height={39} alt="finance app" className="mb-8"/>
  
    <h1 className=" mb-3 text-4xl font-bold">Welcome</h1>
    <p className=" mb-8 text-muted-foreground">
      The Finance app is a plataform to manager your finance that use
       the AI to monitor your translations.
    </p>
    <Button variant="outline">
      <LogInIcon className="mr-2"/>
      Login</Button>
    </div>
    <div className=" relative h-full w-full">
    <Image src="/login-image.png" fill className="object-cover" alt="Finance app"/>
    </div>

   </div>

  )
}

export default LoginPage