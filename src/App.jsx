// import 'aframe';
// import 'aframe-particle-system-component';



//import {Entity, Scene} from 'aframe-react';
//import {ARnft} from '@webarkit/ar-nft'


function App() {

  return (
    <>

    <div className="arjs-loader">
      <div>Loading, please wait...</div>
    </div>

    {/* <Scene 
     vr-mode-ui="enabled: false;"
     renderer="antialias: true; alpha: true; precision: mediump;"
     embedded
     arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
    >

        <a-assets>
          <video
            src="/react.mp4"
            preload="auto"
            id="vid"
            // eslint-disable-next-line react/no-unknown-property
            response-type="arraybuffer"
            loop
            autoPlay
            
          ></video>
        </a-assets>


        <a-nft
          videohandler
          type="nft"
          url="/data/nft/img.fset"
          smooth="true"
          smoothount="10"
          smoothtolerance="0.01"
          smooththreshold="5"
        >
          <a-video src="#vid" rotation="-90 0 0" position="160 0 -170" width="170" height="340">
          </a-video>

        </a-nft>

        <Entity primitive="a-camera">
        </Entity>


    </Scene> */}

      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="antialias: true; alpha: true; precision: mediump;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-assets>
          <video
            src="/react.mp4"
            preload="auto"
            id="vid"
            // eslint-disable-next-line react/no-unknown-property
            response-type="arraybuffer"
            loop
            autoPlay
            
          ></video>
        </a-assets>
    
        <a-nft
          videohandler
          type="nft"
          url="/data/nft/img"
          smooth="true"
          smoothount="10"
          smoothtolerance="0.01"
          smooththreshold="5"
        >
          <a-video src="#vid" rotation="-90 0 0" position="160 0 -170" width="170" height="340">
          </a-video>

        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
      
    </>
  )
}

export default App
