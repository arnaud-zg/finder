import NProgress from 'nprogress'
import { IAnnouncementItemProps } from '../components/Announcement'
import { RESPONSE_DURATION_IN_MS } from '../constants/api'

export const addAnnouncement = async (
  payload
): Promise<IAnnouncementItemProps> =>
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
      resolve({
        description,
        identifier: new Date().toISOString(),
        locationIndication,
        price,
        publishTime: new Date().toISOString(),
        type,
        visibility,
      })
      NProgress.done()
    }, RESPONSE_DURATION_IN_MS)
  })
