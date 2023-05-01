const offers = [
  {
    id: 1,
    userId: 2,
    taskId: 1,
    status: 'DENIED',
    user: {
      id: 2,
      firstName: 'Kayleen',
      lastName: 'Lunski',
      description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
      email: 'K.Lunski@ferrari.it',
      password: 'aardvark',
      phone: '(416)500-1413',
      addressId: 2,
      stars: 1,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
      skills: 'Safe driver and pretty good baker.'
    }
  },
  {
    id: 2,
    userId: 3,
    taskId: 1,
    status: 'ACCEPTED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 3,
    userId: 4,
    taskId: 1,
    status: 'DENIED',
    user: {
      id: 4,
      firstName: 'Elvis',
      lastName: 'Jarzynka',
      description: 'Friendly carpenter... if you need any shelves putting up?!',
      email: 'elvis@graceland.com',
      password: 'funnydancer',
      phone: '(514)347-3653',
      addressId: 4,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
      skills: 'Woodwork and general DIY tasks.'
    }
  },
  {
    id: 4,
    userId: 5,
    taskId: 1,
    status: 'DENIED',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 5,
    userId: 5,
    taskId: 2,
    status: 'OPEN',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 6,
    userId: 2,
    taskId: 4,
    status: 'OPEN',
    user: {
      id: 2,
      firstName: 'Kayleen',
      lastName: 'Lunski',
      description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
      email: 'K.Lunski@ferrari.it',
      password: 'aardvark',
      phone: '(416)500-1413',
      addressId: 2,
      stars: 1,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
      skills: 'Safe driver and pretty good baker.'
    }
  },
  {
    id: 7,
    userId: 3,
    taskId: 4,
    status: 'OPEN',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 8,
    userId: 4,
    taskId: 4,
    status: 'OPEN',
    user: {
      id: 4,
      firstName: 'Elvis',
      lastName: 'Jarzynka',
      description: 'Friendly carpenter... if you need any shelves putting up?!',
      email: 'elvis@graceland.com',
      password: 'funnydancer',
      phone: '(514)347-3653',
      addressId: 4,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
      skills: 'Woodwork and general DIY tasks.'
    }
  },
  {
    id: 9,
    userId: 2,
    taskId: 5,
    status: 'OPEN',
    user: {
      id: 2,
      firstName: 'Kayleen',
      lastName: 'Lunski',
      description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
      email: 'K.Lunski@ferrari.it',
      password: 'aardvark',
      phone: '(416)500-1413',
      addressId: 2,
      stars: 1,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
      skills: 'Safe driver and pretty good baker.'
    }
  },
  {
    id: 10,
    userId: 3,
    taskId: 6,
    status: 'OPEN',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 11,
    userId: 4,
    taskId: 7,
    status: 'ACCEPTED',
    user: {
      id: 4,
      firstName: 'Elvis',
      lastName: 'Jarzynka',
      description: 'Friendly carpenter... if you need any shelves putting up?!',
      email: 'elvis@graceland.com',
      password: 'funnydancer',
      phone: '(514)347-3653',
      addressId: 4,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
      skills: 'Woodwork and general DIY tasks.'
    }
  },
  {
    id: 12,
    userId: 4,
    taskId: 8,
    status: 'ACCEPTED',
    user: {
      id: 4,
      firstName: 'Elvis',
      lastName: 'Jarzynka',
      description: 'Friendly carpenter... if you need any shelves putting up?!',
      email: 'elvis@graceland.com',
      password: 'funnydancer',
      phone: '(514)347-3653',
      addressId: 4,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
      skills: 'Woodwork and general DIY tasks.'
    }
  },
  {
    id: 13,
    userId: 3,
    taskId: 9,
    status: 'ACCEPTED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 14,
    userId: 2,
    taskId: 10,
    status: 'ACCEPTED',
    user: {
      id: 2,
      firstName: 'Kayleen',
      lastName: 'Lunski',
      description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
      email: 'K.Lunski@ferrari.it',
      password: 'aardvark',
      phone: '(416)500-1413',
      addressId: 2,
      stars: 1,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
      skills: 'Safe driver and pretty good baker.'
    }
  },
  {
    id: 15,
    userId: 3,
    taskId: 10,
    status: 'DENIED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 16,
    userId: 5,
    taskId: 11,
    status: 'ACCEPTED',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 17,
    userId: 2,
    taskId: 12,
    status: 'ACCEPTED',
    user: {
      id: 2,
      firstName: 'Kayleen',
      lastName: 'Lunski',
      description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
      email: 'K.Lunski@ferrari.it',
      password: 'aardvark',
      phone: '(416)500-1413',
      addressId: 2,
      stars: 1,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
      skills: 'Safe driver and pretty good baker.'
    }
  },
  {
    id: 18,
    userId: 2,
    taskId: 13,
    status: 'ACCEPTED',
    user: {
      id: 2,
      firstName: 'Kayleen',
      lastName: 'Lunski',
      description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
      email: 'K.Lunski@ferrari.it',
      password: 'aardvark',
      phone: '(416)500-1413',
      addressId: 2,
      stars: 1,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
      skills: 'Safe driver and pretty good baker.'
    }
  },
  {
    id: 19,
    userId: 5,
    taskId: 13,
    status: 'DENIED',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 20,
    userId: 3,
    taskId: 14,
    status: 'ACCEPTED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 21,
    userId: 6,
    taskId: 14,
    status: 'DENIED',
    user: {
      id: 6,
      firstName: 'Lore',
      lastName: 'Winks',
      description: 'Great with animals if your dog ever needs a walk.',
      email: 'l.winks2010@nature.com',
      password: 'gooddog',
      phone: '(905)725-6089',
      addressId: 6,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      skills: 'Animal care'
    }
  },
  {
    id: 22,
    userId: 4,
    taskId: 15,
    status: 'ACCEPTED',
    user: {
      id: 4,
      firstName: 'Elvis',
      lastName: 'Jarzynka',
      description: 'Friendly carpenter... if you need any shelves putting up?!',
      email: 'elvis@graceland.com',
      password: 'funnydancer',
      phone: '(514)347-3653',
      addressId: 4,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
      skills: 'Woodwork and general DIY tasks.'
    }
  },
  {
    id: 23,
    userId: 6,
    taskId: 15,
    status: 'DENIED',
    user: {
      id: 6,
      firstName: 'Lore',
      lastName: 'Winks',
      description: 'Great with animals if your dog ever needs a walk.',
      email: 'l.winks2010@nature.com',
      password: 'gooddog',
      phone: '(905)725-6089',
      addressId: 6,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      skills: 'Animal care'
    }
  },
  {
    id: 24,
    userId: 5,
    taskId: 16,
    status: 'ACCEPTED',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 25,
    userId: 6,
    taskId: 17,
    status: 'ACCEPTED',
    user: {
      id: 6,
      firstName: 'Lore',
      lastName: 'Winks',
      description: 'Great with animals if your dog ever needs a walk.',
      email: 'l.winks2010@nature.com',
      password: 'gooddog',
      phone: '(905)725-6089',
      addressId: 6,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      skills: 'Animal care'
    }
  },
  {
    id: 26,
    userId: 6,
    taskId: 18,
    status: 'ACCEPTED',
    user: {
      id: 6,
      firstName: 'Lore',
      lastName: 'Winks',
      description: 'Great with animals if your dog ever needs a walk.',
      email: 'l.winks2010@nature.com',
      password: 'gooddog',
      phone: '(905)725-6089',
      addressId: 6,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      skills: 'Animal care'
    }
  },
  {
    id: 27,
    userId: 1,
    taskId: 19,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 28,
    userId: 3,
    taskId: 19,
    status: 'DENIED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 29,
    userId: 6,
    taskId: 19,
    status: 'DENIED',
    user: {
      id: 6,
      firstName: 'Lore',
      lastName: 'Winks',
      description: 'Great with animals if your dog ever needs a walk.',
      email: 'l.winks2010@nature.com',
      password: 'gooddog',
      phone: '(905)725-6089',
      addressId: 6,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      skills: 'Animal care'
    }
  },
  {
    id: 30,
    userId: 1,
    taskId: 20,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 31,
    userId: 1,
    taskId: 22,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 32,
    userId: 5,
    taskId: 22,
    status: 'OPEN',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 33,
    userId: 5,
    taskId: 24,
    status: 'OPEN',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 34,
    userId: 1,
    taskId: 24,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 35,
    userId: 1,
    taskId: 25,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 36,
    userId: 1,
    taskId: 26,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 37,
    userId: 3,
    taskId: 27,
    status: 'ACCEPTED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 38,
    userId: 4,
    taskId: 28,
    status: 'ACCEPTED',
    user: {
      id: 4,
      firstName: 'Elvis',
      lastName: 'Jarzynka',
      description: 'Friendly carpenter... if you need any shelves putting up?!',
      email: 'elvis@graceland.com',
      password: 'funnydancer',
      phone: '(514)347-3653',
      addressId: 4,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
      skills: 'Woodwork and general DIY tasks.'
    }
  },
  {
    id: 39,
    userId: 1,
    taskId: 29,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 40,
    userId: 5,
    taskId: 30,
    status: 'ACCEPTED',
    user: {
      id: 5,
      firstName: 'Javier',
      lastName: 'Tarczynski',
      description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
      email: 'jtarc2010@karaoke.com',
      password: 'sofaman',
      phone: '(306)551-8238',
      addressId: 5,
      stars: 0,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
      skills: 'Dancing.'
    }
  },
  {
    id: 41,
    userId: 1,
    taskId: 31,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 42,
    userId: 1,
    taskId: 32,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 43,
    userId: 3,
    taskId: 33,
    status: 'ACCEPTED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 44,
    userId: 3,
    taskId: 34,
    status: 'ACCEPTED',
    user: {
      id: 3,
      firstName: 'Tiana',
      lastName: 'Wahman',
      description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
      email: 'TianaW@ovengloves.com',
      password: 'burntthetoast',
      phone: '(866)987-6453',
      addressId: 3,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
      skills: 'Incredible in the kitchen.'
    }
  },
  {
    id: 45,
    userId: 1,
    taskId: 35,
    status: 'ACCEPTED',
    user: {
      id: 1,
      firstName: 'Anderson',
      lastName: 'Khorsandi',
      description: 'Expert in mowing grass hills.',
      email: 'Anderson.Khorsandi@gmail.com',
      password: 'alligator',
      phone: '(636)313-2463',
      addressId: 1,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
      skills: 'Yardwork and moving stuff.'
    }
  },
  {
    id: 46,
    userId: 6,
    taskId: 36,
    status: 'ACCEPTED',
    user: {
      id: 6,
      firstName: 'Lore',
      lastName: 'Winks',
      description: 'Great with animals if your dog ever needs a walk.',
      email: 'l.winks2010@nature.com',
      password: 'gooddog',
      phone: '(905)725-6089',
      addressId: 6,
      stars: 2,
      avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      skills: 'Animal care'
    }
  }
];

export { offers };