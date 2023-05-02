// import prisma from "../../../../prisma/.db";
import { allTasks } from '../../../../mock-data/tasks';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    /*
    const tasks = await prisma.task.findMany();
    res.json({ tasks });
    */
    res.json({ allTasks });

  } else if (req.method === 'POST') {
    /*
    const { name, desc, startDate, endDate, category, image} = req.body;

    const userData = await prisma.user.findUnique({
      where: {
        id: 1
      }
    });

    const addressData = await prisma.address.findUnique({
      where: {
        id: 1
      }
    });

    const createdTask = await prisma.task.create({
      data: {
        name,
        description: desc,
        startDate: startDate,
        endDate: endDate,
        category: category,
        nbHelpers: 1,
        image: image || "https://static.wikia.nocookie.net/find-the-markers-roblox/images/5/5f/Placeholder.jpg/revision/latest?cb=20220313030844",
        addressId: addressData.id,
        userId: userData.id
      }
    });

    res.send(createdTask);
    */
    res.status(200).send('ok');
  }
}

