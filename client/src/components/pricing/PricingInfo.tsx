import { motion } from 'framer-motion';
import { fadeInUp } from '../../app/animations';
import { checked, plans } from '../../app/companyData';
import Feature from './Feature';
import RequestBtn from './RequestBtn';

const PricingInfo = () => {
  return (
    <section className='max-w-[1440px] '>
      <div className='md:flex md:mx-4 md:mb-16 lg:m-0 lg:px-[10%] '>
        {plans.map((plan, i) => (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={fadeInUp}
            key={i}
            className='flex flex-col justify-center items-center text-center mb-8 px-4 w-full md:w-1/3 lg:text-left lg:mb-16 '
          >
            <h3 className='font-serif text-h4 text-primPink w-full '>
              {plan.title}
            </h3>
            <p className='my-4 text-body text-secLightBlue font-sans font-thin '>
              {plan.description}
            </p>
            <p className='font-serif text-secBlue text-h2 w-full '>
              {plan.price}
            </p>
            <ul className='border-y-[1px] border-secBlue border-opacity-40 my-4 py-4  w-full flex flex-col items-center lg:items-start '>
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

            <div className='my-4 w-full lg:flex lg:items-start '>
              <RequestBtn />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingInfo;
