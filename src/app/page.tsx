<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";

export default function Page() {
  return (
    <div>
      Homepage
    </div>
  );
=======
"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/ui.html")
      .then((res) => res.text())
      .then((data) => setHtml(data));
  }, []);

  if (!html) return null;

  return (
    <iframe
      srcDoc={html}
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
    />
  );
>>>>>>> 079308fbca239f400196663a535f4b6d2f619020
}