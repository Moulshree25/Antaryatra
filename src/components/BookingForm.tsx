const handleSubmit = async (data: FormData) => {
  const res = await fetch("/api/booking", {
    method: "POST",
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (result.success) {
    alert("Booking Confirmed");
  }
};