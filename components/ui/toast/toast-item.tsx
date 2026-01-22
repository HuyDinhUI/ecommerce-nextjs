"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { Toast } from "@/types/toast.type";
import { motion } from "motion/react";
import { Button } from "../button";
import { IoClose, IoWarningOutline } from "react-icons/io5";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";

const variants = {
  success: {
    label: "Congratulations!",
    color: "text-green-500 bg-green-50 ring ring-green-300",
    icon: <IoIosCheckmarkCircleOutline size={30} />,
  },
  error: {
    label: "Something went wrong!",
    color: "text-red-500 bg-red-50 ring ring-red-300",
    icon: <IoIosCloseCircleOutline size={30} />,
  },
  info: {
    label: "Did you know?",
    color: "text-blue-500 bg-blue-50 ring ring-blue-300",
    icon: <IoIosInformationCircleOutline size={30} />,
  },
  warning: {
    label: "Warning!",
    color: "text-yellow-500 bg-yellow-50 ring ring-yellow-300",
    icon: <IoWarningOutline size={30} />,
  },
};

export function ToastItem({
  toast,
  onClose,
}: {
  toast: Toast;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, toast.duration ?? 10000);
    return () => clearTimeout(timer);
  }, [onClose, toast]);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      onAnimationComplete={(def) => {
        if (def === "exit") onClose();
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={clsx(
        "min-w-80 rounded-md px-4 py-3 shadow-lg relative",
        variants[toast.type].color
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-3 items-center">
          {variants[toast.type].icon}
          <div className="flex flex-col">
            <strong>{variants[toast.type].label}</strong>
            <span>{toast.message}</span>
          </div>
        </div>
        <Button
          onClick={onClose}
          variant="transparent"
          icon={<IoClose />}
          className=""
        ></Button>
      </div>
    </motion.div>
  );
}
