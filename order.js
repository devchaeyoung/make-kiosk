const items = [
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
  const $container = document.querySelector(".container");

  items.forEach((item) => {
    const $div = document.createElement("div");
    $div.className = "cafe-item";
    const $img = document.createElement("img");
    $img.src = item.img;
    $div.appendChild($img);
    $container.appendChild($div);
  });
}
CafeItem();
