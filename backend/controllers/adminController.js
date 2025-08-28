import validator from 'validator'
//API for adding doctor 
const addDoctor = async(req,res) =>{ 
    try{ 
        const { name, email, password , speciality, degree,experience ,about,fees,address }=req.body 
//we need to send form data(need middleware) 
        const imageFile= req.file 

        //checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address)
        {
            return res.json({success:false,message:"Missing Details"})

        }

        //validating email format
        
        }
catch(error){ 

} } 
export {addDoctor}