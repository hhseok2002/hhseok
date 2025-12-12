document.addEventListener('DOMContentLoaded', ()=>{
    const slideTrack = document.querySelector('.slide-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slides = document.querySelectorAll('.New-item');

    //현재 보이는 슬라이드의 인덱스
    let currentSlide = 0;

    //전체 슬라이드 개수
    const slideCount = slides.length;

    //슬라이드 이동 함수
    function moveSlide(index){
        //인덱스가 범위를 벗어나지 않도록 조정(무한 슬아이드는 아님)
        if (index < 0){
            currentSlide = slideCount - 1; //마지막 슬라이드로
        } else if (index >= slideCount){
            currentSlide = 0; //첫 번째 슬라이드로
        } else{
            currentSlide = index;
        }
        // 이동할 거리 계산: (현재 인덱스 * 아이템 한 개 너비인 25%)를 음수로 설정하여 왼쪽으로 이동
        const moveDistance = currentSlide * -25;

        //slide-track의 위치를 변경하여 슬라이드 효과 구현
        slideTrack.style.transform = 'translateX(' + moveDistance + '%)';
    }

    //다음 버튼 클릭 이벤트
    nextBtn.addEventListener('click', () => {
        moveSlide(currentSlide + 1);
    });

    //이전 버튼 클릭 이벤트
    prevBtn.addEventListener('click', () => {
        moveSlide(currentSlide -1);
    });

    //초기화 (첫 번째 슬라이드를 보이게)
    moveSlide(0);
});