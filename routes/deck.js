const validateObjectId = require('../middleware/validateObjectId');
const {deck, validate} = require('../schema/deckSchema');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/api/decks', async (req, res) =>{
    results = await Deck.find();
    res.send(results);
});

router.get('/api/decks/:id', validateObjectId, async (req , res) =>{
    const deck = await getDeckById(req.params.id);
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

router.delete('/api/decks/:id', validateObjectId, (req, res) =>{
    const deck = Decks.findByIdAndRemove(req.params.id);
    if(!deck) return res.status(404).send("No deck found with that ID");
    Decks.splice(index, 1);
    res.send(deck)
});

router.post('/api/decks', async (req, res) =>{
    const { error } = validate(req.body.name);
    if(error) return res.status(400).send(result.error.details[0].message);
    let deck = new Deck({
        name: req.body.name,
        mainDeck: req.body.MainDeck,
        sideDeck: req.body.SideDeck,
        extraDeck: req.body.ExtraDeck
            });
    deck = await deck.save();
    res.send(deck);       
});