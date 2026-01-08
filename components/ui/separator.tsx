type OrientationVariants = "vertical" | "horizontal";

type StrokeVariants = "solid" | "dashed";

const variants = {
  vertical: "rotate-90",
  horizontal: "rotate-0",
  solid: "border-solid",
  dashed: "border-dashed",
};

interface props {
  classname?: string;
  orientation?: OrientationVariants;
  stroke?: StrokeVariants;
}

export const Separator = ({ classname, orientation = "horizontal", stroke = "solid" }: props) => {
  return (
    <hr
      className={`${classname} ${variants[orientation]} ${variants[stroke]}`}
    />
  );
};
