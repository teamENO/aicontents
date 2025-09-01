let targetURL = "";

function showIntro(url) {
  targetURL = url;
  document.getElementById("content-list").style.display = "none";
  document.getElementById("intro-screen").style.display = "block";
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