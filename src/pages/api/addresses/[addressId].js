// import prisma from "../../../../prisma/.db";
import { addresses } from '../../../../mock-data/addresses';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { addressId } = req.query;

    /*
    const address = await prisma.address.findUnique({
      where: {
        id: parseInt(addressId)
      }
    });
    */
    const address = addresses.find(address => address.id === parseInt(addressId));
    res.json({ address });

  } else if (req.method === 'PATCH') {
    /*
    const { addressId } = req.query;
    console.log(`You have reached PUT api/addresses/${addressId}`);
    res.status(200).send('ok');

    const addressDataObj = req.body;
    console.log(addressDataObj);
    for (let key in req.body) {
      if (!req.body[key]) {
        delete addressDataObj[key];
      }
    }

    await prisma.address.update({
      where: {
        id: parseInt(addressId)
      },
      data: {
        address: addressDataObj.address,
        city: addressDataObj.city,
        postcode: addressDataObj.postcode
      }
    });
    */
    res.status(200).send('ok');
  }
}