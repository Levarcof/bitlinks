"use client"
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'

import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [Generate, setGenerate] = useState("")


  const generate = () => {
    const myheadres = new Headers()
    myheadres.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    })
    // redirect: "follow" का मतलब है कि जब आप fetch का उपयोग करके कोई HTTP अनुरोध करते हैं, और यदि सर्वर उस अनुरोध को एक नई लोकेशन (URL) पर रीडायरेक्ट करता है, तो fetch API उस रीडायरेक्शन को ऑटोमैटिकली फॉलो करेगा।
    const requestOption = {
      method: "POST",
      headers: myheadres,
      body: raw,
      redirect: "follow"

    }

    fetch("/api/generate", requestOption)
      .then((response) => response.json())
      .then((result)=>
      {
        setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        setUrl("")
        setShorturl("")
        console.log(result)
        alert(result.message)
      })

  }
  return (
    <>
      <div className='flex flex-col gap-3 mx-auto max-w-lg bg-purple-100 p-8  my-16 '>
        <h1 className='text-2xl font-bold text-center'>Generate your Short URLs</h1>
        <div className='flex flex-col gap-3'>
          <input onChange={e => setUrl(e.target.value)} className=' focus:outline-purple-600 bg-purple-200  rounded-full p-2' type="text" placeholder='Enter your URL' />
          <input onChange={e => setShorturl(e.target.value)} className='focus:outline-purple-600 bg-purple-200   rounded-full p-2' type="text" placeholder='Enter your perferred short URL text' />
        </div>
        <button onClick={generate} className='w-full hover:bg-purple-500 bg-purple-700 text-white p-2 py-3 rounded-full shadow-lg font-bold text-lg'>Generate</button>
        {Generate &&  <div>
          <h1 className='text-xl font-bold'>Your Link :</h1>
          <div>
            <Link  href={Generate} >{Generate}</Link>
          </div>
          </div>}
      </div>

     

    </>
  )
}

export default page
