function openNav() {
    // 사이드바를 오른쪽에서 화면 안으로 이동 (right: -250px -> right: 0)
    document.getElementById("mobile-sidebar").style.right = "0";
}

function closeNav() {
    // 사이드바를 오른쪽으로 화면 밖으로 이동 (right: 0 -> right: -250px)
    document.getElementById("mobile-sidebar").style.right = "-250px";
}