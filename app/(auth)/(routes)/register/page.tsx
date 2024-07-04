import Image from "next/image";
import Link from "next/link";
import placeholder from "@/app/placeholder.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmailInput from "@/components/auth/EmailInput";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";

export default function Register() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <EmailInput isLogin={false} />
              </div>
            </div>
            <p className="text-center">or</p>
            <div className="flex justify-center items-center gap-x-2">
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md">
                <RegisterLink
                  authUrlParams={{
                    connection_id:
                      process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
                  }}
                >
                  <FcGoogle />
                </RegisterLink>
              </div>
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md">
                <RegisterLink
                  authUrlParams={{
                    connection_id:
                      process.env.NEXT_PUBLIC_KINDE_CONNECTION_TWITTER || "",
                  }}
                >
                  <FaXTwitter />
                </RegisterLink>
              </div>
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md ">
                <RegisterLink
                  authUrlParams={{
                    connection_id:
                      process.env.NEXT_PUBLIC_KINDE_CONNECTION_DISCORD || "",
                  }}
                >
                  <SiDiscord className="fill-[#5662f6]" />
                </RegisterLink>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-muted lg:block">
        <Image
          src={placeholder}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
