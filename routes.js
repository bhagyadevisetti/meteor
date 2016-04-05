Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/properties', function () {
  this.render('properties');
});
Router.route('/contact', function () {
  this.render('contact');
});
Router.route('/properties/:_id', function () {
  this.render('property', {data:function(){
      return Houses.findOne({_id:this.params._id});
    }});
});
