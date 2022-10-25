export const getItem = (key: string) => {
  try {
    const data = localStorage.getItem(key)
    return data && JSON.parse(data)
  }
  catch (e: any) {
    console.error(e.code)
  }
}

export const setItem = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  }
  catch (e: any) {
    console.error(e.code)
  }
}

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key)
  }
  catch (e: any) {
    console.error(e.code)
  }
}
