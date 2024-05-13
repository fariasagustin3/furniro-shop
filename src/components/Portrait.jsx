const Portrait = ({ page }) => {
  return (
    <div className="relative w-screen h-full">
      <img src="/portrait-image.png" alt="" className="w-full h-full object-cover" />
      <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-full h-full">
        <div className="flex flex-col gap-3 items-center justify-center w-full h-full">
          <span className="font-semibold text-3xl">{page}</span>
          <div className="flex items-center gap-1">
            <span className="font-normal">Home</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span className="font-semibold">{page}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portrait