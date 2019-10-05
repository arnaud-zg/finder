export const payload = {
  formSchemas: [
    {
      type: 'classic',
      required: ['description'],
      properties: {
        description: {
          type: 'string',
          maxLength: 280,
        },
        location: {
          type: 'string',
          maxLength: 25,
        },
        price: {
          type: 'number',
        },
        visibility: {
          type: 'string',
          enums: ['public', 'private'],
        },
        type: {
          type: 'string',
          enums: ['apartment', 'learning', 'request'],
        },
      },
    },
  ],
  entities: {
    '123': {
      list: [
        {
          identifier: '1',
          locationIndication: 'Paris Brochant - Rue des Moines',
          description: 'Ground floor Studio apartment with Balcony !',
          price: 75000,
          publishTime: '2019-09-29T13:50:42.926Z',
          type: 'apartment',
          // https://paris.craigslist.org/apa/d/ground-floor-studio-apartment-with/6988874946.html
        },
        {
          courseDuration: '2h',
          identifier: '2',
          locationIndication: 'Paris',
          description:
            "Improve your Online Shopify Store with France's Top Shopify Expert",
          price: 9700,
          publishTime: '2019-09-29T13:50:42.926Z',
          type: 'learning',
          // https://paris.craigslist.org/syd/d/improve-your-online-shopify-store-with/6986077334.html
        },
        {
          identifier: '3',
          locationIndication: 'Montmartre - Paris',
          description: 'Native English Speaker Seeking Accomodation',
          publishTime: '2019-09-29T13:50:42.926Z',
          type: 'request',
          // https://paris.craigslist.org/hss/d/native-english-speaker-seeking/6984153650.html
        },
      ],
    },
    '124': {
      mode: 'classic',
    },
  },
  page: {
    blocks: [
      {
        identifier: 'announcement-list',
        entityId: '123',
      },
      {
        identifier: 'announcement-create',
        entityId: '124',
      },
    ],
    description:
      'Find the most recent announcements with the best opportunities. Stay connected to take advantage of our announcements.',
    disambiguatingDescription:
      'Find the most recent announcements with the best opportunities by the themes that we offer: real estate offer, sale opportunity. Stay connected to take advantage of our announcements.',
    identifier: 'announcement',
  },
}
