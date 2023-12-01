import { useEffect, useState } from 'react';
import { apiRedirectURL } from "./services/redirectURL"

//QR scanner
import { Html5QrcodeScanner } from "html5-qrcode"

function App() {

  // useEffect(() => {
  //   const fetchURL = async () => {
  //     const response = await apiRedirectURL();

  //     if (response?.status === 200) {
  //       window.location = response.data.RedirectURL
  //     }
  //   };
  //   fetchURL();
  // }, []);

  const [scanResult, setScanResult] = useState()

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("scannerReader", {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5
    })

    scanner.render(scanSuccess, scanError)
    function scanSuccess(result) {
      scanner.clear()
      setScanResult(result)
    }
    function scanError(err) {
      console.log(err, "scan err");
    }
  }, [])

  return (
    <>
      <h1>QR Code scanning:</h1>
      {scanResult
        ? <h1>{scanResult}</h1>
        : <div id='scannerReader'></div>}
    </>
  );
}

export default App;
