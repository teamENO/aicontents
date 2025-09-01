let targetURL = "";

const introContents = {
  "https://330march39.github.io/shoron/": `
    <h3>AI小論文添削について</h3>
    <p>このツールでは、小論文・志望理由書・感想文などをAIが添削します。</p>
    <ul>
      <li>文章を入力して「AI添削する」を押すだけ</li>
      <li>構成・表現・論理性などを多角的に評価</li>
      <li>即時フィードバックと採点を表示</li>
    </ul>
  `,
  "manual.html": `
    <h3>業務マニュアルについて</h3>
    <p>現場で使える手順書をPDF形式で提供しています。</p>
    <ul>
      <li>閲覧専用（編集は管理者のみ）</li>
      <li>更新履歴付きで安心</li>
      <li>ダウンロード可能</li>
    </ul>
  `,
  "faq.html": `
    <h3>よくある質問について</h3>
    <p>現場でよくある疑問をカテゴリ別にまとめています。</p>
    <ul>
      <li>操作方法・トラブル対応などを網羅</li>
      <li>検索機能付きで探しやすい</li>
      <li>閲覧専用</li>
    </ul>
  `
};

function showIntro(cardElement) {
  targetURL = cardElement.getAttribute("data-url");
  document.getElementById("intro-screen").style.display = "block";
  document.getElementById("intro-text").innerHTML = introContents[targetURL] || "<p>このコンテンツの説明は準備中です。</p>";
  document.getElementById("proceedBtn").disabled = true;
}

document.addEventListener("DOMContentLoaded", function() {
  const introText = document.getElementById("intro-text");
  introText.addEventListener("scroll", function() {
    if (introText.scrollTop + introText.clientHeight >= introText.scrollHeight) {
      document.getElementById("proceedBtn").disabled = false;
    }
  });

  document.getElementById("proceedBtn").addEventListener("click", function() {
    window.location.href = targetURL;
  });
});
