import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from "./Components/Items";

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Яблуко',
          img: 'apple.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'fruit',
          price: '34.50'
        },
        {
          id: 2,
          title: 'Стул',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tablle',
          price: '2564.99'
        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
