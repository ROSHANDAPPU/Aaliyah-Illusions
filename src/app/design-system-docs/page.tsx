"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import Navigation from "../../components/home/Navigation";
import Footer from "../../components/home/Footer";

export default function DesignSystemDocs() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background-dark text-neutral-text-light min-h-screen">
      <Navigation isScrolled={isScrolled} />
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-8">Design System Documentation</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/design-system-docs/colors" className="text-blue-500 hover:underline">
                Colors
              </Link>
            </li>
            <li>
              <Link href="/design-system-docs/typography" className="text-blue-500 hover:underline">
                Typography
              </Link>
            </li>
            <li>
              <Link href="/design-system-docs/ui-components" className="text-blue-500 hover:underline">
                UI Components
              </Link>
            </li>
            <li>
              <Link href="/design-system-docs/photography" className="text-blue-500 hover:underline">
                Photography Guidelines
              </Link>
            </li>
            <li>
              <Link href="/design-system-docs/accessibility" className="text-blue-500 hover:underline">
                Accessibility Guidelines
              </Link>
            </li>
            <li>
              <Link href="/design-system-docs/print" className="text-blue-500 hover:underline">
                Print Components
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
}
