import React from "react";

class Location extends React.Component {
  render(){
    return (
      <div id="location" name='location'>
        <h2 className="section-header">Location</h2>
        <h3>Address</h3>
        <p>
          1234 Milan Street, NOLA 70115<br/>
          504-123-4567
        </p>
        <h3>Directions</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum harum voluptatem quaerat in, maiores quod, iure necessitatibus alias labore distinctio itaque dolore ipsam fugit porro numquam repellendus iste quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum harum voluptatem quaerat in, maiores quod, iure necessitatibus alias labore distinctio itaque dolore ipsam fugit porro numquam repellendus iste quibusdam!</p>
      </div>
    )
  }
}

export default Location;
