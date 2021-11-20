const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

app.use(cors({origin: "*"}))

mongoose.connect('mongodb://localhost/playground')
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB', err))

app.use(express.json());
const Deck = mongoose.model('Deck', deckSchema);

async function saveDeck(deck) {
    const result = await deck.save();
    console.log(result);
    return deck;
}

async function getDecks(){
    const deck = await Deck.find();
    return deck
}

async function getDeckById(id){
    const deck = await Deck.findById(id);
    return deck
}

app.get('/', (req, res) =>{
    res.send(`Connected to DB`);
});

app.get('/api/decks', async (req, res) =>{
    results = await getDecks();
    res.send(results);
});

app.get('/api/decks/:id', async (req , res) =>{
    const deck = await getDeckById(req.params.id);
    if(!deck) return res.status(404).send("No deck found with that ID");

    res.send(deck);
});

app.put('/api/decks/:id', (req, res) =>{
    const deck = Decks.find(c => c.id === parseInt(req.params.id));
    if(!deck) return res.status(404).send("No deck found with that ID");

    const { error } = validateDeck(req.body);
    if(error) return res.status(400).send(result.error.details[0].message);
 
    deck.name = req.body.name;
    res.send(deck)
});

app.delete('/api/decks/:id', (req, res) =>{
    const deck = Decks.find(c => c.id === parseInt(req.params.id));
    if(!deck) return res.status(404).send("No deck found with that ID");

    const index = Decks.indexOf(deck)
    Decks.splice(index, 1);

    res.send(deck)
});

app.post('/api/decks', (req, res) =>{
    // const { error } = validateDeck(req.body.name);
    // if(error) return res.status(400).send(result.error.details[0].message);
    try{    
            const deck = new Deck({
                name: req.body.name,
                mainDeck: req.body.MainDeck,
                sideDeck: req.body.SideDeck,
                extraDeck: req.body.ExtraDeck
            });
        saveDeck(deck)
    }
    catch(e){
        console.error(error)
    }

});

function validateDeck(deck){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(deck);
}

const port = process.env.PORT || 4000;

app.listen(port, ()=>console.log(`Listening on port ${port}`));
