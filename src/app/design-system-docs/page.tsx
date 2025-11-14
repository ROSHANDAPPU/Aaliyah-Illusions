import Link from 'next/link';

export default function DesignSystemDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
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
  );
}
