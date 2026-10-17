import { businessData } from '../data/businessData';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B8]/30 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans">
            Artistry & Specialisations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3A1017] mt-1">
            Our Mehndi Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#382326]/80 font-sans max-w-xl mx-auto">
            Traditional Rajasthani precision and contemporary bridal styles tailored for your celebration in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {businessData.services.map((service, index) => (
            <div
              key={service}
              className="group p-6 rounded-lg border border-[#E9D8B8]/60 bg-[#F5EEE6]/30 hover:bg-[#F5EEE6]/70 transition-all duration-300"
            >
              <span className="text-xs font-serif font-semibold text-[#C5A15A] block mb-2">
                0{index + 1}
              </span>
              <h3 className="text-lg font-serif font-bold text-[#3A1017] group-hover:text-[#541820] transition-colors">
                {service}
              </h3>
              <p className="mt-2 text-xs text-[#382326]/70 leading-relaxed font-sans">
                Authentic craftsmanship, deep mahogany stain formulation, and bespoke pattern arrangement.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-[#3A1017] text-[#F5EEE6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#E9D8B8] font-semibold">
              Occasions Catered
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {businessData.occasions.map((occasion) => (
                <span
                  key={occasion}
                  className="text-xs bg-white/10 px-3 py-1 rounded text-[#F5EEE6]"
                >
                  {occasion}
                </span>
              ))}
            </div>
          </div>
          <a
            href={businessData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.16em] font-semibold py-3 px-6 rounded bg-[#C5A15A] text-[#3A1017] hover:bg-[#E9D8B8] transition-colors shrink-0"
          >
            Enquire for Your Date
          </a>
        </div>
      </div>
    </section>
  );
}
