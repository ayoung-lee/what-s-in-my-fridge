const express = require('express')

const router = express.Router()

// GET /api/v1/recipes
router.get('/recipes', (req, res) => {
  try {
    res.json({ statement: 'Recipes by Ingredients' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
