
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function HomePage() {
  return (
    
    <MainLayout>
      {/* Todo lo que se ponga dentro de MainLatout será children y esto sera mandado al componenete para que se muestre allá y nos devuelva todo el componente completo */}
      <h1>Home Page</h1>
    
      <h1 className={'title'}>
        Go to 
          <Link href="/about">
              <a> About!</a>
          </Link>
      </h1>

      <h1 className={'title'}>
        Go to 
          <Link href="/contact">
              <a> Contact!</a>
          </Link>
      </h1>


      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>

  )
}
