function togglePlanDetails(selectedPlan) {
  const allPlans = document.querySelectorAll(".pricing-plan");

  allPlans.forEach((plan) => {
    if (plan !== selectedPlan) {
      plan.classList.remove("expanded");
      plan.classList.remove("selected-plan");
      plan.querySelector('input[type="radio"]').checked = false;
      plan.querySelector(".plan-details").style.display = "none";
    }
  });

  if (!selectedPlan.classList.contains("expanded")) {
    selectedPlan.classList.add("expanded");
    selectedPlan.classList.add("selected-plan");
    selectedPlan.querySelector('input[type="radio"]').checked = true;
    selectedPlan.querySelector(".plan-details").style.display = "block";
  }
}
