import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | TechRescue247 - IT Solutions & Security",
  description:
    "Learn how TechRescue247 protects your privacy and handles your personal information. Our comprehensive privacy policy for IT services.",
  keywords:
    "privacy policy, data protection, TechRescue247, IT security, personal information",
  openGraph: {
    title: "Privacy Policy | TechRescue247",
    description: "How we protect and handle your personal information",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how
            TechRescue247 collects, uses, and protects your information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  When you use TechRescue247&apos;s services, we may collect the
                  following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Contact Information:</strong> Name, email address,
                    phone number, and business address
                  </li>
                  <li>
                    <strong>Service Information:</strong> Details about your IT
                    infrastructure, network configurations, and technical
                    requirements
                  </li>
                  <li>
                    <strong>Communication Records:</strong> Support tickets,
                    emails, phone calls, and chat logs
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use
                    our monitoring and support services
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP addresses, system logs,
                    and performance metrics (only when providing services)
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide and maintain our IT services (Local Networks &
                    Security, Infrastructure Management, Application
                    Development, Monitoring & Support)
                  </li>
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>Monitor and improve our service performance</li>
                  <li>Send service-related notifications and updates</li>
                  <li>Comply with legal obligations and industry standards</li>
                  <li>Prevent fraud and ensure service security</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Information Sharing
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share information only in the following
                  circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With trusted partners
                    who assist in delivering our services (under strict
                    confidentiality agreements)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law,
                    court order, or legal process
                  </li>
                  <li>
                    <strong>Business Protection:</strong> To protect our rights,
                    property, or safety, or that of our clients
                  </li>
                  <li>
                    <strong>Consent:</strong> With your explicit permission for
                    specific purposes
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Data Security
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  As an IT security company, we implement industry-leading
                  security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    End-to-end encryption for data transmission and storage
                  </li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>
                    Secure data centers with physical and digital protection
                  </li>
                  <li>
                    Employee training on data protection and confidentiality
                  </li>
                  <li>Incident response procedures for security breaches</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>
                    Request deletion of your personal information (subject to
                    legal requirements)
                  </li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Request data portability</li>
                  <li>
                    File complaints with relevant data protection authorities
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Data Retention
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We retain your personal information only as long as necessary
                  to provide our services and comply with legal obligations.
                  Service-related data is typically retained for the duration of
                  our service agreement plus 3 years for audit and compliance
                  purposes.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Cookies and Tracking
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Our website uses essential cookies to ensure proper
                  functionality. We may also use analytics cookies to improve
                  our services. You can control cookie preferences through your
                  browser settings.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Updates to This Policy
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We may update this privacy policy periodically to reflect
                  changes in our practices or legal requirements. We will notify
                  you of significant changes via email or website notification.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Questions About Our Privacy Policy?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-700 font-medium">Email Us</p>
              <p className="text-slate-600">privacy@techrescue247.com</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-700 font-medium">Call Us</p>
              <p className="text-slate-600">+1 (555) 247-TECH</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-700 font-medium">Visit Us</p>
              <p className="text-slate-600">Contact us for address</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
