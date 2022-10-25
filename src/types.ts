import type { icons } from './icons'

export type Sizes = 'sm' | 'md' | 'lg' | 'xl'
export type Icons = keyof typeof icons
export type Positions = 'vertical' | 'horizontal'
export type Nullable<T> = T | null | undefined
