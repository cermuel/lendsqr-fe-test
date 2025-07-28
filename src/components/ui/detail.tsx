interface DetailProps {
  label: string;
  value: string;
}
const Detail = ({ label, value }: DetailProps) => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start pr-6">
      <span className="text-xs text-[#545F7D] uppercase">{label}</span>
      <span className="font-medium text-[#545F7D] truncate w-full overflow-hidden">
        {value}
      </span>
    </div>
  );
};

export default Detail;
