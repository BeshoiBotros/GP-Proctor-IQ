import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Statistics } from "@/components/landing/Statistics";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onLogin={onLogin} onRegister={onRegister} />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <CTA onRegister={onRegister} />
      <Footer />
    </div>
  );
}
