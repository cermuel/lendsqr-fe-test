import "../../styles/components/detail.scss";

interface DetailProps {
  label: string;
  value: string;
}

const Detail = ({ label, value }: DetailProps) => {
  return (
    <div className="detail">
      <span className="detail__label">{label}</span>
      <span className="detail__value">{value}</span>
    </div>
  );
};

export default Detail;
