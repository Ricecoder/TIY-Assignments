var test = require('mocha').it,
  assert = require('chai').assert;

test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  assert.equal(toEnglish(3), "three");
  assert.equal(toEnglish(4), "four");
  assert.equal(toEnglish(5), "five");
  assert.equal(toEnglish(6), "six");
  assert.equal(toEnglish(7), "seven");
  assert.equal(toEnglish(8), "eight");
  assert.equal(toEnglish(9), "nine");
  // et cetera, et cetera, et cetera...
}); // END test(toEnglish)

test('toEnglish: `10` to `20`', function(){
  assert.equal(toEnglish(10), "ten");
  assert.equal(toEnglish(11), "eleven");
  assert.equal(toEnglish(12), "twelve");
  assert.equal(toEnglish(13), "thirteen");
  assert.equal(toEnglish(14), "fourteen");
  assert.equal(toEnglish(15), "fifteen");
  assert.equal(toEnglish(16), "sixteen");
  assert.equal(toEnglish(17), "seventeen");
  assert.equal(toEnglish(18), "eighteen");
  assert.equal(toEnglish(19), "nineteen");
  assert.equal(toEnglish(20), "twenty");
  // use `assert` again...
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  assert.equal(toEnglish(21), "twenty one");
  assert.equal(toEnglish(22), "twenty two");
  assert.equal(toEnglish(23), "twenty three");
  assert.equal(toEnglish(24), "twenty four");
  assert.equal(toEnglish(25), "twenty five");
  assert.equal(toEnglish(26), "twenty six");
  assert.equal(toEnglish(27), "twenty seven");
  assert.equal(toEnglish(28), "twenty eight");
  assert.equal(toEnglish(29), "twenty nine");
  assert.equal(toEnglish(30), "thirty");
  // this is where `toEnglish` starts to get interesting...
}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){
  switch(value) {
    case "0":
    return "zero";
    break;

    case "1":
    return "one";
    break;

    case "2":
    return "two";
    break;

    case "3":
    return "three";
    break;

    case "4":
    return "four";
    break;

    case "5":
    return "five";
    break;

    case "6":
    return "six";
    break;

    case "7":
    return "seven";
    break;

    case "8":
    return "eight";
    break;

    case "9":
    return "nine";
    break;

    case "10":
    return "ten";
    break;

    case "11":
    return "eleven";
    break;

    case "12":
    return "twelve";
    break;

    case "13":
    return "thirteen";
    break;

    case "14":
    return "fourteen";
    break;

    case "15":
    return "fifteen";
    break;

    case "16":
    return "sixteen";
    break;

    case "17":
    return "seventeen";
    break;

    case "18":
    return "eighteen";
    break;

    case "19":
    return "nineteen";
    break;

    case "20":
    return "twenty";
    break;

    case "21":
    return "twenty one";
    break;

    case "22":
    return "twenty two";
    break;

    case "23":
    return "twenty three";
    break;

    case "24":
    return "twenty four";
    break;

    case "25":
    return "twenty five";
    break;

    case "26":
    return "twenty six";
    break;

    case "27":
    return "twenty seven";
    break;

    case "28":
    return "twenty eight";
    break;

    case "29":
    return "twenty nine";
    break;

    case "30":
    return "thirty";
    break;
  }



  }
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
