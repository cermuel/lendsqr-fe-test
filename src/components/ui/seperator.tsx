import "../../styles/components/seperator.scss";

const Seperator = ({
  orientation = "vertical",
}: {
  orientation?: "horizontal" | "vertical";
}) => {
  return <div className={`seperator ${orientation}`} />;
};

export default Seperator;
