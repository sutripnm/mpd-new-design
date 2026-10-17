function ZiswafCard({ ziswaf, isOpen, onToggle   }) {

  return (
    <article className={isOpen ? "w-full max-w-[800px]" : "w-80"}>
            <div className="relative flex items-center justify-center bg-bg-1 rounded-2xl px-3 py-3
                            transition-all duration-500 ease-in-out
                            w-full">
              <div className=" flex flex-col lg:flex-row items-center justify-center gap-3 pr-8">
                <img 
                  className="h-17 w-22"
                  src={ziswaf.image} alt="foto sedekah" />
                <h2 className="font-bold text-xl text-text-soft">{ziswaf.title}</h2>
                {isOpen && (
                  <div className="flex">
                    <p className="border-l-2 px-2 text-justify italic">
                      {ziswaf.quote}
                    </p>
                    <p className="border-l-2 px-2 text-justify">
                      {ziswaf.description}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                <button 
                  className="bg-primary text-white h-6 w-10 flex items-center justify-center"
                  onClick={() => onToggle(ziswaf.id)}
                  >
                  {isOpen ? ("❮") : ("❯") }
                </button>
              </div>
            </div>
    </article>
  )
}

export default ZiswafCard;