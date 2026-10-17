// Thay link trong object LINKS bên dưới bằng URL tài khoản thật của bạn.
// Ví dụ: tiktok: "https://www.tiktok.com/@ten_cua_ban"
// Để trống "" nếu bạn chưa muốn hiển thị link đó.

const LINKS = {
  tiktok: "",
  facebook: "https://www.facebook.com/pn.han.121110",
  instagram: "",
  threads: "",
  youtube: "",
  zalo: "",
  discord: "",
  locket: ""
};

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

document.querySelectorAll("[data-social]").forEach((link) => {
  const social = link.dataset.social;
  const url = (LINKS[social] || "").trim();

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Bạn hãy thêm link " + link.querySelector(".social-name").textContent + " trong file script.js nhé ♡");
    });
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
