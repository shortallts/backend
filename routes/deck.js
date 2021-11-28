const validateObjectId = require('../middleware/validateObjectId');
const {Deck, validate} = require('../schema/deckSchema');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) =>{
    const results = await Deck.find();
    res.send(results);
});

router.get('/:id', validateObjectId, async (req , res) =>{
    const deck = await Deck.findById(req.params.id);
    if(!deck) return res.status(404).send("No deck found with that ID");
    res.send(deck);
});

// router.put('/api/decks/:id', (req, res) =>{
//     const deck = Decks.find(c => c.id === parseInt(req.params.id));
//     if(!deck) return res.status(404).send("No deck found with that ID");

//     const { error } = validateDeck(req.body);
//     if(error) return res.status(400).send(result.error.details[0].message);
 
//     deck.name = req.body.name;
//     res.send(deck)
// });

router.delete('/:id', validateObjectId, async (req, res) =>{
    const deck = await Deck.findByIdAndRemove(req.params.id);
    if(!deck) return res.status(404).send("No deck found with that ID");
    res.send(deck)
});

router.post('/', async (req, res) =>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details);
    let deck = new Deck({
        name: req.body.name,
        mainDeck: req.body.mainDeck,
        sideDeck: req.body.sideDeck,
        extraDeck: req.body.extraDeck
        });
    deck = await deck.save();
    res.send(deck);       
});

module.exports = router; 