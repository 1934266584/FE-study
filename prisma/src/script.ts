import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const activitys = await prisma.activity.findMany({
  });

  console.log(JSON.stringify(
      activitys,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
  ))
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect()
  })