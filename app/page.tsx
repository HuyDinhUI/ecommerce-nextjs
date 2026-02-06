import { InputSearch } from "@/components/form-action/search-form";
import HeroCarousel from "./hero-carousel";
import Link from "next/link";
import NewCarousel from "./new-carousel";
import CollectionsList from "./collections";
import Image from "next/image";
import { PHOTOS_FASHION_APPROACH } from "./mock/photo-fashion-approach";
import { ProductService } from "@/services/product-service";

export default async function Home() {
  const data = await ProductService.getAll("");
  return (
    <div className="px-10 max-sm:px-5">
      {/* HERO */}

      <section id="hero">
        <div className="w-[30%] max-md:w-full">
          <div className="mb-5">
            <span className="uppercase font-beatrice-deck font-extralight">
              Men
              <br />
              Women
              <br />
              Unisex
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
            <h1 className="text-5xl/10 max-sm:text-4xl/10 font-beatrice-deck font-extrabold uppercase">
              New
              <br />
              This week
            </h1>
            <span className="absolute -right-8 top-1/3 font-beatrice-deck font-extrabold text-brand-dark-blue">{`(${50})`}</span>
          </div>
          <Link
            href={""}
            className="absolute bottom-0 right-20 max-sm:right-0 text-sm hover:underline"
          >
            See All
          </Link>
        </div>
        <div className="pt-5">
          <NewCarousel data={data.payload.data} />
        </div>
      </section>

      {/* COLLECTIONS */}

      <section id="collections" className="pt-30">
        <h1 className="font-beatrice-deck font-extrabold uppercase text-5xl/10 max-sm:text-4xl/9">
          xiv
          <br />
          collections
          <br />
          25-26
        </h1>
        <div className="mt-10">
          <CollectionsList data={data.payload.data} />
        </div>
      </section>

      {/* APPROACH */}

      <section id="approach" className="pt-30 min-h-screen">
        <div>
          <div className="font-beatrice-deck xl:text-[48px] max-sm:text-[2rem] max-xl:text-4xl font-extralight text-center uppercase">
            Our Approach to fashion design
          </div>
          <p className="font-extralight text-center xl:px-90 max-xl:px-30 max-sm:px-0 text-sm max-sm:text-[10px] pt-3">
            at elegant vogue , we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time each
            design is meticulously crafted, ensuring the highest quelity
            exqulsite finish
          </p>
        </div>
        <div className="pt-20">
          <div className="grid grid-cols-4 gap-5">
            {PHOTOS_FASHION_APPROACH.map((item, idx) => (
              <div key={idx} className={`aspect-3/4 relative ring ring-gray-300 ${(idx+1)%2 === 0 ? 'mt-10' : ''}`}>
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
