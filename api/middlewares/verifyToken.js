require('dotenv').config(); 
const jwt = require('jsonwebtoken'); 

function verifyJWT(req, res, next){
	const authHeader = req.headers['authorization']; 
	const token = authHeader && authHeader.split(' ')[1]; 

	if (token == null) return res.send({ error: 'Escribiste mal man' }); 
    
	jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
		if (err) return res.sendStatus(403); 
		req.session.user = user; 
		next(); 
	});
}

module.exports = verifyJWT; 