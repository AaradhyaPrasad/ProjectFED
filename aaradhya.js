var f=0
function myfunc1()
{
    var xhr= new XMLHttpRequest();
xhr.open("GET","https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("first").style.display="block";
     data=JSON.parse(this.responseText);//changing the data into json format
     console.log(data);
    if(f==0)
    {
     for (var i = 0; i < 5; i++) 
     {        
     
        $("#first").append('<tr><td>'+data.drinks[i].strDrink+'</td><td>'+data.drinks[i].strIngredient1+','+data.drinks[i].strIngredient2+','+data.drinks[i].strIngredient3+'</td></tr>'); 
        
    }
    f=1
    }
    }
  };
}


var a=0;
function funct1()
{
    var xhr= new XMLHttpRequest();
xhr.open("GET","https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);//changing the data into json format
   console.log(data);
   if(a==0)
   {
     for (var i = 0; i < 5; i++) 
     {        
       console.log(data.drinks[i].strDrink);
	   if(i==0 || i==2){
        $("#ajax").append(' <div class="movies" style="margin-left:200px;margin-top:100px;height:270px;width:240px;"><img src="'+data.drinks[i].strDrinkThumb+'" style="height:230px;width:210px;color:white"><center><h5 style="color:white">'+data.drinks[i].strDrink+'</h5></center></div>'); 
	   }
else if(i==1 || i==3){
	$("#ajax").append(' <div class="movies" style="margin-left:1000px;margin-top:-270px;height:270px;width:240px;"><img src="'+data.drinks[i].strDrinkThumb+'" style="height:230px;width:210px;color:white"><center><h5 style="color:white">'+data.drinks[i].strDrink+'</h5></center></div>');
}
else{
	$("#ajax").append(' <div class="movies" style="margin-left:600px;margin-top:-500px;height:270px;width:240px;"><img src="'+data.drinks[i].strDrinkThumb+'" style="height:230px;width:210px;color:white"><center><h5 style="color:white">'+data.drinks[i].strDrink+'</h5></center></div>');
}	
	   }
     a=1
    }
    }
  };
}