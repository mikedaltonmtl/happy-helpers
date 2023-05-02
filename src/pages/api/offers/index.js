// import prisma from "../../../../prisma/.db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    /*
    const taskId = req.body[0];
    const userId = req.body[1];
    await prisma.offer.create({
      data: {
        userId,
        taskId
      }
    });
    */
    res.status(200).send('ok');
  }
}