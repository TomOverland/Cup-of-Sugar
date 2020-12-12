const db = require('.server/db/index');
const Users = require('./server/db/models/index').Users
const Items = require('./server/db/models/index').Items

const itemsForRent = [
    {
        itemName: 'Sewing machine',
        itemDescription: 'Model ST150HDH Home sewing and embroidery machine',
        imageURL:https:'//www.brother-usa.com/products/st150hdh',
        category: 'Arts and Crafts',
        rentalFee: '$5.00/day' ,
        maxRentalDuration:'2 Months', 
        availableStatus:  ,
        createdAt:'October 24, 2020'  ,

    },
    {
    itemName: ,
        itemDescription: ,
        imageURL:  ,
        category:  ,
        rentalFee:  ,
        maxRentalDuration:  , 
        availableStatus:  ,
        createdAt:  ,
}
]
const usersCupOfSugar = [ 
    {
        email:  ,
        firstName:   ,
        lastName:   ,


    }
]









const seed = () => {
    return Items.bulkCreate(itemsForRent)
    .then(() => Users.bulkCreate(usersCupOfSugar))
}

seed()
    .then(() => {
        process.exit();
    });