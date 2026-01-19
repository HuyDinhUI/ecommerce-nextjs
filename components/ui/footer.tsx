import Image from "next/image";
import Link from "next/link";

const INFO_FOOTER = [
  {
    name: "pricing",
    href: "",
  },
  {
    name: "about",
    href: "",
  },
  {
    name: "contact",
    href: "",
  },
];

const LANGUAGE_FOOTER = [
  {
    name: "eng",
  },
  {
    name: "vn",
  },
];

const Footer = () => {
  return (
    <footer className="h-170 bg-brand-black-light/5 mt-50 lg:px-50 lg:py-40 relative">
      <div className="uppercase flex xl:flex-col max-lg:p-5 gap-10">
        <div>
          <span className="text-gray-400">info</span>
          <ul className="mt-10 text-gray-600">
            {INFO_FOOTER.map((item, idx) => (
              <li key={idx}>
                <Link className="hover:underline" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="text-gray-400">language</span>
          <ul className="mt-10 text-gray-600">
            {LANGUAGE_FOOTER.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute max-sm:right-1/3 max-sm:bottom-1/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex max-lg:flex-col">
          <div>
            <div className="mb-5 uppercase text-gray-400 max-lg:text-right">technologies</div>
            <div className="text-8xl font-inter font-extrabold uppercase relative">
              <span className="text-brand-gray-light/50">lu</span>
              <div className="absolute bottom-3">
                <Image
                  src={"/logo.svg"}
                  width={65}
                  height={65}
                  alt="logo lumina"
                />
              </div>
            </div>
            <div className="relative">
              <span className="text-8xl font-inter font-extrabold uppercase">
                mi
                <br />
                na
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 translate-y-1/2">
              <span className="text-nowrap text-gray-400 max-lg:text-[12px]">Near-field communication</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
