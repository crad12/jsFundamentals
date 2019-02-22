// Switch Case

let friend = 'Zach';

switch (friend) {
    case 'Zach':
      console.log('Let\'s go play ultimate!')
      break;
    case 'Ing':
      console.log('So...are you taking me to Belgium?')
      break;
    case 'Adam':
      console.log('I have baby stuff you can borrow!')
      break;
    default:
}

let dessert = 'Cake';

switch (dessert) {
    case 'Pie':
      console.log('Pie, pie, me oh my!')
      break;
    case 'Cake':
      console.log('Cake is great!')
      break;
    case 'Ice Cream':
      console.log('I scream for ice cream')
      break;
    default:
      console.log('Not on the Menu')
}

let range = -8

switch (true) {
    case (range < 0 && range > -10):
        console.log('worked')
        break;
    case range >= 0 || range <= -10:
        console.log('also worked')
        break;
}