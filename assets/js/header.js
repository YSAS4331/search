document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggleBtn = header.querySelector(".toggle-btn");
  const navItems = header.querySelector(".nav-items");
  const overflowMenu = header.querySelector(".overflow-menu");

  // 開閉ボタン
  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("collapsed");
  });

  // 溢れ判定
  const checkOverflow = () => {
    const navWidth = navItems.scrollWidth;
    const containerWidth = navItems.clientWidth;
    if (navWidth > containerWidth) {
      overflowMenu.style.display = "inline";
    } else {
      overflowMenu.style.display = "none";
    }
  };

  window.addEventListener("resize", checkOverflow);
  checkOverflow();
});
