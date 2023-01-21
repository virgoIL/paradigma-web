import '../styles/globals.css'
import {Navbar} from "@/layout/components/Navbar";
import {GenerationSection} from "@/features/generator/components/GenerationSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className="w-full">
        <Navbar/>
          {children}
      </div>
      </body>
    </html>
  )
}
