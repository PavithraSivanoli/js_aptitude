var costPrice=prompt("enter costPrice");
var loss=prompt("enter loss");
var sellingPrice;
	costPrice=parseInt(costPrice);
	loss=parseInt(loss);
	sellingPrice=loss*(costPrice/100);
	sellingPrice=parseInt(sellingPrice);
	alert(sellingPrice);