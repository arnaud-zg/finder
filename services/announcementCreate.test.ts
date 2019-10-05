import { addAnnouncement } from './announcementCreate'

describe('Services.addAnnouncement', () => {
  it('should get created announcement', async () => {
    const createdAnnouncement = await addAnnouncement({
      description: 'Ground floor Studio apartment with Balcony !',
      location: 'Paris Brochant - Rue des Moines',
      price: 75000,
      type: 'apartment',
      visibility: 'private',
    })

    expect(createdAnnouncement).toBeTruthy()
  })
})
