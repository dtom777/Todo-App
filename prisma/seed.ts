import { prisma } from '../lib/prisma';

const main = async () => {
  const tasks = [
    { title: 'sample task 1', done: true },
    { title: 'sample task 2', done: true },
    { title: 'sample task 3', done: false },
  ];

  await Promise.all(
    tasks.map(async (task) => {
      await prisma.task.create({
        data: task,
      });
    })
  );
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
