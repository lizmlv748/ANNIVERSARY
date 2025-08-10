//スライドショーの設定
const images = [
    "images/2024/03/0307_1.jpeg",
    "images/2024/04/0406_2.jpeg",
    "images/2024/08/0803_4.jpeg",
    "images/2024/08/0830_15.jpeg",
    "images/2024/09/0926_16.jpeg",
    "images/2024/11/1129_2.jpeg",
    "images/2024/12/1224_3.jpeg",
    "images/2025/02/0213_27.jpeg",
    "images/2025/02/0215_16.jpeg",
    "images/2025/03/0317_25.jpeg",
    "images/2025/04/0406_6.jpeg",
    "images/2025/05/0505_3.jpeg",
    "images/2025/07/0705_8.jpeg",
  ];
  let current = 0;
  const slide = document.getElementById("slide");
  
  setInterval(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
  }, 3000); // 3秒ごとに切り替え

  //タイトルの設定
  document.addEventListener("DOMContentLoaded", function(){
    const title = document.getElementById("hometitle")
    title.addEventListener("animationend", function(e){
      if (e.animationName == "typing"){
        title.style.animation = "none"
      }
    });
  });

  //思い出ページ遷移ボタン
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".album-button");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          //observer.unobserve(entry.target); // 1回だけ出現させる
        }
      });
    }, {
      threshold: 0.1
    });
  
    observer.observe(button);
  });
  


  