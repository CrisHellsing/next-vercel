
import Link from 'next/link'

import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (

    <>

        {/* Children */}
        <h1>About Page</h1>

        <h1 className={'title'}>
            Go to
            <Link href="/">
                <a> Home!</a>
            </Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>

    </>

  )
}

// 
AboutPage.getLayout = function getLayout( page ){
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
