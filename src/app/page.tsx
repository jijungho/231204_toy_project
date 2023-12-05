import Header from './components/Header'
import Main from './main/page'

export default function Home() {
  return (
    <>
      <div className='min-w-[1400px] max-w-[1920px] h-[100vh]'>
        <Header />
        <Main />
      </div>
    </>
  )
}
