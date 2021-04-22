const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')

exports.verify = async (req, res) => {
    console.log(req.body)
    // const uniqueString = req.body.uniqueString
    //const { uniqueString } = req.params
    //console.log(req);
    const uniqueString = req.body.uniqueString;
    console.log(uniqueString);
    console.log("pee pee poop poop")

    // const update = {
    //     isValid: true
    // }

    // await User.findOneAndUpdate({ uniqueString }, update, (error, result) => {         
    //     if (error) {        
    //         res.status(400).json({ Error: true })
    //     } else {
    //         console.log(result)
    //         res.status(200).json({ Error: false })
    //     }    
    // })
    


     const user = await User.findOne({ uniqueString: uniqueString })
     if (user) {
         user.isValid = true
         await user.save()
         console.log(user)
         //        res.redirect('/')
         res.json({ Error: false })
     } else {
         res.json({ Error: true})
     }
}