import React from 'react'
import QRCode from 'qrcode.react'
import data from '../data/data.json'

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
    return (
        <div style={styles.qrcode}>
            <QRCode style={{ width: 100,height: 120, paddingLeft : 10}} value={JSON.stringify(props.data)} />
        </div>
    )
}