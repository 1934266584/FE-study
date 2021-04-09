import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// change findOne to findFirst
async function main() {
  const test = await prisma.test.findFirst({
    where: {
      id: 1
    }
  })
  console.log(test)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
