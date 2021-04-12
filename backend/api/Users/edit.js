const jwt = require('../JWT/verify')

exports.edit = async (req, res) => {
    const body = req.body
    const JWT = body.JWT

    var result = jwt.verify(JWT)
    if (result.error)
    {
        res.status(400).json({ Error: result.error })
        console.log(result.error)
        return
    }
    
    var decoded = result.decoded
    var Email = decoded.Email
    
    // not finished yet
    await User.findOneAndUpdate({ Email }, {}, async (error, result) => {
        if (error) {
            res.status(400).send(error)
        } else {
            try {
                if (await bcrypt.compare(body.Password, result.Password)) {
                    // make JWT
                    await jwt.sign({ Email: Email, Admin: result.Admin }, 
                                    process.env.JWT_SECRET,
                                    {expiresIn: '1h'},
                                    async (err, token) => {
                                        if (err) 
                                            return res.status(500).send("There was a problem making JWT.")
                                        // res.status(200).send(token)
                                        res.status(200).json({ JWT: token })
                                        //console.log(token)
                                    });
                } else {
                    // make it vague in production
                    res.status(400).send('Bad email:password')
                }
            } catch {
                // make it vague in production
                res.status(400).send('Email does not exist')
            }
        }
    })
}