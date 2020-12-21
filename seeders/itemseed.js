"use strict";
const Sequelize = require("sequelize");

const rentableItems = [
  {
    itemName: "Wheelbarrow",
    itemDescription:
      "Heavy duty, 6 cubit feet capacity, steel tray ACE wheelbarrow to suit almost any heavy duty project. Use to haul gravel, sand, stone, concrete.",
    image:
      "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/c77d5b8e-03eb-40ee-acb6-b60e051ea4fd?_mzcb=_1606525719704",
    category: "Lawn and Garden",
    rentalFee: 15,
    maxRentalDuration: "2 months",
    email: "carl-the-contractor@hotmail.com",
    phone: "5556261562",
    preferredContact: "Email",
    availableStatus: true,
    UserId: 2,
  },
  {
    itemName: "Painters easel",
    itemDescription:
      "Three legged painters easel that suits the needs of nearly any painter. Walnut finish. Hold canvases up to 4 feet tall/wide. Converts into drawing table.",
    image:
      "https://www.jerrysartarama.com/safari-2-french-easel-walnut-finish?gclid=CjwKCAiA_eb-BRB2EiwAGBnXXiYeq0re3UWHx72wRo3YI3-LFp9nxAYJIv0tC9XaVuVCZ8e6VKlBLxoCcpkQAvD_BwE",
    category: "Arts and crafts",
    rentalFee: 10,
    maxRentalDuration: "3 months",
    email: "Susan.Bleeker@artsyfartsy.com",
    phone: "7539992222",
    preferredContact: "email",
    availableStatus: true,
    UserId: 3,
  },

  {
    itemName: "Settlers of Catan",
    itemDescription:
      "A strategic board game where players look to collect resources before their opponents do.",
    image:
      "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
    category: "Board games",
    rentalFee: "7",
    maxRentalDuration: "1 month",
    email: "joe@bro.com",
    phone: "2952858882",
    preferredContact: "phone",
    availableStatus: true,
    UserId: 4,
  },

  {
    itemName: "Settlers of Catan",
    itemDescription:
      "A strategic board game where players look to collect resources before their opponents do.",
    image:
      "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
    category: "Board games",
    rentalFee: 7,
    maxRentalDuration: "1 month",
    email: "AlexAllenAnderson@AAA.com",
    phone: "8483095883",
    preferredContact: "phone",
    availableStatus: true,
    UserId: 5,
  },

  {
    itemName: "Lawnmower",
    itemDescription: "21 inch high wheel push mower with Honda engine",
    image:
      "https://cdn2.toro.com/en/-/media/Images/lawn-boy/product/2017/wpm_10736.ashx?mw=700&mh=599&hash=54785FA26F3ADFA0DF6A0942AF9FC2082B8FC78C",
    category: "Lawn and garden",
    rentalFee: 15,
    maxRentalDuration: "2 weeks",
    email: "JakeJohnJosephson@aol.com",
    phone: "3993339999",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 6,
  },
  {
    itemName: "Stroller",
    itemDescription:
      "One hand folding with auto lock, handbrake and 3 mode front wheel. Accommodates newbords with use of car seat and up to 5 year olds",
    image:
      "https://www.rei.com/media/bd4b8173-f4cd-4322-9980-5cc8ea62f2da?size=646x485",
    category: "Baby items",
    rentalFee: 20,
    maxRentalDuration: "2 weeks",
    email: "Carla_Pendleton@web.net",
    phone: "3920779887",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 7,
  },
  {
    itemName: "Karaoke machine",
    itemDescription:
      "Get your party on with this excellent karaoke machine! Featuring bluetooth, AUX, USB and FM radio connections, you can serenade the night away, and effectively annoy your neighbors",
    image:
      "https://www.amazon.com/Karaoke-Machine-Kids-Adults-Microphones/dp/B07GZ8DCZ3/ref=sr_1_1_sspa?dchild=1&keywords=karaoke+machine&qid=1608166722&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSklKUExBNVpaRVlCJmVuY3J5cHRlZElkPUEwNjE4Mjk3MUJSSTJTVUoxQjk0MyZlbmNyeXB0ZWRBZElkPUEwODEzMjA3MVVKVTEzN1M3WFJJNyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    category: "Electronics",
    rentalFee: 25,
    maxRentalDuration: "5 days",
    email: "PartyingPaula@partyon.com",
    phone: "6110004885",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 8,
  },
  {
    itemName: "Bouncy Castle",
    itemDescription:
      "Parent of the YEAR goes to you if and when you rent this crazy bouncy house for your childs next celebration! Blower fan included",
    image:
      "https://secure.img1-fg.wfcdn.com/im/96236198/resize-h800%5Ecompr-r85/1045/104557058/81%2527+x+106%2527+Bounce+House+with+Slide+and+Air+Blower.jpg",
    category: "Childrens toys and accessories",
    rentalFee: 75,
    maxRentalDuration: "3 days",
    email: "dadjeans4ever@yahoo.com",
    phone: "5028885333",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 9,
  },
  {
    itemName: "Canoe",
    itemDescription:
      "Paddle away for a weekend in this ultra light kevlar Wenonah canoe! Easily maneuverable and transportable.",
    image:
      "https://cdn.shopify.com/s/files/1/0251/3213/8575/products/image_33390da8-d766-4a5b-a4ff-6d496efb3e54_1080x.png?v=1605112750",
    category: "Boating",
    rentalFee: 33,
    maxRentalDuration: "1 week",
    email: "bdubsguy@centurylink.com",
    phone: "2995558833",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 10,
  },
  {
    itemName: "Gas Grill",
    itemDescription:
      "5 burner outdoor stainless steel grill. Electronic ignition, comes with wheels.",
    image: "https://www.fleetfarm.com/images/product/0000000318810/l/1.jpg",
    category: "Appliances",
    rentalFee: 15,
    maxRentalDuration: "1 week",
    email: "grillmcchill@hotmail.com",
    phone: "2995559388",
    preferredContact: "call only",
    availableStatus: true,
    UserId: 11,
  },
  {
    itemName: "PlayStation 4",
    itemDescription:
      "The 1TB hard drive PlayStation 4 system lets you play the greatest games from acclaimed indies to award-winning AAA hits, along with more entertainment options from TV, music and more.",
    image:
      "https://media.direct.playstation.com/is/image/sierialto/PS4_Slim%20Core_ProductHero_900x900?$Background_Large$",
    category: "video games and consoles",
    rentalFee: 10,
    maxRentalDuration: "1 month",
    email: "gamer@gamesforever.com",
    phone: "4928885233",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 12,
  },
  {
    itemName: "Power Drill",
    itemDescription:
      "ATOMIC 20-Volt MAX Cordless Brushless Compact 1/2 in. Drill/Driver with 2 20-Volt 1.3Ah Batteries, Charger & Bag",
    image:
      "https://images.homedepot-static.com/productImages/0a2413ea-a2dc-47a0-b7bb-5e5e91addffe/svn/dewalt-power-drills-dcd708bw205-64_1000.jpg",
    category: "Tools",
    rentalFee: 15,
    maxRentalDuration: "1 month",
    email: "bobbybuildsthings@yahoo.com",
    phone: "3958000225",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 13,
  },
  {
    itemName: "Tennis raquets",
    itemDescription:
      "Set of two Wilson tennis raquets. Great for beginner or experienced tennis players. Lightweight and easy to handle",
    image:
      "https://dks.scene7.com/is/image/GolfGalaxy/19WILABLDFL105XXXTNN?qlt=70&wid=992&fmt=webp",
    category: "Sporting goods",
    rentalFee: 8,
    maxRentalDuration: "1 month",
    email: "Tracy.Tennisstar@hotmail.com",
    phone: "2984929933",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 12,
  },
  {
    itemName: "Tent",
    itemDescription:
      "REI Half Dome 2+ tent is a great camping companion. Comfortably sleeps up to 3 people. Light weight, easy to pack up, set up, and take anywhere your camping leads you.",
    image:
      "https://www.rei.com/media/0d4d1ab5-0bc4-4946-862c-fdee323530e9?size=784x588",
    category: "Camping",
    rentalFee: 15,
    maxRentalDuration: "3 weeks",
    email: "CarlCampsalot@gmail.com",
    phone: "5526638364",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 12,
  },
  {
    itemName: "Sewing Machine",
    itemDescription:
      "Brother CS7000X Computerized Sewing and Quilting Machine, 70 Built-in Stitches, LCD Display, Wide Table, 10 Included Feet, White",
    image:
      "https://www.amazon.com/gp/product/B08BH5GTNC/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08BH5GTNC&SubscriptionId=AKIAIPFZKKNXUR5ABTTA&linkCode=as2&tag=bestprodtagl44298-20",
    category: "Arts and crafts",
    rentalFee: 15,
    maxRentalDuration: "3 months",
    email: "Susansews@sewgood.com",
    phone: "4202758399",
    preferredContact: "call",
    availableStatus: true,
    UserId: 13,
  },
  {
    itemName: "Banjo",
    itemDescription:
      "Ibanez B200 Banjo. 5-string with Mahogany bowl and neck, Rolled brass Ton Ring, Rosewood Fingerboard, and Remo weatherking head.",
    image:
      "https://www.sweetwater.com/store/detail/B200Banjo--ibanez-b200-banjo-natural",
    category: "Music",
    rentalFee: 15,
    maxRentalDuration: "2 months",
    email: "FingerpickinFred@email.com",
    phone: "2848028583",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 10,
  },
  {
    itemName: "Folding chairs",
    itemDescription:
      "Teak folding chairs made of solid wood. Great for parties or when company comes for dinner. Solid, sturdy, handsome. Set of 4.",
    image:
      "https://www.target.com/p/4pc-robin-folding-chair-set-teak-brown-winsome/-/A-53533357?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012577538&CPNG=PLA_Furniture%2BShopping&adgroup=SC_Furniture&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019659&targetid=aud-978557310856:pla-811232886915&ds_rl=1246978&ds_rl=1248099&ds_rl=1247068&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2PyADPf4-tfbd5t_3KG2xWrkuNOmTPeT7FxPgrfEg707U97UConrm4aAqN_EALw_wcB&gclsrc=aw.ds",
    category: "Furniture",
    rentalFee: 15,
    maxRentalDuration: "1 month",
    email: "RitaMeterMaid@email.com",
    phone: "2884440028",
    preferredContact: "call",
    availableStatus: true,
    UserId: 1,
  },
  {
    itemName: "Pumpkin Costume",
    itemDescription:
      "Inflatable pumpkin costume, great for dressing up for Halloween.",
    image:
      "https://www.milanoo.com/p911754.html?Promotion=usaggPLACostumes_911754&currency=USD&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2NyYp_D_-95WMvtGgONnQF_2CG1lq1mRgMBDVzQjFqaIs0Sd2D2X5waApElEALw_wcB#C4694S9",
    category: "Clothes and accessories",
    rentalFee: 15,
    maxRentalDuration: "1 month",
    email: "halloweenharry@hotmail.com",
    phone: "2750005555",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 9,
  },
  {
    itemName: "The Lord of the Rings Trilogy",
    itemDescription:
      'The classic series written by JRR Tolkien in hardback, including the preclude story of of "The Hobbit." Beautifully illustrated. A classic must read.',
    image:
      "https://blackwells.co.uk/bookshop/product/9780008376109?gC=098f6bcd4&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2PeGWRzTr86OxoaLBtLIVz-xf5KI_atJs79lUqgNoy8FqjN925NiX4aAinNEALw_wcB",
    category: "Books",
    rentalFee: "2.50",
    maxRentalDuration: "1 year",
    email: "bilbobagginses@hobbit.com",
    phone: "4783908333",
    preferredContact: "email",
    availableStatus: true,
    UserId: 2,
  },
  {
    itemName: "Camera",
    itemDescription:
      "Panasonic - LUMIX G7 Mirrorless 4K Photo Digital Camera Body with 14-42mm f3.5-5.6 II Lens - Black",
    image:
      "https://www.bestbuy.com/site/panasonic-lumix-g7-mirrorless-4k-photo-digital-camera-body-with-14-42mm-f3-5-5-6-ii-lens-black/7588027.p?skuId=7588027&ref=212&loc=1&extStoreId=281&ref=212&loc=1&ds_rl=1268655&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2PkRTDF_Xl6cQlONy2uE2cfqjoxoJM05EqvptEKL-R3HhVcFC6BVtIaAl3AEALw_wcB&gclsrc=aw.ds",
    category: "Photo and video",
    rentalFee: 15,
    maxRentalDuration: "2 weeks",
    email: "Candacecamera@comcast.com",
    phone: "29588855555",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 11,
  },
  {
    itemName: "Record Player",
    itemDescription:
      "Audio-Technica AT-LP140XP Direct-Drive Professional DJ Turntable  Silver",
    image:
      "https://www.guitarcenter.com/Audio-Technica/AT-LP140XP-Direct-Drive-Professional-DJ-Turntable-Silver-1500000263150.gc?source=4WWMWXGL&storeCode=&source=4WWRWXGL&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IzxKJYI72VuxhGV9pd2MehEGsEEIJ0f46esmH5C2V2pWeqJSi-mHYaArLuEALw_wcB",
    category: "Music",
    rentalFee: 15,
    maxRentalDuration: "1 month",
    email: "DJDarryl@gmail.com",
    phone: "2774993773",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 12,
  },
  {
    itemName: "Bike trainer",
    itemDescription:
      "Ready to plug and play—it is fully assembled out of the box with a preinstalled Shimano 11-speed cassette—the Elite Suito bike trainer offers an easy and accurate indoor bike training experience",
    image:
      "https://www.rei.com/product/169437/elite-suito-bike-trainer?CAWELAID=120217890008345424&CAGPSPN=pla&CAAGID=107744800784&CATCI=pla-452552822322&cm_mmc=PLA_Google%7C21700000001700551_1694370001%7C92700053575966107%7CTOF%7C71700000066691934&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IcObBsn9Eee8ZBDPLRsY9xKVQclG_uLup7Kg045X4_tSDGu6TIFsQaAkfdEALw_wcB&gclsrc=aw.ds",
    category: "Fitness",
    rentalFee: 15,
    maxRentalDuration: "2 months",
    email: "cycling4ever@email.com",
    phone: "2948885552",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 13,
  },
  {
    itemName: "Bicycle",
    itemDescription:
      "The Surly Pugsley may be the original fat bike, but this one is far from the original. Previously a great all-around fat bike, the Pugsley has been redesigned to be an ideal off-road touring and exploration rig.",
    image:
      "https://www.pristiwanicyclesstore.com/surly-pugsley/?sku=SKU-1399-Candied%20Yam%20Orange-Medium",
    category: "Bicycle",
    rentalFee: 25,
    maxRentalDuration: "1 month",
    email: "winterbikewanda@email.com",
    phone: "4882994279",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 9,
  },
  {
    itemName: "Table saw",
    itemDescription:
      "Maximized for accuracy and capacity this 8-1/4 in. table saw includes on-board storage for blade guard assembly, non-through cut riving knife, anti-kickback pawls, blade change wrenches, miter gauge and push stick.",
    image:
      "https://www.homedepot.com/p/DEWALT-15-Amp-Corded-8-1-4-in-Compact-Jobsite-Tablesaw-DWE7485/310178475?source=shoppingads&locale=en-US&mtc=Shopping-VF-F_D25T-G-D25T-25_9_PORTABLE_POWER-DEWALT-NA-Feed-LIA-NA-NA-All_Products&cm_mmc=Shopping-VF-F_D25T-G-D25T-25_9_PORTABLE_POWER-DEWALT-NA-Feed-LIA-NA-NA-All_Products-71700000065011383-58700005750113853-92700052422842283&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6LO2fLYIFe-DMD-DXx4sIDQWP_eqyJDfzFf2564qPBcw9FnPJ7ygyMaAvWKEALw_wcB&gclsrc=aw.ds",
    category: "Tools",
    rentalFee: 25,
    maxRentalDuration: "1 month",
    email: "Corythecontractor@email.com",
    phone: "2884992747",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 7,
  },
  {
    itemName: "Car jack",
    itemDescription:
      "Yellow Jacket Low-Profile Super-Duty Jack — 3-Ton Lift Capacity, 4in.–23in. Lift Range",
    image:
      "https:=//www.northerntool.com/images/product/2000x2000/566/56647_2000x2000.jpg",
    category: "Automotive",
    rentalFee: 15,
    maxRentalDuration: "1 month",
    email: "Bobsautoshop@email.com",
    phone: "2978493388",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 6,
  },
  {
    itemName: "Hair styler",
    itemDescription:
      "Dyson Airwrap Complete (Nickel/Fuchsia)Engineered for multiple hair types. With barrels to curl and wave, and brushes to control, smooth or add volume",
    image:
      "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/310731-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920",
    category: "Beauty",
    rentalFee: 20,
    maxRentalDuration: "1 month",
    email: "Fabian@email.com",
    phone: "2984772004",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 7,
  },
  {
    itemName: "Hammock",
    itemDescription: "Quilted Sunbrella Hammock with stand",
    image:
      "https://cdni.llbean.net/is/image/wim/223944_47413_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
    category: "Furniture",
    rentalFee: 10,
    maxRentalDuration: "3 months",
    email: "dadjokes@email.com",
    phone: "2994828593",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 8,
  },
  {
    itemName: "Paella pan",
    itemDescription:
      "The wide, 17 inch shallow carbon steel cooking surface is designed to sauté meats and vegetables prior to adding rice",
    image:
      "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202038/0488/img7o.jpg",
    category: "Miscellaneous",
    rentalFee: 5,
    maxRentalDuration: "1 month",
    email: "cookingclasses@email.com",
    phone: "2985293848",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 12,
  },

  {
    itemName: "Sleeping pad",
    itemDescription:
      "Get a better night of sleep in the backcountry with the NEMO Tensor insulated sleeping pad. Its lightweight design is stable and packable, updated with 2 layers of metalized film to fend off the chill.",
    image:
      "https://www.rei.com/media/b8c4f612-89bb-47d1-92e5-78d350e6cc6d?size=784x588",
    category: "Camping",
    rentalFee: 15,
    maxRentalDuration: "2 weeks",
    email: "Happycamper@email.com",
    phone: "9328884449",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 1,
  },
  {
    itemName: "Ticket to Ride",
    itemDescription:
      "Set out on an epic journey building railways across the country in the Ticket To Ride Board Game. Players use strategy and decision-making as they run trains and decide routes between iconic cities.",
    image:
      "https://www.target.com/p/ticket-to-ride-board-game/-/A-14204015?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732838&CPNG=PLA_Toys%2BShopping_Local&adgroup=SC_Toys&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=pla-691112647197&ds_rl=1246978&ds_rl=1248099&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6KM1bT1Uc2rtG8PFDViN6vPIzE4cGW7OEFDhYjWpLp7IOAXbyM_oDwaAhSREALw_wcB&gclsrc=aw.ds",
    category: "Board games",
    rentalFee: 3,
    maxRentalDuration: "1 month",
    email: "boardgamerz@email.com",
    phone: "2885939204",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 2,
  },
  {
    itemName: "Codenames",
    itemDescription:
      "Codenames is a top-rated spy game for multiple players that you wont stop playing! The two rival spymasters know the secret identities of 25 agents.",
    image:
      "https://www.target.com/p/codenames-board-game/-/A-50364627?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732838&CPNG=PLA_Toys%2BShopping_Local&adgroup=SC_Toys&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=pla-933279105248&ds_rl=1246978&ds_rl=1248099&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6KyzMx_H28Xh9rWCI8qnLOdKwLJQp8NhDuNQFNtaaUS4y5akkECdDgaArhFEALw_wcB&gclsrc=aw.ds",
    category: "Board games",
    rentalFee: 2,
    maxRentalDuration: "1 month",
    email: "boardgamerz@email.com",
    phone: "2995277528",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 3,
  },
  {
    itemName: "Scattegories",
    itemDescription:
      "Think fast! Team up in this fun, fast-paced game and rack your brain for items that fit the category.",
    image:
      "https://www.target.com/p/scattergories-game/-/A-52120260?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732838&CPNG=PLA_Toys%2BShopping_Local&adgroup=SC_Toys&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019659&targetid=pla-475198084042&ds_rl=1246978&ds_rl=1248099&gclid=Cj0KCQiAifz-BRDjARIsAEElyGLtsmMMo-307OfLPue-xd9E6ujO32ZFFkE9O9HR6sQ29DjjlHUfqS4aAqTaEALw_wcB&gclsrc=aw.ds#",
    category: "Board games",
    rentalFee: 2,
    maxRentalDuration: "1 month",
    email: "susiefunhater@email.com",
    phone: "2882775939",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 4,
  },
  {
    itemName: "Kayak",
    itemDescription:
      "The Island Voyage 2 is a two-person inflatable family kayak filled with features that make it easy and fun to use. It inflates and deflates easily while packing down small so it can be stowed in the back of your vehicle.",
    image:
      "https://cdni.llbean.net/is/image/wim/508239_2239_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
    category: "Boating",
    rentalFee: 25,
    maxRentalDuration: "1 week",
    email: "karlkayaker@email.com",
    phone: "2985288228",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 4,
  },
  {
    itemName: "Leaf blower",
    itemDescription:
      "EGO Power+ LB6504 180 mph 650 CFM 56 volt Battery Handheld Leaf Blower Kit (Battery & Charger)",
    image:
      "https://www.acehardware.com/departments/lawn-and-garden/outdoor-power-equipment/leaf-blowers/7006685?store=09328&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6JiTKMCbfNihsb9mISJIWdUtyXW5hnbv-uW5NdSibtdiZWzoTMto8oaAupIEALw_wcB&gclsrc=aw.ds",
    category: "Lawn and garden",
    rentalFee: 20,
    maxRentalDuration: "2 weeks",
    email: "joeyjoejoejunior@email.com",
    phone: "3872229482",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 5,
  },
  {
    itemName: "Hover board",
    itemDescription: "Halo Rover X, 8.5 inches. Ranked best hoverboard 2021",
    image:
      "https://cdn.shopify.com/s/files/1/1142/0746/products/halo-rover-x-hoverboard-black-main-cfbg_1080x.jpg?v=1542132865",
    category: "Sporting goods",
    rentalFee: 20,
    maxRentalDuration: "1 week",
    email: "hoveringhal@gmail.com",
    phone: '2858200383"',
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 6,
  },
  {
    itemName: "Harp",
    itemDescription:
      "The Rees Harps Special Edition Fullsicle Harp allows you to enjoy all the same great features of the standard Fullsicle Harp, but with an upgraded look, feel, and sound.",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_KN7oj4lbZjv3bUwGK0j764g-CEM7Przofai-BX354f81xVaFMvi2EgO3SfIAmleEJrB7Wdz5QAi717mUgYz4x10lfhyaLH1JrAZhUUdMwf3u6meRf3l7jw&usqp=CAE",
    category: "Music",
    rentalFee: 25,
    maxRentalDuration: "2 weeks",
    email: "MarytheMusician@email.com",
    phone: "3772994827",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 7,
  },
  {
    itemName: "Slip n Slide",
    itemDescription:
      "The Turbo Chute Water Slide Lake Package features 3 - 20 foot sections of commercial strength sliding with 46 inches wide x 9 inches high PVC coated nylon inflatable wall barriers, an extra slippery coated 20 foot smooth overlapping slide surface and 4 stakes with 4 stake loops per section.",
    image:
      "https://ak1.ostkcdn.com/images/products/7954801/Rave-Sports-Turbo-Chute-Water-Slide-Lake-Package-8ef4f93d-50dd-4510-8e7d-875b60504edb_600.jpg",
    category: "Miscellaneous",
    rentalFee: 150,
    maxRentalDuration: "1 week",
    email: "Larry@email.com",
    phone: "29852005828",
    preferredContact: "call or text",
    availableStatus: true,
    UserId: 8,
  },
  {
    itemName: "Outdoor event tent",
    itemDescription:
      "10x20 foot Waterproof Pop Up Canopy Tent with Sides. Perfect for your next outdoor gathering to provide shelter and shade.",
    image:
      "https://cdn.shopify.com/s/files/1/0339/4889/products/07can001-20w4-dspv.jpg?v=1603351515",
    category: "Miscellaneous",
    rentalFee: 50,
    maxRentalDuration: "3 weeks",
    email: "events@email.com",
    phone: "2985829294",
    preferredContact: "call",
    availableStatus: true,
    UserId: 9,
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("items", rentableItems, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(Item, rentableItems, {});
  },
};
