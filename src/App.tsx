
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
              <a href={"https://github.com/mnnaegel"}>Code</a>
            </li>

            <li className='underline py-5'>
              <a href={"https://www.notion.so/Notes-d932c513f98f44e49beee282ddb980d8"}>Notes for courses I'm taking at school</a>
            </li>

            <li className='underline'>
              <a href={"https://www.notion.so/Notes-for-personal-projects-defd2dbbc80949619875855209d66647"}>Notes on random projects I'm working on</a>
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
