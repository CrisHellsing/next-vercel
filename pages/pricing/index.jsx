
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (

    <MainLayout>
      {/* Children */}
      <h1>Pricing Page</h1>

      <h1 className={'title'}>
          Go to
          <Link href="/">
              <a> Home!</a>
          </Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/Pricing.jsx</code>
      </p>
    </MainLayout>

  )
}