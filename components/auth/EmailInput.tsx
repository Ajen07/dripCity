"use client";
import React, { useState } from "react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
});

export default function EmailInput({ isLogin }: { isLogin: boolean }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isLogin) {
      console.log("Login with email", values.email);
      console.log(form.getValues("email"));
    } else {
      console.log("Register with email", values.email);
    }
  };

  return (
    <div className="">
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.getValues("email").length !== 0 &&
            !form.formState.errors.email?.message ? (
              isLogin ? (
                <Button
                  type="submit"
                  className="w-full mt-4 p-0"
                  variant="primary"
                >
                  <LoginLink
                    authUrlParams={{
                      connection_id:
                        process.env
                          .NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS ||
                        "",
                      login_hint: form.getValues("email"),
                    }}
                    className="w-full h-full flex items-center justify-center rounded-md"
                  >
                    Login
                  </LoginLink>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full mt-4 p-0"
                  variant="primary"
                >
                  <RegisterLink
                    authUrlParams={{
                      connection_id:
                        process.env
                          .NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS ||
                        "",
                      login_hint: form.getValues("email"),
                    }}
                    className="w-full  h-full flex items-center justify-center rounded-md"
                  >
                    Create an account
                  </RegisterLink>
                </Button>
              )
            ) : (
              <Button type="submit" className="w-full mt-4" variant="primary">
                {isLogin ? "Login" : "Create an account"}
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
