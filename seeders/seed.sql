DROP DATABASE cupofsugar_db;
CREATE DATABASE cupofsugar_db;

SELECT *
FROM cupofsugar_db.users;
SELECT *
FROM cupofsugar_db.items;

USE cupofsugar_db;

INSERT INTO users
    (auth0_id, userName, userEmail)
VALUES
    ("123", "Bob Bobson", "bob@email.com"),
    ("398", "Paula Partyhard", "partyinpaula@partyhard.com"),
    ("236", "Brody Broadhead", "brobro@brother.com"),
    ("444", "Donald Dorkus", "donnieyoureoutofyourelement@thedude.com"),
    ("256", "Martha Washington", "marthwash@gmail.com"),
    ("294", "Betty Blargus", "bettyblarg@bigmail.com"),
    ("335", "Nancy Knowitall", "Nancyknowsall@wiser.com"),
    ("398", "Bugger Borowitz", "bugbo@gmail.com"),
    ("430", "Veruca Salt", "saltybrat@wonka.com"),
    ("734", "Marcelle LeShell", "marcyshell@ocean.com"),
    ("425", "Paula Paulson", "pauliepaul@gmail.com"),
    ("426", "Dennis Conrad", "dennyconnie@gmail.com"),
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
    availableStatus,
    UserId)


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
        true,
        1),

    ("Wheelbarrow",
        "Heavy duty, 6 cubit feet capacity, steel tray ACE wheelbarrow to suit almost any heavy duty project. Use to haul gravel, sand, stone, concrete.",
        "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/c77d5b8e-03eb-40ee-acb6-b60e051ea4fd?_mzcb=_1606525719704",
        "Lawn and Garden",
        15,
        "2 months",
        "carl-the-contractor@hotmail.com",
        "5556261562",
        "Email",
        true,
        2),

    ("Painter's easel",
        "Three legged painter's easel that suits the needs of nearly any painter. Walnut finish. Hold canvases up to 4 feet tall/wide. Converts into drawing table.",
        "https://www.jerrysartarama.com/safari-2-french-easel-walnut-finish?gclid=CjwKCAiA_eb-BRB2EiwAGBnXXiYeq0re3UWHx72wRo3YI3-LFp9nxAYJIv0tC9XaVuVCZ8e6VKlBLxoCcpkQAvD_BwE",
        "Arts and crafts",
        10,
        "3 months",
        "Susan.Bleeker@artsyfartsy.com",
        "7539992222",
        "email",
        true,
        3),

    ("Settlers of Catan",
        "A strategic board game where players look to collect resources before their opponents do.",
        "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
        "Board games",
        7,
        "1 month",
        "joe@bro.com",
        "2952858882",
        "phone",
        true,
        4),

    ("Settlers of Catan",
        "A strategic board game where players look to collect resources before their opponents do.",
        "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
        "Board games",
        7,
        "1 month",
        "AlexAllenAnderson@AAA.com",
        "8483095883",
        "phone",
        true,
        5),

    ("Lawnmower",
        "21 inch high wheel push mower with Honda engine",
        "https://cdn2.toro.com/en/-/media/Images/lawn-boy/product/2017/wpm_10736.ashx?mw=700&mh=599&hash=54785FA26F3ADFA0DF6A0942AF9FC2082B8FC78C",
        "Lawn and garden",
        15,
        "2 weeks",
        "JakeJohnJosephson@aol.com",
        "3993339999",
        "call or text",
        true,
        6),

    ("Stroller",
        "One hand folding with auto lock, handbrake and 3 mode front wheel. Accommodates newbords with use of car seat and up to 5 year olds",
        "https://www.rei.com/media/bd4b8173-f4cd-4322-9980-5cc8ea62f2da?size=646x485",
        "Baby items",
        20,
        "2 weeks",
        "Carla_Pendleton@web.net",
        "3920779887",
        "call or text",
        true,
        7),

    ("Karaoke machine",
        "Get your party on with this excellent karaoke machine! Featuring bluetooth, AUX, USB and FM radio connections, you can serenade the night away, and effectively annoy your neighbors",
        "https://www.amazon.com/Karaoke-Machine-Kids-Adults-Microphones/dp/B07GZ8DCZ3/ref=sr_1_1_sspa?dchild=1&keywords=karaoke+machine&qid=1608166722&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSklKUExBNVpaRVlCJmVuY3J5cHRlZElkPUEwNjE4Mjk3MUJSSTJTVUoxQjk0MyZlbmNyeXB0ZWRBZElkPUEwODEzMjA3MVVKVTEzN1M3WFJJNyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
        "Electronics",
        25,
        "5 days",
        "PartyingPaula@partyon.com",
        "6110004885",
        "call or text",
        true,
        8),

    ("Bouncy Castle",
        "Parent of the YEAR goes to you if and when you rent this crazy bouncy house for your childs next celebration! Blower fan included",
        "https://secure.img1-fg.wfcdn.com/im/96236198/resize-h800%5Ecompr-r85/1045/104557058/81%2527+x+106%2527+Bounce+House+with+Slide+and+Air+Blower.jpg",
        "Childrens toys and accessories",
        75,
        "3 days",
        "dadjeans4ever@yahoo.com",
        "5028885333",
        "call or text",
        true,
        9),

    ("Canoe",
        "Paddle away for a weekend in this ultra light kevlar Wenonah canoe! Easily maneuverable and transportable.",
        "https://cdn.shopify.com/s/files/1/0251/3213/8575/products/image_33390da8-d766-4a5b-a4ff-6d496efb3e54_1080x.png?v=1605112750",
        "Boating",
        33,
        "1 week",
        "bdubsguy@centurylink.com",
        "2995558833",
        "call or text",
        true,
        10),


    ("Gas Grill",
        "5 burner outdoor stainless steel grill. Electronic ignition, comes with wheels.",
        "https://www.fleetfarm.com/images/product/0000000318810/l/1.jpg",
        "Appliances",
        15,
        "1 week",
        "grillmcchill@hotmail.com",
        "2995559388",
        "call only",
        true,
        11),

    ("PlayStation 4",
        "The 1TB hard drive PlayStation 4 system lets you play the greatest games from acclaimed indies to award-winning AAA hits, along with more entertainment options from TV, music and more.",
        "https://media.direct.playstation.com/is/image/sierialto/PS4_Slim%20Core_ProductHero_900x900?$Background_Large$",
        "video games and consoles",
        10,
        "1 month",
        "gamer@gamesforever.com",
        "4928885233",
        "call or text",
        true,
        12),

    ("Power Drill",
        "ATOMIC 20-Volt MAX Cordless Brushless Compact 1/2 in. Drill/Driver with 2 20-Volt 1.3Ah Batteries, Charger & Bag",
        "https://images.homedepot-static.com/productImages/0a2413ea-a2dc-47a0-b7bb-5e5e91addffe/svn/dewalt-power-drills-dcd708bw205-64_1000.jpg",
        "Tools",
        15,
        "1 month",
        "bobbybuildsthings@yahoo.com",
        "3958000225",
        "call or text",
        true,
        13),

    ("Tennis raquets",
        "Set of two Wilson tennis raquets. Great for beginner or experienced tennis players. Lightweight and easy to handle.",
        "https://dks.scene7.com/is/image/GolfGalaxy/19WILABLDFL105XXXTNN?qlt=70&wid=992&fmt=webp",
        "Sporting goods",
        8,
        "1 month",
        "Tracy.Tennisstar@hotmail.com",
        "2984929933",
        "call or text",
        true,
        14),

    ("Tent",
        "REI Half Dome 2+ tent is a great camping companion. Comfortably sleeps up to 3 people. Light weight, easy to pack up, set up, and take anywhere your camping leads you.",
        "https://www.rei.com/media/0d4d1ab5-0bc4-4946-862c-fdee323530e9?size=784x588",
        "Camping",
        15,
        "3 weeks",
        "CarlCampsalot@gmail.com",
        "5526638364",
        "call or text",
        true,
        15),

    ("Sewing Machine",
        "Brother CS7000X Computerized Sewing and Quilting Machine, 70 Built-in Stitches, LCD Display, Wide Table, 10 Included Feet, White",
        "https://www.amazon.com/gp/product/B08BH5GTNC/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B08BH5GTNC&SubscriptionId=AKIAIPFZKKNXUR5ABTTA&linkCode=as2&tag=bestprodtagl44298-20",
        "Arts and crafts",
        15,
        "3 months",
        "Susansews@sewgood.com",
        "4202758399",
        "call",
        true,
        16),

    ("Banjo",
        "Ibanez B200 Banjo. 5-string with Mahogany bowl and neck, Rolled brass Ton Ring, Rosewood Fingerboard, and Remo weatherking head.",
        "https://www.sweetwater.com/store/detail/B200Banjo--ibanez-b200-banjo-natural",
        "Music",
        15,
        "2 months",
        "FingerpickinFred@email.com",
        "2848028583",
        "call or text",
        true,
        17),

    ("Folding chairs",
        "Teak folding chairs made of solid wood. Great for parties or when company comes for dinner. Solid, sturdy, handsome. Set of 4.",
        "https://www.target.com/p/4pc-robin-folding-chair-set-teak-brown-winsome/-/A-53533357?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012577538&CPNG=PLA_Furniture%2BShopping&adgroup=SC_Furniture&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019659&targetid=aud-978557310856:pla-811232886915&ds_rl=1246978&ds_rl=1248099&ds_rl=1247068&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2PyADPf4-tfbd5t_3KG2xWrkuNOmTPeT7FxPgrfEg707U97UConrm4aAqN_EALw_wcB&gclsrc=aw.ds",
        "Furniture",
        15,
        "1 month",
        "RitaMeterMaid@email.com",
        "2884440028",
        "call",
        true,
        18),

    ("Pumpkin Costume",
        "Inflatable pumpkin costume, great for dressing up for Halloween.",
        "https://www.milanoo.com/p911754.html?Promotion=usaggPLACostumes_911754&currency=USD&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2NyYp_D_-95WMvtGgONnQF_2CG1lq1mRgMBDVzQjFqaIs0Sd2D2X5waApElEALw_wcB#C4694S9",
        "Clothes and accessories",
        15,
        "1 month",
        "halloweenharry@hotmail.com",
        "2750005555",
        "call or text",
        true,
        19),

    ("The Lord of the Rings Trilogy",
        "The classic series written by JRR Tolkien in hardback, including the preclude story of of 'The Hobbit.' Beautifully illustrated. A classic must read.",
        "https://blackwells.co.uk/bookshop/product/9780008376109?gC=098f6bcd4&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2PeGWRzTr86OxoaLBtLIVz-xf5KI_atJs79lUqgNoy8FqjN925NiX4aAinNEALw_wcB",
        "Books",
        2.50,
        "1 year",
        "bilbobagginses@hobbit.com",
        "4783908333",
        "email",
        true,
        20),

    ("Camera",
        "Panasonic - LUMIX G7 Mirrorless 4K Photo Digital Camera Body with 14-42mm f3.5-5.6 II Lens - Black",
        "https://www.bestbuy.com/site/panasonic-lumix-g7-mirrorless-4k-photo-digital-camera-body-with-14-42mm-f3-5-5-6-ii-lens-black/7588027.p?skuId=7588027&ref=212&loc=1&extStoreId=281&ref=212&loc=1&ds_rl=1268655&gclid=Cj0KCQiAw_H-BRD-ARIsALQE_2PkRTDF_Xl6cQlONy2uE2cfqjoxoJM05EqvptEKL-R3HhVcFC6BVtIaAl3AEALw_wcB&gclsrc=aw.ds",
        "Photo and video",
        15,
        "2 weeks",
        "Candacecamera@comcast.com",
        "29588855555",
        "call or text",
        true,
        21),

    ("Record Player",
        "https://docs.google.com/presentation/d/18jaA5OXE9wEQJF_clv-fBg4SgMXWR6I2q-op_pAI7QQ/edit?usp=sharing",
        "https://www.guitarcenter.com/Audio-Technica/AT-LP140XP-Direct-Drive-Professional-DJ-Turntable-Silver-1500000263150.gc?source=4WWMWXGL&storeCode=&source=4WWRWXGL&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IzxKJYI72VuxhGV9pd2MehEGsEEIJ0f46esmH5C2V2pWeqJSi-mHYaArLuEALw_wcB",
        "Music",
        15,
        "1 month",
        "DJDarryl@gmail.com",
        "2774993773",
        "call or text",
        true,
        22),

    ("Bike trainer",
        "Ready to plug and play—it's fully assembled out of the box with a preinstalled Shimano 11-speed cassette—the Elite Suito bike trainer offers an easy and accurate indoor bike training experience",
        "https://www.rei.com/product/169437/elite-suito-bike-trainer?CAWELAID=120217890008345424&CAGPSPN=pla&CAAGID=107744800784&CATCI=pla-452552822322&cm_mmc=PLA_Google%7C21700000001700551_1694370001%7C92700053575966107%7CTOF%7C71700000066691934&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6IcObBsn9Eee8ZBDPLRsY9xKVQclG_uLup7Kg045X4_tSDGu6TIFsQaAkfdEALw_wcB&gclsrc=aw.ds",
        "Fitness",
        15,
        "2 months",
        "cycling4ever@email.com",
        "2948885552",
        "call or text",
        true,
        23),

    ("Bicycle",
        "The Surly Pugsley may be the original fat bike, but this one is far from the original. Previously a great all-around fat bike, the Pugsley has been redesigned to be an ideal off-road touring and exploration rig",
        "https://www.pristiwanicyclesstore.com/surly-pugsley/?sku=SKU-1399-Candied%20Yam%20Orange-Medium",
        "Bicycle",
        25,
        "1 month",
        "winterbikewanda@email.com",
        "4882994279",
        "call or text",
        true,
        24),

    ("Table saw",
        "Maximized for accuracy and capacity this 8-1/4 in. table saw includes on-board storage for blade guard assembly, non-through cut riving knife, anti-kickback pawls, blade change wrenches, miter gauge and push stick.",
        "https://www.homedepot.com/p/DEWALT-15-Amp-Corded-8-1-4-in-Compact-Jobsite-Tablesaw-DWE7485/310178475?source=shoppingads&locale=en-US&mtc=Shopping-VF-F_D25T-G-D25T-25_9_PORTABLE_POWER-DEWALT-NA-Feed-LIA-NA-NA-All_Products&cm_mmc=Shopping-VF-F_D25T-G-D25T-25_9_PORTABLE_POWER-DEWALT-NA-Feed-LIA-NA-NA-All_Products-71700000065011383-58700005750113853-92700052422842283&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6LO2fLYIFe-DMD-DXx4sIDQWP_eqyJDfzFf2564qPBcw9FnPJ7ygyMaAvWKEALw_wcB&gclsrc=aw.ds",
        "Tools",
        25,
        "1 month",
        "Corythecontractor@email.com",
        "2884992747",
        "call or text",
        true,
        25),

    ("Car jack",
        "Yellow Jacket Low-Profile Super-Duty Jack — 3-Ton Lift Capacity, 4in.–23in. Lift Range",
        "https:=//www.northerntool.com/images/product/2000x2000/566/56647_2000x2000.jpg",
        "Automotive",
        15,
        "1 month",
        "Bobsautoshop@email.com",
        "2978493388",
        "call or text",
        true,
        26),

    ("Hair styler",
        "Dyson Airwrap Complete (Nickel/Fuchsia)Engineered for multiple hair types. With barrels to curl and wave, and brushes to control, smooth or add volume",
        "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/310731-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920",
        "Beauty",
        20,
        "1 month",
        "Fabian@email.com",
        "2984772004",
        "call or text",
        true,
        27),

    ("Hammock",
        "Quilted Sunbrella Hammock with stand",
        "https://cdni.llbean.net/is/image/wim/223944_47413_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
        "Furniture",
        10,
        "3 months",
        "dadjokes@email.com",
        "2994828593",
        "call or text",
        true,
        28),

    ("Paella pan",
        "The wide, 17 inch shallow carbon steel cooking surface is designed to sauté meats and vegetables prior to adding rice",
        "https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202038/0488/img7o.jpg",
        "Miscellaneous",
        5,
        "1 month",
        "cookingclasses@email.com",
        "2985293848",
        "call or text",
        true,
        29),

    ("Sleeping pad",
        "Get a better night's sleep in the backcountry with the NEMO Tensor insulated sleeping pad. Its lightweight design is stable and packable, updated with 2 layers of metalized film to fend off the chill.",
        "https://www.rei.com/media/b8c4f612-89bb-47d1-92e5-78d350e6cc6d?size=784x588",
        "Camping",
        15,
        "2 weeks",
        "Happycamper@email.com",
        "9328884449",
        "call or text",
        true,
        30),

    ("Ticket to Ride",
        "Set out on an epic journey building railways across the country in the Ticket To Ride Board Game. Players use strategy and decision-making as they run trains and decide routes between iconic cities.",
        "https://www.target.com/p/ticket-to-ride-board-game/-/A-14204015?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732838&CPNG=PLA_Toys%2BShopping_Local&adgroup=SC_Toys&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=pla-691112647197&ds_rl=1246978&ds_rl=1248099&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6KM1bT1Uc2rtG8PFDViN6vPIzE4cGW7OEFDhYjWpLp7IOAXbyM_oDwaAhSREALw_wcB&gclsrc=aw.ds",
        "Board games",
        3,
        "1 month",
        "boardgamerz@email.com",
        "2885939204",
        "call or text",
        true,
        31),

    ("Codenames",
        "Codenames is a top-rated spy game for multiple players that you won't stop playing! The two rival spymasters know the secret identities of 25 agents.",
        "https://www.target.com/p/codenames-board-game/-/A-50364627?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732838&CPNG=PLA_Toys%2BShopping_Local&adgroup=SC_Toys&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=pla-933279105248&ds_rl=1246978&ds_rl=1248099&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6KyzMx_H28Xh9rWCI8qnLOdKwLJQp8NhDuNQFNtaaUS4y5akkECdDgaArhFEALw_wcB&gclsrc=aw.ds",
        "Board games",
        2,
        "1 month",
        "boardgamerz@email.com",
        "2995277528",
        "call or text",
        true,
        32),

    ("Scattegories",
        "Think fast! Team up in this fun, fast-paced game and rack your brain for items that fit the category.",
        "Board games",
        2,
        "1 month",
        "susiefunhater@email.com",
        "2882775939",
        "call or text",
        true,
        33),

    ("Kayak",
        "The Island Voyage 2 is a two-person inflatable family kayak filled with features that make it easy and fun to use. It inflates and deflates easily while packing down small so it can be stowed in the back of your vehicle.",
        "https://cdni.llbean.net/is/image/wim/508239_2239_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
        "Boating",
        25,
        "1 week",
        "karlkayaker@email.com",
        "2985288228",
        "call or text",
        true,
        34),

    ("Leaf blower",
        "EGO Power+ LB6504 180 mph 650 CFM 56 volt Battery Handheld Leaf Blower Kit (Battery & Charger)",
        "https://www.acehardware.com/departments/lawn-and-garden/outdoor-power-equipment/leaf-blowers/7006685?store=09328&gclid=Cj0KCQiA5vb-BRCRARIsAJBKc6JiTKMCbfNihsb9mISJIWdUtyXW5hnbv-uW5NdSibtdiZWzoTMto8oaAupIEALw_wcB&gclsrc=aw.ds",
        "Lawn and garden",
        20,
        "2 weeks",
        "joeyjoejoejunior@email.com",
        "3872229482",
        "call or text",
        true,
        35),

    ("Hover board",
        "Halo Rover X, 8.5 inches. Ranked best hoverboard 2021",
        "https://cdn.shopify.com/s/files/1/1142/0746/products/halo-rover-x-hoverboard-black-main-cfbg_1080x.jpg?v=1542132865",
        "Sporting goods",
        20,
        "1 week",
        "hoveringhal@gmail.com",
        "2858200383",
        "call or text",
        true,
        36),

    ("Harp",
        "The Rees Harps Special Edition Fullsicle Harp allows you to enjoy all the same great features of the standard Fullsicle Harp, but with an upgraded look, feel, and sound.",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_KN7oj4lbZjv3bUwGK0j764g-CEM7Przofai-BX354f81xVaFMvi2EgO3SfIAmleEJrB7Wdz5QAi717mUgYz4x10lfhyaLH1JrAZhUUdMwf3u6meRf3l7jw&usqp=CAE",
        "Music",
        25,
        "2 weeks",
        "MarytheMusician@email.com",
        "3772994827",
        "call or text",
        true,
        37),

    ("Slip 'n Slide",
        "The Turbo Chute Water Slide Lake Package features 3 - 20 foot sections of commercial strength sliding with 46 inches wide x 9 inches high PVC coated nylon inflatable wall barriers, an extra slippery coated 20 foot smooth overlapping slide surface and 4 stakes with 4 stake loops per section.",
        "https://ak1.ostkcdn.com/images/products/7954801/Rave-Sports-Turbo-Chute-Water-Slide-Lake-Package-8ef4f93d-50dd-4510-8e7d-875b60504edb_600.jpg",
        "Miscellaneous",
        150,
        "1 week",
        "Larry@email.com",
        "29852005828",
        "call or text",
        true,
        38),

    ("Outdoor event tent",
        "10'x20' Waterproof Pop Up Canopy Tent with Sides. Perfect for your next outdoor gathering to provide shelter and shade.",
        "https://cdn.shopify.com/s/files/1/0339/4889/products/07can001-20w4-dspv.jpg?v=1603351515",
        "Miscellaneous",
        50,
        "3 weeks",
        "events@email.com",
        "2985829294",
        "call",
        true,
        39)
,






        

        

        




        


