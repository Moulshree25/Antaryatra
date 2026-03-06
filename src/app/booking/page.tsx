"use client"

import { useState } from "react"

export default function BookingPage(){

const [formData,setFormData]=useState({
name:"",
email:"",
phone:"",
mode:"Online",
goal:"",
practices:[] as string[],
notes:""
})

const handleChange=(e:any)=>{
const{name,value}=e.target
setFormData({...formData,[name]:value})
}

const selectMode=(mode:string)=>{
setFormData({...formData,mode})
}

const selectGoal=(goal:string)=>{
setFormData({...formData,goal})
}

const togglePractice=(practice:string)=>{

if(formData.practices.includes(practice)){

setFormData({
...formData,
practices:formData.practices.filter(p=>p!==practice)
})

}else{

setFormData({
...formData,
practices:[...formData.practices,practice]
})

}

}

const handleSubmit=async(e:any)=>{

e.preventDefault()

const res=await fetch("/api/booking",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
})

if(res.ok){

window.location.href="/booking/success"

}else{

alert("Booking failed")

}

}

return(

<div className="relative flex min-h-screen flex-col bg-background-light">

{/* HERO */}

<div className="gradient-bg py-16 px-6 text-center">

<h2 className="text-4xl md:text-5xl font-serif">
Antaryatra with Arti
</h2>

<p className="text-lg mt-4 max-w-2xl mx-auto">
Your journey towards inner peace and wellness starts here. 
Please fill in the details below to customize your healing experience.
</p>

</div>

{/* FORM */}

<div className="max-w-[800px] mx-auto px-6 -mt-10 mb-20">

<div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">

<form onSubmit={handleSubmit} className="space-y-12">

{/* PERSONAL */}

<section className="space-y-6">

<h3 className="text-2xl font-serif font-bold">
1. Personal Information
</h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<input
name="name"
placeholder="Full Name"
onChange={handleChange}
className="border rounded-xl p-3"
/>

<input
name="email"
type="email"
placeholder="Email Address"
onChange={handleChange}
className="border rounded-xl p-3"
/>

<input
name="phone"
placeholder="Phone Number"
onChange={handleChange}
className="border rounded-xl p-3"
/>

<div className="flex bg-slate-100 p-1 rounded-xl">

<button
type="button"
onClick={()=>selectMode("Online")}
className={`flex-1 p-2 rounded-lg font-bold ${
formData.mode==="Online"?"bg-white shadow":"text-gray-500"
}`}
>
Online
</button>

<button
type="button"
onClick={()=>selectMode("Offline")}
className={`flex-1 p-2 rounded-lg font-bold ${
formData.mode==="Offline"?"bg-white shadow":"text-gray-500"
}`}
>
Offline
</button>

</div>

</div>

</section>

{/* GOAL */}

<section className="space-y-6">

<h3 className="text-2xl font-serif font-bold">
2. Wellness Goal
</h3>

<div className="flex flex-wrap gap-3">

{[
"Stress Relief",
"Anxiety",
"Body Pain",
"Better Sleep",
"Focus & Clarity"
].map(goal=>(

<button
type="button"
key={goal}
onClick={()=>selectGoal(goal)}
className={`px-5 py-2 rounded-full border font-semibold
${formData.goal===goal
?"bg-primary text-white"
:"border-slate-200 text-slate-600"}
`}
>

{goal}

</button>

))}

</div>

</section>

{/* PRACTICES */}

<section className="space-y-6">

<h3 className="text-2xl font-serif font-bold">
3. Practice Preference
</h3>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

{[
"Yoga",
"Meditation",
"Breathwork",
"Mudra Therapy",
"Mantra Chanting",
"Ayurveda"
].map(practice=>(

<label
key={practice}
className={`p-4 border rounded-xl cursor-pointer
${formData.practices.includes(practice)
?"border-primary bg-primary/5"
:"border-slate-200"}
`}
>

<input
type="checkbox"
checked={formData.practices.includes(practice)}
onChange={()=>togglePractice(practice)}
className="mr-2"
/>

{practice}

</label>

))}

</div>

</section>

{/* NOTES */}

<section className="space-y-4">

<h3 className="text-2xl font-serif font-bold">
4. Additional Notes
</h3>

<textarea
name="notes"
rows={4}
placeholder="Please describe any health concerns..."
onChange={handleChange}
className="w-full border rounded-xl p-4"
/>

</section>

<button
type="submit"
className="w-full orange-gradient text-white font-bold py-5 rounded-2xl text-xl"
>

Submit Booking Request

</button>

</form>

</div>

</div>

</div>

)

}