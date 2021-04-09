import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const avg = await prisma.test.aggregate({
    avg: {
      id: true
    }
  })

  const max = await prisma.test.aggregate({
    max: {
      id: true
    }
  })

  const sum = await prisma.test.aggregate({
    sum: {
      id: true
    }
  })
  console.log(avg, max, sum)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });