export default function NotFound() {
  return (
    <div className="flex w-full h-[60vh] flex-col items-center gap-[378px] bg-white-a700 mt-[10%]">
      <div className="md-1 md:p-5">
        <div className="flex flex-col items-center gap-6 mb-[20px] ">
          <h1 className="text-6xl">This page could not be found!</h1>
        </div>
        <div className="ml-[298px] mr-[286px] self-stretch md:mx-0">
          <div className="flex flex-col items-center gap-6">
            <p className="loading-[30px]">
              We are sorry. But the page you are looking for is not available
              <br />
              perhaps you can try a new search
            </p>
            <div className="mr-3.5 flex self-stretch rounded-[28px] border border-solid border-black-900_c bg-white-a700 px-7 py-[18px] md:mr-0 sm:px-5">
              <p>Type Here......</p>
            </div>
            <div className="ml-[108px] mr-[122px] flex justify-between gap-5 selfstretch md:mx-0">
              <button className="min-w-[122px] gap-1.5 font-semibold sm:pr-5">
                Search
              </button>
              <button className="min-w-[122px] gap-1.5 font-semibold sm:pr-5">
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}