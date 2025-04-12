
export const initScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animated-scroll-item');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  animatedElements.forEach((el) => observer.observe(el));
  
  return () => {
    animatedElements.forEach((el) => observer.unobserve(el));
  };
};
