import Image from "next/image";
import Link from "next/link";
import placeholder from "@/app/placeholder.svg";

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

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { connect } from "http2";

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
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="primary">
                Create an account
              </Button>
            </div>
            <p className="text-center">or</p>
            <div className="flex justify-center items-center gap-x-2">
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md">
                <RegisterLink
                  authUrlParams={{
                    connection_id: "conn_01901ff58f7190166f0b1e2558896bd7",
                  }}
                >
                  <FcGoogle />
                </RegisterLink>
              </div>
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md">
                <RegisterLink
                  authUrlParams={{
                    connection_id: "conn_01901ff58f723c55ac2957f8a130f8f9",
                  }}
                >
                  <FaXTwitter />
                </RegisterLink>
              </div>
              <div className="text-2xl bg-slate-100 py-2 px-4 rounded-md ">
                <RegisterLink
                  authUrlParams={{
                    connection_id: "conn_01901ff58f7271c1ca5c7ea0f5533351",
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
