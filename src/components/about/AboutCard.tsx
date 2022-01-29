interface Props {
  title: string;
  info: string;
}

const AboutCard = ({ title, info }: Props) => {
  return (
    <div className='text-center px-4 md:flex md:my-8 md:px-8 md:text-left '>
      <h2 className='font-serif text-h3sm text-secBlue mt-8 mb-4 md:text-h3lg md:w-1/3 md:flex md:items-start md:my-0 '>
        {title}
      </h2>
      <p className='font-sans text-body text-secLightBlue mb-8 md:w-2/3 md:flex '>
        {info}
      </p>
    </div>
  );
};

export default AboutCard;
