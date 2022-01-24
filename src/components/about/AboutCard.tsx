interface Props {
  title: string;
  info: string;
}

const AboutCard = ({ title, info }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default AboutCard;
