// app/_not-found/page.tsx
'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';

export default function NotFoundPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </DashboardLayout>
  );
}
