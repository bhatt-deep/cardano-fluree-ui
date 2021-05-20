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

const qrcode = () => {
    return (
        <div style={styles.qrcode}>
            <QRCode style={{ width: 200 ,height: 200 }} value={JSON.stringify(data)} />
        </div>
    )
}

export default qrcode
