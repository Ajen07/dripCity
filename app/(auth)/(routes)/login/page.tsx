import Image from "next/image";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import placeholder from "@/app/placeholder.svg";
import EmailInput from "@/components/auth/EmailInput";

export default function Login() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen">
      <div className="flex items-center justify-center py-12 lg:order-last">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <EmailInput isLogin={true} />
              </div>
            </div>
            <p className="text-center">or</p>
            <div className="flex justify-center items-center gap-x-2">
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md">
                <LoginLink
                  authUrlParams={{
                    connection_id: "conn_01901ff58f7190166f0b1e2558896bd7",
                  }}
                >
                  <FcGoogle />
                </LoginLink>
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
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md">
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
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign up
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
