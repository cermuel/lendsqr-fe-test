interface ExtraProps {
  img: string;
  title: string;
  value: string;
}
const Extra = ({ img, title, value }: ExtraProps) => {
  return (
    <div
      style={{
        boxShadow: "3px 5px 20px 0px #0000000a",
        border: " 1px solid #213f7d0f",
        borderRadius: "4px",
      }}
      className="bg-white border-[#213F7D0F] flex flex-col items-start gap-2 px-6 py-4"
    >
      <img src={img} alt={title} />
      <p className="uppercase text-sm font-medium text-[#545F7D]">{title}</p>
      <h1 className="text-[#213F7D] font-semibold text-2xl">{value}</h1>
    </div>
  );
};

export default Extra;
