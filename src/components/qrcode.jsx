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
            <QRCode style={{ width: 50,height: 50, paddingLeft : 10}} value={JSON.stringify(data)} />
        </div>
    )
}

export default qrcode