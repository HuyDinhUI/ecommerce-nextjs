"use client";

import clsx from "clsx";
import { useTabs } from "./tabs";
import { Button } from "../button";

export function TabsTrigger({
  value,
  title,
  disable,
  classname,
}: {
  disable?: boolean;
  value: string;
  title: string;
  classname?: string;
}) {
  const { value: active, setValue } = useTabs();

  return (
    <Button
      title={title}
      type="button"
      variant="transparent"
      size="lb"
      onClick={() => setValue(value)}
      className={clsx(
        "transition uppercase font-light",
        active === value ? "" : "text-gray-500", classname
      )}
      disabled={disable}
    ></Button>
  );
}
