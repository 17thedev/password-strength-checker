const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");
const tips = document.getElementById("tips");
const bar = document.getElementById("bar");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  let score = 0;
  const messages = [];

  if (pwd.length >= 8) score++; else messages.push("Use at least 8 characters.");
  if (/[A-Z]/.test(pwd)) score++; else messages.push("Add an uppercase letter.");
  if (/[0-9]/.test(pwd)) score++; else messages.push("Add a number.");
  if (/[^A-Za-z0-9]/.test(pwd)) score++; else messages.push("Add a symbol.");

  if (!pwd) {
    strengthText.textContent = "Strength: —";
    bar.style.width = "0%";
    tips.textContent = "";
    return;
  }

  const levels = [
    { text: "Weak ❌", width: "25%", color: "#ff3b3b" },
    { text: "Fair ⚠️", width: "50%", color: "#ffb020" },
    { text: "Good ✅", width: "75%", color: "#2dd4bf" },
    { text: "Strong 🔥", width: "100%", color: "#22c55e" }
  ];

  const level = levels[score - 1] || levels[0];
  strengthText.textContent = `Strength: ${level.text}`;
  bar.style.width = level.width;
  bar.style.background = level.color;
  tips.textContent = messages.length
    ? messages.join(" ")
    : "Nice! Your password is strong.";
});
