function welcome(hourNow, whoGroup) {
    var greeting, html;
    
    if (hourNow < 0) {
        return "ERROR"
    }

    if (hourNow > 18) {
      greeting = 'Good evening, ';
    } else if (hourNow > 12) {
      greeting = 'Good afternoon, ';
    } else if (hourNow >= 0) {
      greeting = 'Good morning, ';
    } else {
      greeting = 'Welcome, ';
    }
    
    greeting = greeting + whoGroup + '!';
    html = '<h3>' + greeting + '</h3>';

    return html;
  }

var processOrder = function() {
  var order = prompt('What would you like to order?').toLowerCase();
  var image;

  while (order !== 'hotel' && order !== 'house') {
    order = prompt('You can order a Hotel or a House. Which would you like?').toLowerCase();
  }

  image = '<img src="images/' + order + '.png">';

  return buildOrder(image);
};

var buildOrder = function(img) {
  var output = '';
  var count = prompt('How many would you like?');

  for (var index = 0; index < count; index++) {
    output += img; // equivalent to: output = output + image;
  }

  return output;
}