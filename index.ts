import express from 'express';

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	// res.send("Welcome person");
	res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port http://localhost${port}`);
});