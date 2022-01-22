const Features = () => {
  interface Feature {
    image: string;
    title: string;
    body: string;
  }

  const features: Feature[] = [
    {
      image: '/assets/home/desktop/icon-personal-finances.svg',
      title: 'Personal Finances',
      body: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
    },
    {
      image: '/assets/home/desktop/icon-banking-and-coverage.svg',
      title: 'Banking & Coverage',
      body: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
    },
    {
      image: '/assets/home/desktop/icon-consumer-payments.svg',
      title: 'Consumer Payments',
      body: "It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    },
  ];

  return (
    <section>
      {features.map(feature => (
        <div key={features.indexOf(feature)} className='my-12 '>
          <div className='flex items-center justify-center '>
            <img src={feature.image} alt='icon' className='mb-2 ' />
          </div>
          <div className='text-center px-4 '>
            <h3 className='font-sans text-secBlue text-h3sm font-bold my-4 '>
              {feature.title}
            </h3>
            <p className='font-sans text-body text-secLightBlue '>
              {feature.body}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
