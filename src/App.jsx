import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// コンポーネント
const app = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(1);

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>調子はどう？</p>
      <ColorfulMessage color="blue">私は元気よ。</ColorfulMessage>
      <ColorfulMessage color="green">ワシは元気じゃよ。</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

export default app;
