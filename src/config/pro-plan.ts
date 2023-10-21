export const PLANS = [
  {
    name: 'Free',
    slug: 'free',
    quota: 10,
    pagesPerPdf: 20,
    price: {
      amount: 0,
      priceIds: {
        test: '',
        production: '',
      },
    },
    sizeLimit: '16MB',
  },
  {
    name: 'Pro',
    slug: 'pro',
    quota: 50,
    pagesPerPdf: 60,
    price: {
      amount: 14,
      priceIds: {
        test: 'price_1O3OdzAfDDO34NcvZ7CUsQXk',
        production: '',
      },
    },
    sizeLimit: '64MB',
  },
];
