const mongoose = require('mongoose');

const Url = process.env.DATABASE;

mongoose
	.connect(Url)
	.then(() => {
		console.log("Database connected successfully");
	})
	.catch((error) => {
		console.log("Database not conneced", error.message);
	});
