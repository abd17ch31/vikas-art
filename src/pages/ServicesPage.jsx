import { useState } from 'react';
import { X } from 'lucide-react';
import { businessData } from '../data/businessData';
import { galleryImages } from '../data/galleryImages';

const services = [
  { name: 'Bridal', folder: 'bridal' },
  { name: 'Traditional', folder: 'Traditional' },
  { name: 'Portrait', folder: 'Portrait' },
  { name: 'Engagement', folder: 'Engagement' },
  { name: 'Festival', folder: 'Festival' },
  { name: 'Guest', folder: 'Guest' },
  { name: 'Custom', folder: 'Custom' },
];

export default function ServicesPage({ onNavigateHome }) {
  const [selectedService, setSelectedService] = useState(null);

  const openPopup = (service) => {
    setSelectedService({
      ...service,
      images: galleryImages
        .filter((img) => img.category.toLowerCase().includes(service.folder.toLowerCase()))
        .slice(0, 4),
    });
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center text-[#541820] mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => openPopup(service)}
              className="group border border-[#E9D8B8] rounded-lg overflow-hidden transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
            >
              <div className="aspect-[4/3] bg-[#F5EEE6]">
                {/* Simplified: using first image from gallery as placeholder */}
                <img 
                  src={galleryImages.find(img => img.category.toLowerCase().includes(service.folder.toLowerCase()))?.src || ''} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center font-serif text-[#3A1017] font-bold">{service.name}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-[#541820]">{selectedService.name} Gallery</h2>
              <button onClick={() => setSelectedService(null)} className="p-2 text-[#541820] hover:bg-[#F5EEE6] rounded-full">
                <X />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {selectedService.images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} className="w-full h-64 object-cover rounded" />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center py-10">
        <button onClick={onNavigateHome} className="text-[#541820] hover:text-[#3A1017] underline">Return to Home</button>
      </div>
    </div>
  );
}
