import './index.css'

interface OurServicesProps {
    text_h1 : string,
    text_p : string,
    img : any

}

export function OurServices({text_h1, text_p, img}: OurServicesProps){
    return (
        <div className="">
            <div className="h-[40vh] w-[22vw] bg-[#0D0D0D] rounded-3xl ">
                <div className='flex items-center justify-center'>
                    <img src={img} alt="" className="" />
                </div>
            </div>

        <div className='flex flex-col gap-1.5 '>
            <h1 className='font-bold text-white text-3xl'>{text_h1}</h1>
            <p className='text-[#777777]'>{text_p}</p>
        </div>

        </div>
    );
}