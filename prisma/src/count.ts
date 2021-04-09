import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.news.count()
  console.log(count)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });