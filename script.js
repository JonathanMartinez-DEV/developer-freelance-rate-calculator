const monthlyIncomeInput = document.getElementById("monthly-income");
const workingHrsInput = document.getElementById("working-hours");
const monthlyExpensesInput = document.getElementById("monthly-expenses");
const taxBufferInput = document.getElementById("tax-buffer");
const experienceDropdown = document.getElementById("experience-level");

const juniorMultiplier = 0.7;
const midMultiplier = 1.0;
const seniorMultiplier = 1.2;

function calculateRate() {
  const desiredMonthlyIncome = Number(monthlyIncomeInput.value);
  const currentMonthlyExpenses = Number(monthlyExpensesInput.value);
  const weeklyHours = Number(workingHrsInput.value);

  const taxBuffer = (Number(taxBufferInput.value) / 100) * desiredMonthlyIncome;
  const monthlyHours = weeklyHours * 4;

  const rateBeforeMultiplier =
    (desiredMonthlyIncome + currentMonthlyExpenses + taxBuffer) / monthlyHours;

  let adjustedRate;

  if (experienceDropdown.value === "junior") {
    adjustedRate = (juniorMultiplier * rateBeforeMultiplier).toFixed(2);
  } else if (experienceDropdown.value === "mid") {
    adjustedRate = (midMultiplier * rateBeforeMultiplier).toFixed(2);
  } else {
    adjustedRate = (seniorMultiplier * rateBeforeMultiplier).toFixed(2);
  }

  return adjustedRate;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

const calculateBtn = document.getElementById("calc-btn");

const calculatedRateEl = document.querySelector(".calculated-rate");
const tipEl = document.querySelector(".tip");

function renderRate() {
  calculatedRateEl.textContent = `Your Recommended Hourly Rate: $${calculateRate()}`;
}

calculateBtn.addEventListener("click", renderRate);
