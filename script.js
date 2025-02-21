function togglePlanDetails(selectedPlan) {
    // Get all plans
    const allPlans = document.querySelectorAll(".pricing-plan");
  
    allPlans.forEach((plan) => {
      // Collapse all plans except the selected one
      if (plan !== selectedPlan) {
        plan.classList.remove("expanded");
        plan.classList.remove("selected-plan");
        plan.querySelector('input[type="radio"]').checked = false;
        plan.querySelector(".plan-details").style.display = "none";
      }
    });
  
    // Toggle the clicked plan
    if (!selectedPlan.classList.contains("expanded")) {
      selectedPlan.classList.add("expanded");
      selectedPlan.classList.add("selected-plan");
      selectedPlan.querySelector('input[type="radio"]').checked = true;
      selectedPlan.querySelector(".plan-details").style.display =
        "block";
    }
  }
  