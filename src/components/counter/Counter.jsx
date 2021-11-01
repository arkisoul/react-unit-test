import { useState } from "react";

const Counter = (props) => {
    const [username, setUsername] = useState('hello')

    return (
      <div className="counter">
        <h1 className="count">{props.count}</h1>
        <p className="name">{username}</p>
        <button onClick={() => setUsername("greet")}>Set name</button>
      </div>
    );
}

export default Counter;