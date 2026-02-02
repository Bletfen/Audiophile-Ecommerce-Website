import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeInfo from "@/components/HomeInfo";
import YX1EarphonesSpotlight from "@/components/YX1EarphonesSpotlight";
import ZX7SpeakerSpotlight from "@/components/ZX7SpeakerSpotlight";
import ZX9SpeakerSpotlight from "@/components/ZX9SpeakerSpotlight";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Category />
        <section
          className="px-[2.4rem] mt-[12rem]
        flex flex-col items-center
        gap-[2.4rem]"
        >
          <ZX9SpeakerSpotlight />
          <ZX7SpeakerSpotlight />
          <YX1EarphonesSpotlight />
        </section>
        <section className="mt-[12rem] flex flex-col items-center">
          <HomeInfo />
        </section>
      </main>
      <footer className="mt-[12rem]">
        <Footer />
      </footer>
    </>
  );
}
