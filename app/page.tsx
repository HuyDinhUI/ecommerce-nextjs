import { InputSearch } from "@/components/form-action/search-form";
import HeroCarousel from "./hero-carousel";
import Link from "next/link";
import NewCarousel from "./new-carousel";
import CollectionsList from "./collections";

export default function Home() {
  return (
    <div className="px-10 max-sm:px-5 pt-10">
      {/* HERO */}

      <section id="hero">
        <div className="w-[30%] max-sm:w-full">
          <div className="mb-5">
            <span className="uppercase font-beatrice-deck font-extralight">
              Men
              <br />
              Women
              <br />
              Kids
            </span>
          </div>
          <InputSearch />
        </div>
        <HeroCarousel />
      </section>

      {/* NEW THIS WEEK */}

      <section id="new" className="pt-30">
        <div className="relative">
          <div className="relative w-75">
            <h1 className="text-5xl/10 font-beatrice-deck font-extrabold uppercase">
              New
              <br />
              This week
            </h1>
            <span className="absolute right-0 top-1/3 font-beatrice-deck font-extrabold text-brand-dark-blue">{`(${50})`}</span>
          </div>
          <Link
            href={""}
            className="absolute bottom-0 right-20 max-sm:right-0 text-sm hover:underline"
          >
            See All
          </Link>
        </div>
        <div className="pt-5">
          <NewCarousel />
        </div>
      </section>

      {/* COLLECTIONS */}

      <section id="collections" className="pt-30">
        <h1 className="font-beatrice-deck font-extrabold uppercase text-5xl/10">
          xiv
          <br />
          collections
          <br />
          25-26
        </h1>
        <div className="mt-10"><CollectionsList/></div>
      </section>
    </div>
  );
}
