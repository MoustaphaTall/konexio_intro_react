import React from 'react';
import Title from './Title'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title studentName="Emad" age="27" backColor="gray" />
        <Title studentName="Didier" age="23" backColor="green" />
        <Title studentName="Adeline" age="8" backColor="blue" />
      </div>
    );
  }
}

export default App;