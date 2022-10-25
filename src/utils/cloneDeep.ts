export function cloneDeep(value: any) {
  try {
    return JSON.parse(JSON.stringify(value))
  }
  catch (error) {
    console.error(error)
  }
}
