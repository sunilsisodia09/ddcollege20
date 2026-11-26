
import Hero from "@/components/Hero/Hero";
import Placements from "@/components/Placements/Placements";
import Testimonials from "@/components/Testimonials/Testimonials";
import Affiliation from "@/components/Affiliation/Affiliation";
import AboutSection from "@/components/AboutSection/AboutSection";
import Study from "@/components/Study/Study";
import Department from "@/components/department/department";
import Gallery from "@/components/Gallery/Gallery";
import Announcements from "@/components/AnnouncementBar/AnnouncementBar";
import AdmissionMarquee from "@/components/AdmissionMarquee/AdmissionMarquee";

export default function Home() {
  return (
    <main>
            
      <Hero />
<AdmissionMarquee />
      <AboutSection />
      <Affiliation />
      <Department />
      <Study />
      <Placements />
      <Gallery />
      <Testimonials />
      <Announcements/>
    </main>
  );
}
