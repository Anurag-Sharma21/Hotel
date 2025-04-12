// const scrollRevalOption={
//       distance:'50px',
//       origin:'bottom',
//       duration:1000,
// };

// scrollRevalOption().reveal('header-text p',
// {...scrollRevalOption,});

// scrollRevalOption().reveal('header-text h1',
//       {...scrollRevalOption,});
const scrollReveal = ScrollReveal(); // assuming you've imported ScrollReveal correctly

const scrollRevalOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

scrollReveal.reveal('header-text p', scrollRevalOption);
scrollReveal.reveal('header-text h1', scrollRevalOption);