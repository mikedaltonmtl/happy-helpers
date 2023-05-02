// import prisma from "../../../../prisma/.db";
import { allUsers } from '../../../../mock-data/users';

export default async function handler(req, res) {

  if (req.method === 'GET') {

    const { userId } = req.query;
    /*
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    });
    console.log(user);
    */
    const user = allUsers.find(user => user.id === parseInt(userId));
    res.json({ user });

  } else if (req.method === 'PUT') {
    const { userId } = req.query;
    const userDataObj = req.body;
    console.log(userDataObj);
    for (let key in req.body) {
      if (!req.body[key]) {
        delete userDataObj[key];
      }
    }

    for (const user of allUsers) {
      if (user.id === parseInt(userId)) {
        user.firstName    = userDataObj.firstName;
        user.lastName     = userDataObj.lastName;
        user.email        = userDataObj.email;
        user.phone        = userDataObj.phone;
        user.skills       = userDataObj.skills;
        user.description  = userDataObj.description;
      }
    }

    res.status(200).send('ok');

    /*
    console.log(`You have reached PUT api/users/${userId}`);

    await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: {
        firstName: userDataObj.firstName,
        lastName: userDataObj.lastName,
        email: userDataObj.email,
        phone: userDataObj.phone,
        skills: userDataObj.skills,
        description: userDataObj.description
      }
    });
    */
  } else if (req.method === 'PATCH') {

    const { userId } = req.query;
    const { field } = req.body;
    /*
    if (field === 'stars') {

      const updateStarStatus = await prisma.user.update({
        where: {
          id: parseInt(userId)
        },
        data: {
          stars: { increment: 1 }
        }
      });
    }
    */
    res.status(200).send('ok');
  }
}
