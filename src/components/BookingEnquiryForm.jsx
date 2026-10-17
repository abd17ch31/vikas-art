import { useState } from 'react';
import { Mail, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { businessData } from '../data/businessData';

const eventTypeOptions = [
  'Bridal Wedding',
  'Engagement',
  'Groom Mehndi',
  'Family Function',
  'Baby Shower',
  'Festival',
  'Other Celebration',
];

const mehndiStyleOptions = [
  'Traditional Rajasthani & Marwadi',
  'Arabic Flowing Floral',
  'Indo-Western Contemporary',
  'Minimal & Mandala',
  'Custom Portrait & Storytelling',
  'Not Sure Yet (Need Guidance)',
];

export default function BookingEnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Bridal Wedding',
    eventDate: '',
    location: '',
    guestCount: '',
    preferredStyle: 'Traditional Rajasthani & Marwadi',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Builds the formatted structured text body for Email & WhatsApp
   */
  const buildEnquiryBody = () => {
    const lines = [
      'Hello Vikash Mehndi Art,',
      '',
      'I would like to enquire about a mehndi booking.',
      '',
      `Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
    ];

    if (formData.email.trim()) {
      lines.push(`Email: ${formData.email.trim()}`);
    }

    lines.push(`Event Type: ${formData.eventType}`);

    if (formData.eventDate) {
      lines.push(`Event Date: ${formData.eventDate}`);
    }
    if (formData.location.trim()) {
      lines.push(`Event Location: ${formData.location.trim()}`);
    }
    if (formData.guestCount.trim()) {
      lines.push(`Estimated Guests: ${formData.guestCount.trim()}`);
    }
    if (formData.preferredStyle) {
      lines.push(`Preferred Style: ${formData.preferredStyle}`);
    }

    if (formData.additionalDetails.trim()) {
      lines.push('');
      lines.push('Additional Details:');
      lines.push(formData.additionalDetails.trim());
    }

    lines.push('');
    lines.push('Please let me know your availability and pricing.');
    lines.push('');
    lines.push('Thank you.');

    return lines.join('\n');
  };

  // Button A: Enquire via Email (uses Web3Forms)
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatusMessage('Please complete the required fields highlighted below.');
      return;
    }

    setStatusMessage('Sending your enquiry...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "54bb0a76-05cf-4d70-b95a-7b380dabd242",
          subject: `Mehndi Booking Enquiry — ${formData.fullName.trim()}`,
          message: buildEnquiryBody(),
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage('Enquiry sent successfully! We will get back to you soon.');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          eventType: 'Bridal Wedding',
          eventDate: '',
          location: '',
          guestCount: '',
          preferredStyle: 'Traditional Rajasthani & Marwadi',
          additionalDetails: '',
        });
      } else {
        setStatusMessage('Failed to send enquiry. Please try again or use WhatsApp.');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage('Error sending enquiry. Please try again or use WhatsApp.');
    }
  };

  // Button B: Enquire via WhatsApp (opens WhatsApp with prefilled conversation)
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatusMessage('Please complete the required fields highlighted below.');
      return;
    }

    const phone = businessData.contact.whatsappInternational || '919351260318';
    const body = buildEnquiryBody();
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;

    setStatusMessage('Opening WhatsApp with your prefilled booking enquiry...');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-[850px] mx-auto bg-[#FFFCF8] rounded-2xl border border-[#EADCC5] shadow-[0_4px_24px_rgba(66,16,25,0.04)] p-6 sm:p-10 text-left mt-10 sm:mt-12">
      {/* Form Section Header */}
      <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
        <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.24em] uppercase text-[#C5A15A] block mb-1.5">
          — CUSTOM CELEBRATION DETAILS —
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#421019] font-normal">
          Tell Us About Your Celebration
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#716A67] mt-2 leading-relaxed">
          Share a few details about your event so we can understand your requirements and availability.
        </p>
      </div>

      {statusMessage && (
        <div className="mb-6 p-3.5 rounded-lg bg-[#F8F3EC] border border-[#EADCC5] text-xs text-[#6E202C] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#C5A15A] shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      <form noValidate className="space-y-5 sm:space-y-6">
        {/* Row 1: Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Radhika Sharma"
              className={`w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border text-sm text-[#382329] placeholder-[#847976]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors ${
                errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#EADCC5]'
              }`}
              required
            />
            {errors.fullName && (
              <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className={`w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border text-sm text-[#382329] placeholder-[#847976]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors ${
                errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#EADCC5]'
              }`}
              required
            />
            {errors.phone && (
              <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Email Address & Event Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-xs text-[#716A67] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. radhika@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] placeholder-[#847976]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="eventType" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Event Type <span className="text-red-700">*</span>
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
              required
            >
              {eventTypeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Event Date & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="eventDate" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Event Date <span className="text-xs text-[#716A67] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Event Location / Venue <span className="text-xs text-[#716A67] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Raja Park Jaipur / Hotel Fairmont"
              className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] placeholder-[#847976]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Estimated Guests & Preferred Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="guestCount" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Estimated Number of People <span className="text-xs text-[#716A67] font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="e.g. Bride only / 10-15 guests"
              className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] placeholder-[#847976]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="preferredStyle" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
              Preferred Mehndi Style <span className="text-xs text-[#716A67] font-normal lowercase">(optional)</span>
            </label>
            <select
              id="preferredStyle"
              name="preferredStyle"
              value={formData.preferredStyle}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
            >
              {mehndiStyleOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 5: Additional Details */}
        <div>
          <label htmlFor="additionalDetails" className="block text-xs font-semibold text-[#421019] uppercase tracking-wider mb-1.5">
            Additional Details & Requests <span className="text-xs text-[#716A67] font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="additionalDetails"
            name="additionalDetails"
            rows="3"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Tell us about your timing, favorite design elements, custom portraits, or budget requirements..."
            className="w-full px-4 py-2.5 rounded-lg bg-[#F8F3EC]/50 border border-[#EADCC5] text-sm text-[#382329] placeholder-[#847976]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A15A] transition-colors"
          />
        </div>

        {/* =========================================================================
            SECTION 9: TWO SUBMISSION BUTTONS (REPLACING "CONFIRM MY SLOT")
           ========================================================================= */}
        <div className="pt-4 border-t border-[#EADCC5] space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
            {/* Button A: Enquire via Email */}
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-lg bg-[#421019] text-[#F5EEE6] hover:bg-[#320C13] font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
            >
              <Mail className="w-4 h-4 text-[#C5A15A]" />
              <span>Enquire via Email</span>
            </button>

            {/* Button B: Enquire via WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-lg bg-[#C5A15A] text-[#3A1017] hover:bg-[#E9D8B8] font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A1017]"
            >
              <MessageCircle className="w-4 h-4 text-[#3A1017]" />
              <span>Enquire via WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-[#716A67] text-center font-sans">
            "Enquire via Email" sends your details to us via Web3Forms, while "Enquire via WhatsApp" opens your app with a prefilled message.
          </p>
        </div>
      </form>
    </div>
  );
}
