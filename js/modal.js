
document.addEventListener("DOMContentLoaded", () => {
    //画像クリックで対応するモーダルを開く
    document.querySelectorAll(".timeline-image").forEach(img => {
        img.addEventListener("click", () => {
            const modalId = img.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = "flex";
            const btn = document.querySelector(".back-to-top");
            document.body.classList.add("modal-open"); // モーダルオープン時にスクロールを無効化
            btn.style.display = "none";
        });
    });

    //閉じるボタンでモーダルを閉じる
    document.querySelectorAll(".modal .close").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
            document.body.classList.remove("modal-open"); // モーダルクローズ時にスクロールを有効化
        });
    });

    //モーダルの外をクリックしたら閉じる
    window.addEventListener("click", (e) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if(e.target === modal){
                modal.style.display = "none";
                document.body.classList.remove("modal-open"); // モーダルクローズ時にスクロールを有効化
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
});
