import { UI_VARIANT } from '../constants'

export const getVariants = (variant: UI_VARIANT) => {
  return {
    isPrimary: variant === UI_VARIANT.Primary,
    isSecondary: variant === UI_VARIANT.Secondary,
    isTertiary: variant === UI_VARIANT.Tertiary,
  }
}
