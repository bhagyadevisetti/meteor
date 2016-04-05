Veggies = new Mongo.Collection("veggies");

Meteor.publish('theVeggies', function(){
    return Veggies.find()
});

Meteor.startup(function () {
	Veggies.remove({});
// code to run on server at startup
if (!Veggies.findOne()){
	console.log("No Vegetables yet. Creating starter data.");
	  Veggies.insert({
		name:"Vegetable 1",
		text:"Carrot",
		Weight:"5lbs",
		city: "City 1",
		available:true,
		image: "house1.jpeg",
	});
  Veggies.insert({
 name:"Vegetable 2",
 text:"Beetroot",
 Weight:"5lbs",
 city: "City 1",
 available:true,
 image: "house1.jpeg",
});
Veggies.insert({
name:"Vegetable 3",
text:"Tomato",
Weight:"5lbs", 
city: "City 1",
available:true,
image: "house1.jpeg",
});
}
});
