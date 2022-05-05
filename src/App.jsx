import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// コンポーネント
const App = () => {
  const [num, setNum] = useState(1);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const switchFace = function () {
    setFaceShowFlg(!faceShowFlg);
  };

  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>調子はどう？</p>
      <ColorfulMessage color="blue">私は元気よ。</ColorfulMessage>
      <ColorfulMessage color="green">ワシは元気じゃよ。</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <button onClick={switchFace}>on/off</button>
      {faceShowFlg && <p>( ﾟДﾟ)</p>}
    </React.Fragment>
  );
};

export default App;
