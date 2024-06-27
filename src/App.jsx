import { useState } from 'react'
import './App.css'
import Card from './components/Card1'
import axios from 'axios'


function App() {
  const [output, setOutput] = useState([])
  const [loading, setloading] = useState()

  const API = async (e) => {
    setloading(true);
    const response = await axios.get(`https://openlibrary.org/search.json?q=${e}&limit=10&page=1`);
    setloading(false);
    setOutput(response.data.docs);

  }
  function handleInputChange(e) {
    API(e.target.value);
  }




  return (
    <>
      <h2>BookShelf</h2>
      <div>
        <input type="text" placeholder='Enter book name' onChange={handleInputChange} />

      </div>
      <div className='container'>
        {
          loading == true ? (<h2>Loading...</h2>) :
            (output.map((a) => {
              console.log(a);
              return (
                <Card title={a.title} description={"description"} />
              )
            }))

        }
        {output.length == 0 && loading == false? (<h2>Book not found! Search again.</h2>) : null}


      </div>



    </>
  )
}

export default App
