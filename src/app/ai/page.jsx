import AiHero from "./component/ai-hero";
import Analytics from "./component/analytics";
import Help from "./component/help";
import Inspo from "./component/inspo";
// import Journey from "./component/Journey";
// import WhoWeAre from "./component/WhoWeAre";
// import Meet from "./component/Meet";
// import Contact from "./component/contact";

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

      {/* <WhoWeAre
        title="Building Digital Experiences that Inspire Growth"
        subtitle="At Maze Digital Solutions, we combine creativity, 
        trategy, and technology to help businesses establish a strong digital presence."
      />
      <Journey
        title="The Maze Digital Journey"
        subtitle="The Maze Digital Journey represents our growth, passion, and commitment to delivering meaningful digital solutions. 
        From our early steps to becoming a trusted creative partner,
        our journey continues to guide how we create value and impact for every client we serve."
      />
      <Meet
        title="Meet Our Team"
        subtitle="Meet our exceptional team at Maze Digital! Comprising diverse talents and expertise, 
        we are a dedicated group committed to delivering excellence in every project."
      />
      <Contact
        title="Let's talk about your project."
        subtitle="Feel free to book a quick discovery call to tell us about your needs and we can give you a quick quote."
      /> */}
    </main>
  );
}
