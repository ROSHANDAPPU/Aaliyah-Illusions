import React from "react";

export default function DesignSystemPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-20 uppercase tracking-tight">
          Design System Documentation
        </h1>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#29CEF2]">Typography</h2>
          <p className="text-gray-300 mb-8">
            Typography in design covers fonts, sizes, weights, and how text is structured to maintain consistency across digital and print platforms.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Headlines & Wordmark</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li><span className="font-bold">H1–H3:</span> Main headings for pages, sections, or articles.</li>
              <li><span className="font-bold">Wordmark:</span> The stylized text logo of a brand (usually a custom font or type treatment).</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Body & UI</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Standard text used for paragraphs, forms, menus, or UI elements.</li>
              <li><span className="font-bold">Example:</span> Body text in a readable font like Roboto, 16px.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Hierarchy</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Organizes text importance visually using size, weight, and spacing.</li>
              <li><span className="font-bold">Example:</span> H1 is most important → H2 secondary → H3 tertiary → body → captions → labels.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Type Scale</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>The system of font sizes for consistency:</li>
              <li><span className="font-bold">H1, H2, H3, H4</span> – Headings</li>
              <li><span className="font-bold">Body</span> – Main paragraph text</li>
              <li><span className="font-bold">Lead</span> – Slightly larger or emphasized paragraph text</li>
              <li><span className="font-bold">Small/Captions</span> – Secondary or footnote text</li>
              <li><span className="font-bold">Labels/Buttons</span> – Text on buttons, UI elements, tags</li>
            </ul>
          </div>
        </section>

        {/* Color Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#29CEF2]">Color</h2>
          <p className="text-gray-300 mb-8">
            Colors are defined for brand recognition and UI clarity.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Color Palette & Roles</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li><span className="font-bold">Background</span> – Default background color of pages or cards</li>
              <li><span className="font-bold">Primary</span> – Main brand color used for highlights, buttons, links</li>
              <li><span className="font-bold">Accents</span> – Secondary colors to complement primary, highlight key info</li>
              <li><span className="font-bold">Neutrals</span> – Grays, blacks, whites for typography, UI, backgrounds</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Roles</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li><span className="font-bold">Links / CTAs (Call to Actions)</span> – Usually primary or accent colors to attract attention</li>
              <li><span className="font-bold">Dividers / Rules</span> – Lines separating sections</li>
              <li><span className="font-bold">Pull-quotes / Labels</span> – Secondary accent colors to highlight quotes or tags</li>
            </ul>
          </div>
        </section>

        {/* Photography Direction Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#29CEF2]">Photography Direction</h2>
          <p className="text-gray-300 mb-8">
            Guidelines on how images should look, including:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
            <li><span className="font-bold">Style</span> (natural, staged, candid, editorial)</li>
            <li><span className="font-bold">Tone</span> (warm, neutral, vibrant)</li>
            <li><span className="font-bold">Composition</span> (minimalist, busy, centered, rule of thirds)</li>
          </ul>
          <p className="text-gray-300">
            <span className="font-bold">Pattern & Graphic Language</span> – Repeating motifs, textures, icons, or shapes that visually support the brand.
          </p>
        </section>

        {/* UI Components (Web) Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#29CEF2]">UI Components (Web)</h2>
          <p className="text-gray-300 mb-8">
            Standardized elements for building web interfaces:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><span className="font-bold">Buttons</span> – Primary, secondary, disabled states, hover effects</li>
            <li><span className="font-bold">Cards</span> – Containers for images, text, and buttons</li>
            <li><span className="font-bold">Forms</span> – Inputs, dropdowns, checkboxes, validation messages</li>
            <li><span className="font-bold">Tables</span> – Grids for displaying structured data</li>
          </ul>
        </section>

        {/* Print Components Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#29CEF2]">Print Components</h2>
          <p className="text-gray-300 mb-8">
            Brand consistency in physical materials:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><span className="font-bold">Business Card</span> – Layout, logo placement, typography</li>
            <li><span className="font-bold">Thank You / Care Card</span> – Small branded messages included in shipments</li>
          </ul>
        </section>

        {/* Accessibility & Contrast Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-[#29CEF2]">Accessibility & Contrast</h2>
          <p className="text-gray-300 mb-8">
            Ensuring design is usable for all users, including people with vision impairments.
          </p>
          <p className="text-gray-300 mb-4">
            Checks include:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
            <li>Text contrast against background (WCAG standards)</li>
            <li>Readable font sizes</li>
            <li>Clear focus indicators for UI components</li>
          </ul>
          <p className="text-gray-300">
            Ensures inclusivity and better user experience.
          </p>
        </section>

        <p className="text-gray-300 text-center mt-20">
          In short, all these categories together form a complete visual and functional design system, providing rules for fonts, colors, photography, UI, print, and accessibility to maintain brand consistency.
        </p>
      </div>
    </div>
  );
}