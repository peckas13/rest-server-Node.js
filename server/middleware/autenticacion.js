let verificaToken = (req, res, next) => {
    let token = req.get('token');

    console.log('he entrado sin que te des cuenta')
    next();
    return res.status(200).json({
        token
    })
}

module.exports = {
    verificaToken
}