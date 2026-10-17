function WakafCard({ wakaf, openWakaf, handleToggle}) {
  return (
    <article className="flex items-center justify-center my-5">
      <section className="flex flex-col lg:flex-row items-center justify-center px-3">
        <div 
          className="flex flex-col items-center justify-center cover-image bg-secondary rounded-2xl
                      h-[850px] w-[400px] px-5">
          <img src={wakaf.cover} alt="" />
          <div className="flex flex-col items-center justify-center">

            <h2>{wakaf.title}</h2>
            <p className="text-justify">{wakaf.description}</p>
          </div>


          {openWakaf && (
            <div>
              <p>{wakaf.bank}</p>
              <p>{wakaf.accountNumber}</p>
              <p>{wakaf.accountName}</p>
              <img src={wakaf.image} alt="" />
            </div>
          )}
          <div>
            <button 
            className="bg-primary rounded-2xl h-10 w-38"
            onClick={() => handleToggle(wakaf.id)}
            >
              {openWakaf ? ("Barakallah Fiikum") : ("Salurkan Ziswaf")}
            </button>
          </div>
        </div>
      </section>
    </article>
  )
}

export default WakafCard;