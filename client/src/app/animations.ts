const defaultDuration = 0.8;
const defaultEase = 'easeOut';
const defaultTransition = {
  duration: defaultDuration,
  ease: defaultEase,
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: defaultDuration,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};
