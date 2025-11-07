// ignore missing type declarations for 'aos' and import for side-effects
// @ts-ignore
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Shield, Lock, Mail, BookOpen } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
  };

  const onSwitchToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="w-full flex justify-center p-2">
      <div className="w-full max-w-md" data-aos="fade-up">
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Header Section */}
          <div
            className="bg-primary p-8 text-primary-foreground relative overflow-hidden"
            data-aos="fade-down"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -mr-16 -mt-16 animate-spin-slow" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full -ml-12 -mb-12 animate-pulse" />

            <div className="relative z-10">
              <div
                className="flex items-center justify-center mb-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="bg-primary-foreground/20 p-3 rounded-full backdrop-blur-sm">
                  <Shield className="size-8" />
                </div>
              </div>
              <h1
                className="text-center mb-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Proctor-IQ
              </h1>
              <p
                className="text-center text-primary-foreground/80 text-sm"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Secure Online Assessment System
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="mb-2 text-foreground">Welcome Back</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Please login to continue to your examination portal
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div
                className="space-y-2"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div
                className="space-y-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                className="flex items-center justify-between"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-muted-foreground cursor-pointer select-none"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <div >
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <Lock className="size-4 mr-2" />
                  Sign In Securely
                </Button>
              </div>
            </form>

            <div
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button
                  onClick={onSwitchToRegister}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Register here
                </button>
              </p>
            </div>

            {/* Features Footer */}
            <div
              className="mt-8 pt-6 border-t border-border"
            >
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <BookOpen className="size-4" />
                <span className="text-xs">AI-Powered Proctoring</span>
                <span className="text-xs">•</span>
                <Shield className="size-4" />
                <span className="text-xs">Secure & Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
