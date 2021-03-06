// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json'); // required <file> should be '/items.json' in order for the file to be OUTSIDE of the Node_modules folder.
    test = require('mocha').it,
    expect = require('chai').expect;

// TODO: Setup mocha and chai...
var items = require('items.json');


test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});
function length (items){
  var items = [];
  return items.length;

}
//TESTS TRUE
test('finding the average price', function(){
  var yourAnswer = "start with `items`; use `Array` methods";
  //To calculate the average price, we need:
  // *each item's price
  var prices = [];

  function forEachItem(index, length){
    item = items[index];
    prices.push(item.price);

  }
  //WHILE LOOP BREAK DOWN
  precondition;
  while (condition){
    code;
    postcondition;
  }

  // DO WHILE LOOP
  precondition;
  do {
    code;
    postcondition;
  } while (condition);

  // FOR LOOP
  for (precondition; condition; postcondition) {
    code;
  }

  // array.forEach(function(parameters))
  items.forEach(function(item, index, all){ //calls this callback function gets envoked for every item in items array
    forEachItem(index, index + 1);
  })
  // when a function wants a function as an arguement it's called a callback function




};

  //For the first item price: (baby steps)
  forEachItem(0, 1);
  forEachItem(1, 2);
  forEachItem(2, 3);
  forEachItem(3, 4);

//   {
//   var item = items[index];
//
//   expect(item).to.be.an('object');
//   expect(item.price).to.be.a('number');
//   expect(item.price).to.be.equal(12);
//
//   prices.push(item.price);
//
//   expect(prices).to.deep.equal([ 12 ]);
//   expect(prices.length).to.equal(1);
// }
  //END of first price test.



  // *sum of all item's price
  // *totla number of items
  //
  // *sum of all item's prices / number of items



  function average(values) {
    var added = [items["price"]];
    var idx = 0;
    for(var i = 0; i < added.length; i++) {
      added[i] += idx;
      idx ++;
    }
    added /= items.length;
    // body...
  }; //Have a for loop that runs through an array that contains all the data
  //called from the 'price' property. Then it adds each integer it pulls out and
  //adds it to the idx which is the last value of the array.

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});




test('finding that perfect $15 item', function(){

  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
   function pricedBetween(items, min, max ) {
     var matches = [];
     var price = items["price"];
     for (var i = 0; i < items.length; i++) {
       if (price[i] >= 14) {
         matches.push(i);
       }
       if (price[i] <= 18) {
         matches.push(i);
       }

     };

   };
    // function contains a for loop that runs through and if the called property
    //is greater than or equal to 14 it pushes the value to matches array.
    //If the value is less than or equal to 18 it pushes the value to matches array.


  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
  ]);
});

test('pond hopping', function(){
  expect( your answer  ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
