import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const test = await prisma.test.update({
    where: {
      id: 3232,
    },
    data: {
      content: '32323!!!',
    }
  })
  console.log(test)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
