import { CompanyListProps } from '../types';
import { svgArrayWhite, svgArrayGreen } from '../svg';

const CompanyList = ({ color }: CompanyListProps) => {
  if (color === 'white') {
    return (
      <div className='flex flex-wrap w-full items-center justify-center relative max-w-[35rem] md:justify-between '>
        {svgArrayWhite.map(svg => (
          <div
            key={svgArrayWhite.indexOf(svg)}
            className='w-40 h-20 flex items-center justify-start pl-2 md:justify-center '
          >
            {svg}
          </div>
        ))}
      </div>
    );
  }

  if (color === 'green') {
    return (
      <div className='flex flex-wrap w-full items-center justify-center relative max-w-[35rem] md:justify-between '>
        {svgArrayGreen.map(svg => (
          <div
            key={svgArrayGreen.indexOf(svg)}
            className='w-40 h-20 flex items-center justify-start pl-2 md:justify-center '
          >
            {svg}
          </div>
        ))}
      </div>
    );
  }

  return <div>Error Fetching CompanyList</div>;
};

export default CompanyList;
