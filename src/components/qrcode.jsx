import React from 'react'
import QRCode from 'react-qr-code'

const styles = {
    root: {
      fontFamily: 'sans-serif',
    },
    h1: {
      textAlign: 'center',
    },
    qrcode: {
      textAlign: 'center',
    },
  };


  export default function QrCode(props) {
    const hash = props.data.txhHash
    return (
        <div style={styles.qrcode}>
            <QRCode style={{ width: 100,height: 100, paddingLeft : 10}} value={"http://localhost:3000/explore/"+hash} />
        </div>
    )
}
