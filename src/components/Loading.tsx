import React from "react";
import { LineWave } from "react-loader-spinner";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <LineWave
        height="100"
        width="100"
        color="#DCE6F9"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor="#CD4055"
        lastLineColor="#444358"
      />
    </div>
  );
};

export default Loading;
