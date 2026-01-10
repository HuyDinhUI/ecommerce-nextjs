"use client";

import Link from "next/link";
import { generateBreadcrumb } from "@/utils/breadcrumb";
import { usePathname } from "next/navigation";

export const Breadcrumb = ({ classname }: { classname?: string }) => {
  const header = usePathname();
  const items = generateBreadcrumb(header);

  return (
    <nav aria-label="Breadcrumb" className={`mb-4 text-sm ${classname}`}>
      <ol className="flex flex-wrap gap-2 text-gray-600">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex gap-2">
              {isLast ? (
                <span className="font-medium text-black">{item.label}</span>
              ) : (
                <>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                  <span>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
