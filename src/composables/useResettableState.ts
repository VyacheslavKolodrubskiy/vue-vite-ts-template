import { cloneDeep } from '~/utils'

export function useResettableState(value: Record<string, any>) {
  const state = ref(value)
  const initialStateValue = cloneDeep(value)

  function resetState() {
    Object.assign(state.value, initialStateValue)
  }

  return { resetState, state }
}
