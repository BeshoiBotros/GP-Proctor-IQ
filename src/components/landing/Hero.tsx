import { Button } from "../ui/button";
import { Shield, Play, ArrowRight, Sparkles, SunMoon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { useTheme } from "../theme-provider";

interface HeroProps {
  onLogin: () => void;
  onRegister: () => void;
}

export function Hero({ onLogin, onRegister }: HeroProps) {
  const { setTheme } = useTheme();
  const [themeToggle, setThemeToggle] = useState(false);
  const handleThemeToggle = (pressed: boolean) => {
    setThemeToggle(pressed);
    setTheme(pressed ? "light" : "dark");
  };
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6" data-aos="fade-down">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Shield className="size-6 text-primary-foreground" />
            </div>
            <span className="text-xl text-foreground">Proctor-IQ</span>
            <div className="md:flex items-center space-x-8">
              <Toggle
                pressed={themeToggle}
                onPressedChange={handleThemeToggle}
                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
              >
                <SunMoon className="size-5" />
              </Toggle>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={onLogin}>
              Sign In
            </Button>
            <Button
              onClick={onRegister}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              data-aos="fade-right"
            >
              <Sparkles className="size-4" />
              <span className="text-sm">AI-Powered Proctoring System</span>
            </div>

            <h1
              className="text-5xl md:text-6xl mb-6 text-foreground leading-tight"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Secure Online Examinations Made{" "}
              <span className="text-primary">Simple</span>
            </h1>

            <p
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Experience the future of academic integrity with our cutting-edge
              AI proctoring technology. Trusted by thousands of institutions
              worldwide.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <Button
                size="lg"
                onClick={onRegister}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 size-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="text-3xl text-foreground mb-1">10M+</div>
                <div className="text-sm text-muted-foreground">
                  Exams Proctored
                </div>
              </div>
              <div>
                <div className="text-3xl text-foreground mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl text-foreground mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">
                  Institutions
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
              {/* Mockup of exam interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Shield className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground">
                        Live Proctoring Active
                      </div>
                      <div className="text-xs text-muted-foreground">
                        AI Monitoring Enabled
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="h-4 bg-muted-foreground/20 rounded w-3/4" />
                  <div className="h-4 bg-muted-foreground/20 rounded w-full" />
                  <div className="h-4 bg-muted-foreground/20 rounded w-5/6" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted rounded-lg p-3 space-y-2">
                    <div className="h-3 bg-muted-foreground/20 rounded w-2/3" />
                    <div className="h-3 bg-muted-foreground/20 rounded w-full" />
                  </div>
                  <div className="bg-muted rounded-lg p-3 space-y-2">
                    <div className="h-3 bg-muted-foreground/20 rounded w-2/3" />
                    <div className="h-3 bg-muted-foreground/20 rounded w-full" />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="text-xs text-muted-foreground">
                    Time Remaining: 45:23
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-20 bg-primary/10 rounded" />
                    <div className="h-8 w-20 bg-primary rounded" />
                  </div>
                </div>
              </div>

              {/* Floating indicators */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-bounce-slow">
                ✓ Verified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm">
                <Shield className="inline size-4 mr-1" />
                Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
