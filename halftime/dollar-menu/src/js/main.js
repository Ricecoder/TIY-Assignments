$('a[href="#lovely"]').on('click', function() {
  $('ul.panels#lovely').toggleClass('active');



});


$('a[href="#delicious"]').on('click', function() {
  console.log("delicious!");
  $('ul.panels#delicious').toggleClass('active');
})


$('a[href="#fine"]').on('click', function() {
  console.log("fine!");
  $('ul.panels#fine').toggleClass('active');
})
