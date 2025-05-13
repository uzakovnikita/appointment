import { prisma } from '@/@shared/lib'

export const getEnabledBikes = () => {
  return prisma.bike.findMany({
    where: {
      enabled: true,
    },
  })
}
