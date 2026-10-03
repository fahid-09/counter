const Qrcoderesult = (
    {
        qrImage
    }:{
        qrImage: string
    }
)=>{
    return (<>
     <p>Your QR Code will appear here</p>

                        {qrImage && (
                            <div>
                                <img src={qrImage} alt="Generated QR Code" />

                                <a href={qrImage} download="qrcode.png">
                                    Download QR Code
                                </a>
                            </div>
                        )}
    </>)
}

export default Qrcoderesult;