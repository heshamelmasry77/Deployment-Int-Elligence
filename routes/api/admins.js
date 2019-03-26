// Dependencies
const express = require('express');
const uuid = require('uuid');
const router = express.Router();


// Models
const Admin = require('../../Models/Admin');


// Get admins
router.get('/', async (req,res) => {
	const admins = await Admin.find()
	res.json({data: admins})
})

//sort cases by ID
router.get('/sortById/:id', async(req, res) => {
    const userid=req.params.id
    const user= await User.findOne({userid})
    user.cases.sort(compareById)
    return res.json({ data: user.cases });
})



function compareById(a,b){
    if(a._id < b._id) return -1
    if(b._id < a._id) return 1
    
    return 0
}




//View the sorted cases by date
router.get('/sortByCreationDate/:id', async(req, res) => {
    const userid=req.params.id
    const user= await User.findOne({userid})
    user.cases.sort(compare)
    return res.json({ data: user.cases });
})

function compare(a,b){
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return 1
    if(Date.parse(a.creationDate)>Date.parse(b.creationDate)) return -1
    return 0
}




// Create a new admin

router.post('/', async (req,res) => {
   try {
    //const isValidated = Validation.createValidation(req.body)
    //if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newAdmin = await Admin.create(req.body)
    res.json({msg:'Admin was created successfully', data: newAdmin})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     var admin = await adminController.update('id',id,req.body)
     if(!admin) return res.json({msg:'ID not there'})
     if(admin.error) return res.status(400).send(admin)
     return res.json({msg: 'Admin updated successfully'},{data:admin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.delete('/:id', async (req, res) => {
	try{
    const adminId = req.params.id 
    const deletedAdmin = await adminController.remove('id',adminId)
    if(!deletedAdmin)  return res.json({msg:'ID not there'})
	return res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
	}
	catch(error){
		console.log(error)
	}
})



module.exports = router;