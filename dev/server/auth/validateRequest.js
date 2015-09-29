var isEmailValid = function (db, email, callback) {
	db.users.findOne({
		email: email
	}, function (err, user) {
		callback(user);
	});
};

module.exports.validate = function (req, res, db, callback) {
	// If the request doesn't have a header with the email, reject the request
	if (!req.params.token) {
		res.writeHead(403, {
			'Content-Type': 'application/json; charset=utf-8'
		});
		res.end(JSON.stringify({
			error: "You are not authorized to access this application.",
			message: "An email address is required as part of the header."
		}));
	};

	isEmailValid(db, req.params.token, function(user) {
		if (!user) {
			res.writeHead(403, {
				'Content-Type': 'application/json; charset=utf-8'
			});
			res.end(JSON.stringify({
				error: "You are not authorized to acess this application.",
				message: "Invalid user email."
			}));
		} else {
			callback();
		}
	});
};