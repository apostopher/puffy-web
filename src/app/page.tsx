import { Logo } from "@/components/logo";
import { TopNav } from "@/components/top-nav";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";
import { Sources } from "@/components/sources";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <header className="h-(--header-height) mx-6 pt-6">
        <div className="flex items-center justify-between">
          <Logo showName />
          <TopNav />
        </div>
      </header>
      <main className="flex mx-auto box-border container min-h-[calc(100vh-var(--header-height)-var(--footer-height))] flex-col pt-20 px-16 bg-white">
        <h1 className="text-4xl font-bold text-balance text-center">
          Turn user interviews product calls support tickets into{" "}
          <span className="text-(--accent-orange) bg-(--accent-highlight) px-2 rounded-sm">
            actionable insights
          </span>{" "}
          and instantly{" "}
          <span className="text-(--accent-purple) bg-(--accent-highlight) px-2 rounded-sm">
            build-ready UI
          </span>
          .
        </h1>
        <h2 className="flex items-center justify-center mt-4">
          <Image src="/insights.png" alt="Insights" width={527} height={24} />
        </h2>
        <div className="flex-1">
          <div className="border-2 border-(--accent-purple) border-dotted rounded-lg flex flex-col items-center justify-center mt-12 py-18">
            <Image src="/folder.png" alt="Folder" width={140} height={157} />
            <div className="mt-9 flex flex-col items-center justify-center">
              <div className="text-sm font-semibold text-center">
                Click or drag and drop
              </div>
              <div className="text-gray-600 text-center">
                Upload multiple files. Supports: PDF, DOCX, CSV, TXT.
              </div>
              <div className="py-6 text-sm font-medium text-center">OR</div>
              <div>
                <Sources />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-(--footer-height) border-t border-gray-400 flex items-center justify-between px-6">
        <div className="bg-(--accent-highlight-2) flex items-center gap-2 rounded-lg px-2 py-1">
          <Shield className="h-4" />
          <span className="text-sm text-gray-500">
            We don’t store or sell your data, it’s deleted as soon as the
            session ends. We don’t use it to train AI.
          </span>
        </div>
        <div>
          <button className="hero-button">
            <span>Continue</span>
            <ArrowRight className="h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
