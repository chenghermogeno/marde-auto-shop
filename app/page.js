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
      subtitle: "Fast. Reliable. Professional.",
      title:
        "From engine repairs to aircon and welding, we keep your vehicles running smoothly.",
      buttonText: "Book a Free Check-Up",
    },
    {
      id: 2,
      image:
        "/boom-truck.jpg?height=800&width=1200&text=Professional+Equipment+Repair",
      subtitle: "We Fix What Moves Your Business",
      title:
        "Forklifts, boom trucks, and hydraulic systems—expert service for your heavy-duty needs.",
      buttonText: "Get a Free Estimate",
    },
    {
      id: 3,
      image: "/forklift.jpg?height=800&width=1200&text=24/7+Emergency+Service",
      subtitle: "We Come to You—Hassle-Free Repairs at Home",
      title: "Free check-up and estimate. Message us now on Viber or Facebook",
      buttonText: "Call Now - 0945-385-0036",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Marde’s Auto & Heavy Equipment Repair Logo"
                  className="w-8 h-8 object-contain"
                />
              </div> */}
              <span className="text-sm font-medium italic text-white">
                Marde’s Truck & Auto Hydraulic Repair
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
      <section
        id="about-detailed"
        className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-950 text-white"
      >
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
              <p className="text-orange-500 font-medium mb-4">Who We Are</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                WE MAKE HYDRAULIC REPAIR MORE CONVENIENT
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                At Marde’s Truck & Auto Hydraulic Repair, we are committed to
                providing high-quality repairs and service for vehicles and
                heavy equipment. From auto aircon and welding to forklift and
                hydraulic repairs, we get the job done right—on time and on-site
                when needed.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Owned by Marde Besinga, our business combines professional
                workmanship with genuine care for every client. With years of
                experience and a passion for repair work, we are proud to serve
                both personal and commercial vehicle owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Range Services */}
      <section className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                FULL RANGE REPAIR
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
              {/* <Button className="bg-orange-500 hover:bg-orange-600">
                BOOK ONLINE
              </Button> */}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          {/* Service 1 - Detailing */}
          <div className="relative h-96 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
              <Image
                src="/aircon-truck.jpg?height=400&width=300&text=Hydraulic+Detailing"
                alt="Auto & Truck Aircon Repair"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 text-8xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
              01
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-16 h-1 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                AUTO & TRUCK
                <br />
                AIRCON REPAIR
              </h3>
              <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out">
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  Keep cool on the road—expert aircon repair for cars, trucks,
                  and more.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 - Repair */}
          <div className="relative h-96 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
              <Image
                src="/welding.jpg?height=400&width=300&text=Hydraulic+Repair"
                alt="WELDING"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 text-8xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
              02
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-16 h-1 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                WELDING
                <br />
                <br />
              </h3>
              <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out">
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  Strong, durable welding solutions for vehicle frames and
                  custom parts.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 - Maintenance */}
          <div className="relative h-96 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
              <Image
                src="/hydraulic-repair.jpg?height=400&width=300&text=Hydraulic+Maintenance"
                alt="HYDRAULIC SYSTEMS REPAIR"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 text-8xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
              03
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-16 h-1 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                HYDRAULIC
                <br />
                SYSTEMS REPAIR
              </h3>
              <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out">
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  Diagnosing and fixing hydraulic leaks, hose issues, and system
                  failures.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 - Diagnostic */}
          <div className="relative h-96 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
              <Image
                src="/forklift-repair.jpg?height=400&width=300&text=Hydraulic+Diagnostic"
                alt="FORKLIFT REPAIR"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 text-8xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
              04
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-16 h-1 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                FORKLIFT
                <br />
                REPAIR
              </h3>
              <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out">
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  Quick and efficient repairs to get your equipment lifting
                  again.
                </p>
              </div>
            </div>
          </div>

          {/* Service 5 - Installation */}
          <div className="relative h-96 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
              <Image
                src="/boomtruck-repair.jpg?height=400&width=300&text=Hydraulic+Installation"
                alt="BOOM TRUCK REPAIR"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-6 left-6 text-8xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
              05
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="w-16 h-1 bg-orange-500 mb-4 group-hover:w-24 transition-all duration-300"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                BOOM TRUCK
                <br />
                REPAIR
              </h3>
              <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out">
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  Fixing lifting mechanisms, hydraulics, and engine systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-950 text-white"
      >
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
              <p className="text-orange-500 font-medium mb-4">
                Why Choose Marde’s?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                When it comes to vehicle and heavy equipment repairs, you
                deserve nothing but the best.
              </h2>

              <div className="grid gap-6">
                <Card className="bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center shadow-md">
                      <Settings className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Free Check-Up & Estimate
                      </h4>
                      <p className="text-gray-600">
                        No hidden fees—get a full check-up and honest estimate
                        at no cost.
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
                        Accepts Home Service
                      </h4>
                      <p className="text-gray-600">
                        Too busy to visit? We’ll come to your location for
                        repairs or diagnostics.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center shadow-md">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Experienced in Hydraulic & Heavy Equipment
                      </h4>
                      <p className="text-gray-600">
                        Skilled in handling forklifts, boom trucks, and other
                        heavy-duty machinery.
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
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-white via-gray-50 to-white"
      >
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
                      mardeautoservices@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-lg font-bold">
                      Alegria Sur, Loay, Philippines, 6303
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map replaces Send A Message */}
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.896923892308!2d123.97943737583049!3d9.60414347971945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa45307af86b7b%3A0x27be43337ef62e1a!2sMarde&#39;s%20Auto%20%26%20Heavy%20Equipment%20Repair!5e0!3m2!1sen!2sph!4v1754509128205!5m2!1sen!2sph"
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
      <footer className="bg-gradient-to-br from-neutral-950 via-neutral-800 to-neutral-950 text-white pt-16 pb-4">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xl font-bold">
                  Marde’s Truck & Auto Hydraulic Repair
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
                    SERVICES
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
                    AUTO AIRCON REPAIR
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    TRUCK AIRCON REPAIR
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    WELDING
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    HYDRAULIC SYSTEMS
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
                    CHANGE OIL
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    HEAVY EQUIPMENT OVERHAUL
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    FORKLIFT REPAIR
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    BOOM TRUCK REPAIR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 mt-2 pt-4 text-center">
            <p className="text-gray-400">
              © 2025 Marde’s Truck & Auto Hydraulic Repair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
