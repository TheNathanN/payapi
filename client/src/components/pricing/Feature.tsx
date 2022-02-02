import CheckSVG from '../svg/CheckSVG';

interface Props {
  color: string;
  feature: {};
}

const Feature = ({ color, feature }: Props) => {
  return (
    <div className='flex items-center  '>
      <div className='mr-4 '>
        <CheckSVG color={color} />
      </div>
      <p>{Object.keys(feature)}</p>
    </div>
  );
};

export default Feature;
