"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Settings,
  Wrench,
  Clock,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
  ShoppingCart,
  User,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/hero-banner.jpg?height=800&width=1200&text=Hydraulic+Workshop",
      subtitle: "We Offer Hydraulic Services",
      title: "Quality hydraulic repairs\nYou can trust\nEvery time.",
      buttonText: "FREE QUOTE →",
    },
    {
      id: 2,
      image:
        "/boom-truck.jpg?height=800&width=1200&text=Professional+Equipment+Repair",
      subtitle: "Professional Equipment Repair",
      title: "Expert maintenance\nfor heavy machinery\nand equipment.",
      buttonText: "GET STARTED →",
    },
    {
      id: 3,
      image: "/forklift.jpg?height=800&width=1200&text=24/7+Emergency+Service",
      subtitle: "24/7 Emergency Service",
      title: "Round-the-clock\nsupport when you\nneed it most.",
      buttonText: "CALL NOW →",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Marde’s Auto & Heavy Equipment Repair
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-orange-500 transition-colors"
              >
                Testimonial
              </Link>
              <Link
                href="#blog"
                className="hover:text-orange-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />

                <span className="font-bold">+ (639) 945-385-0036</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay for text visibility */}
            <div className="absolute left-0 top-0 h-full w-2/5 md:w-1/2 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10 pointer-events-none" />
            <div className="relative container mx-auto px-8 md:px-16 py-20 lg:py-32 h-full flex items-center z-20">
              <div className="max-w-2xl">
                <p className="text-orange-500 font-medium mb-4 animate-fade-in-up">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
                  {slide.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < slide.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg animate-fade-in-up animation-delay-400">
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {/* <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="absolute left-8 top-1/2 transform -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </Button> */}

        {/* <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="absolute right-8 top-1/2 transform -translate-y-1/2 rounded-full bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </Button> */}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-detailed" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <Image
                src="/hydraulic.jpg?height=600&width=800"
                alt="Hydraulic technician working on equipment"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-orange-500 font-medium mb-4">ABOUT US</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                WE MAKE HYDRAULIC REPAIR MORE CONVENIENT
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                At AA Precision & Hydraulics, we take pride in delivering
                reliable, high-quality repair and maintenance solutions for all
                types of vehicles and heavy equipment. With years of hands-on
                experience, we specialize in hydraulic system services, engine
                overhaul, welding, and equipment maintenance—including forklifts
                and boom trucks.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We understand how important your vehicle or equipment is to your
                daily life or business, which is why we also offer convenient
                on-site service with free check-up and estimate. Whether you're
                dealing with a breakdown or need preventive maintenance, we're
                just a call or message away.
              </p>
              <p className="text-gray-300 mb-12 leading-relaxed">
                Our shop is built on a foundation of trust, hard work, and
                personalized service. We're not just here to fix equipment—we're
                here to help people get back on the road and back to work with
                peace of mind.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    15+
                    <div className="w-12 h-1 bg-orange-500 mt-2"></div>
                  </div>
                  <p className="text-gray-300">
                    Years of experience in hydraulic system repair and
                    maintenance
                  </p>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    500+
                    <div className="w-12 h-1 bg-orange-500 mt-2"></div>
                  </div>
                  <p className="text-gray-300">
                    Satisfied customers with reliable hydraulic solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Range Services */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                FULL RANGE HYDRAULIC
                <br />
                SERVICES
              </h2>
            </div>
            <div className="text-right">
              <p className="text-lg mb-4">
                We are committed to customer satisfaction by
              </p>
              <p className="text-lg mb-6">
                providing reliable and high quality service
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600">
                BOOK ONLINE
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-700 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/service.jpg?height=300&width=400"
                  alt="Maintenance Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 text-6xl font-bold text-white/20">
                  01
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">
                  MAINTENANCE SERVICE
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-700 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/service.jpg?height=300&width=400"
                  alt="Repair Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 text-6xl font-bold text-white/20">
                  02
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">REPAIR SERVICE</h3>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-700 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/service.jpg?height=300&width=400"
                  alt="Installation Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 text-6xl font-bold text-white/20">
                  03
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">
                  INSTALLATION SERVICE
                </h3>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:bg-gray-700 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/service.jpg?height=300&width=400"
                  alt="Diagnostic Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 text-6xl font-bold text-white/20">
                  04
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white">
                  DIAGNOSTIC SERVICE
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-[400px] lg:h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/choose.jpg?height=400&width=600"
                alt="Workshop Equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Services Content */}
            <div>
              <p className="text-orange-500 font-medium mb-4">WHY CHOOSE US</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Get your equipment back on track with our expert Hydraulic
                repair services
              </h2>

              <div className="grid gap-6">
                <Card className="bg-white text-gray-900 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Quality parts & Equipment
                      </h4>
                      <p className="text-gray-600">
                        Hydraulic system repair and maintenance using only
                        premium quality parts and equipment.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white text-gray-900 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Professional Engineer
                      </h4>
                      <p className="text-gray-600">
                        Overall, professional hydraulic engineers play a crucial
                        role in various industries.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white text-gray-900 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        24/7 Friendly Services
                      </h4>
                      <p className="text-gray-600">
                        Friendly services are those that are accessible,
                        helpful, and customer-focused.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-orange-500 font-medium mb-4">CONTACT US</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Is a phrase used to encourage communication, often between
                individuals or businesses, to connect or resolve issues.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone Call</p>
                    <p className="text-lg font-bold">+ (639) 945-385-0036</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email drop Us</p>
                    <p className="text-lg font-bold">
                      needhelprepair@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-lg font-bold">Inglewood, Maine 98380</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map replaces Send A Message */}
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d245.85259988923826!2d123.89780475496833!3d9.626095388447661!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1753620893027!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AA Precision & Hydraulics Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-4">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  AA PRECISION & HYDRAULICS
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Every service is rigorously screened and constantly rated to
                ensure you get the best hydraulic service.
              </p>

              <div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-xl font-bold mb-6">ABOUT US</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    OUR TEAM
                  </Link>
                </li>
                <li>
                  <Link
                    href="#works"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    OUR WORKS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">POPULAR SERVICES</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    HYDRAULIC REPAIR
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    SYSTEM MAINTENANCE
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    PUMP REPAIR
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    CYLINDER REPAIR
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">MORE SERVICES</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    HOSE REPLACEMENT
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    VALVE REPAIR
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    FLUID ANALYSIS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    EMERGENCY SERVICE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 mt-2 pt-4 text-center">
            <p className="text-gray-400">
              © 2025 AA Precision & Hydraulics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
