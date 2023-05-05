import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       Caclulator
      </header>
      <form className='form'>
        <input className='textview' type = 'text'></input>
        <table className='table'>
          <tr>
            <td> <input type = "button" className='button' value={'C'}></input></td>
            <td> <input type = "button" className='button' value={'<'}></input></td>
            <td> <input type = "button" className='button' value={'/'}></input></td>
            <td> <input type = "button" className='button' value={'X'}></input></td>
          </tr>
          <tr>
            <td> <input type = "button" className='button' value={7}></input></td>
            <td> <input type = "button" className='button' Value={8}></input></td>
            <td> <input type = "button" className='button' value={9}></input></td>
            <td> <input type = "button" className='button' value={'-'}></input></td>
          </tr>
          <tr>
            <td> <input type = "button" className='button' value={4}></input></td>
            <td> <input type = "button" className='button' value={5}></input></td>
            <td> <input type = "button" className='button' value={6}></input></td>
            <td> <input type = "button" className='button' value={'+'}></input></td>
          </tr>
          <tr>
            <td> <input type = "button" className='button' value={1}></input></td>
            <td> <input type = "button" className='button' value={2}></input></td>
            <td> <input type = "button" className='button' value={3}></input></td>
            <td> <input type = "button" className='button' value={'='}></input></td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default App;
