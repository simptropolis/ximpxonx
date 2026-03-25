let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path('./static/')));

app.get('/ping', (req,res) => {
    
    res.status(200).json({respuesta: true});
    
});

app.listen( process.env.PORT || 3000, '0.0.0.0', () => {
    
    console.log('servidor en puerto 3000...');
    
});