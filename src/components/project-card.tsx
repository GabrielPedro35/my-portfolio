"use client";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const GRADIENTS = [
  "from-purple-900/40 to-zinc-900",
  "from-blue-900/40 to-zinc-900",
  "from-emerald-900/40 to-zinc-900",
  "from-rose-900/40 to-zinc-900",
];

interface Props {
  title: string;
  description: string;
  dates: string;
  tags?: string[];
  image?: string;
  video?: string;
  links?: { type: string; href: string; icon?: React.ReactNode }[];
  href?: string;
  className?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  dates,
  tags = [],
  image,
  video,
  links = [],
  href,
  className,
  index = 0,
}: Props) {
  const hasMedia = !!(video || (image && image.length > 0));
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-zinc-800/30 border-2 border-transparent hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 h-full",
        className
      )}
    >
      {/* Media / Placeholder */}
      <div className="relative overflow-hidden">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-40 object-cover"
          />
        ) : image && image.length > 0 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-40 object-cover" />
        ) : (
          <div className={cn("w-full h-40 bg-gradient-to-br flex items-center justify-center", gradient)}>
            <div className="w-12 h-12 rounded-xl bg-zinc-700/50 ring-1 ring-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
        {hasMedia && links.length > 0 && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-zinc-900/80 ring-1 ring-white/10 text-zinc-300 hover:text-white transition-colors"
              >
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {href && (
            <Link href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-purple-400 transition-colors shrink-0">
              <ExternalLink size={14} />
            </Link>
          )}
        </div>
        <time className="text-xs text-zinc-500">{dates}</time>
        <p className="text-sm flex-1 text-pretty leading-relaxed text-zinc-400">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-zinc-700/50 ring-1 ring-white/10 text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Inline links when no media */}
        {!hasMedia && links.length > 0 && (
          <div className="flex gap-3 mt-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                {link.type} <ExternalLink size={10} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
