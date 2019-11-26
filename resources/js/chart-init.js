$(document).ready(function() {
	var ctx_one = document.getElementById("chart_one").getContext("2d");
	var ctx_two = document.getElementById("chart_two").getContext("2d");

	var chart_one = new Chart(ctx_one, {
		// The type of chart we want to create
		type: "pie",

		// The data for our dataset
		data: {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: ["red", "orange", "yellow", "green", "blue"],
					borderColor: "rgb(255, 99, 132)",
					data: [8, 10, 5, 20, 15]
				}
			]
		},

		// Configuration options go here
		options: {}
	});

	var chart_two = new Chart(ctx_two, {
		// The type of chart we want to create
		type: "pie",

		// The data for our dataset
		data: {
			labels: ["January", "February", "March", "April", "May"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: ["red", "orange", "yellow", "green", "blue"],
					borderColor: "rgb(255, 99, 132)",
					data: [8, 10, 5, 20, 15]
				}
			]
		},

		// Configuration options go here
		options: {}
	});
});
