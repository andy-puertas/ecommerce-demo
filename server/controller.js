
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

    create: (req, res) => {
        const {quantity, productID} = req.body
        const db = req.app.get('db')

        db.addToCart([quantity, productID])
        .then( cart => res.status(200).send( cart ) )
        .catch(  (err) => { 
          console.log(err)
          res.status(500).send('error') });

        
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        
        db.delete_product([id])
            .then(cart => res.status(200).send(cart))
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            })
    
    },

    view: (req, res) => {
        const db = req.app.get('db')

        db.view_cart()
        .then( cart => res.status(200).send( cart ) )
        .catch(  (err) => { 
          console.log(err)
          res.status(500).send('error') });
    }


}