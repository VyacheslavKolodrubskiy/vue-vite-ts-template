const errors: Record<string, string> = {
  ERR_NETWORK: 'Проблема с сетью',
}

export function error(code: string) {
  return errors[code] || 'Необработанная ошибка'
}
