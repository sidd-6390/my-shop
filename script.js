// 🔥 Auto Banner Random Change
const bannerImages = [
  "https://picsum.photos/id/1015/1200/400",
  "https://picsum.photos/id/1016/1200/400",
  "https://picsum.photos/id/1018/1200/400",
  "https://picsum.photos/id/1020/1200/400",
  "https://picsum.photos/id/1024/1200/400"
];

let i = 0;
setInterval(() => {
  document.body.style.setProperty(
    "--banner",
    `url(${bannerImages[i]})`
  );
  i = (i + 1) % bannerImages.length;
}, 5000);

// 🔥 Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.id = "darkToggle";
  btn.innerText = "🌙 Dark Mode";
  document.querySelector(".navbar").appendChild(btn);

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.innerText = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
document.getElementById("payBtn").addEventListener("click", () => {
  const method = document.querySelector('input[name="payment"]:checked').value;

  if(method === "cod") {
    alert("✅ Order placed successfully with Cash on Delivery!");
    // backend call: save order as COD
  } 
  else {
    alert("🔗 Redirecting to Payment Gateway for " + method);
  }
});




