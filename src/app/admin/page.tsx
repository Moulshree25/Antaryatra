export default function AdminPage() {
  const html = `
    <div style="padding:40px; font-family:sans-serif;">
      <h1 style="font-size:32px; margin-bottom:20px;">
        Admin Dashboard
      </h1>

      <div id="bookingsContainer">
        Loading bookings...
      </div>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", async function () {

        try {

          const res = await fetch("/api/admin/bookings");

          const result = await res.json();

          const bookings = result.bookings || result;

          const container = document.getElementById("bookingsContainer");

          if (!container) return;

          if (!bookings || bookings.length === 0) {
            container.innerHTML = "<p>No bookings found</p>";
            return;
          }

          container.innerHTML = bookings.map(function(b) {

            const practices = Array.isArray(b.practices)
              ? b.practices.join(", ")
              : (b.practices || "");

            return \`
              <div style="border:1px solid #ccc; padding:15px; margin-bottom:10px; border-radius:8px;">

                <p><strong>Name:</strong> \${b.name}</p>
                <p><strong>Email:</strong> \${b.email}</p>
                <p><strong>Phone:</strong> \${b.phone}</p>
                <p><strong>Mode:</strong> \${b.mode}</p>
                <p><strong>Goal:</strong> \${b.goal}</p>
                <p><strong>Practices:</strong> \${practices}</p>
                <p><strong>Notes:</strong> \${b.notes || ""}</p>

                <button
                  onclick="deleteBooking('\${b.id}')"
                  style="margin-top:10px; padding:8px 12px; background:red; color:white; border:none; border-radius:5px; cursor:pointer;">
                  Delete
                </button>

              </div>
            \`;

          }).join("");

        } catch (err) {

          console.error(err);

          const container = document.getElementById("bookingsContainer");

          if(container){
            container.innerHTML = "<p>Error loading bookings</p>";
          }

        }

      });

      async function deleteBooking(id){

        const res = await fetch("/api/admin/bookings/" + id, {
          method: "DELETE"
        });

        if(res.ok){
          location.reload();
        }

      }
    </script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}