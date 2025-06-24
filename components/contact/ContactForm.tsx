"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Remplacez YOUR_FORMSPARK_ID par votre ID FormSpark pour le formulaire de contact
  const FORMSPARK_CONTACT_ID = "form_v1_iLUXiLRSKlxuOPGu7NiDBpdf";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        `https://submit-form.com/${FORMSPARK_CONTACT_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            formType: "contact",
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitMessage(
          "Merci pour votre message ! Nous vous répondrons bientôt."
        );
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setSubmitMessage(
          "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
        );
        console.error("FormSpark error:", errorData);
      }
    } catch (error) {
      setSubmitMessage(
        "Une erreur réseau s'est produite. Veuillez vérifier votre connexion et réessayer."
      );
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none transition-colors disabled:opacity-50"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isSubmitting}
            required
            minLength={2}
            placeholder="Votre nom complet"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Adresse email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none transition-colors disabled:opacity-50"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            required
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none transition-colors disabled:opacity-50 resize-vertical"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isSubmitting}
            required
            minLength={10}
            placeholder="Décrivez votre projet ou vos besoins..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>

        {submitMessage && (
          <div
            className={`p-4 rounded-lg text-sm ${
              submitMessage.includes("Merci")
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <p className="text-xs text-gray-400 text-center">
          * Champs obligatoires
        </p>
      </form>
    </div>
  );
}
