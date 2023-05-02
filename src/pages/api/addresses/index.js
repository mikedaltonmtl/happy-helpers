// import prisma from "../../../../prisma/.db";
import { addresses } from '../../../../mock-data/addresses';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    /*
    const addresses = await prisma.address.findMany();
    */
    res.json({ addresses });
  } else if (req.method === 'POST') {
    /*
    console.log(req.body)
    console.log('You have reached POST api/addresses');
    */
    res.status(200).send('ok');
  }
}