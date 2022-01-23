import CheckSVG from '../svg/CheckSVG';

interface Props {
  color: string;
  feature: {};
}

const Feature = ({ color, feature }: Props) => {
  return (
    <div className='flex items-center  '>
      <CheckSVG color={color} />
      <p>{Object.keys(feature)}</p>
    </div>
  );
};

export default Feature;
