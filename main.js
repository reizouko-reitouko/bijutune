
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn").forEach((item, index) => {
        item.addEventListener("click", function () {
            // すべての .btn から is-btn-active クラスを削除
            document.querySelectorAll(".btn").forEach(el => el.classList.remove("is-btn-active"));
            // クリックされた要素に is-btn-active クラスを追加
            this.classList.add("is-btn-active");

            // すべての .map-contents から is-contents-active クラスを削除
            document.querySelectorAll(".subpage").forEach(el => el.classList.remove("is-subpage-active"));
            // クリックされた要素の index に対応する .map-contents に is-contents-active クラスを追加
            document.querySelectorAll(".subpage")[index].classList.add("is-subpage-active");
        });
    });
});