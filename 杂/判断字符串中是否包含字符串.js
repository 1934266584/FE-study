const word = 'sunny';

// old 
word.indexOf('sun') !== -1;

// new 
word.includes('sun')  // true or false

// Array also can use

['a', 'b', 'c'].includes('a');