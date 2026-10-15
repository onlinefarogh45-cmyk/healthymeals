import { images } from "./images";

export const heroIndicators = [
  { icon: "leaf-outline", label: "Fresh Ingredients" },
  { icon: "ribbon-outline", label: "Nutritionist Approved" },
  { icon: "car-outline", label: "Delivered to Your Door" },
];

export const stats = [
  { icon: "nutrition-outline", value: "1M+", label: "Meals Delivered" },
  { icon: "leaf-outline", value: "30K+", label: "Happy Customers" },
  { icon: "star-outline", value: "4.8/5", label: "Customer Satisfaction" },
  { icon: "people-outline", value: "550+", label: "Corporate Clients" },
];

export const aboutPoints = [
  { icon: "restaurant-outline", label: "Freshly Prepared Daily" },
  { icon: "nutrition-outline", label: "Balanced Nutrition" },
  { icon: "happy-outline", label: "Great Taste" },
];

export const services = [
  {
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image: "photo-1512621776951-a57141f2eefd",
  },
  {
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image: "photo-1467003909585-2f8a72700288",
  },
  {
    title: "Weight Management Plans",
    description: "Delicious meals to support your weight loss or maintenance journey.",
    image: "photo-1498837167922-ddd27525d352",
  },
  {
    title: "High-Protein Meal Plans",
    description: "Nutrient-rich meals for active lifestyles and fitness goals.",
    image: "photo-1546069901-ba9599a7e63c",
  },
];

export const advantages = [
  { icon: "diamond-outline", title: "Premium Quality", description: "High-quality, fresh ingredients" },
  { icon: "heart-outline", title: "Health Focused", description: "Nutritionist designed meals" },
  { icon: "car-outline", title: "Convenient Delivery", description: "To your home or office" },
  { icon: "leaf-outline", title: "Flexible Plans", description: "Options for every dietary need" },
];

export const plans = [
  {
    name: "Essential Plan",
    icon: "leaf-outline",
    description: "Great for individuals starting their healthy journey.",
    price: "299",
    features: ["Fresh daily meals", "Balanced nutrition", "Flexible delivery"],
  },
  {
    name: "Balanced Plan",
    icon: "star",
    description: "Our best value plan for a healthier lifestyle.",
    price: "499",
    popular: true,
    features: ["Customized meal options", "Wide variety of meals", "Nutritionist support", "Flexible delivery"],
  },
  {
    name: "Performance Plan",
    icon: "bar-chart-outline",
    description: "For fitness enthusiasts and active lifestyles.",
    price: "699",
    features: ["High-protein meals", "Performance-focused nutrition", "Personalized plans", "Priority support"],
  },
];

export const steps = [
  { icon: "clipboard-outline", title: "Choose Your Plan", description: "Select the meal plan that fits your goals." },
  { icon: "restaurant-outline", title: "We Prepare Fresh Meals", description: "Our chefs prepare nutritious meals with care." },
  { icon: "car-outline", title: "Enjoy Convenient Delivery", description: "Receive your meals and enjoy a healthier you." },
];

export const testimonials = [
  {
    quote: "Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!",
    name: "Sara M.",
    location: "Dubai, UAE",
    avatar: images.avatars.sara,
  },
  {
    quote: "Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.",
    name: "Ahmed R.",
    location: "Dubai, UAE",
    avatar: images.avatars.ahmed,
  },
  {
    quote: "Great quality, variety, and customer service. I feel healthier and more energized every day.",
    name: "Fatima K.",
    location: "Dubai, UAE",
    avatar: images.avatars.fatima,
  },
];

export const faqs = [
  {
    question: "What are your meal plans?",
    answer: "We offer Essential, Balanced and Performance plans. Each includes freshly prepared meals designed by nutritionists around your goals.",
  },
  {
    question: "How does delivery work?",
    answer: "Meals are prepared fresh and delivered chilled to your home or office in the time slot you choose.",
  },
  {
    question: "Can I customize my meals?",
    answer: "Yes. Tell us about your dietary needs and preferences and we will tailor your menu, including allergen exclusions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit and debit cards. Your plan renews monthly and you can pause or cancel at any time.",
  },
  {
    question: "Do you have a mobile app?",
    answer: "Our website works on any device today. A dedicated mobile app is on our roadmap.",
  },
];
