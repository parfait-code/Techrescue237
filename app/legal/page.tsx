import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Mail, Phone, MapPin, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Legal | TechRescue247 - IT Solutions",
  description:
    "Read TechRescue247's terms of service, legal information, and service agreements for our IT solutions including network security and infrastructure management.",
  keywords:
    "terms of service, legal, TechRescue247, IT services agreement, technology support terms",
  openGraph: {
    title: "Terms of Service & Legal | TechRescue247",
    description:
      "Legal terms and service agreements for TechRescue247 IT solutions",
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700 rounded-full mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Terms of Service & Legal
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            These terms govern your use of TechRescue247&apos;s IT services and
            establish our mutual rights and responsibilities.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">
                Important Legal Notice
              </h3>
              <p className="text-amber-700">
                By using TechRescue247&apos;s services, you agree to these
                terms. Please read them carefully as they contain important
                information about your rights and obligations.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                1. Service Agreement
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  TechRescue247 provides professional IT services including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Local Networks & Security:</strong> Network setup,
                    configuration, and security implementation
                  </li>
                  <li>
                    <strong>Infrastructure Management:</strong> Server
                    management, cloud services, and system administration
                  </li>
                  <li>
                    <strong>Application Development:</strong> Custom software
                    development and application maintenance
                  </li>
                  <li>
                    <strong>Monitoring & Support:</strong> 24/7 system
                    monitoring and technical support services
                  </li>
                </ul>
                <p>
                  Services are provided subject to separate service agreements
                  which detail specific terms, deliverables, and pricing.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                2. Client Responsibilities
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>As our client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Provide accurate information necessary for service delivery
                  </li>
                  <li>
                    Grant appropriate access to systems and facilities as
                    required
                  </li>
                  <li>Maintain current backups of critical data</li>
                  <li>
                    Follow security protocols and recommendations we provide
                  </li>
                  <li>Pay invoices according to agreed payment terms</li>
                  <li>
                    Notify us promptly of any issues or changes affecting
                    services
                  </li>
                  <li>
                    Use services in compliance with applicable laws and
                    regulations
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                3. Payment Terms
              </h2>
              <div className="space-y-4 text-slate-600">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Payment terms are Net 30 days unless otherwise specified in
                    service agreements
                  </li>
                  <li>
                    Late payments may incur fees as outlined in individual
                    contracts
                  </li>
                  <li>
                    Services may be suspended for accounts over 60 days past due
                  </li>
                  <li>
                    All prices are exclusive of applicable taxes unless stated
                    otherwise
                  </li>
                  <li>
                    Emergency or after-hours services may incur additional
                    charges
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                4. Confidentiality & Data Protection
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  TechRescue247 maintains strict confidentiality regarding
                  client information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    All client data and business information is treated as
                    confidential
                  </li>
                  <li>
                    We implement industry-standard security measures to protect
                    your data
                  </li>
                  <li>
                    Access to client systems is limited to authorized personnel
                    only
                  </li>
                  <li>We comply with applicable data protection regulations</li>
                  <li>
                    Confidentiality obligations survive termination of services
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                5. Service Level Agreements
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Service levels are defined in individual service agreements
                  and may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Response times for different priority levels</li>
                  <li>Uptime guarantees for monitored systems</li>
                  <li>Resolution timeframes for various issue types</li>
                  <li>Availability hours for different service tiers</li>
                  <li>Escalation procedures for unresolved issues</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-slate-800 mb-4">
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>While we strive for excellence in all services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Our liability is limited to the amount paid for services in
                    the preceding 12 months
                  </li>
                  <li>
                    We are not liable for indirect, consequential, or punitive
                    damages
                  </li>
                  <li>
                    Clients are responsible for maintaining adequate insurance
                    coverage
                  </li>
                  <li>
                    Force majeure events excuse performance delays or failures
                  </li>
                  <li>
                    Some jurisdictions do not allow liability limitations; terms
                    may vary accordingly
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                7. Intellectual Property
              </h2>
              <div className="space-y-4 text-slate-600">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    TechRescue247 retains ownership of proprietary tools,
                    methodologies, and general knowledge
                  </li>
                  <li>
                    Client retains ownership of their data and pre-existing
                    intellectual property
                  </li>
                  <li>
                    Custom development work ownership is defined in specific
                    project agreements
                  </li>
                  <li>
                    Third-party software licenses are governed by respective
                    vendor terms
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                8. Termination
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>Either party may terminate services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With 30 days written notice for ongoing services</li>
                  <li>Immediately for material breach of agreement</li>
                  <li>Upon mutual agreement at any time</li>
                  <li>
                    Data return and final billing procedures are outlined in
                    service agreements
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                9. Dispute Resolution
              </h2>
              <div className="space-y-4 text-slate-600">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We encourage direct communication to resolve any concerns
                  </li>
                  <li>
                    Formal disputes will be handled through mediation first
                  </li>
                  <li>
                    Binding arbitration may be required for unresolved disputes
                  </li>
                  <li>
                    Applicable law and jurisdiction are specified in individual
                    contracts
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                10. Modifications
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  These terms may be updated periodically. We will notify
                  clients of material changes with reasonable advance notice.
                  Continued use of services constitutes acceptance of updated
                  terms.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Company Information */}
        <div className="mt-12 bg-slate-100 rounded-lg p-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Company Information
          </h2>
          <div className="text-center space-y-2 text-slate-600">
            <p className="text-lg font-medium text-slate-800">
              TechRescue247 LLC
            </p>
            <p>Professional IT Services & Solutions</p>
            <p>Business Registration: [Registration Number]</p>
            <p>Tax ID: [Tax Identification Number]</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Legal Questions or Concerns?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-700 font-medium">Legal Department</p>
              <p className="text-slate-600">legal@techrescue247.com</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-700 font-medium">Main Office</p>
              <p className="text-slate-600">+1 (555) 247-TECH</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="text-slate-700 font-medium">Business Address</p>
              <p className="text-slate-600">Available upon request</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            ← Back to Home
          </Link>
          <Link
            href="/privacy"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
