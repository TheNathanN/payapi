import { SVGProps } from '../../types';

const CheckSVG = ({ color }: SVGProps) => {
  return (
    <svg width='14' height='11' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 5.718L4.893 9.56l8.107-8'
        stroke={color}
        strokeWidth='2'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default CheckSVG;
