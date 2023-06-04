// Define the features data (you can modify the content, icons, etc. as needed)
const featuresData = [
  {
    icon: "list.png",
    title: "Feature 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "form.png",
    title: "Feature 2",
    description: "Fusce facilisis lacus vitae ullamcorper imperdiet.",
  },
  {
    icon: "logo.png",
    title: "Feature 3",
    description: "Proin convallis, metus sit amet dictum.",
  },
];

// Function to generate feature cards dynamically
function generateFeatureCards() {
  const featureCardsContainer = document.getElementById("featureCardsContainer");

  // Clear existing cards
  featureCardsContainer.innerHTML = "";

  // Create feature cards based on data
  featuresData.forEach((feature) => {
    const card = document.createElement("div");
    card.className = "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4";

    const cardContent = `
      <div class="bg-white shadow-md rounded-lg p-6 h-full flex flex-col justify-between">
        <img src="${feature.icon}" alt="${feature.title}" class="h-12 mx-auto mb-4">
        <h3 class="text-lg font-semibold mb-2">${feature.title}</h3>
        <p>${feature.description}</p>
      </div>
    `;

    card.innerHTML = cardContent;
    featureCardsContainer.appendChild(card);
  });
}

// Call the function to generate initial feature cards
generateFeatureCards();

// Function to update feature card layout based on screen size
function updateFeatureCardLayout() {
  const featureCardsContainer = document.getElementById("featureCardsContainer");

  // Remove existing layout classes
  featureCardsContainer.classList.remove("flex-nowrap");

  // Add layout classes based on screen size
  if (window.innerWidth < 768) {
    featureCardsContainer.classList.add("flex-nowrap");
  }
}

// Update feature card layout on page load and window resize
window.addEventListener("DOMContentLoaded", updateFeatureCardLayout);
window.addEventListener("resize", updateFeatureCardLayout);
