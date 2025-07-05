function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const output = document.getElementById("output");

  if (!dobInput) {
    output.style.color = "red";
    output.textContent = "❗ Please enter your date of birth.";
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  // Invalid: DOB is in the future
  if (birthDate > today) {
    output.style.color = "red";
    output.textContent = "❗ Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative days and months
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  // Output
  output.style.color = "#2d572c";
  output.innerHTML = `
    <strong>your Current Age:</strong><br>
    ${years} years, ${months} month, and ${days} days<br><br>
    <strong>Total Days Lived:</strong> ${totalDays} day(s)
  `;
}
