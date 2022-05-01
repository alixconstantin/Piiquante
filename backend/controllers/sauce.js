const fs = require('fs');
const sauce = require('../models/Sauce');

exports.getAllSauces = (req, res, next) => {
    sauce.find()
        .then(newSauce => res.status(200).json(newSauce))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
    sauce.findOne({ _id: req.params.id })
        .then(newSauce => res.status(200).json(newSauce))
        .catch(error => res.status(404).json({ error }));
};