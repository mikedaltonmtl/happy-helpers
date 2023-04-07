import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const { offerId } = req.query;
    const task = await prisma.offer.findUnique({
      where: {
        id: parseInt(offerId)
      }
    })
    console.log(task)
    res.json({ task })
  } else if (req.method === 'PUT') {
    console.log(req.body)
    const { offerId } = req.query;
    res.send(`PUT api/offers/${offerId}`)
  }
}