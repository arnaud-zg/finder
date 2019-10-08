import { RESPONSE_DURATION_IN_MS } from '../constants/api'
import { getRandomBoolean } from '../utils/random'

export const getAnnouncementPagePayload = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, RESPONSE_DURATION_IN_MS)
  })

  return {
    formSchemas: [
      {
        type: 'express',
        required: ['description'],
        properties: {
          description: {
            type: 'string',
            maxLength: 280,
          },
          price: {
            type: 'number',
          },
          type: {
            type: 'string',
            enums: ['apartment', 'learning', 'request'],
          },
        },
      },
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
            description: 'Ground floor Studio apartment with Balcony !',
            identifier: '1',
            locationIndication: 'Paris Brochant - Rue des Moines',
            price: 75000,
            publishTime: '2019-09-29T13:50:42.926Z',
            type: 'apartment',
            visibility: 'public',
            // https://paris.craigslist.org/apa/d/ground-floor-studio-apartment-with/6988874946.html
          },
          {
            courseDuration: '2h',
            description:
              "Improve your Online Shopify Store with France's Top Shopify Expert",
            identifier: '2',
            price: 9700,
            publishTime: '2019-09-29T13:50:42.926Z',
            type: 'learning',
            visibility: 'public',
            // https://paris.craigslist.org/syd/d/improve-your-online-shopify-store-with/6986077334.html
          },
          {
            description: 'Native English Speaker Seeking Accomodation',
            identifier: '3',
            locationIndication: 'Montmartre - Paris',
            publishTime: '2019-09-29T13:50:42.926Z',
            type: 'request',
            visibility: 'public',
            // https://paris.craigslist.org/hss/d/native-english-speaker-seeking/6984153650.html
          },
        ],
      },
      '124': {
        mode: getRandomBoolean() ? 'classic' : 'express',
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
}
