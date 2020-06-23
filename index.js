const targets = document.querySelectorAll('[data-anime]');
 if(targets) {
    window.addEventListener ('scroll', () => {
      if(window.scrollY + 400 >= window.innerHeight){
         targets.forEach((target) => target.classList.add('animate'));
       } else {
         targets.forEach((target) => target.classList.remove('animate'));
       }
    });
  };
