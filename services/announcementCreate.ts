import NProgress from 'nprogress'
import { RESPONSE_DURATION_IN_MS } from '../constants/api'

export const addAnnouncement = async (payload): Promise<IAnnouncement> =>
  await new Promise((resolve, reject) => {
    NProgress.start()
    setTimeout(() => {
      const {
        description,
        location: locationIndication,
        price,
        type,
        visibility,
      } = payload
      if (visibility === 'private') {
        resolve({
          description: '------',
          identifier: new Date().toISOString(),
          locationIndication: undefined,
          price: 0,
          publishTime: new Date().toISOString(),
          type,
          visibility,
        })
      } else {
        resolve({
          description,
          identifier: new Date().toISOString(),
          locationIndication,
          price,
          publishTime: new Date().toISOString(),
          type,
          visibility: visibility || 'public',
        })
      }
      NProgress.done()
    }, RESPONSE_DURATION_IN_MS)
  })
