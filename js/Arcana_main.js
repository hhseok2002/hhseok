document.addEventListener('DOMContentLoaded', function(){
    const nav = document.getElementById('header');
    const scrollThreshold = 100; // 배경색이 변하기 시작할 스크롤 위치 (px)
    
    //스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function(){
        // widndow.scrollY 또는 document.documentElement.scrollTop을 사용하여 스크롤 위치 확인
        if (window.scrollY > scrollThreshold){
            // 스크롤이 임계값을 넘으면 'scrolled' 클래스 추가
            nav.classList.add('scrolled');
        } else{
            // 스크롤이 다시 위로 올라가 임계값 미만이 되면 'scrolled' 클래스 제거
            nav.classList.remove('scrolled');
        }
    });
});