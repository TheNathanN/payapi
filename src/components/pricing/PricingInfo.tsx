import { checked, plans } from '../../companyData';
import Feature from './Feature';
import RequestBtn from './RequestBtn';

const PricingInfo = () => {
  return (
    <section>
      <div>
        {plans.map(plan => (
          <div
            key={plans.indexOf(plan)}
            className='flex flex-col justify-center items-center text-center mb-8 px-4 w-full '
          >
            <h3 className='font-serif text-h4 text-primPink '>{plan.title}</h3>
            <p className='my-4 text-body text-secLightBlue font-sans font-thin '>
              {plan.description}
            </p>
            <p className='font-serif text-secBlue text-h2 '>{plan.price}</p>
            <ul className='border-y-[1px] border-secBlue border-opacity-40 my-4 py-4  w-full flex flex-col items-center '>
              {plan.features.map(feature => (
                <li
                  key={plan.features.indexOf(feature)}
                  className='my-2 w-5/12 '
                >
                  {Object.values(feature)[0] === checked ? (
                    <div className='text-body text-secBlue font-medium '>
                      <Feature color='#ba4270' feature={feature} />
                    </div>
                  ) : (
                    <div className='text-body text-secLightBlue font-medium '>
                      <Feature color='transparent' feature={feature} />
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className='my-4 '>
              <RequestBtn />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingInfo;
