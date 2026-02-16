import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIMin - Conscious Living & Leadership',
  description: 'Executive coaching, leadership development, and spiritual retreats with Anna Ugander. Transform your leadership through conscious awareness and authentic connection.',
  keywords: 'conscious living, leadership coaching, executive coaching, spiritual development, retreats, breathwork, Anna Ugander',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}