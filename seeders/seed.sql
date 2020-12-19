SELECT *
FROM cupofsugar_db.users;
SELECT *
FROM cupofsugar_db.items;

USE cupofsugar_db;

INSERT INTO users
    (auth0_id, userName, userEmail)
VALUES
    ("123", "Bob Bobson", "bob@email.com");
("398", "Paula Partyhard", "partyinpaula@partyhard.com");
("236", "Brody Broadhead", "brobro@brother.com");
("444", "Donald Dorkus", "donnieyoureoutofyourelement@thedude.com");
("256", "Martha Washington", "marthwash@gmail.com");
("294", "Betty Blargus", "bettyblarg@bigmail.com");
("335","Nancy Knowitall", "Nancyknowsall@wiser.com");
("398", "Bugger Borowitz", "bugbo@gmail.com");
("430", "Veruca Salt", "saltybrat@wonka.com");
("734", "Marcelle LeShell", "marcyshell@ocean.com");
("425", "Paula Paulson", "pauliepaul@gmail.com");
("426", "Dennis Conrad", "dennyconnie@gmail.com");
("295", "Milhouse VonHooten", "millyhoot@gmail.com");



INSERT INTO items
    (itemName,
    itemDescription,
    image,
    category,
    rentalFee,
    maxRentalDuration,
    email,
    phone,
    preferredContact,
    availableStatus)
VALUES
    ("Test Item 1",
        "much description",
        "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555340536/shape/mentalfloss/whaleshark.png",
        "miscellaneous",
        5,
        "1 year",
        "test@email.com",
        "4444444444",
        "call or text",
        true),

    ("Wheelbarrow",
        "Heavy duty, 6 cubit feet capacity, steel tray ACE wheelbarrow to suit almost any heavy duty project. Use to haul gravel, sand, stone, concrete.",
        "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/c77d5b8e-03eb-40ee-acb6-b60e051ea4fd?_mzcb=_1606525719704",
        "Lawn and Garden",
        15,
        "2 months",
        "carl-the-contractor@hotmail.com",
        "5556261562",
        "Email",
        true),

    ("Painter's easel",
        "Three legged painter's easel that suits the needs of nearly any painter. Walnut finish. Hold canvases up to 4 feet tall/wide. Converts into drawing table.",
        "https://www.jerrysartarama.com/safari-2-french-easel-walnut-finish?gclid=CjwKCAiA_eb-BRB2EiwAGBnXXiYeq0re3UWHx72wRo3YI3-LFp9nxAYJIv0tC9XaVuVCZ8e6VKlBLxoCcpkQAvD_BwE",
        "Arts and crafts",
        10,
        "3 months",
        "Susan.Bleeker@artsyfartsy.com",
        "7539992222",
        "email",
        true),

    ("Settlers of Catan",
        "A strategic board game where players look to collect resources before their opponents do.",
        "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
        "Board games",
        7,
        "1 month",
        "joe@bro.com",
        "2952858882",
        "phone",
        true),

    ("Settlers of Catan",
        "A strategic board game where players look to collect resources before their opponents do.",
        "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
        "Board games",
        7,
        "1 month",
        "AlexAllenAnderson@AAA.com",
        "8483095883",
        "phone",
        true),

    ("Lawnmower",
        "21 inch high wheel push mower with Honda engine",
        "https://cdn2.toro.com/en/-/media/Images/lawn-boy/product/2017/wpm_10736.ashx?mw=700&mh=599&hash=54785FA26F3ADFA0DF6A0942AF9FC2082B8FC78C",
        "Lawn and garden",
        15,
        "2 weeks",
        "JakeJohnJosephson@aol.com",
        "3993339999",
        "call or text",
        true),

    ("Stroller",
        "One hand folding with auto lock, handbrake and 3 mode front wheel. Accommodates newbords with use of car seat and up to 5 year olds",
        "https://www.rei.com/media/bd4b8173-f4cd-4322-9980-5cc8ea62f2da?size=646x485",
        "Baby items",
        20,
        "2 weeks",
        "Carla_Pendleton@web.net",
        "3920779887",
        "call or text",
        true),

    ("Karaoke machine",
        "Get your party on with this excellent karaoke machine! Featuring bluetooth, AUX, USB and FM radio connections, you can serenade the night away, and effectively annoy your neighbors",
        "https://www.amazon.com/Karaoke-Machine-Kids-Adults-Microphones/dp/B07GZ8DCZ3/ref=sr_1_1_sspa?dchild=1&keywords=karaoke+machine&qid=1608166722&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSklKUExBNVpaRVlCJmVuY3J5cHRlZElkPUEwNjE4Mjk3MUJSSTJTVUoxQjk0MyZlbmNyeXB0ZWRBZElkPUEwODEzMjA3MVVKVTEzN1M3WFJJNyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        "Electronics",
        25,
        "5 days",
        "PartyingPaula@partyon.com",
        "6110004885",
        "call or text",
        true),

    ("Bouncy Castle",
        "Parent of the YEAR goes to you if and when you rent this crazy bouncy house for your childs next celebration! Blower fan included",
        "Childrens toys and accessories",
        "https://secure.img1-fg.wfcdn.com/im/96236198/resize-h800%5Ecompr-r85/1045/104557058/81%2527+x+106%2527+Bounce+House+with+Slide+and+Air+Blower.jpg",
        75,
        "3 days",
        "dadjeans4ever@yahoo.com",
        "5028885333",
        "call or text",
        true),

    ("Canoe",
        "Paddle away for a weekend in this ultra light kevlar Wenonah canoe! Easily maneuverable and transportable.",
        "Boating",
        "https://cdn.shopify.com/s/files/1/0251/3213/8575/products/image_33390da8-d766-4a5b-a4ff-6d496efb3e54_1080x.png?v=1605112750",
        33,
        "1 week",
        "bdubsguy@centurylink.com",
        "2995558833",
        "call or text",
        true),


    ("Gas Grill",
        "5 burner outdoor stainless steel grill. Electronic ignition, comes with wheels.",
        "Appliances",
        "https://www.fleetfarm.com/images/product/0000000318810/l/1.jpg",
        15,
        "1 week",
        "grillmcchill@hotmail.com",
        "2995559388",
        "call only",
        true),

    ("PlayStation 4",
        "The 1TB hard drive PlayStation 4 system lets you play the greatest games from acclaimed indies to award-winning AAA hits, along with more entertainment options from TV, music and more.",
        "https://media.direct.playstation.com/is/image/sierialto/PS4_Slim%20Core_ProductHero_900x900?$Background_Large$",
        10,
        "1 month",
        "gamer@gamesforever.com",
        "4928885233",
        "call or text",
        true),

    ("Power Drill",
        "ATOMIC 20-Volt MAX Cordless Brushless Compact 1/2 in. Drill/Driver with 2 20-Volt 1.3Ah Batteries, Charger & Bag",
        "https://images.homedepot-static.com/productImages/0a2413ea-a2dc-47a0-b7bb-5e5e91addffe/svn/dewalt-power-drills-dcd708bw205-64_1000.jpg",
        15,
        "1 month",
        "bobbybuildsthings@yahoo.com",
        "3958000225",
        "call or text",
        true);