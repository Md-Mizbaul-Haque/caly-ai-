import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import DownloadCta from "@/components/DownloadCta";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <ScreenshotGallery />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  );
}
