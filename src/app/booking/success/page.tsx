import fs from "fs"
import path from "path"

export default function SuccessPage() {

  const filePath = path.join(
    process.cwd(),
    "src/app/booking/success/success-ui.html"
  )

  const html = fs.readFileSync(filePath, "utf8")

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}