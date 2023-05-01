const cafeItems = [
  {
    name: "아메리카노",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5fuB/image/0U_zSPit7-slkh1Cq2lIlYa0Boc.jpg",
    price: 2700,
    count: 0,
  },
  {
    name: "카페라떼",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5fuB/image/0U_zSPit7-slkh1Cq2lIlYa0Boc.jpg",
    price: 2700,
    count: 0,
  },
  {
    name: "아메리카노",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5fuB/image/0U_zSPit7-slkh1Cq2lIlYa0Boc.jpg",
    price: 2700,
    count: 0,
  },
  {
    name: "아메리카노",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5fuB/image/0U_zSPit7-slkh1Cq2lIlYa0Boc.jpg",
    price: 2700,
    count: 0,
  },
  {
    name: "아메리카노",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5fuB/image/0U_zSPit7-slkh1Cq2lIlYa0Boc.jpg",
    price: 2700,
    count: 0,
  },
  {
    name: "아메리카노",
    img: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5fuB/image/0U_zSPit7-slkh1Cq2lIlYa0Boc.jpg",
    price: 2700,
    count: 0,
  },
];
function CafeItem() {
  const $menuList = document.querySelector(".menu-list");

  // for(var i=0 ;i<cafeItems.length;i++){
  //   const item = cafeItems[i];
  // } --> forEach문과 같음

  cafeItems.forEach((item) => {
    const $div = document.createElement("div");
    $div.className = "cafe-item";
    // $div.addEventListener("click", function () {
    //   alert(item.name);
    //   const $SelectMenu = document.querySelector(".select-menu-name");
    //   $SelectMenu.innerHTML = item.name;
    // });

    const $img = document.createElement("img");
    $img.src = item.img;
    $div.appendChild($img);
    $menuList.appendChild($div);
  });
}
CafeItem();
