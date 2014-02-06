$(document).ready(function(){

	$.getJSON('http://54.213.92.70:8080/getaccount?account=all',function(data){
	
	
		var user={
				"name": "he",
				"turbo_user_id": "a",
				"account_created":"jan 23",
				"total_matches":0
			}
			console.log(user)
	})

	console.log("hello1")

	// $.ajax({
	// 	"url":"54.213.92.70:8080/getaccount?account=2",
	// 	"dataType":"jsonp",
	// 	"data":{
	// 		"account": "all"
	// 	},
	// 	"type":"GET",
	// 	success:function(data){

	// 		console.log("hello")

		
			
		});
		// console.log(user)
		// 	$.each(data,function(key,val){
		// 		users.push('<li id>')
		// 	})
			
	// 	}
	// })
	
	// // $.ajax({
 //  		dataType: "json",
	// 	url: url,
	// 	data: data,
	// 	success: success
	// });

	
// });
