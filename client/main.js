Meteor.subscribe('theVeggies');

Veggies = new Mongo.Collection("veggies");

Template.properties.helpers({
	veggies:function(){
		return Veggies.find();
	}
});
