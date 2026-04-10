import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'jassi.dev',
  description: 'Jaskaran - I make websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
