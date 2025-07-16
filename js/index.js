function checkDate() {
  const d1 = document.getElementById("d1").value;
  const d2 = document.getElementById("d2").value;
  const m1 = document.getElementById("m1").value;
  const m2 = document.getElementById("m2").value;
  const y1 = document.getElementById("y1").value;
  const y2 = document.getElementById("y2").value;
  const y3 = document.getElementById("y3").value;
  const y4 = document.getElementById("y4").value;

  const inputDate = `${y1}${y2}${y3}${y4}-${m1}${m2}-${d1}${d2}`;
  const correctDate = "2024-04-19";

  const errorMessage = document.getElementById("errorMessage");

  if (inputDate === correctDate) {
    confetti(); // panggil efek confetti 🎉
    setTimeout(() => {
      window.location.href = "anniv.html";
    }, 1500); // beri waktu confetti muncul sebelum pindah
  } else {
    errorMessage.textContent = "😢 Tanggalnya salah, coba lagi yuk~";
  }
}
