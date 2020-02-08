var backgroundColor = [
	"red",
	"orange",
	"green",
	"blue",
	"grey",
	"brown",
	"purple",
	"pink",
	"yellow",
	"aqua",
	"tomato",
	"lightgreen"
]
var chartDetails = [
	{
		ajaxURL: "dashboard/ajax-chart-top-buyers",
		chartTitle: "Buyer Concentration",
		chartLabel: ["Top 5", "Next 5", "Remaining"],
		dataprocessor: data => {
			var buyAmountByBuyers = data.reduce((acc, v) => {
				if (acc[v.companyName] > 0) {
					acc[v.companyName] = acc[v.companyName] + parseInt(v.exp, 10)
					return acc
				} else {
					acc[v.companyName] = parseInt(v.exp, 10)
					return acc
				}
			}, {})

			var sellAmountArray = []
			for (let [key, value] of Object.entries(buyAmountByBuyers)) {
				sellAmountArray.push([key, value])
			}
			sellAmountArray.sort((a, b) => b[1] - a[1])

			return [
				sellAmountArray.slice(0, 5).reduce((acc, v) => acc + v[1], 0),
				sellAmountArray.slice(5, 10).reduce((acc, v) => acc + v[1], 0),
				sellAmountArray.slice(10).reduce((acc, v) => acc + v[1], 0)
			]
		},
		tableTitle: "Top 5 buyers",
		tablerowgenerator: ({ data, i }) => {
			const amt = parseFloat(data[i].exp)
			const totalAmt = data.reduce((acc, v) => acc + parseFloat(v.exp, 10), 0)

			return (
				"<div class='rowDiv'><div>" +
				(i + 1) +
				"</div><div>" +
				data[i].companyName +
				"</div><div>" +
				((amt / totalAmt) * 100).toFixed(1) +
				"%</div><div>$" +
				amt.toLocaleString("en-US", { maximumFractionDigits: 1 }) +
				"</div></div>"
			)
		},
		mockData: [
			{ companyName: "Synergy Lighting Limited", exp: "500000" },
			{ companyName: "Amazon EU", exp: "381100" },
			{ companyName: "Uploan Asia Pte Ltd", exp: "374937.3" },
			{ companyName: "Amazon USA", exp: "348500" },
			{
				companyName:
					"Colliers International Consultancy & Valuation (Singapore) Pte Ltd",
				exp: "148924.80000000005"
			}
		]
	},
	{
		ajaxURL: "dashboard/ajax-chart-top-suppliers",
		chartTitle: "Seller Concentration",
		chartLabel: ["Top 5", "Next 5", "Remaining"],
		dataprocessor: data => {
			var buyAmountBySellers = data.reduce((acc, v) => {
				if (acc[v.companyName] > 0) {
					acc[v.companyName] = acc[v.companyName] + parseInt(v.exp, 10)
					return acc
				} else {
					acc[v.companyName] = parseInt(v.exp, 10)
					return acc
				}
			}, {})

			var sellAmountArray = []
			for (let [key, value] of Object.entries(buyAmountBySellers)) {
				sellAmountArray.push([key, value])
			}
			sellAmountArray.sort((a, b) => b[1] - a[1])

			return [
				sellAmountArray.slice(0, 5).reduce((acc, v) => acc + v[1], 0),
				sellAmountArray.slice(5, 10).reduce((acc, v) => acc + v[1], 0),
				sellAmountArray.slice(10).reduce((acc, v) => acc + v[1], 0)
			]
		},
		tableTitle: "Top 5 sellers",
		tablerowgenerator: ({ data, i }) => {
			const amt = parseFloat(data[i].exp)
			const totalAmt = data.reduce((acc, v) => acc + parseFloat(v.exp, 10), 0)

			return (
				"<div class='rowDiv'><div>" +
				(i + 1) +
				"</div><div>" +
				data[i].companyName +
				"</div><div>" +
				((amt / totalAmt) * 100).toFixed(1) +
				"%</div><div>$" +
				amt.toLocaleString("en-US", { maximumFractionDigits: 1 }) +
				"</div></div>"
			)
		},
		mockData: [
			{ companyName: "Synergy Lighting Limited", exp: "500000" },
			{
				companyName: "SS Contract Services Pte Ltd",
				exp: "410655.91000000015"
			},
			{ companyName: "Uploan Asia Pte Ltd", exp: "374937.3" },
			{ companyName: "Knowesis Pte Ltd", exp: "181283" },
			{
				companyName: "SL16030618 \u5c0f\u7c73\u751f\u614b\u93c8",
				exp: "166100"
			},
			{ companyName: "SL16030609 car charger", exp: "150000" },
			{ companyName: "Appali Engineering Pte Ltd", exp: "140259" },
			{ companyName: "Sports Builder Private Limited", exp: "138000" },
			{ companyName: "Ex Proof Solution Pte Ltd", exp: "134000" },
			{ companyName: "SL16030340 LED lighting", exp: "127300" },
			{ companyName: "Leap Networks Pte Ltd", exp: "117000" },
			{ companyName: "Megatec Technology Private Limited", exp: "96565" },
			{ companyName: "SL16030569 Smartphone", exp: "95000" },
			{ companyName: "SL16030535 car parts", exp: "90900" },
			{ companyName: "SL16030616 electronic appliance", exp: "87400" },
			{ companyName: "Sing International (S) Pte Ltd", exp: "75000" },
			{ companyName: "SL16030544 automobile accessories", exp: "68800" },
			{ companyName: "Tac7 Global Pte Ltd (SGD)", exp: "61000" },
			{ companyName: "SL16030179 Girl T-shirt", exp: "60800" },
			{ companyName: "Royal 88 Interior Design Pte Ltd", exp: "60000" },
			{ companyName: "Empire Cleaning And Pest Control Pte Ltd", exp: "52035" },
			{ companyName: "Xiao Yuan Marketing Pte Ltd", exp: "40905" },
			{ companyName: "Pace Precision Components Pte Ltd", exp: "38600" },
			{ companyName: "Addvalue Innovation Pte Ltd ", exp: "30000" },
			{ companyName: "SL16030581 TV Box and vacuum cleaners", exp: "29200" },
			{ companyName: "SL16030449 Digital Product", exp: "23000" },
			{ companyName: "SL16030583 Huawei Xiaomi Phone", exp: "18500" },
			{ companyName: "SL16030414 sofa", exp: "16600" },
			{ companyName: "SL16030610 electronics consumer goods", exp: "10000" },
			{ companyName: "SL16030575 furniture", exp: "5500" },
			{ companyName: "SL16030572 face steamer", exp: "3700" },
			{
				companyName: "SL16030615 garments and household articles",
				exp: "2500"
			},
			{ companyName: "Shipload Maritime Pte Ltd", exp: "0" },
			{ companyName: "SL16030602 Xiaomi", exp: "0" },
			{ companyName: "Tac7 Global Pte Ltd", exp: "0" },
			{ companyName: "SL16030553 Vacuum", exp: "0" },
			{ companyName: "EF Software Pte Ltd", exp: "0" },
			{ companyName: "SL16030552 China Brand Smartphones", exp: "0" },
			{ companyName: "SL16030223 Skincare", exp: "0" },
			{ companyName: "SL16030205 Batteries", exp: "0" },
			{ companyName: "SL16030101 Garment trading", exp: "0" },
			{ companyName: "Chongwu Concept Pte Ltd", exp: "0" },
			{ companyName: "SL16030459 phone accessories", exp: "0" },
			{ companyName: "The Happy Leaf Pte Ltd ", exp: "0" },
			{ companyName: "SL16030356 Consumer Electronic", exp: "0" },
			{ companyName: "Solution Inc", exp: "0" },
			{ companyName: "SL16030584 skiing gear", exp: "0" },
			{ companyName: "The Happy Roots Pte Ltd", exp: "0" },
			{ companyName: "SL16030596 TV Box", exp: "0" },
			{ companyName: "SL16030598 CCTV cameras", exp: "0" },
			{ companyName: "SL16030183 E-commerce", exp: "0" },
			{ companyName: "SL16030405 Toy", exp: "0" },
			{ companyName: "SL16030319 own brand projectors", exp: "0" },
			{ companyName: "SL16030540 fashion", exp: "0" }
		]
	},
	{
		ajaxURL: "dashboard/ajax-chart-overdue",
		chartTitle: "Overdue Analysis",
		chartLabel: ["Non-overdue", "Grace Period", "Overdue"],
		dataprocessor: data => {
			return [
				data[0].NonOverduePrincipal,
				data[0].GracePeriodPrincipal,
				data[0].OverduePrincipal
			]
		},
		mockData: [
			{
				NonOverduePrincipal: "2203151.41",
				GracePeriodPrincipal: "2991679.4099999997",
				OverduePrincipal: "1238524.8"
			}
		]
	},
	{
		ajaxURL: "dashboard/ajax-chart-facility",
		chartTitle: "Facility Analysis",
		chartLabel: [
			"Notified",
			"NonNotified",
			"JointAccount",
			"PurchaseOrder",
			"Ecommerce"
		],
		dataprocessor: data => {
			return [
				data[0].Notified,
				data[0].NonNotified,
				data[0].JointAccount,
				data[0].PurchaseOrder,
				data[0].Ecommerce
			]
		},
		mockData: [
			{
				Notified: "663355.3",
				NonNotified: "1643724.8",
				JointAccount: "904524.11",
				PurchaseOrder: "137000",
				Ecommerce: "750600"
			}
		]
	},
	{
		ajaxURL: "dashboard/ajax-chart-average-duration",
		chartTitle: "Average Duration",
		chartLabel: [
			"LessThanMonth",
			"OneToTwoMonth",
			"TwoToThreeMonth",
			"MoreThanThreeMonth"
		],
		dataprocessor: data => {
			return [
				data[0].LessThanMonth,
				data[0].OneToTwoMonth,
				data[0].TwoToThreeMonth,
				data[0].MoreThanThreeMonth
			]
		},
		mockData: [
			{
				LessThanMonth: "406210",
				OneToTwoMonth: "2383538.9099999997",
				TwoToThreeMonth: "802318",
				MoreThanThreeMonth: "904937.3"
			}
		]
	},
	{
		ajaxURL: "dashboard/ajax-chart-sector-value",
		chartTitle: "By Sector",
		chartLabel: data => data.map(v => v.buyer_industry),
		dataprocessor: data => {
			return data.map(v => parseInt(v.amt, 10))
		},
		tableTitle: "Top 5 by sector",
		tablerowgenerator: ({ data, i }) => {
			const amt = parseFloat(data[i].amt)
			const totalAmt = data.reduce((acc, v) => acc + parseFloat(v.amt, 10), 0)

			return (
				"<div class='rowDiv'><div>" +
				(i + 1) +
				"</div><div>" +
				data[i].buyer_industry +
				"</div><div>" +
				((amt / totalAmt) * 100).toFixed(1) +
				"%</div><div>$" +
				amt.toLocaleString("en-US", { maximumFractionDigits: 1 }) +
				"</div></div>"
			)
		},
		mockData: [
			{ buyer_industry: '["Retailer"]', amt: "1602010" },
			{ buyer_industry: '["Business Services"]', amt: "648924.8" },
			{ buyer_industry: '["Financial Services"]', amt: "374937.3" },
			{ buyer_industry: '["Government"]', amt: "336035" },
			{ buyer_industry: '["Wholesaler Distributor"]', amt: "260100" },
			{ buyer_industry: '["Construction"]', amt: "248018" },
			{ buyer_industry: '["Engineering"]', amt: "231565" },
			{ buyer_industry: '["Telecom"]', amt: "181283" },
			{ buyer_industry: '["IT. Cloud and Software"]', amt: "116000" },
			{ buyer_industry: '["Materials"]', amt: "112731.11" },
			{ buyer_industry: '["Consumer Discretionary"]', amt: "80000" },
			{ buyer_industry: '["Manufacturing"]', amt: "38600" }
		]
	}
]

$(document).ready(function() {
	chartDetails.forEach((v, i) => {
		$.ajax({
			url: v.ajaxURL,
			type: "get",
			success: function(response) {
				updateChart({ data: JSON.parse(response), chartDetail: v, index: i })
				if (v.tablerowgenerator)
					updateTable({ data: JSON.parse(response), tableDetail: v, index: i })
			},
			error: function() {
				updateChart({ data: v.mockData, chartDetail: v, index: i })
				if (v.tablerowgenerator)
					updateTable({ data: v.mockData, tableDetail: v, index: i })
			}
		})
	})
})

const updateChart = ({ data, chartDetail, index }) => {
	const chartId = "chart_" + (index + 1)
	const ctx = document.getElementById(chartId).getContext("2d")
	const chart = new Chart(ctx, {
		type: "pie",
		options: { title: { display: true, text: chartDetail.chartTitle } },
		data: {
			labels: (() => {
				if (Array.isArray(chartDetail.chartLabel)) {
					return chartDetail.chartLabel
				}
				if (typeof chartDetail.chartLabel === "function") {
					return chartDetail.chartLabel(data)
				}
				return []
			})(),
			datasets: [
				{
					backgroundColor: backgroundColor,
					borderColor: "rgb(0, 0, 0 )",
					data: chartDetail.dataprocessor(data)
				}
			]
		},
		options: {
			tooltips: {
				callbacks: {
					label: function(tooltipItem, data) {
						const dataset = data.datasets[tooltipItem.datasetIndex]
						const total = dataset.data.reduce(
							(acc, v) => acc + parseFloat(v),
							0
						)
						const val = parseFloat(dataset.data[tooltipItem.index])
						const percentage = Math.floor((val / total) * 100 + 0.5)
						return percentage + "%"
					}
				}
			}
		}
	})
}

const updateTable = ({ data, tableDetail, index }) => {
	const tableId = "table_" + (index + 1)
	let rows = []
	for (let i = 0; i < (data.length < 5 ? data.length : 5); i++) {
		rows.push(tableDetail.tablerowgenerator({ data: data, i: i }))
	}
	document.getElementById(tableId).innerHTML =
		"<div class='tableDiv'><div class='tableTitle'>" +
		tableDetail.tableTitle +
		"</div><div class='tableContent'><div class='rowDiv'><div></div><div>Name</div><div>%</div><div>Exposure</div></div>" +
		rows.reduce((acc, v) => acc + v, "") +
		"</div></div>"
}
