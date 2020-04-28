const calculateFacePosition = (getData) => {
  const clarifaiFace =
    getData.outputs[0].data.regions[0].region_info.bounding_box;
  const clarifaiAge = getData.outputs[0].data.regions[0].data.concepts[0].name;
  const clarifaiProbability = Math.floor(
    getData.outputs[0].data.regions[0].data.concepts[0].value * 100
  );
  const image = document.getElementById('faceRecognition-image');
  const width = Number(image.width);
  const height = Number(image.height);

  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - clarifaiFace.right_col * width,
    bottomRow: height - clarifaiFace.bottom_row * height,
    age: clarifaiAge,
    probability: clarifaiProbability,
    isCalculated: true,
  };
};

export default calculateFacePosition;
