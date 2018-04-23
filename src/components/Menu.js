import React from "react";

const menuItems = [
  {
    name: 'PB&J with the Crusts Cut Off',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum harum voluptatem quaerat in, maiores quod, iure necessitatibus alias labore distinctio itaque dolore ipsam fugit porro numquam repellendus iste quibusdam!",
    price: 14.99,
    id: 1
  },
  {
    name: 'Spaghetti with Pizza Sauce',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum harum voluptatem quaerat in, maiores quod, iure necessitatibus alias labore distinctio itaque dolore ipsam fugit porro numquam repellendus iste quibusdam!",
    price: 12.99,
    id: 2
  },
  {
    name: 'Bananna Split',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum harum voluptatem quaerat in, maiores quod, iure necessitatibus alias labore distinctio itaque dolore ipsam fugit porro numquam repellendus iste quibusdam!",
    price: 1.99,
    id: 3
  },
  {
    name: 'Corndog',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum harum voluptatem quaerat in, maiores quod, iure necessitatibus alias labore distinctio itaque dolore ipsam fugit porro numquam repellendus iste quibusdam!",
    price: 3.99,
    id: 4
  }
]

class Menu extends React.Component {
  render(){
    const menu = menuItems.map(function(item){
      return(<div className="card card-body" key={`food_${item.id}`}>
          <h2>{item.name} <span className="price">${item.price}</span></h2>
          <p>{item.description}</p>
      </div>)
    })
    return (
      <div id="menu" name='menu'>
        <h2 className="section-header">Menu</h2>
        {menu}
      </div>
    )
  }
}

export default Menu;
