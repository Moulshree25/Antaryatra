"use client";

export default function BookingTable({
  bookings,
  onDelete,
  onContact,
}: any) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mode</th>
          <th>Goal</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((b: any) => (
          <tr key={b.id}>
            <td>{b.name}</td>
            <td>{b.email}</td>
            <td>{b.mode}</td>
            <td>{b.goal}</td>
            <td>{b.contacted ? "Contacted" : "Pending"}</td>

            <td>
              <button onClick={() => onContact(b.id)}>✔</button>
              <button onClick={() => onDelete(b.id)}>❌</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}