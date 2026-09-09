"use client";
import { X } from "lucide-react";
import { useState } from "react";

interface PopupProps {
  title: string;
  description: string;
}

export default function Popup({ title, description }: PopupProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-50 w-72 p-4 space-y-1 rounded-xl shadow-lg ring-1 ring-white/10 bg-zinc-800/40 backdrop-blur-xl transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in"
      style={{ animationDuration: "0.4s", animationDelay: "1.5s", animationFillMode: "both" }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium text-sm text-white leading-tight">✨ {title}</h3>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
        >
          <X size={12} />
        </button>
      </div>
      <p className="text-xs text-white/50 w-5/6">{description}</p>
    </div>
  );
}
