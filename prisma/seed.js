import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create admins
  await prisma.admin.createMany({
    data: [{ email: "admin1@example.com" }, { email: "admin2@example.com" }],
  });

  // Create clients
  await prisma.client.createMany({
    data: [{ phone: "1234567890" }, { phone: "9876543210" }],
  });

  // Create managers
  await prisma.manager.createMany({
    data: [{ name: "John Doe" }, { name: "Jane Smith" }],
  });

  // Create bikes
  await prisma.bike.createMany({
    data: [
      { name: "Mountain Bike", enabled: true },
      { name: "Road Bike", enabled: true },
      { name: "Vintage Bike", enabled: true },
      { name: "Broken Bike", enabled: false },
    ],
  });

  // Create schedules
  await prisma.schedule.createMany({
    data: [
      {
        date: new Date("2024-03-20T09:00:00Z"),
        managerid: 1,
      },
      {
        date: new Date("2024-03-21T14:00:00Z"),
        managerid: 2,
      },
    ],
  });

  // Create bookings with relationships
  const booking1 = await prisma.booking.create({
    data: {
      time: new Date("2024-03-20T10:00:00Z"),
      manager: { connect: { id: 1 } },
      client: { connect: { id: 1 } },
      bikes: {
        connect: [{ id: 1 }, { id: 2 }],
      },
      comment: "Пожалуйста, напишите мне в телеграме по номеру 666",
    },
  });

  const booking2 = await prisma.booking.create({
    data: {
      time: new Date("2024-03-21T15:00:00Z"),
      manager: { connect: { id: 2 } },
      client: { connect: { id: 2 } },
      bikes: {
        connect: [{ id: 3 }],
      },
      comment: "хочу много деняг",
    },
  });

  console.log("Seed data created:", { booking1, booking2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
