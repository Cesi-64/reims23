/*** IMPORT */
const express = require('express')
const cocktailCtrl = require('../controllers/cocktail_c')
const checkToken = require('../middleware/checkJwt')

/*** EEXPRESS ROUTER */
let router = express.Router()

/*** MIDDLEWARE */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('Cocktail Time : ', event.toString())
    next()
})

/*** COCKTAIL ROUTAGE */
router.get('/', cocktailCtrl.getAllCocktails)
router.get('/:id([0-9]+)', cocktailCtrl.getCocktail)

router.put('/', checkToken, cocktailCtrl.addCocktail)
router.patch('/:id([0-9]+)', checkToken, cocktailCtrl.modifyCocktail)

router.delete('/:id([0-9]+)', checkToken, cocktailCtrl.deleteCocktail)

module.exports = router