//selects all <input>, <select>, and <textarea> elements and
//applies an event handler that when the value of an input changes
//it will run a function that will console.log a tracer.

$(':input').on('change', function(){
  console.log('tracer');
})
