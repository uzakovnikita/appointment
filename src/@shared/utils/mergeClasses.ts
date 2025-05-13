export const mergeClasses = (className1?: string, className2?: string) => {
  if (className1) {
    return className1?.concat(className2 || '')
  }

  return className2 || ''
}
