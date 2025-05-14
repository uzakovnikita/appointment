import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create admins
  await prisma.admin.createMany({
    data: [{ email: 'admin1@example.com' }, { email: 'admin2@example.com' }],
  })

  // Create clients
  await prisma.client.createMany({
    data: [{ phone: '1234567890' }, { phone: '9876543210' }],
  })

  // Create managers
  await prisma.manager.createMany({
    data: [{ name: 'John Doe' }, { name: 'Jane Smith' }],
  })

  // Create bikes
  await prisma.bike.createMany({
    data: [
      {
        name: 'Kayo T1',
        enabled: true,
        img: 'https://stels-piter.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/086/wqqguzxds43ezcgk7veeimvbi4h57i1d/400_400_140cd750bba9870f18aada2478b24840a/t1_1.webp',
      },
      {
        name: 'Regulmoto SPORT 003',
        enabled: true,
        img: 'https://pitbike-cross.ru/upload/iblock/b75/b75e79d7f9183bf39ca2b9ba9b1141d0.jpg',
      },
      {
        name: 'BSE PH 140',
        enabled: true,
        img: 'https://tvoymoto.ru/upload/iblock/1db/bt4i11msnjgfsfsp51xv0ra87k2gzzfh/c23e259a-7d2a-11e6-80c2-386077d5e755_c23e25aa-7d2a-11e6-80c2-386077d5e755.resize1.jpg',
      },
      {
        name: 'BSE Z2',
        enabled: false,
        img: 'https://pitbike-cross.ru/upload/iblock/bc2/bc2f8649feb84f870f820653f791c5e9.jpg',
      },
    ],
  })

  // Create schedules
  await prisma.schedule.createMany({
    data: [
      {
        date: new Date('2024-03-20T09:00:00Z'),
        managerid: 1,
      },
      {
        date: new Date('2024-03-21T14:00:00Z'),
        managerid: 2,
      },
    ],
  })

  // Create bookings with relationships
  const booking1 = await prisma.booking.create({
    data: {
      time: new Date('2024-03-20T10:00:00Z'),
      manager: { connect: { id: 1 } },
      client: { connect: { id: 1 } },
      bikes: {
        connect: [{ id: 1 }, { id: 2 }],
      },
      comment: 'Пожалуйста, напишите мне в телеграме по номеру 666',
    },
  })

  const booking2 = await prisma.booking.create({
    data: {
      time: new Date('2024-03-21T15:00:00Z'),
      manager: { connect: { id: 2 } },
      client: { connect: { id: 2 } },
      bikes: {
        connect: [{ id: 3 }],
      },
      comment: 'хочу много деняг',
    },
  })

  console.log('Seed data created:', { booking1, booking2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
