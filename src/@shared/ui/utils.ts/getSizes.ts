import { UI_SIZE } from '../constants'

export const getSizes = (size: UI_SIZE) => {
  return {
    isSSize: size === UI_SIZE.S,
    isMSize: size === UI_SIZE.M,
    isLSize: size === UI_SIZE.L,
  }
}
