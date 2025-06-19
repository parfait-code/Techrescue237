"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Network,
  Cloud,
  Code,
  Server,
  CheckCircle,
  ArrowLeft,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
  Award,
  Target,
  Zap,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getServiceById, Service } from "@/data/services";
import CTA from "@/components/CTA";

const iconMap = {
  Network,
  Cloud,
  Server,
  Code,
};

interface ServiceDetailPageProps {
  serviceId: string;
  service?: Service;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  service = getServiceById(serviceId),
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-slate-600 mb-6">
            The requested service does not exist or is no longer available.
          </p>
          <Link href="/services">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  const benefits = [
    {
      icon: Target,
      title: "Performance",
      description: "System performance optimization",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Advanced data protection",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast and efficient implementation",
    },
    {
      icon: Users,
      title: "Support",
      description: "Continuous expert support",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-slate-50 text-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center text-slate-900 hover:text-slate-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    {service.title}
                  </h1>
                </div>
              </div>

              <p className="text-xl text-slate-700 mb-6 max-w-3xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {service.technologies.slice(0, 6).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-300 text-slate-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* <div className="bg-slate-800 rounded-lg p-6 lg:min-w-[300px]">
              <h3 className="font-semibold text-lg mb-4">
                Get Started Now
              </h3>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Request Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Schedule Audit
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-slate-400">
                Response within 24h • Free audit
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="benefits" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Benefits for Your Business
                  </h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Our 4-Step Process
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step, index) => (
                  <Card key={index} className="border border-slate-200">
                    <CardHeader className="pb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Pricing Tailored to Your Needs
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {Object.entries(service.pricing).map(([key, plan]) => (
                  <Card
                    key={key}
                    className={`border ${
                      key === "professional"
                        ? "border-blue-500 shadow-lg scale-105"
                        : "border-slate-200"
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      {key === "professional" && (
                        <Badge className="w-fit mx-auto mb-2 bg-blue-600">
                          Most Popular
                        </Badge>
                      )}
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-slate-900">
                        {plan.price}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-slate-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className={`w-full ${
                          key === "professional"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : ""
                        }`}
                        variant={key === "professional" ? "default" : "outline"}
                      >
                        Choose This Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {service.faq.map((faq, index) => (
                    <Card key={index} className="border border-slate-200">
                      <CardHeader
                        className="cursor-pointer hover:bg-slate-50 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-medium text-slate-900">
                            {faq.question}
                          </CardTitle>
                          {openFaqIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-slate-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-500" />
                          )}
                        </div>
                      </CardHeader>
                      {openFaqIndex === index && (
                        <CardContent className="pt-0">
                          <p className="text-slate-600">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.position} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-20">
        <CTA
          title="Ready to Get Started with {service.title}?"
          description="Contact us for a free audit and personalized proposal."
        />
      </section>
    </div>
  );
};

export default ServiceDetailPage;
