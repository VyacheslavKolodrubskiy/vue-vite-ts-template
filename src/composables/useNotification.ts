import { uuid } from '~/utils'

type NotificationType = 'success' | 'error' | 'warning' | 'info'

interface Notification {
  title: string
  type?: NotificationType
  id?: string
  delay?: number
}

const notifications = ref<Notification[]>([])

function setNotification(notification: Notification | Notification[]) {
  if (Array.isArray(notification)) {
    notification.forEach((el) => {
      setNotification(el)
    })
  }
  else {
    const { title, type = 'info', delay = 0, id = uuid() } = notification
    setTimeout(() => {
      notifications.value.push({ title, type, id })
    }, delay)

    setTimeout(() => {
      notifications.value.length && notifications.value.shift()
    }, delay + 2500)
  }
}

export function useNotification() {
  return { notifications, setNotification }
}
