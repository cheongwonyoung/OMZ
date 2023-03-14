import * as tmImage from "@teachablemachine/image";
import { useState } from "react";

export default function FaceAnalyze() {
  const URL = "https://teachablemachine.withgoogle.com/models/bhQALUaBi/";

  let model: any;

  const [loding, setLoding] = useState(false);
  async function getAnalysis() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    setLoding(true);
    model = await tmImage.load(modelURL, metadataURL);
    const image = document.getElementById("face-image");
    const prediction = await model.predict(image, false);
    setLoding(false);
    console.log(prediction);
  }
  if (loding) return <p>loading....</p>;
  return (
    <>
      <button onClick={getAnalysis}>분석</button>
    </>
  );
}
