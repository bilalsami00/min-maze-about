import AiHero from "./component/ai-hero";
import Analytics from "./component/analytics";
import Help from "./component/help";
import Inspo from "./component/inspo.jsx";
import InspoBanner from "./component/inspoBanner";

export default function AiPage() {
  return (
    <main className="min-h-screen">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Min Maze</h1>
        <p className="text-lg mb-8">We create experiences</p>
      </div>

      <AiHero
        title="AI Software Development for Modern Enterprises"
        subtitle="We build intelligent, data-driven products powered by machine learning, automation, and scalable cloud infrastructure."
      />
      <Analytics
        title="Predictive Analytics & AI"
        subtitle="Turn real-time data into accurate forecasting, intelligent automation, and measurable business impact. 
        Predictive analytics helps companies make faster decisions, reduce risks, and stay ahead of shifting market trends."
      />
      <Help
        title="How Maze Digital Helps"
        subtitle="We help companies turn complex AI potential into real, usable products."
      />
      <Inspo
        title="Inspo Hair"
        subtitle="Inspo Hair gives you personalized, step-by-step instructions powered by AI and real licensed hairstylists 
        – so you can DIY with confidence and get salon-worthy results at home."
      />
      <InspoBanner
        title="Not sure where your project fits?"
        subtitle="Let’s discuss your goals and find the best starting point."
      />
    </main>
  );
}
