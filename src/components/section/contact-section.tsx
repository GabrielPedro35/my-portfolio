import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-900/60 ring-1 ring-white/8 backdrop-blur-sm">
      {/* Flickering grid fades out downward */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="rgb(168,85,247)"
          maxOpacity={0.12}
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Purple glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-5 text-center px-10 py-14">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 ring-1 ring-purple-500/30 text-purple-300 tracking-wide uppercase">
          Contact
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-zinc-400 text-balance leading-relaxed">
          Want to chat? Just shoot me an email{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-purple-400 hover:text-purple-300 underline underline-offset-4 decoration-purple-500/40 hover:decoration-purple-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-sm"
          >
            {DATA.contact.email}
          </Link>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </div>
  );
}
