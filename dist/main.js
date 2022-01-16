const fader = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

fader.forEach(fade => {
  appearOnScroll.observe(fade);
})