import React, { useState, useEffect } from 'react';
import CordinatesForm from './components/CordinatesForm';
import { ReactBingmaps } from 'react-bingmaps';
import './App.css'

function App() {

  const [pins, setPins] = useState([]);
  const [line, setLine] = useState({
    "location": [],
    "option": { strokeColor: 'blue', strokeThickness: 10 }
  })

  const newPin = values => {
    return {
      location: [Number(values.lang), Number(values.lat)],
      options: { color: 'red' }
    }
  }

  useEffect(() => {
    let lines = [];
    pins.forEach(pin => {
      lines.push(pin.location);
    })
    if (pins.length > 2) {
      lines.push(pins[0].location);
    }
    setLine(prevState => ({
      ...prevState,
      location: lines
    }));
  }, [pins, setPins]);

  const formSubmited = values => {
    setPins([...pins, newPin(values)]);
  }

  return (
    <div className="container">
      <CordinatesForm NewPoints={formSubmited} />
      <ReactBingmaps pushPins={pins} polyline={line}
        center={[13.0827, 80.2707]}
        bingmapKey="AlkdzDwQ2ONfNVS5R8h0cEU5VDkXJJ-2NsAfZvp5ansW4g-g30_QkcwaRaSnt9ZQ"
      >
      </ReactBingmaps>
    </div>
  );
}

export default App;
