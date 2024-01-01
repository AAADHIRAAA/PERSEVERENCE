import Spreadsheet from "./components/table"
import Link
 from "next/link"
export default function Home() {
  return (
  <>
      <div className='custom-heading' >PERSEVERENCE</div>
      <button className=" ml-8 w-30 px-2 py-1 rounded bg-indigo-600 text-white">
        <Link href="/table">
        View
        </Link>
       
        </button>
   </>
  )
}
