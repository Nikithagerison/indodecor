const db=require('./db')

// to get all products:
const getDesigns=()=>{
    return db.Design.find().then(
        (result)=>{
            if(result){
                return{
                 status:true,
                 statusCode:200,
                 products:result
                }
             }
             else{
                 return{
                     status:false,
                     statusCode:404,
                     products:'No Products Found!!'
                    }
                }
        }
    )
}


// to get particular product: --change--
const getParticular=()=>{
    return db.Design.find().then(
        (result)=>{
            if(result){
                return{
                 status:true,
                 statusCode:200,
                 products:result
                }
             }
             else{
                 return{
                     status:false,
                     statusCode:404,
                     products:'No Products Found!!'
                    }
                }
        }
    )
}


//register definition:
const register = (email,uname,password)=>{

    //1.search uname in db if yes
    return db.User.findOne({
        uname
    }).then((result)=>{
    //2.response:if yes : already existing
        if(result){
            return {
                message:'Already Existing User!!',
                status:false,
                statusCode:404
            }
        }
        else{
    //3. new user : save all data to database .
            //to store new user we need all keys so copy from db.js
            //create object of user [assign if names r diff]
            let newUser = new db.User({
                uname,
                password:password,
                email:email
            })
            newUser.save()
            return {
                message:'Register Successful!!',
                status:true,
                statusCode:200
            }
        }
    })
}



//login definition:

const login = (uname,password)=>{
    //search uname and pswd in mongoDB-findOne()
   return db.User.findOne({
        uname,
        password
    }).then((result)=>{
        console.log(result);
        if(result){
            return {
                message:'Login Successful!!',
                status:true,
                statusCode:200
            }
        }
        else{
            return {
                message:'Invalid Credentials!!',
                status:false,
                statusCode:404
            }
        }
    })

}

module.exports={
    getDesigns,getParticular,login,register
}