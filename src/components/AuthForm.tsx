"use client";
import React, { useState } from "react";
import Link from "next/link";
import SocialProviders from "./SocialProviders";

type Props = { mode: "sign-in" | "sign-up" };

export default function AuthForm({ mode }: Props) {
  const [show, setShow] = useState(false);
  const isSignUp = mode === "sign-up";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-[--color-dark-700]">
          {isSignUp ? "Already have an account?" : "New to Nike?"}{" "}
          <Link href={isSignUp ? "/sign-in" : "/sign-up"} className="font-medium underline">
            {isSignUp ? "Sign In" : "Sign Up"}
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Join Nike Today!</h1>
        <p className="mt-1 text-sm text-[--color-dark-700]">
          {isSignUp ? "Create your account to start your fitness journey" : "Sign in to continue"}
        </p>
      </div>

      <SocialProviders />

      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-[--color-light-300]" />
        <span className="text-xs text-[--color-dark-700]">Or {isSignUp ? "sign up" : "sign in"} with</span>
        <span className="h-px flex-1 bg-[--color-light-300]" />
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {isSignUp && (
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-[--color-light-300] bg-[--color-light-100] px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
              autoComplete="name"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className="w-full rounded-xl border border-[--color-light-300] bg-[--color-light-100] px-3 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={show ? "text" : "password"}
              placeholder="minimum 8 characters"
              className="w-full rounded-xl border border-[--color-light-300] bg-[--color-light-100] px-3 py-3 pr-10 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
              autoComplete={isSignUp ? "new-password" : "current-password"}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute inset-y-0 right-0 px-3 text-[--color-dark-700]"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-[--color-dark-900] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-center text-xs text-[--color-dark-700]">
          By {isSignUp ? "signing up" : "signing in"}, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
