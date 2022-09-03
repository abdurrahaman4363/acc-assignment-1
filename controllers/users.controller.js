let users =  [
  {
    "_id": 1,
    "gender": "female",
    "name": "Tracie Finley",
    "contact": "+1 (905) 556-3897",
    "address": "295 Onderdonk Avenue, Cuylerville, South Dakota,      2190",
    "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fL2O_eUIj_qMdGcCSMiqOghGcrawBGSrcpchyhMx&s"
  },
  {
    "_id":2,
    "gender": "female",
    "name": "Holder Snyder",
    "contact": "+1 (842) 476-2139",
    "address": "472 Amboy Street, Defiance, Mississippi,      1345",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id":3,
    "gender": "male",
    "name": "Sofia Little",
    "contact": "+1 (827) 456-3958",
    "address": "319 Madoc Avenue, Crawfordsville, District Of Columbia,      1341",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 4,
    "gender": "female",
    "name": "Nicole Sosa",
    "contact": "+1 (977) 558-2352",
    "address": "629 Dumont Avenue, Chamberino, Virginia,      679",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 5,
    "gender": "female",
    "name": "Dee Callahan",
    "contact": "+1 (887) 550-2643",
    "address": "702 Lawrence Avenue, Crown, Indiana,      7175",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 6,
    "gender": "female",
    "name": "Katheryn Watts",
    "contact": "+1 (812) 577-2888",
    "address": "421 Newport Street, Winesburg, Washington,      3210",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 7,
    "gender": "female",
    "name": "Vega Shepard",
    "contact": "+1 (809) 513-3530",
    "address": "820 Pilling Street, Santel, Guam,      1384",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 8,
    "gender": "male",
    "name": "Newton Cobb",
    "contact": "+1 (853) 408-2610",
    "address": "392 Independence Avenue, Ebro, Ohio,      5915",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 9,
    "gender": "male",
    "name": "Kinney Gibson",
    "contact": "+1 (912) 417-3155",
    "address": "462 Carlton Avenue, Gratton, Maine,      9436",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 10,
    "gender": "male",
    "name": "Cristina Phillips",
    "contact": "+1 (986) 428-2532",
    "address": "288 Denton Place, Tibbie, Connecticut,      8545",
    "photoUrl": "http://placehold.it/32x32"
  },
  {
    "_id": 11,
    "gender": "female",
    "name": "Candace Mcconnell",
    "contact": "+1 (906) 574-2639",
    "address": "584 Hubbard Place, Greer, Georgia,      3568",
    "photoUrl": "http://placehold.it/32x32"
  }
]

// random user 

module.exports.getRandomUser =(req, res)=>{
  const random =  Math.floor(Math.random() * 10);

  const { id } = req.params;
  if(id){
    const foundUser = users.find(tool => tool._id === Number(id));
    res.send(foundUser)
  }
   
}


// getAlluser
const fs = require("fs")
module.exports.getAllUser = (req, res) => {
  const {limit, page} = req.query;
  console.log(limit,page)

  res.send(users.slice(0,limit))
}

// post user/save
module.exports.saveInfo = (req, res)=>{
  const data = req.body;
  users.push(data);
  console.log(data)
  res.send(users)
}
/// patch user/update
module.exports.updateById = (req, res)=>{

  const {id} = req.params;
  console.log(id)
  const filter = {_id:id};
  const newData = users.find(user =>user._id === Number(id));
        newData._id = req.body._id
        newData.gender = req.body.gender
        newData.name = req.body.name
        newData.contact = req.body.contact
        newData.address = req.body.address
        newData.photoUrl = req.body.photoUrl
        console.log(newData)
res.send(users);

}

/// patch user/bulk-update
module.exports.updateByMultipleId = (req, res) =>{
  
  const {id1,id2,id3,id4,id5} = req.params;
  console.log(id1,id2,id3,id4,id5)

   let newData;
    newData = users.find(user =>user._id === Number(id1));
    newData = users.find(user =>user._id === Number(id1));
    newData = users.find(user =>user._id === Number(id1));
    newData = users.find(user =>user._id === Number(id1));
    newData = users.find(user =>user._id === Number(id1));
    newData = users.find(user =>user._id === Number(id1));

   newData._id = (req.body._id);
   newData.gender = req.body.gender
   newData.name = req.body.name
   newData.contact = req.body.contact
   newData.address = req.body.address
   newData.photoUrl = req.body.photoUrl


   console.log(newData)
   res.send(users);
   
}
/// delete user/delete
module.exports.deleteById = (req, res)=>{
  const {id} = req.params;
  const filter = {_id:id};

  users = users.filter(user =>user._id !== Number(id));
  res.send(`delete the info of this id ${id}`)
  
}