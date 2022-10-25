export function useLoading() {
  const count = ref(0)

  function start() {
    count.value++
  }

  function stop() {
    if (count.value < 0)
      count.value = 0

    count.value--
  }

  function isLoading() {
    return count.value > 0
  }

  return { start, stop, isLoading }
}
