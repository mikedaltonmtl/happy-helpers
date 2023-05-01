const addresses = [
  {
    id: 1,
    address: '305 Wychwood Ave',
    city: 'York',
    postcode: 'M6C 2T6',
    latitude: 43.68739440726955,
    longitude: -79.42498784917888
  },
  {
    id: 2,
    address: '1095 Leslie St',
    city: 'North York',
    postcode: 'M3C 2J7',
    latitude: 43.7200987753168,
    longitude: -79.34966223158406
  },
  {
    id: 3,
    address: '1880 Eglinton Ave E',
    city: 'Scarborough',
    postcode: 'M1L 2L1',
    latitude: 43.72667380002133,
    longitude: -79.2997697739118
  },
  {
    id: 4,
    address: '4274 Graham St',
    city: 'Pierrefonds-Roxboro',
    postcode: 'H9H 3S5',
    latitude: 45.47779877773197,
    longitude: -73.84981994602872
  },
  {
    id: 5,
    address: '1100 Broad St',
    city: 'Regina',
    postcode: 'S4R 1X8',
    latitude: 50.461381927681245,
    longitude: -104.60677421566696
  },
  {
    id: 6,
    address: '1805 Taunton Rd',
    city: 'Hampton',
    postcode: 'L0B 1J0',
    latitude: 43.953148795958256,
    longitude: -78.79096807530613
  },
  {
    id: 7,
    address: '1580 Bloor st w',
    city: 'Toronto',
    postcode: 'M6P 2B2',
    latitude: 43.656368851901895,
    longitude: -79.45419506042258
  },
  {
    id: 8,
    address: '16 Beechborough Ave',
    city: 'York',
    postcode: 'M6M 1Y9',
    latitude: 43.69564130041031,
    longitude: -79.4705393739131
  },
  {
    id: 9,
    address: '118 Rockwell Ave',
    city: 'Toronto',
    postcode: 'M6N 1P1',
    latitude: 43.67694055846539,
    longitude: -79.4630017492672
  },
  {
    id: 10,
    address: '22 Hewitt Ave',
    city: 'Toronto',
    postcode: 'M6R 1Y3',
    latitude: 43.65264992762798,
    longitude: -79.45316427576667
  },
  {
    id: 11,
    address: '199 Humberside Ave',
    city: 'Toronto',
    postcode: 'M6P 1K7',
    latitude: 43.661324519483024,
    longitude: -79.46442955857052
  },
  {
    id: 12,
    address: '574 Briar Hill Ave',
    city: 'Toronto',
    postcode: 'M5N 1M9',
    latitude: 43.709956820109745,
    longitude: -79.41961726042047
  },
  {
    id: 13,
    address: '56A Wentworth Ave',
    city: 'North York',
    postcode: 'M2N 1T7',
    latitude: 43.76023249139634,
    longitude: -79.4297779180904
  },
  {
    id: 14,
    address: '186 Keewatin Ave',
    city: 'Toronto',
    postcode: 'M4P 1Z8',
    latitude: 43.71363993190434,
    longitude: -79.39404860269002
  },
  {
    id: 15,
    address: '66 Forest Grove Dr',
    city: 'North York',
    postcode: 'M2K 1Z6',
    latitude: 43.78027661894256,
    longitude: -79.3761207180896
  },
  {
    id: 16,
    address: '195 Norton Ave',
    city: 'North York',
    postcode: 'M2N 4B1',
    latitude: 43.77478976264135,
    longitude: -79.40047347390995
  },
  {
    id: 17,
    address: '38 Woodlawn Ave W',
    city: 'Toronto',
    postcode: 'M4V 1G7',
    latitude: 43.683746232929536,
    longitude: -79.39439672713408
  },
  {
    id: 18,
    address: '800 Euclid Ave',
    city: 'Toronto',
    postcode: 'M6G 2V4',
    latitude: 43.66823267625822,
    longitude: -79.41654574198648
  },
  {
    id: 19,
    address: '295 Westmoreland Ave',
    city: 'Toronto',
    postcode: 'M6H 3A4',
    latitude: 43.668762538937024,
    longitude: -79.43336157203173
  },
  {
    id: 20,
    address: '15 Ave Donegani',
    city: 'Pointe-Claire',
    postcode: 'H9R 2W0',
    latitude: 45.45153956383146,
    longitude: -73.78381853151393
  },
  {
    id: 21,
    address: '3000 Rue du Marché',
    city: 'Dollard-des-Ormeaux',
    postcode: 'H9B 2Y3',
    latitude: 45.483930845661945,
    longitude: -73.79987491802059
  },
  {
    id: 22,
    address: '443 Arlington Ave',
    city: 'York',
    postcode: 'M6C 3A2',
    latitude: 43.70005698916069,
    longitude: -79.43281854010421
  },
  {
    id: 23,
    address: '115 Oxford St',
    city: 'Toronto',
    postcode: 'M5T 1P4',
    latitude: 43.655670103882805,
    longitude: -79.40498958636594
  },
  {
    id: 24,
    address: '20 Mervyn Ave',
    city: 'Etobicoke',
    postcode: 'M9B 1M8',
    latitude: 43.643623312924305,
    longitude: -79.53859506227492
  },
  {
    id: 25,
    address: "48 O'Hara Ave",
    city: 'Toronto',
    postcode: 'M6K 2R1',
    latitude: 43.643017062488774,
    longitude: -79.43502108740721
  },
  {
    id: 26,
    address: '257 Bellwoods Ave',
    city: 'Toronto',
    postcode: 'M6J 2R3',
    latitude: 43.65326108676507,
    longitude: -79.41347651809465
  },
  {
    id: 27,
    address: '27 Howie Ave',
    city: 'Toronto',
    postcode: 'M4M 2H9',
    latitude: 43.6611100819705,
    longitude: -79.34810937391445
  },
  {
    id: 28,
    address: '790 Queen St W',
    city: 'Toronto',
    postcode: 'M6J 1G3',
    latitude: 43.646074133454114,
    longitude: -79.41418713158697
  },
  {
    id: 29,
    address: '875 Dufferin St',
    city: 'Toronto',
    postcode: 'M6H 3K8',
    latitude: 43.6571659004793,
    longitude: -79.43365648925854
  },
  {
    id: 30,
    address: '375 Colborne Lodge Dr',
    city: 'Toronto',
    postcode: 'M6R 2Z3',
    latitude: 43.65145890613893,
    longitude: -79.4634691162428
  },
  {
    id: 31,
    address: '250 Winona Dr',
    city: 'York',
    postcode: 'M6C 3S7',
    latitude: 43.68224764914735,
    longitude: -79.43360632973366
  },
  {
    id: 32,
    address: '41 Eversfield Rd',
    city: 'York',
    postcode: 'M6E 1T6',
    latitude: 43.68676297078814,
    longitude: -79.44918826042134
  },
  {
    id: 33,
    address: '147 Boon Ave',
    city: 'Toronto',
    postcode: 'M6E 3Z6',
    latitude: 43.681195110918566,
    longitude: -79.44754510274964
  },
  {
    id: 34,
    address: '35 Whitworth Ave',
    city: 'Etobicoke',
    postcode: 'M8Y 3M8',
    latitude: 43.63265663464574,
    longitude: -79.48490550275154
  }
];

export { addresses };