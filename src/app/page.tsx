import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import SocialSection from "@/components/section/social-section";
import Backdrop from "@/components/Backdrop";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa]">
      <Backdrop />
      <div className="mx-auto w-full max-w-2xl px-4 space-y-20 py-20">
        {/* Hero */}
        <section id="hero">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <BlurFade delay={BLUR_FADE_DELAY} className="shrink-0">
              <Avatar className="size-24 md:size-32 rounded-full border-2 border-zinc-700">
                <AvatarImage alt={DATA.name} src="/avatar.jpg" />
                <AvatarFallback>{DATA.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="flex flex-col gap-1 min-w-0">
              <BlurFadeText delay={BLUR_FADE_DELAY * 2} className="text-4xl md:text-5xl font-semibold text-white" yOffset={8} text={DATA.name} />
              <BlurFadeText delay={BLUR_FADE_DELAY * 3} className="text-lg md:text-xl font-medium text-zinc-400" yOffset={8} text="Web Designer" />
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm text-zinc-400 mt-2 max-w-2xl">{DATA.description}</p>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 5}><ProjectsSection /></BlurFade>
        </section>

        {/* Social Links */}
        <section id="social">
          <BlurFade delay={BLUR_FADE_DELAY * 7}><SocialSection /></BlurFade>
        </section>

        {/* Contact */}
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 9}><ContactSection /></BlurFade>
        </section>
      </div>
    </main>
  );
}
