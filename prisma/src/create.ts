import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const test = await prisma.test.create({
    data: {
      id: 3232,
      content: '32323',
    }
  })
  console.log(test)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
