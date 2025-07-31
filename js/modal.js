
document.addEventListener("DOMContentLoaded", () => {
    //画像クリックで対応するモーダルを開く
    document.querySelectorAll(".timeline-image").forEach(img => {
        img.addEventListener("click", () => {
            const modalId = img.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = "flex";
            document.body.classList.add("modal-open"); // モーダルオープン時にスクロールを無効化
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