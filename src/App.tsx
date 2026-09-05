import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
type Plan = {
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
};
const personalPlans: Plan[] = [
  {
    title: "Free",
    price: 0,
    description: "Start learning with essential tools and resources.",
    features: [
      "Basic courses",
      "Limited quizzes",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    title: "Pro",
    price: 15,
    description: "Get more tools and resources for your learning journey.",
    features: [
      "Unlimited courses",
      "Advanced quizzes",
      "Certificates",
      "Detailed progress tracking",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: 25,
    description: "Take your learning experience to the next level.",
    features: [
      "Everything in Pro",
      "Premium courses",
      "Priority support",
      "Learning analytics",
    ],
  },
  {
    title: "Ultimate",
    price: 40,
    description: "Everything you need for serious learning and growth.",
    features: [
      "Everything in Premium",
      "Exclusive courses",
      "Personal learning plans",
      "Expert support",
    ],
  },
];
const businessPlans: Plan[] = [
  {
    title: "Team",
    price: 35,
    description: "Help small teams learn and grow together.",
    features: [
      "Team workspace",
      "Shared resources",
      "Team progress",
      "Basic analytics",
    ],
  },
  {
    title: "Business",
    price: 60,
    description: "Learning tools for growing organizations.",
    features: [
      "Everything in Team",
      "Advanced analytics",
      "Admin controls",
      "Priority support",
    ],
    popular: true,
  },
  {
    title: "Education",
    price: 45,
    description: "A learning solution for schools and institutions.",
    features: [
      "Instructor management",
      "Student management",
      "Course management",
      "Learning analytics",
    ],
  },
  {
    title: "Enterprise",
    price: 75,
    description: "Flexible tools for large organizations.",
    features: [
      "Everything in Education",
      "Unlimited users",
      "Advanced security",
      "Dedicated support",
    ],
  },
];

function App() {
  const [category, setCategory] = useState<"personal" | "business">(
    "personal"
  );

  const plans =
    category === "personal" ? personalPlans : businessPlans;

  return (
    <main className="pricing-page">
      <section className="hero">
        <h1>Plans for Every Learner</h1>

        <p>
          Choose a plan that gives you the tools and resources
          you need to reach your learning goals.
        </p>

        <div className="category-tabs">
          <button
            className={category === "personal" ? "tab active" : "tab"}
            onClick={() => setCategory("personal")}
          >
            Personal
          </button>

          <button
            className={category === "business" ? "tab active" : "tab"}
            onClick={() => setCategory("business")}
          >
            Business & Education
          </button>
        </div>
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
          />
        ))}
      </section>
    </main>
  );
}
export default App;

