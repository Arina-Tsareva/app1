"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      {session ? (
        <div className="text-center">
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt="Avatar"
            width={64}
            height={64}
            className="avatar"
          />
          <p>Welcome, {session.user?.name || "User"}!</p>
          <p>Email: {session.user?.email}</p>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => signIn()}
        >
          Sign in with Google or GitHub
        </button>
      )}
    </main>
  );
}
