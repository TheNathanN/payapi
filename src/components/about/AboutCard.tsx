interface Props {
  title: string;
  info: string;
}

const AboutCard = ({ title, info }: Props) => {
  return (
    <div className='text-center px-4 '>
      <h2 className='font-serif text-h3sm text-secBlue mt-8 mb-4 '>{title}</h2>
      <p className='font-sans text-body text-secLightBlue mb-8 '>{info}</p>
    </div>
  );
};

export default AboutCard;
