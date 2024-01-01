import Spreadsheet from "./components/table"
import Link
 from "next/link"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='align-center text-red-700 justify-center text-xl font-bold'>PERSEVERENCE</h1>
      <button className="mr-auto ml-8 rounded bg-indigo-600 text-white">
        <Link href="/table">
        View
        </Link>
       
        </button>
    </main>
  )
}
