import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
	res.render('index', {
		page: 'home',
	});
});

app.get('/test', (req, res) => {
	res.render('index', {
		page: 'test',
	});
});

app.get('/', (req, res) => {
	res.redirect('/home');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port http://localhost${port}`);
});