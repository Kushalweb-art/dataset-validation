import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dataset Validation & Comparison",
  description: "Ensure data quality with automated validation and comparison tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <main className="flex-1 overflow-x-hidden">{children}</main>
            </div>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'