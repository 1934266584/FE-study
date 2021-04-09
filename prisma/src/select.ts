import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// select or include (选择集进行操作)
// 仅选择 (通过select)：使用 select 时，选择集仅包含作为 select 的参数显式提供的字段。
// 包括其他 (通过include)：使用 include 时，默认选择集会扩展为包含为 include 参数的其他字段。

async function main() {
  const news = await prisma.news.findMany({
    select: {
      title: true,
      newsId: true,
    },
    take: 10,
    skip: 2
  })
  console.log(news)
}

main()
  .catch(e => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });