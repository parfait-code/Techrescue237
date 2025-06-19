import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm mb-8">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Phone className="text-accent h-5 w-5 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-secondary/80">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-accent h-5 w-5 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-secondary/80">contact@yourcompany.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-accent h-5 w-5 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-secondary/80">
              123 Business Street
              <br />
              Suite 100
              <br />
              San Francisco, CA 94107
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="text-accent h-5 w-5 mt-1" />
          <div>
            <h3 className="font-medium mb-1">Business Hours</h3>
            <p className="text-secondary/80">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
