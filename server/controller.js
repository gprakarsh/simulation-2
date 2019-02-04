module.exports={
    getAll:(req, res) => {
        req.app.get('db').get_all().then((properties) => {
            res.status(200).send(properties);
        })
        .catch(err=>{
            console.log(err)
        })   
    },
    createProperty:(req, res) => {
        const {propertyname,address,city,state,zip,imageurl,monthlymortgageamount,desiredmonthlyrent} = req.body;
        req.app.get('db').create_property([propertyname,address,city,state,zip,imageurl,monthlymortgageamount,desiredmonthlyrent])
            .then(() => {
                res.sendStatus(200)
            })
    },
    deleteProperty:(req, res) => {
        const { id } = req.params
        console.log(id)
        req.app.get('db').delete_property(id).then(() => {
            res.sendStatus(200)
        })
    }
}