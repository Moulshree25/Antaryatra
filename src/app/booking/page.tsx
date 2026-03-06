"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {

const router = useRouter();

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
mode:"Online",
goal:"",
practices:[],
notes:""
});

const togglePractice = (practice:string)=>{
setForm(prev=>{
const exists = prev.practices.includes(practice)

return{
...prev,
practices: exists
? prev.practices.filter(p=>p!==practice)
:[...prev.practices,practice]
}
})
}

const handleSubmit = async (e:any)=>{
e.preventDefault()

const res = await fetch("/api/booking",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
})

if(res.ok){
router.push("/booking/success")
}else{
alert("Something went wrong. Please try again.")
}
}

return (

<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f8f7f6]">

{/* HERO */}

<div className="gradient-bg py-16 text-center">

<h2 className="text-5xl font-serif font-bold text-slate-900">
Antaryatra with Arti
</h2>

<p className="text-lg text-slate-800 mt-4 max-w-2xl mx-auto">
Your journey towards inner peace and wellness starts here. Please fill in the details below to customize your healing experience.
</p>

</div>


{/* FORM CONTAINER */}

<div className="max-w-[800px] mx-auto px-6 -mt-10 mb-20">

<div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border">

<form onSubmit={handleSubmit} className="space-y-12">


{/* PERSONAL INFO */}

<section className="space-y-6">

<h3 className="text-2xl font-serif font-bold">
1. Personal Information
</h3>

<div className="grid md:grid-cols-2 gap-6">

<input
className="rounded-xl border p-3"
placeholder="e.g. Jane Doe"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
className="rounded-xl border p-3"
placeholder="jane@example.com"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
className="rounded-xl border p-3"
placeholder="+1 (555) 000-0000"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<select
className="rounded-xl border p-3"
onChange={(e)=>setForm({...form,mode:e.target.value})}
>

<option>Online</option>
<option>Offline</option>

</select>

</div>

</section>


{/* WELLNESS GOAL */}

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
onClick={()=>setForm({...form,goal})}
className={`px-5 py-2.5 rounded-full border font-semibold transition ${
form.goal===goal
? "bg-[#ec9213] text-white"
:"border-gray-300"
}`}
>

{goal}

</button>

))}

</div>

</section>



{/* PRACTICE */}

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
className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer"
>

<input
type="checkbox"
onChange={()=>togglePractice(practice)}
/>

<span className="text-sm font-medium">
{practice}
</span>

</label>

))}

</div>

</section>



{/* CHAKRAS */}

<section className="space-y-4">

<h3 className="text-2xl font-serif font-bold">
4. Chakra Focus
</h3>

<div className="space-y-3 text-sm">

<div className="flex justify-between p-4 rounded-xl bg-red-50">
<span>Root (Muladhara)</span>
<span>Grounding & Stability</span>
</div>

<div className="flex justify-between p-4 rounded-xl bg-orange-50">
<span>Sacral (Svadhisthana)</span>
<span>Creativity & Emotion</span>
</div>

<div className="flex justify-between p-4 rounded-xl bg-yellow-50">
<span>Solar Plexus (Manipura)</span>
<span>Confidence & Power</span>
</div>

<div className="flex justify-between p-4 rounded-xl bg-green-50">
<span>Heart (Anahata)</span>
<span>Healing & Love</span>
</div>

<div className="flex justify-between p-4 rounded-xl bg-blue-50">
<span>Throat (Vishuddha)</span>
<span>Communication</span>
</div>

<div className="flex justify-between p-4 rounded-xl bg-indigo-50">
<span>Third Eye (Ajna)</span>
<span>Intuition</span>
</div>

<div className="flex justify-between p-4 rounded-xl bg-purple-50">
<span>Crown (Sahasrara)</span>
<span>Spirituality</span>
</div>

</div>

</section>



{/* NOTES */}

<section className="space-y-4">

<h3 className="text-2xl font-serif font-bold">
5. Additional Notes
</h3>

<textarea
className="w-full rounded-xl border p-4"
rows={4}
placeholder="Please describe any health concerns..."
onChange={(e)=>setForm({...form,notes:e.target.value})}
/>

</section>



{/* SUBMIT */}

<button
type="submit"
className="w-full text-white font-bold py-5 rounded-2xl text-xl"
style={{
background:"linear-gradient(90deg,#ec9213 0%,#f4a261 100%)"
}}
>

Submit Booking Request

</button>


</form>

</div>

</div>

</div>

)

}