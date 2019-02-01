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
        const {propertyName,address,city,stateinput,zip,imageUrl,desiredMonthlyRent,monthlyMortgageAmount} = req.body;
        req.app.get('db').create_property([propertyName,address,city,stateinput,zip,imageUrl,desiredMonthlyRent,monthlyMortgageAmount])
            .then(() => {
                res.sendStatus(200)
            })
    },
    deleteProperty:(req, res) => {
        const { id } = req.params
        req.app.get('db').delete_property(id).then(() => {
            res.sendStatus(200)
        })
    }
}