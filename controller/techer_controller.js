import Teacher from "../models/techer_models.js"
export const getall_techer = async (req,res)=>{
 const {name,age,gender,number,email,location,photo} = req.body

let teacherPhoto = null;
if(req.file.filename){
    teacherPhoto = req.file.filename
}

const data = await Teacher.create({
    name,
    age,
    gender,
    number,
    email,
    location,
    photo : teacherPhoto
})

    res.status(200).json(data);
};

// get all teacher data 
/*
export const getall_teacher = async (req,res)=>{
    const data = await Teacher.find()
    res.status(200).json(data)
}
//get sengle data
export const get_sengle_teacher = async (req,res)=>{
    const { id } = req.params
    const data = await Teacher.findOne({ _id: id})
    res.status(200).json(data)
}   
// det sengale data dealate
export const get_sengle_delete_teacher = async (req,res)=>{
    const { id } = req.params;
    const data = await Teacher.deleteOne({_id: id})
    res.status(200).json(data)
};
*/

// get all data 
export const getall_teacher = async (req,res)=>{
    const data = await Teacher.find()
    res.status(200).json(data)
}

// get techer sengale data 
export const get_sengle_teacher = async (req,res)=>{
 const { id } = req.params
const data = await Teacher.findById(id)
res.status(200).json(data)
}
// get techer sengale data dealate
export const get_sengle_delete_teacher = async (req,res)=>{
 const { id } = req.params
const data = await Teacher.findByIdAndDelete(id)
res.status(200).json(data)
}
//get sengle techer data edites 
export const get_sengle_teacher_update = async (req,res)=>{
    const { id } = req.params;
    const {name} = req.body
   const data = await Teacher.findByIdAndUpdate(id,{name: name,},{new:true})
        res.status(200).json(data)
}