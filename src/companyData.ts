import { CardInfo } from './types';

export const features: CardInfo[] = [
  {
    image: '/assets/home/desktop/icon-personal-finances.svg',
    title: 'Personal Finances',
    info: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
  },
  {
    image: '/assets/home/desktop/icon-banking-and-coverage.svg',
    title: 'Banking & Coverage',
    info: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
  },
  {
    image: '/assets/home/desktop/icon-consumer-payments.svg',
    title: 'Consumer Payments',
    info: "It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];

export const benefits: CardInfo[] = [
  {
    title: 'Easy to implement',
    info: "Our API comes with just a few lines of code. You'll be up and running in no time. We built our documentation page to integrate payments functionality with ease.",
    image: '/assets/home/desktop/illustration-easy-to-implement.svg',
    imgAlt: 'a page of code',
    imgStyling: 'ml-6 ',
  },
  {
    title: 'Simple UI & UX',
    info: "Our pre-built form is easy to integrate in your app or website's checkout flow and designed to optimize conversion.",
    image: '/assets/home/desktop/illustration-simple-ui.svg',
    imgAlt: '2 phones showing the ui/ux of the pay api app',
    imgStyling: 'ml-5 mt-2 ',
  },
];

export const experience: CardInfo = {
  title: 'Who we work with',
  info: 'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.',
};

export const checked = true;
export const plans = [
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
