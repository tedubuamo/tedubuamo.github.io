function checkDate() {
  const dateInput = document.getElementById("dateInput").value;
  const errorMessage = document.getElementById("errorMessage");

  const correctDate = "2024-07-19"; // ganti sesuai tanggal kamu

  if (dateInput === correctDate) {
    window.location.href = "flower.html";
  } else {
    errorMessage.textContent = "🌧️ Wah, tanggalnya belum tepat. Coba lagi ya!";
  }
}
