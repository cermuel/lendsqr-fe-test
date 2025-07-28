const Seperator = ({
  orientation = "vertical",
}: {
  orientation?: "horizontal" | "vertical";
}) => {
  return (
    <div
      className={`${
        orientation === "vertical" ? "h-full w-[1px]" : "w-full h-[1px]"
      } bg-[#545F7D2A]`}
    ></div>
  );
};

export default Seperator;
