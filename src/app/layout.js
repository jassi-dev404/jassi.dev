import './globals.css'

export const metadata = {
  title: 'jassi.dev',
  description: 'Jaskaran - I make websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
