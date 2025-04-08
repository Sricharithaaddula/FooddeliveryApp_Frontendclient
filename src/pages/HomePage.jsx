import FoodList from "./FoodList";

function HomePage() {
  const firmId = "6606f0c2748dd363efbc62c6"; // Replace with dynamic value if needed

  return (
    <div>
      <h1>Menu</h1>
      <FoodList firmId={firmId} />
    </div>
  );
}

export default HomePage;
