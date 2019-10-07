type TAnnouncementType = 'apartment' | 'learning' | 'request'

type TAnnouncementVisiblity = 'public' | 'private'

interface IAnnouncement {
  courseDuration?: string
  description: string
  identifier: string
  locationIndication: string
  price: number
  publishTime: string
  type: TAnnouncementType
  visibility: TAnnouncementVisiblity
}
