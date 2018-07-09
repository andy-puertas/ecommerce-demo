
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
        const db = req.app.get('db')
        const {productid} = req.body.carty


        // db.check_for_product()
        // .then(cart => {
        //     if (cart.length > 0) {
        //         let quantity = cart[0].quantity + 1
        //         db.update_quantity([quantity, productid])
        //             .then(cart => res.status(200).send(cart))
        //             .catch((err) => {
        //                 console.log(err)
        //                 res.status(500).send('error')
        //             })
        //         } else {
        //         } 

        db.addToCart([productid])
        .then( cart => res.status(200).send( cart ))
        .catch( (err) => { 
                console.log(err)
                res.status(500).send('error') 
            });
        

        
          
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        
        db.delete_product([+id])
            .then(cart => res.status(200).send(cart))
            .catch((err) => {
                console.log(err)
                res.status(500).send('error')
            })
    
    },

    view: (req, res) => {
        const db = req.app.get('db')

        db.view_cart()
        .then( cart => res.status(200).send( cart ) )
        .catch(  (err) => { 
          console.log(err)
          res.status(500).send('error') });
    },

    edit: (req, res) => {
        const {quantity, productid} = req.body
         
        const db = req.app.get('db');
        //console.log('console log:', req.params, req.body)
        
        
        db.update_quantity([quantity, productid])
        .then( cart => {
            console.log( cart )
            res.status(200).send( cart )})
        .catch( (err) => { 
            console.log(err)
            res.status(500).send('error') });
    },


}