var gender = prompt ('enter your gender','female or male');
if (gender == 'female') {
    document.write ('<h3>' + "hi madam" + '</h3>');
}
else {
    document.write ('<h3>' + "hi sir" + '</h3>');
}
prompt ("enter your name");
prompt ("enter your age");
confirm ("please press ok");
alert ("have anice day");

function time (){    
    //input 
       var hournow = prompt ('enter the time now','it will be 0-24'); //identify var and store the data from prompt 
        var greeting; //identify var   
      //process  
      if (hournow >= 18 && hournow <= 24){ //if statment to determine which massege I want to sent for user      
          greeting = 'good evening!';    }  
          else if (hournow >= 12 && hournow < 18){  
                  greeting = 'good afternoon!';    }  
              else if (hournow >= 0 && hournow < 12){  
                      greeting = 'good morning!'; 
               } 
                   else {   
                         greeting = 'welcome!';  
                  }    //output  
                  return greeting;
             }
            var greeting = time(); //call the function
            document.write ('<h3>' + greeting + '</h3>');

var showOrder = function (){
    var orderPhoto = '';
    var order;
    while (order !== "silver" && order !== "black"){
        order = prompt ("which colors you want","silver or black");
    }
    var numberOrder;
    numberOrder = prompt ("what the numbers of cars you need");
    for (var i = 0; i < numberOrder; i++){
        console.log ("i =" + i);
        if (order == "silver"){
          orderPhoto = orderPhoto + '<img src="https://inventory-dmg.assets-cdk.com/2/1/0/20465011012.jpg">';
        }
        else if (order == "black"){
            orderPhoto = orderPhoto + '<img src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2018/bmw-m2-coupe-edition-black-shadow/bmw-m2-coup%C3%A9-black-shadow-stage-teaser-si.jpg">';
        }
    }
    return orderPhoto;
    }
    document.write (showOrder());
