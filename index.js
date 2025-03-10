document.addEventListener("DOMContentLoaded", function () {
    // JSONデータを外部ファイルから取得
    fetch('index.json')
        .then(response => response.json())
        .then(jsonData => {
            // コンテナの取得
            const container = document.getElementById("container");

            // JSONデータの要素数だけdivを作成
            jsonData.forEach(item => {
                // 個別のdiv要素を作成
                let itemDiv = document.createElement("div");
                itemDiv.classList.add("item");
                
                // サムネイル画像のリンク
                let videoId = item.videoUrl.split("v=")[1].substring(0, 11);
                let imgUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                let thumbnailLink = document.createElement("a");
                thumbnailLink.href = item.videoUrl;
                thumbnailLink.target = "_blank";
                
                let imgElement = document.createElement("img");
                imgElement.src = imgUrl;
                imgElement.alt = "YouTube Thumbnail";
                
                thumbnailLink.appendChild(imgElement);
                
                // タイトル要素
                let titleDiv = document.createElement("div");
                titleDiv.classList.add("title");
                titleDiv.textContent = item.title;
                
                // モデル要素
                let modelDiv = document.createElement("div");
                modelDiv.classList.add("model");
                modelDiv.textContent = `モデル: ${item.model}`;
                
                // モデルの作者要素
                let modelAuthorDiv = document.createElement("div");
                modelAuthorDiv.classList.add("model-author");
                modelAuthorDiv.textContent = `作者: ${item.modelAuthor}`;
                
                // モデルの年代要素
                let modelYearDiv = document.createElement("div");
                modelYearDiv.classList.add("model-year");
                modelYearDiv.textContent = `年代: ${item.modelYear}`;
                
                // 所蔵場所の要素
                let placeDiv = document.createElement("div");
                placeDiv.classList.add("place");
                placeDiv.textContent = `所蔵場所: ${item.place}`;

                // itemDivに追加
                itemDiv.appendChild(thumbnailLink);
                itemDiv.appendChild(titleDiv);
                itemDiv.appendChild(modelDiv);
                itemDiv.appendChild(modelAuthorDiv);
                itemDiv.appendChild(modelYearDiv);
                itemDiv.appendChild(placeDiv);
                
                // コンテナに追加
                container.appendChild(itemDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});


// タブ
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tab-btn").forEach((item, index) => {
        item.addEventListener("click", function () {
            // すべての .btn から is-btn-active クラスを削除
            document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("is-tab-btn-active"));
            // クリックされた要素に is-btn-active クラスを追加
            this.classList.add("is-tab-btn-active");

            // すべての .map-contents から is-contents-active クラスを削除
            document.querySelectorAll(".tab-page").forEach(el => el.classList.remove("is-tab-page-active"));
            // クリックされた要素の index に対応する .map-contents に is-contents-active クラスを追加
            document.querySelectorAll(".tab-page")[index].classList.add("is-tab-page-active");
        });
    });
});



// キャラクター図鑑のJS
document.addEventListener("DOMContentLoaded", function () {
    fetch("character.json")
        .then(response => response.json())
        .then(jsonData => {
            function createBoxes(tabId, dataKey) {
                const tab = document.getElementById(tabId);
                if (!tab) return;
                tab.innerHTML = ""; // 初期化

                jsonData[dataKey].forEach(item => {
                    const box = document.createElement("div");
                    box.classList.add("box");

                    const img = document.createElement("img");
                    img.src = `images/${item.id}.png`;
                    img.alt = item.name;
                    box.appendChild(img);

                    const nameDiv = document.createElement("div");
                    nameDiv.classList.add("name");
                    nameDiv.textContent = item.name;
                    box.appendChild(nameDiv);

                    const relateDiv = document.createElement("div");
                    relateDiv.classList.add("relate");
                    if (Array.isArray(item.relate)) {
                        relateDiv.textContent = item.relate.join(" / ");
                    } else {
                        relateDiv.textContent = item.relate;
                    }
                    box.appendChild(relateDiv);

                    tab.appendChild(box);
                });
            }

            createBoxes("tab-1", "joconda");
            createBoxes("tab-2", "highSchool");
            createBoxes("tab-3", "juniorHighSchool");
        })
        .catch(error => console.error("JSON読み込みエラー:", error));
});

