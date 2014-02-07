$(document).ready(function(){
	$('#see-users-button').click(function(){	
		$.getJSON('userData.json',function(data){
			var user=[];
			$.each(data,function(key,val){
				// key will be the id and the val/value will be visable
				user.push('<li id="' + key+ '">' +val+'</li>');
			})
			// pass in a tag you havent used you can configure a tag and append
			// it to th ebody
			$('<ul/>',{
				'class':'userList',
				// what join will do wil take each element in the array
				// and concatinate them together 
				// sidebar: if you wanted to seperate the items with a comma put a comma instead of just 
				// passing an empty string
				html:user.join("")

			}).appendTo("body");
		})
		console.log(user)
	})
});
	
	
		// var user={
		// 		"name": "he",
		// 		"turbo_user_id": "a",
		// 		"account_created":"jan 23",
		// 		"total_matches":0
		// 	}
		// 	console.log(user)
	// })

	// console.log("hello1")
	// // $.ajax({
 //    type: 'GET',
 //    url : 'userDate.js',
 //    // data : yourData,
 //    dataType : 'json',
 //    success : function( results ) {
 //        console.log('success');
//  //    }
// });

	// $.ajax({
	// 	"url":"userDate.js",
	// 	"dataType":"jsonp",
	// 	// "data":{
	// 	// 	"account": "all"
	// 	// },
	// 	"type":"GET",
	// 	success:function(data){

	// 		console.log(user)
	// 	}

		
			
	// });
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
