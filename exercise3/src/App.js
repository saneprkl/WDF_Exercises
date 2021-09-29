
import React from 'react';
import data from './data.json'
import ItemMap from './components/ItemMap';
import './App.css';

class App extends React.Component {

constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      inputSearch: ""
    }
  }

inputChange = (event) => {
  console.log(event.target.value);
  this.setState({ inputSearch: event.target.value });
}

render() {
  return (
    <div>
    
      <input className="container" type="text" onChange={ this.inputChange } value={ this.state.inputSearch }/>
    
      <ItemMap items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.inputSearch.toLowerCase())) }/>
    </div>
  );
} 
}
export default App;
