//This data was produced by extracting the address and location data of schools in NZ
//The data was obtained using the API address below from free NZ govt data API
//https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=20b7c271-fd5a-4c9e-869b-481a0e2453cd&limit=2
//

const locationData = [
    {
        "stallId": 1,
        "address": "Barclay Road, Aria",
        "location": {
            "lat": -38.563158,
            "lng": 174.985763
        }
    },
    {
        "stallId": 2,
        "address": "15 Abbott Road, Waikino",
        "location": {
            "lat": -37.409518,
            "lng": 175.770574
        }
    },
    {
        "stallId": 5,
        "address": "734 Tweed Street, Invercargill",
        "location": {
            "lat": -46.416528,
            "lng": 168.394643
        }
    },
    {
        "stallId": 6,
        "address": "11 Moana Street, Tokomaru Bay",
        "location": {
            "lat": -38.127216,
            "lng": 178.315995
        }
    },
    {
        "stallId": 7,
        "address": "62 Dawson Road, Snells Beach",
        "location": {
            "lat": -36.428453,
            "lng": 174.723704
        }
    },
    {
        "stallId": 8,
        "address": "39 Somerville Road, Auckland",
        "location": {
            "lat": -36.91284,
            "lng": 174.93907
        }
    },
    {
        "stallId": 9,
        "address": "206 Finlayson Avenue, Auckland",
        "location": {
            "lat": -37.035348,
            "lng": 174.860313
        }
    },
    {
        "stallId": 13,
        "address": "88 Alma Road, Whanganui",
        "location": {
            "lat": -39.939599,
            "lng": 175.024062
        }
    },
    {
        "stallId": 14,
        "address": "93 Chapel Drive, Te Awamutu",
        "location": {
            "lat": -38.021232,
            "lng": 175.329509
        }
    },
    {
        "stallId": 15,
        "address": "49 Lake Avenue, Queenstown",
        "location": {
            "lat": -45.022927,
            "lng": 168.731799
        }
    },
    {
        "stallId": 16,
        "address": "Te Rauparaha Street, Otaki",
        "location": {
            "lat": -40.749054,
            "lng": 175.13837
        }
    },
    {
        "stallId": 17,
        "address": "45 Evans Road, Tauranga",
        "location": {
            "lat": -37.692058,
            "lng": 176.259997
        }
    },
    {
        "stallId": 20,
        "address": "25 Anaua Street, Whanganui",
        "location": {
            "lat": -39.946844,
            "lng": 175.049331
        }
    },
    {
        "stallId": 21,
        "address": "7 Comet Crescent, Auckland",
        "location": {
            "lat": -36.96407,
            "lng": 174.79608
        }
    },
    {
        "stallId": 22,
        "address": "88 Rhodes Drive, Palmerston North",
        "location": {
            "lat": -40.328271,
            "lng": 175.645745
        }
    },
    {
        "stallId": 23,
        "address": "5 Hillary Street, Dunedin",
        "location": {
            "lat": -45.847573,
            "lng": 170.512966
        }
    },
    {
        "stallId": 24,
        "address": "41 Camperdown Road, Wellington",
        "location": {
            "lat": -41.306563,
            "lng": 174.824895
        }
    },
    {
        "stallId": 25,
        "address": "146 Dunns Road, Invercargill",
        "location": {
            "lat": -46.431486,
            "lng": 168.29038
        }
    },
    {
        "stallId": 26,
        "address": "Elles Road, Otautau",
        "location": {
            "lat": -46.140681,
            "lng": 167.993263
        }
    },
    {
        "stallId": 27,
        "address": "25 Beetham Street, Queenstown",
        "location": {
            "lat": -45.030916,
            "lng": 168.665444
        }
    },
    {
        "stallId": 28,
        "address": "70 Eye Street, Invercargill",
        "location": {
            "lat": -46.416503,
            "lng": 168.352158
        }
    },
    {
        "stallId": 31,
        "address": "Rowan Avenue, Christchurch",
        "location": {
            "lat": -43.51173,
            "lng": 172.70486
        }
    },
    {
        "stallId": 32,
        "address": "14 Ardwick Street, Gore",
        "location": {
            "lat": -46.102671,
            "lng": 168.940616
        }
    },
    {
        "stallId": 33,
        "address": "11 Digger Street, Nightcaps",
        "location": {
            "lat": -45.971547,
            "lng": 168.036222
        }
    },
    {
        "stallId": 34,
        "address": "58 Raiha Street, Porirua",
        "location": {
            "lat": -41.14846,
            "lng": 174.831728
        }
    },
    {
        "stallId": 35,
        "address": "26 Corban Avenue, Auckland",
        "location": {
            "lat": -36.893036,
            "lng": 174.628386
        }
    },
    {
        "stallId": 36,
        "address": "13 Dufferin Street, Wellington",
        "location": {
            "lat": -41.30108,
            "lng": 174.781597
        }
    },
    {
        "stallId": 37,
        "address": "Cholmondeley Avenue, Christchurch",
        "location": {
            "lat": -43.552887,
            "lng": 172.659307
        }
    },
    {
        "stallId": 38,
        "address": "249 Durham Street, Christchurch",
        "location": {
            "lat": -43.534774,
            "lng": 172.633065
        }
    },
    {
        "stallId": 39,
        "address": "22 Leamington Street, Waikaia",
        "location": {
            "lat": -45.723914,
            "lng": 168.848074
        }
    },
    {
        "stallId": 40,
        "address": "121 Herbert Street, Invercargill",
        "location": {
            "lat": -46.395359,
            "lng": 168.354578
        }
    },
    {
        "stallId": 41,
        "address": "279 Shanks Road, Gore",
        "location": {
            "lat": -46.251607,
            "lng": 168.856132
        }
    },
    {
        "stallId": 42,
        "address": "244 Argyle Otahuti Road, Waianiwa",
        "location": {
            "lat": -46.296381,
            "lng": 168.252395
        }
    },
    {
        "stallId": 43,
        "address": "120 Kitchener Street, Gore",
        "location": {
            "lat": -46.108154,
            "lng": 168.927419
        }
    },
    {
        "stallId": 44,
        "address": "Eglinton Street, Winton",
        "location": {
            "lat": -46.148076,
            "lng": 168.326786
        }
    },
    {
        "stallId": 45,
        "address": "10 Wiremu Street, Auckland",
        "location": {
            "lat": -36.887836,
            "lng": 174.745772
        }
    },
    {
        "stallId": 46,
        "address": "263 Broadway Avenue, Palmerston North",
        "location": {
            "lat": -40.349801,
            "lng": 175.621747
        }
    },
    {
        "stallId": 47,
        "address": "31 Jed Street, Invercargill",
        "location": {
            "lat": -46.411325,
            "lng": 168.357545
        }
    },
    {
        "stallId": 48,
        "address": "91 Chelmsford Street, Invercargill",
        "location": {
            "lat": -46.39323,
            "lng": 168.366486
        }
    },
    {
        "stallId": 49,
        "address": "56 Flora Road, Invercargill",
        "location": {
            "lat": -46.329975,
            "lng": 168.348432
        }
    },
    {
        "stallId": 50,
        "address": "State Highway 94, Te Anau",
        "location": {
            "lat": -45.544994,
            "lng": 167.894436
        }
    },
    {
        "stallId": 51,
        "address": "131 Queen Street, Balfour",
        "location": {
            "lat": -45.842766,
            "lng": 168.585454
        }
    },
    {
        "stallId": 52,
        "address": "24 McCaughan Street, Browns",
        "location": {
            "lat": -46.149181,
            "lng": 168.422707
        }
    },
    {
        "stallId": 53,
        "address": "4 Vagues Road, Christchurch",
        "location": {
            "lat": -43.488673,
            "lng": 172.614444
        }
    },
    {
        "stallId": 54,
        "address": "Wilkin Street, Temuka",
        "location": {
            "lat": -44.244131,
            "lng": 171.284601
        }
    },
    {
        "stallId": 55,
        "address": "1935 South Hillend-Dipton Road, Dipton",
        "location": {
            "lat": -45.890633,
            "lng": 168.351316
        }
    },
    {
        "stallId": 56,
        "address": "Rutland Street, Riversdale",
        "location": {
            "lat": -45.900912,
            "lng": 168.738412
        }
    },
    {
        "stallId": 57,
        "address": "Leader Street, Riverton",
        "location": {
            "lat": -46.351828,
            "lng": 168.019399
        }
    },
    {
        "stallId": 58,
        "address": "137 Collins Road, Hamilton",
        "location": {
            "lat": -37.821909,
            "lng": 175.268758
        }
    },
    {
        "stallId": 59,
        "address": "25 Snelson Street, Palmerston North",
        "location": {
            "lat": -40.360994,
            "lng": 175.607452
        }
    },
    {
        "stallId": 60,
        "address": "50 Kelvin Street, Timaru",
        "location": {
            "lat": -44.378511,
            "lng": 171.225105
        }
    },
    {
        "stallId": 61,
        "address": "Albert Terrace, Christchurch",
        "location": {
            "lat": -43.565432,
            "lng": 172.657232
        }
    },
    {
        "stallId": 62,
        "address": "87 Church Street, Mosgiel",
        "location": {
            "lat": -45.881293,
            "lng": 170.354878
        }
    },
    {
        "stallId": 63,
        "address": "Main Road, Dunedin",
        "location": {
            "lat": -45.903518,
            "lng": 170.425204
        }
    },
    {
        "stallId": 64,
        "address": "135 Richardson Street, Dunedin",
        "location": {
            "lat": -45.908179,
            "lng": 170.493124
        }
    },
    {
        "stallId": 65,
        "address": "Kilgour Street, Waihola",
        "location": {
            "lat": -46.021197,
            "lng": 170.099846
        }
    },
    {
        "stallId": 66,
        "address": "200 Peachgrove Road, Hamilton",
        "location": {
            "lat": -37.774864,
            "lng": 175.297033
        }
    },
    {
        "stallId": 67,
        "address": "86 St John's Street, Christchurch",
        "location": {
            "lat": -43.546479,
            "lng": 172.689238
        }
    },
    {
        "stallId": 68,
        "address": "19 Moffat Road, Tauranga",
        "location": {
            "lat": -37.712633,
            "lng": 176.113183
        }
    },
    {
        "stallId": 69,
        "address": "22 Koi Flat Road, Waikoikoi",
        "location": {
            "lat": -46.007622,
            "lng": 169.153397
        }
    },
    {
        "stallId": 70,
        "address": "6 Malloch Street, Waikouaiti",
        "location": {
            "lat": -45.596272,
            "lng": 170.673457
        }
    },
    {
        "stallId": 71,
        "address": "63 North Road, Dunedin",
        "location": {
            "lat": -45.853387,
            "lng": 170.520981
        }
    },
    {
        "stallId": 72,
        "address": "181 Milford Road, Te Anau",
        "location": {
            "lat": -45.413459,
            "lng": 167.718043
        }
    },
    {
        "stallId": 73,
        "address": "775 State Highway 96, Gore",
        "location": {
            "lat": -46.185376,
            "lng": 168.762641
        }
    },
    {
        "stallId": 74,
        "address": "118 Te Mata Road, Havelock North",
        "location": {
            "lat": -39.666625,
            "lng": 176.890916
        }
    },
    {
        "stallId": 75,
        "address": "21 Fryer Road, Napier",
        "location": {
            "lat": -39.503209,
            "lng": 176.846227
        }
    },
    {
        "stallId": 76,
        "address": "Wanganui Road, Marton",
        "location": {
            "lat": -40.064434,
            "lng": 175.360967
        }
    },
    {
        "stallId": 77,
        "address": "4 Factory Road, Invercargill",
        "location": {
            "lat": -46.473899,
            "lng": 168.700489
        }
    },
    {
        "stallId": 78,
        "address": "44 Rutherford Street, Dunedin",
        "location": {
            "lat": -45.898837,
            "lng": 170.482778
        }
    },
    {
        "stallId": 79,
        "address": "99 Stevenson Avenue, Port Chalmers",
        "location": {
            "lat": -45.819742,
            "lng": 170.601212
        }
    },
    {
        "stallId": 80,
        "address": "Pembroke Street, Oamaru",
        "location": {
            "lat": -45.075693,
            "lng": 170.984299
        }
    },
    {
        "stallId": 81,
        "address": "Derby Road, Limehills",
        "location": {
            "lat": -46.065238,
            "lng": 168.328799
        }
    },
    {
        "stallId": 82,
        "address": "Smith Road, Lochiel",
        "location": {
            "lat": -46.205986,
            "lng": 168.335175
        }
    },
    {
        "stallId": 83,
        "address": "288 Mill Road North, Myross Bush",
        "location": {
            "lat": -46.37283,
            "lng": 168.417815
        }
    },
    {
        "stallId": 84,
        "address": "Torridge Street, Oamaru",
        "location": {
            "lat": -45.091738,
            "lng": 170.971467
        }
    },
    {
        "stallId": 85,
        "address": "248 North Road, Dunedin",
        "location": {
            "lat": -45.849266,
            "lng": 170.530524
        }
    },
    {
        "stallId": 86,
        "address": "17 Papakaio Road, Oamaru",
        "location": {
            "lat": -44.989901,
            "lng": 170.979614
        }
    },
    {
        "stallId": 87,
        "address": "May Street, Waiwera South",
        "location": {
            "lat": -46.216283,
            "lng": 169.4894
        }
    },
    {
        "stallId": 88,
        "address": "Mount Cargill Road, Waitati",
        "location": {
            "lat": -45.75501,
            "lng": 170.57295
        }
    },
    {
        "stallId": 89,
        "address": "150 Helensburgh Road, Dunedin",
        "location": {
            "lat": -45.856391,
            "lng": 170.479808
        }
    },
    {
        "stallId": 90,
        "address": "11 Hislop Street, Dunedin",
        "location": {
            "lat": -45.846459,
            "lng": 170.518163
        }
    },
    {
        "stallId": 91,
        "address": "1017 Ida Valley-Omakau Road, Oturehua",
        "location": {
            "lat": -45.137217,
            "lng": 169.696295
        }
    },
    {
        "stallId": 92,
        "address": "496 Island Road, Oxford",
        "location": {
            "lat": -43.299033,
            "lng": 172.071832
        }
    },
    {
        "stallId": 93,
        "address": "Cameron Street, Waimate",
        "location": {
            "lat": -44.731442,
            "lng": 171.052432
        }
    },
    {
        "stallId": 94,
        "address": "Fuller Street, Kaiapoi",
        "location": {
            "lat": -43.384361,
            "lng": 172.654115
        }
    },
    {
        "stallId": 95,
        "address": "11 Montrose Street, Waiau",
        "location": {
            "lat": -42.653683,
            "lng": 173.04201
        }
    },
    {
        "stallId": 96,
        "address": "1139 Hakataramea Highway, Waimate",
        "location": {
            "lat": -44.790963,
            "lng": 170.927483
        }
    },
    {
        "stallId": 97,
        "address": "Hastings Street East, Christchurch",
        "location": {
            "lat": -43.548989,
            "lng": 172.648613
        }
    },
    {
        "stallId": 98,
        "address": "2 Station Street, Alexandra",
        "location": {
            "lat": -45.249273,
            "lng": 169.396538
        }
    },
    {
        "stallId": 99,
        "address": "6 Stuart Road, Ranfurly",
        "location": {
            "lat": -45.134172,
            "lng": 170.096601
        }
    },
    {
        "stallId": 100,
        "address": "36 Usk Street, Oamaru",
        "location": {
            "lat": -45.092549,
            "lng": 170.970448
        }
    },
    {
        "stallId": 101,
        "address": "559 Woodbury Road, Geraldine",
        "location": {
            "lat": -44.034925,
            "lng": 171.206998
        }
    },
    {
        "stallId": 102,
        "address": "Main North Road, Woodend",
        "location": {
            "lat": -43.324564,
            "lng": 172.665404
        }
    },
    {
        "stallId": 103,
        "address": "72 North Taieri Road, Dunedin",
        "location": {
            "lat": -45.893498,
            "lng": 170.417989
        }
    },
    {
        "stallId": 104,
        "address": "Ventry Street, Alexandra",
        "location": {
            "lat": -45.255325,
            "lng": 169.389801
        }
    },
    {
        "stallId": 105,
        "address": "42A Bradford Street, Dunedin",
        "location": {
            "lat": -45.876146,
            "lng": 170.467373
        }
    },
    {
        "stallId": 106,
        "address": "4 Roebuck Rise, Dunedin",
        "location": {
            "lat": -45.847673,
            "lng": 170.624151
        }
    },
    {
        "stallId": 107,
        "address": "18 Stewart Street, Balclutha",
        "location": {
            "lat": -46.240837,
            "lng": 169.737186
        }
    },
    {
        "stallId": 108,
        "address": "43 Elm Row, Dunedin",
        "location": {
            "lat": -45.875888,
            "lng": 170.497257
        }
    },
    {
        "stallId": 109,
        "address": "Moturata Road, Brighton",
        "location": {
            "lat": -46.071794,
            "lng": 170.194988
        }
    },
    {
        "stallId": 110,
        "address": "Campbell Street, Duntroon",
        "location": {
            "lat": -44.856037,
            "lng": 170.686398
        }
    },
    {
        "stallId": 111,
        "address": "11 Cemetery Road, Mosgiel",
        "location": {
            "lat": -45.889789,
            "lng": 170.347121
        }
    },
    {
        "stallId": 112,
        "address": "181 Roxburgh Street, Tapanui",
        "location": {
            "lat": -45.839156,
            "lng": 169.273189
        }
    },
    {
        "stallId": 113,
        "address": "Hauraki Road, Thames",
        "location": {
            "lat": -37.242176,
            "lng": 175.568916
        }
    },
    {
        "stallId": 114,
        "address": "89 Maryvale Road, Wainui",
        "location": {
            "lat": -36.616493,
            "lng": 174.651961
        }
    },
    {
        "stallId": 116,
        "address": "41 Tahuna Road, Dunedin",
        "location": {
            "lat": -45.903233,
            "lng": 170.524692
        }
    },
    {
        "stallId": 117,
        "address": "Sussex Street, Tapanui",
        "location": {
            "lat": -45.941742,
            "lng": 169.260477
        }
    },
    {
        "stallId": 118,
        "address": "2812 Tarras-Cromwell Road, Tarras",
        "location": {
            "lat": -44.837524,
            "lng": 169.412277
        }
    },
    {
        "stallId": 119,
        "address": "40 Pukewhau Road, Te Awamutu",
        "location": {
            "lat": -38.192977,
            "lng": 175.615065
        }
    },
    {
        "stallId": 120,
        "address": "45 Hassals Lane, Christchurch",
        "location": {
            "lat": -43.551181,
            "lng": 172.656331
        }
    },
    {
        "stallId": 121,
        "address": "18 De Havilland Road, Auckland",
        "location": {
            "lat": -36.793184,
            "lng": 174.662907
        }
    },
    {
        "stallId": 122,
        "address": "Short Street, Maheno",
        "location": {
            "lat": -45.167295,
            "lng": 170.834255
        }
    },
    {
        "stallId": 123,
        "address": "31 Rata Road, Wanaka",
        "location": {
            "lat": -44.234013,
            "lng": 169.233666
        }
    },
    {
        "stallId": 124,
        "address": "Passmore Crescent, Dunedin",
        "location": {
            "lat": -45.857413,
            "lng": 170.500969
        }
    },
    {
        "stallId": 125,
        "address": "1 School Road, Tai Tapu",
        "location": {
            "lat": -43.662761,
            "lng": 172.550407
        }
    },
    {
        "stallId": 126,
        "address": "33 Huirapa Street, Temuka",
        "location": {
            "lat": -44.255105,
            "lng": 171.270848
        }
    },
    {
        "stallId": 127,
        "address": "49 Winter Street, Ashburton",
        "location": {
            "lat": -43.9024,
            "lng": 171.742789
        }
    },
    {
        "stallId": 128,
        "address": "8 Mihiwaka Station Road, Purakaunui",
        "location": {
            "lat": -45.772776,
            "lng": 170.631812
        }
    },
    {
        "stallId": 129,
        "address": "8 Wanaka Street, Dunedin",
        "location": {
            "lat": -45.864944,
            "lng": 170.555576
        }
    },
    {
        "stallId": 130,
        "address": "96 Signal Hill Road, Dunedin",
        "location": {
            "lat": -45.853619,
            "lng": 170.533006
        }
    },
    {
        "stallId": 131,
        "address": "5 Hughes Street, Waimate",
        "location": {
            "lat": -44.729133,
            "lng": 171.038642
        }
    },
    {
        "stallId": 132,
        "address": "25 John Street, Waimate",
        "location": {
            "lat": -44.736306,
            "lng": 171.046665
        }
    },
    {
        "stallId": 133,
        "address": "2 Loffhagen Drive, Waipara",
        "location": {
            "lat": -43.053621,
            "lng": 172.762053
        }
    },
    {
        "stallId": 134,
        "address": "Matipo Street, Christchurch",
        "location": {
            "lat": -43.536311,
            "lng": 172.596742
        }
    },
    {
        "stallId": 135,
        "address": "65 Scally Road, Whataroa",
        "location": {
            "lat": -43.262545,
            "lng": 170.361348
        }
    },
    {
        "stallId": 136,
        "address": "26 Arthur Street, Dunedin",
        "location": {
            "lat": -45.872617,
            "lng": 170.49515
        }
    },
    {
        "stallId": 137,
        "address": "25A Arun Street, Oamaru",
        "location": {
            "lat": -45.105905,
            "lng": 170.962027
        }
    },
    {
        "stallId": 138,
        "address": "2 Mercer Street, Dunedin",
        "location": {
            "lat": -45.888608,
            "lng": 170.467181
        }
    },
    {
        "stallId": 139,
        "address": "Lanark Street, Balclutha",
        "location": {
            "lat": -46.240495,
            "lng": 169.742709
        }
    },
    {
        "stallId": 140,
        "address": "Halsey Street, Clinton",
        "location": {
            "lat": -46.200886,
            "lng": 169.381165
        }
    },
    {
        "stallId": 141,
        "address": "2155 Clutha Valley Road, Greenfield",
        "location": {
            "lat": -46.09359,
            "lng": 169.550606
        }
    },
    {
        "stallId": 142,
        "address": "25 Blyth Street, Clyde",
        "location": {
            "lat": -45.191106,
            "lng": 169.319284
        }
    },
    {
        "stallId": 143,
        "address": "144 Cass Street, Ashburton",
        "location": {
            "lat": -43.901069,
            "lng": 171.758827
        }
    },
    {
        "stallId": 144,
        "address": "51 Brucefield Avenue, Ashburton",
        "location": {
            "lat": -43.896402,
            "lng": 171.765981
        }
    },
    {
        "stallId": 145,
        "address": "56 Queen Street, Wairoa",
        "location": {
            "lat": -39.034809,
            "lng": 177.420177
        }
    },
    {
        "stallId": 146,
        "address": "40 Campion Road, Gisborne",
        "location": {
            "lat": -38.648417,
            "lng": 177.990033
        }
    },
    {
        "stallId": 147,
        "address": "21 Turners Road, Christchurch",
        "location": {
            "lat": -43.444597,
            "lng": 172.660388
        }
    },
    {
        "stallId": 148,
        "address": "40 Winters Road, Christchurch",
        "location": {
            "lat": -43.488025,
            "lng": 172.619854
        }
    },
    {
        "stallId": 149,
        "address": "120 Paparoa Street, Christchurch",
        "location": {
            "lat": -43.499655,
            "lng": 172.619586
        }
    },
    {
        "stallId": 150,
        "address": "King Street, Rangiora",
        "location": {
            "lat": -43.30538,
            "lng": 172.590275
        }
    },
    {
        "stallId": 151,
        "address": "113 Beachville Road, Christchurch",
        "location": {
            "lat": -43.556439,
            "lng": 172.733609
        }
    },
    {
        "stallId": 152,
        "address": "George Street, Dunedin",
        "location": {
            "lat": -45.858338,
            "lng": 170.511824
        }
    },
    {
        "stallId": 153,
        "address": "Gilling Place, Cromwell",
        "location": {
            "lat": -45.043384,
            "lng": 169.186586
        }
    },
    {
        "stallId": 154,
        "address": "137 Belford Street, Dunedin",
        "location": {
            "lat": -45.884426,
            "lng": 170.53346
        }
    },
    {
        "stallId": 155,
        "address": "51 Prestons Road, Christchurch",
        "location": {
            "lat": -43.473605,
            "lng": 172.621954
        }
    },
    {
        "stallId": 156,
        "address": "54 Heaton Street, Timaru",
        "location": {
            "lat": -44.401811,
            "lng": 171.248548
        }
    },
    {
        "stallId": 157,
        "address": "3 Howden Street, Dunedin",
        "location": {
            "lat": -45.90477,
            "lng": 170.429455
        }
    },
    {
        "stallId": 158,
        "address": "34 Elgin Road, Dunedin",
        "location": {
            "lat": -45.882506,
            "lng": 170.475514
        }
    },
    {
        "stallId": 159,
        "address": "11 Fisher Avenue, Christchurch",
        "location": {
            "lat": -43.559766,
            "lng": 172.637698
        }
    },
    {
        "stallId": 160,
        "address": "140 Haverstock Road, Auckland",
        "location": {
            "lat": -36.888352,
            "lng": 174.726823
        }
    },
    {
        "stallId": 161,
        "address": "52 Alexander Crescent, Auckland",
        "location": {
            "lat": -36.95536,
            "lng": 174.877035
        }
    },
    {
        "stallId": 162,
        "address": "35 Victoria Street, Rangiora",
        "location": {
            "lat": -43.307442,
            "lng": 172.595537
        }
    },
    {
        "stallId": 163,
        "address": "10 Puriri Street, Christchurch",
        "location": {
            "lat": -43.529758,
            "lng": 172.59214
        }
    },
    {
        "stallId": 164,
        "address": "22A Colombo Street, Christchurch",
        "location": {
            "lat": -43.566265,
            "lng": 172.636733
        }
    },
    {
        "stallId": 165,
        "address": "603 Upper Sefton Road, Sefton",
        "location": {
            "lat": -43.246713,
            "lng": 172.672877
        }
    },
    {
        "stallId": 166,
        "address": "2 Tawera Lane, Springfield",
        "location": {
            "lat": -43.337474,
            "lng": 171.9325
        }
    },
    {
        "stallId": 167,
        "address": "Leeston Road, Springston",
        "location": {
            "lat": -43.644586,
            "lng": 172.425734
        }
    },
    {
        "stallId": 171,
        "address": "48 Queen Street, Albury",
        "location": {
            "lat": -44.230478,
            "lng": 170.87061
        }
    },
    {
        "stallId": 172,
        "address": "110 Harrison Street, Ashburton",
        "location": {
            "lat": -43.885885,
            "lng": 171.741452
        }
    },
    {
        "stallId": 173,
        "address": "14 A Aorangi Road, Christchurch",
        "location": {
            "lat": -43.499967,
            "lng": 172.598921
        }
    },
    {
        "stallId": 174,
        "address": "299 Karori Road, Wellington",
        "location": {
            "lat": -41.28588,
            "lng": 174.734099
        }
    },
    {
        "stallId": 175,
        "address": "Flower Pot-Glory Road, Chatham Islands",
        "location": {
            "lat": -43.93316,
            "lng": -176.234694
        }
    },
    {
        "stallId": 176,
        "address": "Moorhouse Street, Ross",
        "location": {
            "lat": -42.897857,
            "lng": 170.816761
        }
    },
    {
        "stallId": 177,
        "address": "49 Rutland Street, Christchurch",
        "location": {
            "lat": -43.507131,
            "lng": 172.629095
        }
    },
    {
        "stallId": 178,
        "address": "221 Woodham Road, Christchurch",
        "location": {
            "lat": -43.524848,
            "lng": 172.675792
        }
    },
    {
        "stallId": 180,
        "address": "74 Hei Hei Road, Christchurch",
        "location": {
            "lat": -43.533484,
            "lng": 172.525345
        }
    },
    {
        "stallId": 181,
        "address": "3 Wentworth Street, Gore",
        "location": {
            "lat": -46.091738,
            "lng": 168.960487
        }
    },
    {
        "stallId": 182,
        "address": "71 George Street, Rotherham",
        "location": {
            "lat": -42.698452,
            "lng": 172.944205
        }
    },
    {
        "stallId": 183,
        "address": "48 Rowley Avenue, Christchurch",
        "location": {
            "lat": -43.562252,
            "lng": 172.587768
        }
    },
    {
        "stallId": 184,
        "address": "42 Studholme Street, Christchurch",
        "location": {
            "lat": -43.561645,
            "lng": 172.628537
        }
    },
    {
        "stallId": 185,
        "address": "35 Amyes Road, Christchurch",
        "location": {
            "lat": -43.547122,
            "lng": 172.529047
        }
    },
    {
        "stallId": 186,
        "address": "160 Estuary Road, Christchurch",
        "location": {
            "lat": -43.52622,
            "lng": 172.733527
        }
    },
    {
        "stallId": 187,
        "address": "25 Hastings Street, Southbridge",
        "location": {
            "lat": -43.809042,
            "lng": 172.251661
        }
    },
    {
        "stallId": 188,
        "address": "Aorangi Crescent, Lake Tekapo",
        "location": {
            "lat": -44.005064,
            "lng": 170.4748
        }
    },
    {
        "stallId": 189,
        "address": "Church Street, Ashburton",
        "location": {
            "lat": -43.730734,
            "lng": 171.778572
        }
    },
    {
        "stallId": 190,
        "address": "43 Mahars Road, Christchurch",
        "location": {
            "lat": -43.49871,
            "lng": 172.641415
        }
    },
    {
        "stallId": 191,
        "address": "14 Lismore Mayfield Road, Ashburton",
        "location": {
            "lat": -43.823442,
            "lng": 171.421329
        }
    },
    {
        "stallId": 192,
        "address": "41 Merrin Street, Christchurch",
        "location": {
            "lat": -43.510497,
            "lng": 172.558579
        }
    },
    {
        "stallId": 193,
        "address": "813 Loburn Whiterock Road, Loburn North",
        "location": {
            "lat": -43.207605,
            "lng": 172.493841
        }
    },
    {
        "stallId": 194,
        "address": "26 Tuckers Road, Christchurch",
        "location": {
            "lat": -43.479454,
            "lng": 172.613825
        }
    },
    {
        "stallId": 195,
        "address": "Cunningham Place, Christchurch",
        "location": {
            "lat": -43.571674,
            "lng": 172.564641
        }
    },
    {
        "stallId": 196,
        "address": "261 Jacksons Road, Kaiapoi",
        "location": {
            "lat": -43.370163,
            "lng": 172.590554
        }
    },
    {
        "stallId": 197,
        "address": "2548 Bealey Road, Darfield",
        "location": {
            "lat": -43.53945,
            "lng": 171.959653
        }
    },
    {
        "stallId": 198,
        "address": "66 Ilam Road, Christchurch",
        "location": {
            "lat": -43.526413,
            "lng": 172.579696
        }
    },
    {
        "stallId": 199,
        "address": "School Lane, Kirwee",
        "location": {
            "lat": -43.496674,
            "lng": 172.218161
        }
    },
    {
        "stallId": 200,
        "address": "35 Upper Kokatahi Road, Hokitika",
        "location": {
            "lat": -42.834259,
            "lng": 171.03775
        }
    },
    {
        "stallId": 201,
        "address": "85 Breens Road, Christchurch",
        "location": {
            "lat": -43.487498,
            "lng": 172.577254
        }
    },
    {
        "stallId": 202,
        "address": "90 Breezes Road, Christchurch",
        "location": {
            "lat": -43.509808,
            "lng": 172.688993
        }
    },
    {
        "stallId": 203,
        "address": "92 Greers Road, Christchurch",
        "location": {
            "lat": -43.509154,
            "lng": 172.576637
        }
    },
    {
        "stallId": 204,
        "address": "311 Gloucester Street, Christchurch",
        "location": {
            "lat": -43.529647,
            "lng": 172.648358
        }
    },
    {
        "stallId": 205,
        "address": "Irvines Road, Leeston",
        "location": {
            "lat": -43.667584,
            "lng": 172.197107
        }
    },
    {
        "stallId": 206,
        "address": "School Lane, Duvauchelle",
        "location": {
            "lat": -43.749671,
            "lng": 172.932045
        }
    },
    {
        "stallId": 207,
        "address": "Aikmans Road, Christchurch",
        "location": {
            "lat": -43.513814,
            "lng": 172.614755
        }
    },
    {
        "stallId": 208,
        "address": "22 Heath Street, Timaru",
        "location": {
            "lat": -44.382757,
            "lng": 171.193234
        }
    },
    {
        "stallId": 209,
        "address": "19 Ruane Street, Waimate",
        "location": {
            "lat": -44.914546,
            "lng": 171.098345
        }
    },
    {
        "stallId": 210,
        "address": "437 Halswell Road, Christchurch",
        "location": {
            "lat": -43.590655,
            "lng": 172.569381
        }
    },
    {
        "stallId": 211,
        "address": "55 Wellington Street, Ashburton",
        "location": {
            "lat": -43.912534,
            "lng": 171.760198
        }
    },
    {
        "stallId": 212,
        "address": "Pah Street, Motueka",
        "location": {
            "lat": -41.110341,
            "lng": 173.009272
        }
    },
    {
        "stallId": 213,
        "address": "111 Ranzau Road, Hope",
        "location": {
            "lat": -41.348834,
            "lng": 173.148589
        }
    },
    {
        "stallId": 214,
        "address": "14 Cambridge Street, Nelson",
        "location": {
            "lat": -41.33948,
            "lng": 173.182011
        }
    },
    {
        "stallId": 215,
        "address": "School Road, Riwaka",
        "location": {
            "lat": -41.076405,
            "lng": 172.999162
        }
    },
    {
        "stallId": 216,
        "address": "214 Vanguard Street, Nelson",
        "location": {
            "lat": -41.28377,
            "lng": 173.269151
        }
    },
    {
        "stallId": 217,
        "address": "Pukerau Street, Gore",
        "location": {
            "lat": -46.097802,
            "lng": 169.095347
        }
    },
    {
        "stallId": 218,
        "address": "20 Robins Road, Queenstown",
        "location": {
            "lat": -45.027455,
            "lng": 168.659531
        }
    },
    {
        "stallId": 219,
        "address": "110 Lamond Street, Invercargill",
        "location": {
            "lat": -46.38791,
            "lng": 168.374499
        }
    },
    {
        "stallId": 220,
        "address": "181 Foyle Street, Bluff",
        "location": {
            "lat": -46.600046,
            "lng": 168.335097
        }
    },
    {
        "stallId": 221,
        "address": "41 Saxton Road, New Plymouth",
        "location": {
            "lat": -39.085739,
            "lng": 174.090023
        }
    },
    {
        "stallId": 222,
        "address": "12 Makikihi Station Road, Makikihi",
        "location": {
            "lat": -44.632039,
            "lng": 171.142241
        }
    },
    {
        "stallId": 223,
        "address": "78 Ashburton Gorge Road, Ashburton",
        "location": {
            "lat": -43.704789,
            "lng": 171.402382
        }
    },
    {
        "stallId": 224,
        "address": "5 Sebastopol Drive, Aoraki, Mt Cook",
        "location": {
            "lat": -43.738181,
            "lng": 170.099856
        }
    },
    {
        "stallId": 225,
        "address": "132 Liverpool Street, Whanganui",
        "location": {
            "lat": -39.929293,
            "lng": 175.038396
        }
    },
    {
        "stallId": 226,
        "address": "9 Mamari Road, Waitakere",
        "location": {
            "lat": -36.798577,
            "lng": 174.612391
        }
    },
    {
        "stallId": 227,
        "address": "488E Don Buck Road, Auckland",
        "location": {
            "lat": -36.827289,
            "lng": 174.599049
        }
    },
    {
        "stallId": 228,
        "address": "Salisbury Road, Richmond",
        "location": {
            "lat": -41.339409,
            "lng": 173.193919
        }
    },
    {
        "stallId": 229,
        "address": "4 King Street, Carterton",
        "location": {
            "lat": -41.03069,
            "lng": 175.523697
        }
    },
    {
        "stallId": 230,
        "address": "Cooper Street, Lower Hutt",
        "location": {
            "lat": -41.177116,
            "lng": 174.960972
        }
    },
    {
        "stallId": 231,
        "address": "132 Chapel Street, Masterton",
        "location": {
            "lat": -40.95265,
            "lng": 175.653523
        }
    },
    {
        "stallId": 232,
        "address": "Spey Place, Porirua",
        "location": {
            "lat": -41.11339,
            "lng": 174.867393
        }
    },
    {
        "stallId": 233,
        "address": "Beazley Avenue, Wellington",
        "location": {
            "lat": -41.214565,
            "lng": 174.819394
        }
    },
    {
        "stallId": 234,
        "address": "Gray Avenue, Paraparaumu Beach",
        "location": {
            "lat": -40.890536,
            "lng": 174.994678
        }
    },
    {
        "stallId": 235,
        "address": "Ruapehu Street, Paraparaumu",
        "location": {
            "lat": -40.917357,
            "lng": 175.008925
        }
    },
    {
        "stallId": 236,
        "address": "8 Martin Street, Porirua",
        "location": {
            "lat": -41.13977,
            "lng": 174.84913
        }
    },
    {
        "stallId": 237,
        "address": "1 Church Street, Winton",
        "location": {
            "lat": -46.150501,
            "lng": 168.326634
        }
    },
    {
        "stallId": 238,
        "address": "28 Muriel Street, Thornbury",
        "location": {
            "lat": -46.290924,
            "lng": 168.095707
        }
    },
    {
        "stallId": 239,
        "address": "18 Duncan Street, Tokanui",
        "location": {
            "lat": -46.563166,
            "lng": 168.946581
        }
    },
    {
        "stallId": 240,
        "address": "Awarua Street, Porirua",
        "location": {
            "lat": -41.129838,
            "lng": 174.835301
        }
    },
    {
        "stallId": 241,
        "address": "Staithes Drive North, Porirua",
        "location": {
            "lat": -41.112681,
            "lng": 174.880045
        }
    },
    {
        "stallId": 242,
        "address": "796 State Highway 1, Levin",
        "location": {
            "lat": -40.55271,
            "lng": 175.27062
        }
    },
    {
        "stallId": 243,
        "address": "Rimu Street, Timaru",
        "location": {
            "lat": -44.390404,
            "lng": 171.213466
        }
    },
    {
        "stallId": 244,
        "address": "50 Reed Street, Ashburton",
        "location": {
            "lat": -44.000913,
            "lng": 171.565272
        }
    },
    {
        "stallId": 245,
        "address": "278 Williams Street, Kaiapoi",
        "location": {
            "lat": -43.375957,
            "lng": 172.663615
        }
    },
    {
        "stallId": 246,
        "address": "Padnell Crescent, Wellington",
        "location": {
            "lat": -41.220507,
            "lng": 174.818949
        }
    },
    {
        "stallId": 247,
        "address": "Mornington Road, Wellington",
        "location": {
            "lat": -41.315749,
            "lng": 174.764465
        }
    },
    {
        "stallId": 248,
        "address": "21 School Road, Blenheim",
        "location": {
            "lat": -41.523836,
            "lng": 173.985019
        }
    },
    {
        "stallId": 249,
        "address": "22 Matheson Road, Gore",
        "location": {
            "lat": -45.92637,
            "lng": 169.017531
        }
    },
    {
        "stallId": 250,
        "address": "34 Mauchline Street, Wallacetown",
        "location": {
            "lat": -46.332255,
            "lng": 168.289807
        }
    },
    {
        "stallId": 251,
        "address": "Woodlands Morton Mains Road, Invercargill",
        "location": {
            "lat": -46.35864,
            "lng": 168.558137
        }
    },
    {
        "stallId": 252,
        "address": "19 Torquay Street, Kaikoura",
        "location": {
            "lat": -42.408026,
            "lng": 173.684082
        }
    },
    {
        "stallId": 253,
        "address": "425 Schoolhouse Road, Kaikoura",
        "location": {
            "lat": -42.371694,
            "lng": 173.638327
        }
    },
    {
        "stallId": 254,
        "address": "21 Cargill Road, Barrytown",
        "location": {
            "lat": -42.244796,
            "lng": 171.324208
        }
    },
    {
        "stallId": 255,
        "address": "57 Averill Street, Christchurch",
        "location": {
            "lat": -43.513255,
            "lng": 172.668128
        }
    },
    {
        "stallId": 256,
        "address": "71 Sandwich Road, Christchurch",
        "location": {
            "lat": -43.562877,
            "lng": 172.645488
        }
    },
    {
        "stallId": 257,
        "address": "700 Main North Road, Christchurch",
        "location": {
            "lat": -43.453618,
            "lng": 172.627302
        }
    },
    {
        "stallId": 258,
        "address": "46 Annebrook Road, Hamilton",
        "location": {
            "lat": -37.806791,
            "lng": 175.338495
        }
    },
    {
        "stallId": 259,
        "address": "135 Tait Drive, Napier",
        "location": {
            "lat": -39.526062,
            "lng": 176.865859
        }
    },
    {
        "stallId": 260,
        "address": "21 Durham Street, Invercargill",
        "location": {
            "lat": -46.375658,
            "lng": 168.346366
        }
    },
    {
        "stallId": 261,
        "address": "Maida Vale Road, Wellington",
        "location": {
            "lat": -41.287468,
            "lng": 174.802491
        }
    },
    {
        "stallId": 262,
        "address": "18 Fantame Street, Porirua",
        "location": {
            "lat": -41.134335,
            "lng": 174.872214
        }
    },
    {
        "stallId": 263,
        "address": "Murphys Road, Blenheim",
        "location": {
            "lat": -41.507008,
            "lng": 173.932774
        }
    },
    {
        "stallId": 264,
        "address": "14 Daniell Street, Wellington",
        "location": {
            "lat": -41.311289,
            "lng": 174.781642
        }
    },
    {
        "stallId": 265,
        "address": "24 Wakeman Street, Pahiatua",
        "location": {
            "lat": -40.453435,
            "lng": 175.844844
        }
    },
    {
        "stallId": 266,
        "address": "10 Ludlam Street, Wellington",
        "location": {
            "lat": -41.323844,
            "lng": 174.829603
        }
    },
    {
        "stallId": 267,
        "address": "96 Memorial Avenue, Christchurch",
        "location": {
            "lat": -43.512738,
            "lng": 172.581782
        }
    },
    {
        "stallId": 268,
        "address": "794 Cannington Road, Cannington",
        "location": {
            "lat": -44.357499,
            "lng": 170.93677
        }
    },
    {
        "stallId": 269,
        "address": "1051 Ealing Montalto Road, Carew",
        "location": {
            "lat": -43.960073,
            "lng": 171.356948
        }
    },
    {
        "stallId": 270,
        "address": "33A Churton Crescent, Lower Hutt",
        "location": {
            "lat": -41.180931,
            "lng": 174.955351
        }
    },
    {
        "stallId": 271,
        "address": "1041 High Street, Lower Hutt",
        "location": {
            "lat": -41.188995,
            "lng": 174.950964
        }
    },
    {
        "stallId": 272,
        "address": "Kinross Street, Levin",
        "location": {
            "lat": -40.638307,
            "lng": 175.289795
        }
    },
    {
        "stallId": 273,
        "address": "Kingston-Garston Highway State Highway 6, Garston",
        "location": {
            "lat": -45.464451,
            "lng": 168.689209
        }
    },
    {
        "stallId": 274,
        "address": "Oban Street, Glenorchy",
        "location": {
            "lat": -44.85065,
            "lng": 168.38703
        }
    },
    {
        "stallId": 275,
        "address": "2250 Winton-Hedgehope Highway, Invercargill",
        "location": {
            "lat": -46.207473,
            "lng": 168.542016
        }
    },
    {
        "stallId": 276,
        "address": "5 Tokomaru East Road, Tokomaru",
        "location": {
            "lat": -40.474947,
            "lng": 175.510626
        }
    },
    {
        "stallId": 277,
        "address": "16 California Drive, Upper Hutt",
        "location": {
            "lat": -41.110988,
            "lng": 175.082547
        }
    },
    {
        "stallId": 278,
        "address": "Campbells Road, Blenheim",
        "location": {
            "lat": -41.42944,
            "lng": 173.962221
        }
    },
    {
        "stallId": 279,
        "address": "5668 Kenepuru Road, Picton",
        "location": {
            "lat": -41.158283,
            "lng": 174.044022
        }
    },
    {
        "stallId": 280,
        "address": "Te Manuao Road, Otaki",
        "location": {
            "lat": -40.757712,
            "lng": 175.166355
        }
    },
    {
        "stallId": 281,
        "address": "19 Moutere Highway, Tasman",
        "location": {
            "lat": -41.306922,
            "lng": 173.119986
        }
    },
    {
        "stallId": 282,
        "address": "Veitches Road, Christchurch",
        "location": {
            "lat": -43.481806,
            "lng": 172.603796
        }
    },
    {
        "stallId": 283,
        "address": "Fox Street, Greymouth",
        "location": {
            "lat": -42.440339,
            "lng": 171.211019
        }
    },
    {
        "stallId": 284,
        "address": "294 Ilam Road, Christchurch",
        "location": {
            "lat": -43.510467,
            "lng": 172.583791
        }
    },
    {
        "stallId": 285,
        "address": "Cotswold Avenue, Christchurch",
        "location": {
            "lat": -43.482458,
            "lng": 172.587178
        }
    },
    {
        "stallId": 286,
        "address": "473 Early's Road, Cust",
        "location": {
            "lat": -43.312457,
            "lng": 172.381037
        }
    },
    {
        "stallId": 287,
        "address": "104 Merivale Lane, Christchurch",
        "location": {
            "lat": -43.517086,
            "lng": 172.621648
        }
    },
    {
        "stallId": 288,
        "address": "Knapdale Road, Gore",
        "location": {
            "lat": -46.009975,
            "lng": 168.918606
        }
    },
    {
        "stallId": 289,
        "address": "19 Maria Street, Lumsden",
        "location": {
            "lat": -45.740712,
            "lng": 168.448531
        }
    },
    {
        "stallId": 290,
        "address": "9 Chalmers Place, Arrowtown",
        "location": {
            "lat": -44.948448,
            "lng": 168.838744
        }
    },
    {
        "stallId": 291,
        "address": "111 Haven Road, Nelson",
        "location": {
            "lat": -41.268292,
            "lng": 173.277868
        }
    },
    {
        "stallId": 292,
        "address": "15 Durham Street, Nelson",
        "location": {
            "lat": -41.306739,
            "lng": 173.224448
        }
    },
    {
        "stallId": 293,
        "address": "106 Ellis Street, Brightwater",
        "location": {
            "lat": -41.37914,
            "lng": 173.112957
        }
    },
    {
        "stallId": 294,
        "address": "State Highway 63, Nelson",
        "location": {
            "lat": -41.801592,
            "lng": 172.85158
        }
    },
    {
        "stallId": 295,
        "address": "8 School Road, Lower Moutere",
        "location": {
            "lat": -41.154344,
            "lng": 172.995271
        }
    },
    {
        "stallId": 296,
        "address": "1 Boston Crescent, Hastings",
        "location": {
            "lat": -39.61362,
            "lng": 176.773163
        }
    },
    {
        "stallId": 297,
        "address": "Mclauchlan Street, Blenheim",
        "location": {
            "lat": -41.504564,
            "lng": 173.944347
        }
    },
    {
        "stallId": 298,
        "address": "29 Boulcott Street, Lower Hutt",
        "location": {
            "lat": -41.201381,
            "lng": 174.921779
        }
    },
    {
        "stallId": 299,
        "address": "32 Driver Crescent, Porirua",
        "location": {
            "lat": -41.143157,
            "lng": 174.870831
        }
    },
    {
        "stallId": 300,
        "address": "285 O'Roarkes Road, Rangiora",
        "location": {
            "lat": -43.312345,
            "lng": 172.533986
        }
    }
];

export default locationData


