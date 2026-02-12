"use client";

import clsx from "clsx";
import { Button } from "./button";
import { useRouter, useSearchParams } from "next/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type PaginationProps = {
  page: string;
  totalPages: number;
  classname?: string;
};

const Pagination = ({ page, totalPages, classname }: PaginationProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const q = new URLSearchParams(params.toString());
  return (
    <div className={clsx("flex items-center gap-2", classname)}>
      <Button
        disabled={page === "1"}
        icon={<BiChevronLeft />}
        variant="transparent"
      />
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          className={`px-3 py-1 rounded-md`}
          title={`${index + 1}`}
          onClick={() => {
            q.set("page", (index + 1).toString());
            router.push(`?${q.toString()}`);
          }}
          variant={page === (index + 1).toString() ? "dark" : "default"}
        />
      ))}
      <Button
        disabled={page === totalPages.toString()}
        icon={<BiChevronRight />}
        variant="transparent"
      />
    </div>
  );
};

export default Pagination;
