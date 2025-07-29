import "../../styles/components/extra.scss";

interface ExtraProps {
  img: string;
  title: string;
  value: string;
}

const Extra = ({ img, title, value }: ExtraProps) => {
  return (
    <div className="extra">
      <img className="img" src={img} alt={title} />
      <p className="title">{title}</p>
      <h1 className="value">{value}</h1>
    </div>
  );
};

export default Extra;
