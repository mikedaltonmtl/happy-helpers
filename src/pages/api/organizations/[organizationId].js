// import prisma from "../../../../prisma/.db";

// No api calls in code base...
export default async function handler(req, res) {
  if (req.method === 'GET') {
    /*
    const { organizationId } = req.query;
    const organization = await prisma.organization.findUnique({
      where: {
        id: parseInt(organizationId)
      }
    })
    console.log(organization)
    res.json({ organization })
    */
    res.status(200).send('ok');

  } else if (req.method === 'PUT') {
    /*
    console.log(req.body);
    const { organizationId } = req.query;
    res.status(200).send('ok');
    console.log(`You have reached PUT api/organizations/${organizationId}`);
    */
    res.status(200).send('ok');
  }
}