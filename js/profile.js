document.addEventListener('DOMContentLoaded',function(){
  const First = document.getElementById('first');

  First.addEventListener('click', function(){
    First.classList.add('scrolled')
  });
});

document.addEventListener('DOMContentLoaded', function() {
const navHeight = document.querySelector("#nav").clientHeight;
const menus = document.querySelectorAll(".menu");
const sections = document.querySelectorAll("section");

menus.forEach((menu, index)=>{
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    const sectionTop = sections[index].offsetTop - navHeight ;

    window.scroll({ top: sectionTop, behavior:'smooth'});
  });
});
});

document.addEventListener('DOMContentLoaded', function() {

  const bw = document.getElementById('bw');
  const BI = document.querySelector('.bi');
  const listWrap = document.getElementById('listwrap');
  const indicators = bw.querySelectorAll('.idbtn'); 

  var nowIndex = 0;
  var totalWebBanners = indicators.length;
  var largeWidth = BI.clientWidth;

  function updateBannerSize() {
    largeWidth = BI.clientWidth; //새로운 배너 크기 가져오기 
    moveLarge(nowIndex);
  }

  function moveLarge(index) {
    listWrap.style.transform = `translateX(-${index*largeWidth}px)`;
    updateDots(index);
  }

  function updateDots(index) {
    for (let i =0; i < totalWebBanners; i++) {
      indicators[i].classList.remove('on');
    }
    indicators[index].classList.add('on');
  }

  for (let i=0; i < totalWebBanners; i++) {
    (function(index){
      indicators[i].addEventListener('click', function(){
        nowIndex = index; 
        moveLarge(nowIndex);
      });
    })(i);
  };
  
  window.addEventListener('resize', updateBannerSize);
});

document.addEventListener('DOMContentLoaded', function() {

  const mid = document.getElementById('mid');
  const midBn = document.querySelector('.midbn');
  const midBw = document.getElementById('midbw');
  const indicators = mid.querySelectorAll('.idbtn'); 

  var nowIndex = 0;
  var totalWebBanners = indicators.length;
  var midWidth = midBn.clientWidth;

  function moveMiddle(index) {
    midBw.style.transform = `translateX(-${index*midWidth}px)`;
    updateDots(index);
  }

  function updateDots(index) {
    for (let i =0; i < totalWebBanners; i++) {
      indicators[i].classList.remove('on');
    }
    indicators[index].classList.add('on');
  }

  for (let i=0; i < totalWebBanners; i++) {
    (function(index){
      indicators[i].addEventListener('click', function(){
        nowIndex = index; 
        moveMiddle(nowIndex);
      });
    })(i);
  };
});

document.addEventListener('DOMContentLoaded', function() {

  const mob = document.getElementById('mob');
  const mbns = document.querySelector('.mbns');
  const mobw = document.getElementById('mobw');
  const indicators = mob.querySelectorAll('.idbtn'); 

  var nowIndex = 0;
  var totalWebBanners = indicators.length;
  var midWidth = mbns.clientWidth;

  function moveMobile(index) {
    mobw.style.transform = `translateX(-${index*midWidth}px)`;
    updateDots(index);
  }

  function updateDots(index) {
    for (let i =0; i < totalWebBanners; i++) {
      indicators[i].classList.remove('on');
    }
    indicators[index].classList.add('on');
  }

  for (let i=0; i < totalWebBanners; i++) {
    (function(index){
      indicators[i].addEventListener('click', function(){
        nowIndex = index; 
        moveMobile(nowIndex);
      });
    })(i);
  };
});

document.addEventListener('DOMContentLoaded', function() {

  const ch = document.getElementById('ch');
  const bomb = document.querySelector('.bomb');
  const chw = document.getElementById('chw');
  const indicators = ch.querySelectorAll('.idbtn'); 

  var nowIndex = 0;
  var totalWebBanners = indicators.length;
  var midWidth = bomb.clientWidth;

  function moveCharacter(index) {
    chw.style.transform = `translateX(-${index*midWidth}px)`;
    updateDots(index);
  }

  function updateDots(index) {
    for (let i =0; i < totalWebBanners; i++) {
      indicators[i].classList.remove('on');
    }
    indicators[index].classList.add('on');
  }

  for (let i=0; i < totalWebBanners; i++) {
    (function(index){
      indicators[i].addEventListener('click', function(){
        nowIndex = index; 
        moveCharacter(nowIndex);
      });
    })(i);
  };
});

document.addEventListener("DOMContentLoaded", () => { // ()=> 는 function(){} 과 같다.
  const skillsetsSection = document.getElementById("skillsets"); // skillsets 섹션 요소 선택
  const stacks = document.querySelectorAll("#skillsets .fullback div"); // 모든 스킬바 요소 선택

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {     // (entry)=> function(entry){}
          if (entry.isIntersecting) { // skillsets가 화면에 보이면 실행
              stacks.forEach((stack) => { // (stack)=> function(stack){}
                  stack.style.animationPlayState = "running"; // 애니메이션 재생
              });
              observer.unobserve(skillsetsSection); // 애니메이션이 한 번 실행된 후 감시 중지
          }
      });
  }, { root: null, rootMargin: "0px", threshold: 0 }); // 화면에 조금이라도 보이면 실행

  // 초기 상태에서 애니메이션을 멈춘 상태로 설정
  stacks.forEach((stack) => stack.style.animationPlayState = "paused"); // (stack)=> function(stack){}

  observer.observe(skillsetsSection); // skillsets 섹션 감시 시작
});