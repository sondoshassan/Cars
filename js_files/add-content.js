var gender = prompt ('enter your gender','female or male');
if (gender == 'female') {
    document.write ('<h3>' + "hi madam" + '</h3>');
}
else {
    document.write ('<h3>' + "hi sir" + '</h3>');
}

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
