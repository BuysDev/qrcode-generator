import React, { useState } from 'react'
import QRCode from 'qrcode'
import { qrCodeOptions } from './constants/index'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const [qrCode, setQrCode] = useState()

  const [url, setUrl] = useState<string>()

  

  const generate = (e: React.FormEvent) => {
    e.preventDefault()
    if (url) {
      QRCode.toDataURL(url, qrCodeOptions, (err: any, newURL: any) => {
        if (err) return console.error(err)
        setQrCode(newURL)
      })
    } else {
      return alert('Please enter a valid URL')
    }
  }

  return (
    <div className='items-center justify-center flex flex-col h-screen w-full'>
      <form className='flex flex-row w-[300px]'>
        <Input className={`text-white input ${qrCode && 'rounded-bl-none'}`} onChange={(e) => setUrl(e.target.value)} type={'text'} />
        <Button className={`button text-white ${qrCode && 'rounded-br-none'}`} variant={'outline'} onClick={generate}>
          <h1 className='text-bold text-lg'>Submit</h1>
        </Button>
      </form>
      <div className='qr'>
        {qrCode && <img src={qrCode} alt="QR Code" className='rounded-bl-md rounded-br-md' />}
      </div>
    </div>
  )
}

export default App