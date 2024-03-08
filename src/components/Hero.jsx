import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className='w-28 object' />

        </nav>

        <h1 className="head_text">
            Summarize Articles with <br />
            <span className="orange_gradient">OpenAI GPT-4</span>
          </h1>
          <h2 className='desc'>
              Simplify your reading with Sumz, a free tool that uses OpenAI&apos;s GPT-4 to summarize articles.
          </h2>
    </header>
  )
}

export default Hero
