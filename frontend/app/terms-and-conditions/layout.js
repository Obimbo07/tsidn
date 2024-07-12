export const metadata = {
  title: 'Terms and Conditions',
  description: 'This is the terms and conditions page for our website tsdn',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
