"use client";

import { signOut, useSession } from "next-auth/react";

import React from "react";

const dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col justify-buttom items-center w-full outline">
      <h1>Dashboard</h1>
      <div>Hello {session?.user?.name}</div>
      <button
        className="bg-rose-500 text-white rounded-md"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
};

export default dashboard;
