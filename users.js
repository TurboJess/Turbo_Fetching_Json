$(document).ready(function(){

	$.ajax({
			url:'file://userData.json',
			type: "GET",
			// dataType refers to the type of data im getting back i.e. Json,XML ect.
			dataType:'jsonp',
			contentType: "jsonp",
			success:function(data){
				alert(user);
				/*
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
*/

			}
			

		})



})