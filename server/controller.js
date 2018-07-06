
module.exports = {

    read: (req, res) => {
        const db = req.app.get('db')
        //console.log(products)

        db.show_products()
        .then( products => res.status(200).send( products ) )
        .catch(  (err) => { 
          console.log(err)
          res.status(500).send('error') });
    },


}