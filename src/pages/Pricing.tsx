import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Feature from '../components/pricing/Feature';

const Pricing = () => {
  const checked = true;
  const plans = [
    {
      title: 'Free Plan',
      description:
        'Build and test using our core set of products with up to 100 API requests',
      price: '$0.00',
      features: [
        { Transactions: checked },
        { Auth: checked },
        { Identity: checked },
        { Investments: !checked },
        { Assets: !checked },
        { Liabilities: !checked },
        { Income: !checked },
      ],
    },
    {
      title: 'Basic Plan',
      description:
        'Launch your project with unlimited requests and no contractual minimums',
      price: '$249.00',
      features: [
        { Transactions: checked },
        { Auth: checked },
        { Identity: checked },
        { Investments: checked },
        { Assets: checked },
        { Liabilities: !checked },
        { Income: !checked },
      ],
    },
    {
      title: 'Premium Plan',
      description:
        'Get tailored solutions, volume pricing, and dedicated support for your team',
      price: '$499.00',
      features: [
        { Transactions: checked },
        { Auth: checked },
        { Identity: checked },
        { Investments: checked },
        { Assets: checked },
        { Liabilities: checked },
        { Income: checked },
      ],
    },
  ];

  return (
    <div>
      <div className='absolute w-[780px] -top-[644px] left-[74px] '>
        <img
          src='/assets/shared/desktop/bg-pattern-circle.svg'
          alt='a circle'
        />
      </div>

      <Nav />

      <div>
        <h2 className='font-serif text-center text-h3lg text-secBlue my-8 '>
          Pricing
        </h2>

        <div>
          {plans.map(plan => (
            <div
              key={plans.indexOf(plan)}
              className='flex flex-col justify-center items-center text-center mb-8 '
            >
              <h3 className='font-serif text-h4 text-primPink '>
                {plan.title}
              </h3>
              <p className='my-4 '>{plan.description}</p>
              <p>{plan.price}</p>
              <ul className='border-y-[1px] my-4  '>
                {plan.features.map(feature => (
                  <li key={plan.features.indexOf(feature)} className='my-4 '>
                    {Object.values(feature)[0] === checked ? (
                      <Feature color='#ba4270' feature={feature} />
                    ) : (
                      <Feature color='transparent' feature={feature} />
                    )}
                  </li>
                ))}
              </ul>
              <div>
                <button>Request Access</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
