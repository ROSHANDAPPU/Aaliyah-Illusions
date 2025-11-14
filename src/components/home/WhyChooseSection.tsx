import React from "react";
import { Building2, Sparkles, Package, Users } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: Building2,
      title: "HOSPITALITY EXPERTS",
      description: "We understand the unique needs and challenges of the hospitality industry, and we tailor our services to meet them",
    },
    {
      icon: Sparkles,
      title: "CREATIVE EXCELLENCE",
      description: "Our team combines artistic flair with technical expertise to deliver visuals that captivate and inspire",
    },
    {
      icon: Package,
      title: "COMPREHENSIVE SOLUTIONS",
      description: "From visual content creation to marketing and printing, we offer end-to-end solutions to enhance your brand",
    },
    {
      icon: Users,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-12 bg-[#0a0a0a] border border-gray-900 hover:border-[#29CEF2]/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-8 inline-flex p-5 bg-[#29CEF2]/5 group-hover:bg-[#29CEF2]/10 transition-colors">
                <feature.icon className="w-10 h-10 text-[#29CEF2]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-[#29CEF2] transition-colors leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed font-light text-sm">
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
