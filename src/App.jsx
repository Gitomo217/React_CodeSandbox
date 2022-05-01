import React from "react";

// コンポーネント
const app = () => {
  const onClickButton = () => {
    alert("ボタン押しました");
  };
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>調子はどう？</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default app;
