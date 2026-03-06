"use client"
import { useState } from "react"

export default function BookingPage() {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  mode: "",
  goal: "",
  practices: [],
  notes: ""
})

const handleChange = (e:any) => {

  const { name, value } = e.target

  setFormData({
    ...formData,
    [name]: value
  })

}
const handleSubmit = async (e:any) => {

  e.preventDefault()

  const res = await fetch("/api/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })

  if(res.ok){
    window.location.href = "/booking/success"
  }

}
  return (

    <div className="min-h-screen bg-[#f8f7f6]">

      <div className="gradient-bg py-16 text-center">
        <h1 className="text-4xl font-serif">
          Antaryatra with Arti
        </h1>

        <p className="mt-4 text-gray-600">
          Your journey towards inner peace begins here.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto -mt-10 mb-20 p-8 bg-white rounded-2xl shadow-xl">

        <form onSubmit={handleSubmit}>

        <div className="space-y-6">

<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
className="w-full border p-3 rounded"
/>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
className="w-full border p-3 rounded"
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
onChange={handleChange}
className="w-full border p-3 rounded"
/>

<textarea
name="notes"
placeholder="Additional Notes"
onChange={handleChange}
className="w-full border p-3 rounded"
/>

<button
type="submit"
className="w-full bg-orange-500 text-white py-3 rounded"
>
Submit Booking Request
</button>

</div>

        </form>

      </div>

    </div>

  )
}