import { useEffect } from "react";
import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/lib/puter";

export const meta = () => {
  return [
    { title: "AI Resume Analyzer - Auth" },
    { name: "description", content: "AI Resume Analyzer - Auth" },
  ];
};

const auth = () => {
  const { isLoading, error, puterReady, auth, fs } = usePuterStore();

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-8">
          <div className="flex flex-col gap-2 items-center text-center">
            <h1>Welcome</h1>
            <h2>Login to continue your journey</h2>
          </div>
          <div>
            {isLoading ? <button className="auth-button animate-pulse cursor-not-allowed">Loading...</button> : <button className="auth-button" onClick={() => auth.signIn()}>Login</button>}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
