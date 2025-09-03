import validator from 'validator'
import bcrypt from 'bcrypt'
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
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})

        }
        //validating strong password
        if(password.length <8)
        {
            return res.json({success:false,message:"Please enter a strong password"})

        }
        // hashing doctor password
        const salt =await bcrypt.getSalt(10)//greater no. menaing more secure but slow
        const hashedPassword = await bcrypt.hash(password,salt)
        //upload image to cloudinary
        

        }
catch(error){ 

} } 
export {addDoctor}