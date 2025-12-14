import React from "react";

export default function WhyChooseSection() {
  const features = [
    {
      title: "HOSPITALITY EXPERTS",
      description: "We understand the unique needs and challenges of the hospitality industry, and we tailor our services to meet them",
    },
    {
      title: "CREATIVE EXCELLENCE",
      description: "Our team combines artistic flair with technical expertise to deliver visuals that captivate and inspire",
    },
    {
      title: "CORE SOLUTIONS",
      description: "From visual content creation to marketing and printing, we offer end-to-end solutions to enhance your brand",
    },
    {
      title: "CLIENT-CENTRE APPROACH",
      description: "Your satisfaction is our priority. We collaborate closely with you to ensure your vision is realized",
    },
  ];

  return (
   <section className="relative py-40 px-6 lg:px-8 bg-black overflow-hidden">
     {/* Decorative lines */}
     <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
     <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent" />

     <div className="relative max-w-[1400px] mx-auto">
       <div className="grid grid-cols-1 gap-16">
         {features.map((feature, index) => (
           <div
             key={index}
             className="group relative p-12 transition-all duration-500 grid grid-cols-3 gap-8 items-start"
           >
             {/* Title */}
             <h3 className="col-span-2 text-white font-black uppercase tracking-tight group-hover:text-[#29CEF2] transition-colors leading-[0.9] font-sans why-choose-heading">
               {feature.title}
             </h3>

             {/* Description */}
             <p className="col-span-1 text-gray-500 font-light text-sm leading-relaxed why-choose-description iceland-font" style={{ fontSize: '20px' }}>
               {feature.description}
             </p>

             {/* Glow Effect on Hover */}
             <div className="absolute top-0 right-0 w-48 h-48 bg-[#29CEF2]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
           </div>
         ))}
       </div>
     </div>
   </section>
  );
}
