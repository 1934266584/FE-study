import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// change findOne to findFirst
async function main() {
  const time = Date.now()
  const test = await prisma.news.findMany({
    where: {
      OR: [{
        title: { contains: '关于' },
        state: { equals: 1 },
      }]
    },
    take: 10
  })
  console.log(test, Date.now() - time)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });