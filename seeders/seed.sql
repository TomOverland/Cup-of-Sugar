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
    ("123", "Bob Bobson", "bob@email.com");
("", "")

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
        "10",
        "3 months",
        "Susan.Bleeker@artsyfartsy.com",
        "7539992222",
        "email",
        true),

    ("Settlers of Catan",
        "A strategic board game where players look to collect resources before their opponents do.",
        "https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
        "Board games",
        "7",
        "1 month",
        "joe@bro.com",
        "2952858882",
        "phone",
        true, )

("Settlers of Catan",
"A strategic board game where players look to collect resources before their opponents do.",
"https://www.target.com/p/settlers-of-catan-board-game/-/A-10979101?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012732796&CPNG=PLA_Toys_Priority%2BShopping_Local&adgroup=Toys_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9019670&targetid=aud-978557310896:pla-627451266716&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAiA_eb-BRB2EiwAGBnXXpHz9cVHF8QJQlw2okv47lNKeeIhN7CMlfPI1Pm4s52_dvI7fB1KABoCLRsQAvD_BwE&gclsrc=aw.ds",
"Board games",
"7",
"1 month",
"AlexAllenAnderson@AAA.com",
"8483095883",
"phone",
true,)

("Lawnmower",
"21 inch high wheel push mower with Honda engine",
"https://cdn2.toro.com/en/-/media/Images/lawn-boy/product/2017/wpm_10736.ashx?mw=700&mh=599&hash=54785FA26F3ADFA0DF6A0942AF9FC2082B8FC78C",
"Lawn and garden",
"15",
"2 weeks",
"JakeJohnJosephson@aol.com",
"3993339999",
"call or text",
true,)

("Stroller",
"One hand folding with auto lock, handbrake and 3 mode front wheel. Accommodates newbords with use of car seat and up to 5 year olds",
"https://www.rei.com/media/bd4b8173-f4cd-4322-9980-5cc8ea62f2da?size=646x485",
"Baby items",
"20",
"2 weeks",
"Carla_Pendleton@web.net",
"3920779887",
"call or text",
true,)

("")

;