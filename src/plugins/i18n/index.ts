import { createI18n } from 'vue-i18n'
import * as messages from '~/locales'

export const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  messages: {
    ...messages,
  },
})
