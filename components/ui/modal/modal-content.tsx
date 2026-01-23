"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { IoIosClose } from "react-icons/io";
import { useUIStore } from "@/store/ui.store";

type Size = "sm" | "md" | "lg";

const SizeOptions = {
  sm: "w-200",
  md: "w-250 max-lg:w-150",
  lg: "w-400",
};

const ModalContent = ({
  children,
  size,
}: {
  children: ReactNode;
  size: Size;
}) => {
  const { setOpen } = useUIStore();
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onAnimationComplete={(def) => {
        if (def === "exit") setOpen(false, "modal");
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`min-h-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url(/noisy_background.png)] bg-white dark:bg-card ${SizeOptions[size]} z-999`}
    >
      {children}
      <button
        onClick={() => setOpen(false, "modal")}
        className="top-0 right-0 absolute cursor-pointer"
      >
        <IoIosClose color="black" size={30} />
      </button>
    </motion.div>
  );
};

export default ModalContent;
