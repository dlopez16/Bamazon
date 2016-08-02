var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "wolf07",
	database: "bamazon_db"
});

// var questions = [{

// 	type: "input",
// 	message: "Enter Product ID that you would like to buy"
// 	},{
// 		type:"input",
// 		message:"How many units wold you like to buy?"
// 	}

// ];

// function productID (){ 
// 	inquirer.prompt(questions).then(function(id){
// 		connection.query('SELECT * FROM Products WHERE ?',{
// 			ItemID: id.ItemID,
// 		},function (err,res){
// 			if (err){
// 				throw err;
// 			}

// 		})
// 	})


// }
// connection.connect(function(err){
// 	if(err) throw err;
// 	console.log("Succesfully connected to you DB!");

// });

connection.query('SELECT * FROM Products', function(err, results){
	if (err) {
		throw err;
	}	
	results.forEach(function(row){
		console.log("Product:", row.ProductName);
		console.log("Department:", row.DepartmentName);
		console.log("Price:", row.Price);
		console.log("Quantity:", row.StockQuantity);
		console.log("=======================")

	});


});