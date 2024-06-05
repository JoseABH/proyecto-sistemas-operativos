
export default function Spinner(){
    return(
        <div className='flex items-center justify-center h-screen'>
        <div className='relative flex w-64 animate-pulse gap-2 p-4'>
            <div className='flex-1'>
            <div className='mb-1 w-[90%] h-[90%] rounded-lg bg-slate-400 text-sm'></div>
            <div className="">
                <div className='mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg'></div>
                <div className='mb-1 h-5 w-[90%] rounded-lg bg-slate-400 text-sm'></div>
                <div className='mb-1 h-5 w-2/5 rounded-lg bg-slate-400 text-lg'></div>
                <div className='mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg'></div>
            </div>
            </div>
        </div>
    </div>
    )
}