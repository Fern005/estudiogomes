class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    // Anima os links com delay escalonado
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    // Lida com clique no botão do menu
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    // Adiciona o evento de clique ao menu mobile
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    // Inicializa o menu mobile
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  // Instância e inicialização do menu mobile
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();
  /*carrocel*/ 
  const slider = document.querySelectorAll('.slider');
  const btnPrev = document.getElementById('prev-button');
  const btnNext = document.getElementById('next-button');
  
  let currentSlide = 0;
  function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
  }
  function showSlider(){
    slider[currentSlide].classList.add('on')
  }

  function nextSlider(){
    hideSlider()
    if(currentSlide === slider.length -1){
      currentSlide = 0
    } else{
      currentSlide ++
    }
    showSlider()
  }

  function prevSlider(){
    hideSlider()
    if(currentSlide === 0){
      currentSlide = slider.length -1
    } else{
      currentSlide --
    }
    showSlider()
  }

  btnNext.addEventListener('click', nextSlider)
  btnPrev.addEventListener('click', prevSlider)
  