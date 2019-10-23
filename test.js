console.log('hello')
let tmax_opts = {
  delay: 0.5,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

let tmax_tl           = new TimelineMax(tmax_opts),
    polylion_shapes   = $('svg.polylion > g polygon'),
    polylion_stagger  = 0.00475,
    polylion_duration = 1.5;

let polylion_staggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

let polylion_staggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);

