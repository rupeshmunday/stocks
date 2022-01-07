exports.getItems = function (req, res, next) {
    Items.find(req.query)
    .then((items) => {
        res.statusCode = 200;
        res.json(items);
    },(err) => next(err))
    .catch((err) => {
        res.send('Coudn\'t find the item.');
    });
}