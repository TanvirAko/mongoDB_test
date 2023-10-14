// import multer 
import multer from "multer";

// multer setup 

 const storage = multer.diskStorage({
    destination: (req,file,cd)=>{
        cd(null,"public/photose");
    },
    filename: (req,file,cd)=> {
        cd(null, Date.now() + "_"+ Math.floor(Math.random() *100000)+"_"+file.originalname)
    }
 });

 export const photo_uplode = multer({storage: storage}).single("photo");