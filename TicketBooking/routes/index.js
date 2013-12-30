var db = {
	east: {
		price: 10,
		seats: []
	},
	west: {
		price: 20,
		seats: []
	},
	south: {
		price: 5,
		seats: []}
		,
	north: {
		price: 5,
		seats: []
	}
};

for(var i = 0; i < 40; i++)
{
	db.south.seats[i] = [];
	db.north.seats[i] = [];
	db.west.seats[i] = [];
	db.east.seats[i] = [];
	for(var j = 0; j < 100; j++)
	{
		db.south.seats[i][j] = null;
		db.north.seats[i][j] = null;
		db.west.seats[i][j] = null;
		db.east.seats[i][j] = null;
	}
}

exports.book = function(req, res)
{
	var name = req.body.name1;
	var tribune = req.body.tribune1;
	var row = req.body.row1;
	var seat = req.body.seat1;

	var value = db[tribune].seats[row][seat];
	if(value === null)
	{
		db[tribune].seats[row][seat] = name;
		res.send("Seat reserved successfully");
	}
	else
	{
	
		res.send(" This seat is reserved.Please select another seat \n Tribune: " + tribune + "\n Row: " + row +"\n Seat: " + seat);
	}
}

exports.index = function(req, res){

	var tribunesServer = [];

	for(var name in db)
	{
		tribunesServer.push({name:name,price:db[name].price});
	}

	res.render('index', {tribunes: JSON.stringify(tribunesServer),
						rowCount: 40,
						seatCount:100});

}