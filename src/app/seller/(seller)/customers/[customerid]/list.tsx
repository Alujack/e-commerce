
export default function List() {
    return (
        <>
            <div className="ml-[5%] flex items-center justify-between gap-5 mr-[15%] mt-[20px]">
                <div className="w-[30%] flex justify-between gap-5 self-start ">
                    <p className="self-end ">
                        #12345
                    </p>
                </div>
                <div className="flex w-full justify-between gap-5 self-end ">
                    <p className="self-start ">
                        May 5, 4:20 PM
                    </p>
                    <p className="self-start text-[#9e9a1f] p-[3px]">
                        pending
                    </p>
                    <p className="self-start ">
                        100$
                    </p>
                </div>
            </div>
        </>)
}