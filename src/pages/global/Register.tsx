// ignore missing type declarations for 'aos' and import for side-effects
// @ts-ignore
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Eye,
  EyeOff,
  Shield,
  Lock,
  Mail,
  User,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submitted:", formData);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const features = [
    "AI-powered exam monitoring",
    "Real-time integrity checks",
    "Secure browser environment",
    "Detailed analytics dashboard",
  ];
  const onSwitchToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-full flex p-2 justify-center">
      <div className="w-full max-w-4xl" data-aos="fade-up">
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
          <div className="grid md:grid-cols-2">
            {/* Left Panel - Features */}
            <div
              className="bg-primary p-8 text-primary-foreground relative overflow-hidden hidden md:flex flex-col justify-center"
              data-aos="fade-right"
            >
              {/* Animated background elements */}
              <div
                className="absolute top-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-lg animate-bounce-slow"
                data-aos="fade-up"
              />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary-foreground/10 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-foreground/5 rounded-full animate-pulse" />

              <div className="relative z-10">
                <div
                  className="flex items-center mb-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="bg-primary-foreground/20 p-4 rounded-full backdrop-blur-sm">
                    <Shield className="size-10" />
                  </div>
                  <div className="ml-4">
                    <h1 className="mb-0">Proctor-IQ</h1>
                    <p className="text-primary-foreground/80 text-sm">
                      Online Assessment System
                    </p>
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <h3 className="mb-4">Join thousands of institutions</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Experience the future of online examinations with our
                    cutting-edge proctoring technology.
                  </p>

                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3"
                        data-aos="fade-left"
                        data-aos-delay={300 + index * 100}
                      >
                        <CheckCircle2 className="size-5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Registration Form */}
            <div className="p-8">
              <div className="mb-6" data-aos="fade-down">
                {/* Mobile Logo */}
                <div className="md:hidden flex items-center justify-center mb-6">
                  <div className="bg-primary p-3 rounded-full">
                    <Shield className="size-6 text-primary-foreground" />
                  </div>
                </div>

                <h2 className="mb-2 text-foreground">Create Account</h2>
                <p className="text-muted-foreground text-sm">
                  Get started with your secure examination portal
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div
                  className="space-y-2"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      value={formData.username}
                      onChange={(e) =>
                        updateFormData("username", e.target.value)
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div
                  className="space-y-2"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>



                <div
                  className="space-y-2"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) =>
                        updateFormData("password", e.target.value)
                      }
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className="space-y-2"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        updateFormData("confirmPassword", e.target.value)
                      }
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="size-5" />
                      ) : (
                        <Eye className="size-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-2"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      updateFormData("agreeToTerms", checked as boolean)
                    }
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground cursor-pointer select-none"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    <Shield className="size-4 mr-2" />
                    Create Secure Account
                  </Button>
                </div>
              </form>

              <div
                className="mt-6 text-center"
                //   data-aos="fade-up"
                data-aos-delay="800"
              >
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    onClick={onSwitchToLogin}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
