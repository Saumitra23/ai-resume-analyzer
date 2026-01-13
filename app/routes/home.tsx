import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "AI Resume Analyzer" },
  ];
}

export default function Home() {
  // const { auth, fs } = usePuterStore();
  // console.log("test", auth, fs);
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and get AI-powered feedback </h2>
        </div>
        <section className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </section>
      </section>
    </main>
  );
}
