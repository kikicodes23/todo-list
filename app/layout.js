import './globals.css'
import { Montserrat, Raleway } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--raleway'
})

export const metadata = {
  title: 'Todo list - Erika',
  description: 'This is a React.js project building a todo list page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  )
}
