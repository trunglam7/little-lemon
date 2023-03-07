import React, {useEffect, useState} from 'react'
import Confirmation from './Confirmation';
import './Main.css'
const Main = () => {

  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [numPeople, setNumPeople] = useState(0);
  const [formReady, setFormReady] = useState(false);

  function displayConfirm() {
    setConfirm(!confirm);
  }

  useEffect(() => {
    if(name && email && date && numPeople){
      setFormReady(true);
    }
    else{
      setFormReady(false);
    }
  }, [name, email, date, numPeople])

  return (
    <main>
      <h2>Reservation</h2>

      {confirm ? <Confirmation name={name} email={email} numPeople={numPeople} date={date} setConfirm={setConfirm}/> :
        <form>
          <input placeholder='Name' required onChange={e => setName(e.target.value)} value={name}></input>
          <input placeholder='Email' type='email' required onChange={e => setEmail(e.target.value)} value={email}></input>
          <input type='datetime-local' required onChange={e => setDate(e.target.value)} value={date}></input>
          <input type='number' min={1} max={20} placeholder='Number of people' required onChange={e => setNumPeople(e.target.value)} value={numPeople}></input>
          <button type='button' disabled={formReady ? false : true} className='form-submit-btn' onClick={() => displayConfirm()}>Submit</button>
        </form>
      }



    </main>
  )
}

export default Main