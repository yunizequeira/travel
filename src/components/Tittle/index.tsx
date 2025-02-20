import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","700"],
})
const Tittle = ({tittle,subtittle,center}:{tittle:string,subtittle:string,center?:boolean}) => {
  return (
    <div>
        <p className={center ? `text-center text-slate-500 text-base font-semibold uppercase ${poppins.className}` :`text-slate-500 text-base font-semibold uppercase ${poppins.className}`}>{subtittle}</p>
      <h2 className={center ? 'text-center text-[2.35rem] text-blue-950 font-bold capitalize lg:text-5xl' :'text-[2.35rem] lg:text-5xl text-blue-950 font-bold capitalize'}>{tittle}</h2>
    </div>
  )
}

export default Tittle
