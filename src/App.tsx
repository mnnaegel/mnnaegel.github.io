
function App() {
  return (
    <div className="h-full w-full">
      <div className="w-3/4 mx-auto py-5">
        <div className="flex-row w-full justify-center align-middle">
          <div className="text-4xl">
            Hi, I'm Max 🫠
          </div>
          <ul className='py-3'>
            <li className='underline'>
              <a href={"https://github.com/mnnaegel"}>Github</a>
            </li>

            <li className='underline py-5'>
              <a href={"https://mirror-quart-843.notion.site/Notes-d932c513f98f44e49beee282ddb980d8"}>Write-ups for tech random stuff</a>
            </li>
          </ul>
          
          <div>
            You can contact me at <a href="mailto:maxnaegel@gmail.com" className='underline'>maxnaegel@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
