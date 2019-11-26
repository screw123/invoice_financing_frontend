$(document).ready(function() {
	// Using a free API Service: https://reqres.in/
	// AJAX POST CALL
	$.ajax({
		url: "http://localhost:8088/get_buyers",
		type: "post",
		data: {
			email: "a@b.com",
			password: "pw"
		},
		success: function(response) {
			updateCharts(response)
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("error:", jqXHR, textStatus, errorThrown);
			alert("Error on loading charts")
		}
	});
});

var updateCharts = (data)=> {
	var ctx_one = document.getElementById("chart_one").getContext("2d");
	var ctx_two = document.getElementById("chart_two").getContext("2d");

	var buyAmountByBuyers = data.reduce((acc, v) => {

		if (acc[v.buyer_name] > 0) { 
			acc[v.buyer_name] = acc[v.buyer_name] + v.buy_amount
			return acc
		}
		else {
			acc[v.buyer_name] =v.buy_amount
			return acc
		}
	}, {})

	var buyAmountArraySorted = []
	for (let [key, value] of Object.entries(buyAmountByBuyers)) {
		buyAmountArraySorted.push([key, value])
	}
	buyAmountArraySorted.sort((a,b)=> b[1]-a[1])
	console.log(buyAmountArraySorted.slice(0,5).reduce((acc, v)=>acc+v[1], 0))

	var chart_one = new Chart(ctx_one, {
		// The type of chart we want to create
		type: "pie",

		// The data for our dataset
		data: {
			labels: ["Top 5", "Next 5", "Remaining"],
			datasets: [
				{
					label: "Buyer Concentration",
					backgroundColor: ["red", "orange", "green"],
					borderColor: "rgb(0, 0, 0)",
					data: [
						buyAmountArraySorted.slice(0,5).reduce((acc, v)=>acc+v[1], 0),
						buyAmountArraySorted.slice(5,10).reduce((acc, v)=>acc+v[1], 0),
						buyAmountArraySorted.slice(10).reduce((acc, v)=>acc+v[1], 0)
					]
				}
			]
		},

		// Configuration options go here
		options: {
			title: {
				display: true,
				text: "Buyer Concentration"
			}
		}
	});

	var chart_two = new Chart(ctx_two, {
		// The type of chart we want to create
		type: "pie",

		// The data for our dataset
		data: {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [
				{
					label: "My Second dataset",
					backgroundColor: ["red", "orange", "yellow", "green", "blue"],
					borderColor: "rgb(255, 99, 132)",
					data: [8, 10, 5, 20, 15]
				}
			]
		},

		// Configuration options go here
		options: {}
	});
};


var mock_data1 = [{"id":1,"buyer_name":"Cass Information Systems, Inc","buy_amount":28373,"overdue_days":-83},
{"id":2,"buyer_name":"Adesto Technologies Corporation","buy_amount":7766,"overdue_days":-149},
{"id":3,"buyer_name":"Visa Inc.","buy_amount":84657,"overdue_days":-21},
{"id":4,"buyer_name":"Hersha Hospitality Trust","buy_amount":161369,"overdue_days":-349},
{"id":5,"buyer_name":"On Deck Capital, Inc.","buy_amount":178348,"overdue_days":-183}]