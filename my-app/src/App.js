import  {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Button from './components/Button'
import Footer from './components/Footer'
 
const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Turn of The Tides ',
          day: 'September 7, 2022',  
          Synopsis: 'Former Debt Collectors Have Wiped Away $6.7 Billion of Medical Debt for Millions of Americans' 
    },
    {
        id: 2,
        text: 'Advances In Tech',
        day: 'September 12, 2022',
        Synopsis: 'New Webb Image Captures Clearest View of Neptunes Rings yet, Revealing the Ice Giant in Whole New Light'
    },
    {
        id: 3,
        text: 'The Best Of Capitalism',
        day: 'September 25, 2022',
        Synopsis: 'Patagonia Gives Away Its Entire $3 Billion Worth To Fight Climate Change'
    },

  ])

  
 

  return (
    <div className='container'>
    <Header />
    <Button color = 'lightgray'  text ='Top Stories'  />
    <Button color = 'lightgray'  text ='Breakthroughs'  />
    <Button color = 'lightgray'  text ='Sports'  />
    <Button color = 'lightgray'  text ='Environment'  />
    <Button color = 'lightgray'  text ='Community'  />
    <Button color = 'lightgray'  text ='Kindness'  />
    <Button color = 'lightgray'  text ='Animals'  />
    <Tasks tasks = {tasks}/>
    <Footer/>
    </div>
  )
}
 
export default App

