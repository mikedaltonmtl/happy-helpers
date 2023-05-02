// import prisma from "../../../../prisma/.db";

// No api calls in code base...
export default async function handler(req, res) {
  if (req.method === 'GET') {
    /*
    const organizations = await prisma.organization.findMany()
    console.log(organizations)
    res.json({ organizations })
    */
    res.status(200).send('ok');
  }
}