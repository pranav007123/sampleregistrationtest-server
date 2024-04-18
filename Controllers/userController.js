const users = require('../Models/userModel')


exports.register =async(req,res)=>{

    console.log("inside register request!!!");
    // console.log(req.body);
    const {name,address,mobile,email,gender,dob,course} = req.body
    console.log(name,address,mobile,email,gender,dob,course);
    //  res.status(200).json("Request Received")
    try{
  const existingUser = await users.findOne({email})
  if(existingUser){
    res.status(406).json("User Already exists!!!")
  }else{
    const newUser = new users({
        name,address,mobile,email,gender,dob,course
    })
    await newUser.save()
    res.status(200).json(newUser)
  }
  
    }catch(err){
      res.status(401).json(err)
    }
  }


// get allusers

  exports.getallusers = async (req, res) => {
    try {
        const allUsers = await users.find()
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(401).json(err)
    }
}