"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      {session ? (
        <div className="text-center">
          <img src={session.user?.image || ""} alt="Avatar" className="w-16 h-16 rounded-full mx-auto" />
          <p>Welcome, {session.user?.name || "User"}!</p>
          <p>Email: {session.user?.email}</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      ) : (
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => signIn()}>
          Sign in with Google or GitHub
        </button>
      )}
    </main>
  );
}
