import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 bg-zinc-900/80 ring-1 ring-white/10 backdrop-blur-xl shadow-xl shadow-black/30 rounded-2xl border-0">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className="rounded-xl cursor-pointer size-full bg-zinc-800/60 p-0 text-zinc-400 hover:text-white hover:bg-zinc-700/60 transition-colors border-0">
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-zinc-800 ring-1 ring-white/10 text-white px-3 py-1.5 text-xs shadow-xl"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-zinc-800" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-white/10" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className="rounded-xl cursor-pointer size-full bg-zinc-800/60 p-0 text-zinc-400 hover:text-white hover:bg-zinc-700/60 transition-colors border-0">
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-zinc-800 ring-1 ring-white/10 text-white px-3 py-1.5 text-xs shadow-xl"
                >
                  <p>{name}</p>
                  <TooltipArrow className="fill-zinc-800" />
                </TooltipContent>
              </Tooltip>
            );
          })}
      </Dock>
    </div>
  );
}
