module.exports = {
  content: ['./index.html', './location.html'],
  theme: {
    extend: {
      colors: {
        ink: '#151515',
        charcoal: '#444444',
        copper: '#d5966c',
        paper: '#fcfaf9',
      },
      fontFamily: {
        display: ['Big Shoulders Display', 'Impact', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      screens: {
        desktop: '1200px',
      },
    },
  },
};
