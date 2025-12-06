import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://redditarun.github.io/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Tarun Reddi',
    template: '%s | Tarun Reddi'
  },
  description:  'Tarun Reddi is an AI Researcher and Engineer. An MSCS graduate from the University at Buffalo, he is currently working as an AI Engineer at Makora (formerly Mako), working on fine-tuning LLMs (SFT/RFT) and building agentic workflows for CUDA/Triton kernel generation.',
  openGraph: {
    title: 'Tarun Reddi',
    description: 'Tarun Reddi is an AI Researcher and Engineer. An MSCS graduate from the University at Buffalo, he is currently working as an AI Engineer at Makora (formerly Mako), working on fine-tuning LLMs (SFT/RFT) and building agentic workflows for CUDA/Triton kernel generation.',
    url: 'https://redditarun.github.io/',
    siteName: 'Tarun Reddi',
    type: 'website',
    images: [
      {
        url: '/profile_3.jpg',
        width: 1200,
        height: 630,
        alt: 'Tarun Reddi - AI Researcher & Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_TeenDifferent',
    creator: '@teendifferent',
    images: ['/profile_3.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'Tarun Reddi', url: 'https://redditarun.github.io/' }, { name: 'Teen Different', url: 'https://teendifferent.substack.com/' }],
  keywords: [
    "Tarun Reddi", 
    "AI Researcher", 
    "AI Engineer", 
    "Makora (formerly Mako)", 
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "Computer Vision",
    "Natural Language Processing",
    "LLM Fine-tuning", 
    "SFT", 
    "RFT", 
    "Agentic Workflows",
    "CUDA/Triton Kernel Generation",
    "MSCS University at Buffalo", 
    "Generative AI", 
    "Teen Different",
    "Substack",
    "Blog",
    "GitHub",
    "Hugging Face",
    "LinkedIn",
    "X (Twitter)",
    "Google Scholar",
    "Medium (Old Articles)",
  ],
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E2BK15D69K"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E2BK15D69K');
          `}
        </Script>

        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          {/* existing layout */}
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-md flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
