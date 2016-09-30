var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var multer  = require('multer');
var mongo = require('./server/mongoLayer.js');

var fileName = '';
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/upload/')
	},
	filename: function (req, file, cb) {
		var name = file.originalname;
		var ext = name.substring(name.lastIndexOf('.'), name.length)

		fileName = 'img' + Date.now() + ext;
		cb(null, 'img' + Date.now() + ext);
	}
});

var upload = multer({ storage: storage });
var type = upload.single('file');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3000);

app.get('/services/gallery', function(req, res) {
	console.log('/services/gallery');
	mongo.getPictures(res.send.bind(res));
});

app.post('/services/uploadimage', type, function(req, res) {
	res.end();
});

app.post('/services/addpicture', function(req, res) {
	var data = req.body;
	data.url = fileName;
	mongo.insertPicture(data, res.end.bind(res));
});

app.post('/services/delpicture', function(req, res) {
	var data = req.body;
	mongo.deletePicture(data, res.send.bind(res));
	res.end();
});
