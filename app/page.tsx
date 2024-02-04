import Image from 'next/image'

export default function Home() {
  const customclass = 'theme-controller btn btn-sm btn-block btn-ghost justify-start'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>
        Hello World <button className="btn btn-primary">Click</button>
      </p>
      <div>
        <div className="dropdown mb-72">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            <li>
              <input type="radio" name="theme-dropdown" className={customclass} aria-label="Default" value="default" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown" className={customclass} aria-label="Dark" value="dark" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown" className={customclass} aria-label="Retro" value="retro" />
            </li>
            <li>
              <input type="radio" name="theme-dropdown" className={customclass} aria-label="Synthwave" value="synthwave" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
