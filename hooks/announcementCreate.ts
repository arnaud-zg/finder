import { useEffect, useState } from 'react'
import {
  IAnnouncementCreateProps,
  IAnnouncementListProps,
} from '../components/Announcement'
import { addAnnouncement } from '../services/announcementCreate'

export const useAnnouncementCreateApi = (initialEntities: {
  [entityId: string]: IAnnouncementListProps | IAnnouncementCreateProps
}) => {
  const initialAnnouncementListEntity = Object.values(initialEntities).find(
    (entity: IAnnouncementListProps) => !!entity.list
  ) as IAnnouncementListProps
  const [entity, setEntity] = useState(initialAnnouncementListEntity)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [createAnnouncementPayload, createAnnouncement] = useState()
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const createdAnnouncement = await addAnnouncement(
          createAnnouncementPayload
        )
        const updatedEntity = {
          ...entity,
          list: [...entity.list, createdAnnouncement],
        }
        setEntity(updatedEntity)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    if (createAnnouncementPayload) {
      fetchData()
    }
  }, [createAnnouncementPayload])
  return {
    state: {
      entity,
      isError,
      isLoading,
    },
    actions: {
      createAnnouncement,
    },
  }
}
