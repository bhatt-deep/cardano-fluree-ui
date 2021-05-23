import React from 'react'
import QRCode from 'qrcode.react'

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

const qrcode = (props) => {
  console.log(props.data)
    return (
        <div style={styles.qrcode}>
            <QRCode style={{ width: 100,height: 120, paddingLeft : 10}} value={JSON.stringify(props.data)} />
        </div>
    )
}

export default qrcode
