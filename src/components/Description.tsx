const Description = () => {
    const ReloadPage = () => {
        window.location.reload();
    }

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col gap-[20px]'>
                <div>
                    <p className='uppercase text-[20px]'>
                        Transmedia
                    </p>
                    <p className='text-[18px]'> Narracja transmedialna</p>
                </div>
                <ol className='list-decimal'>
                    <li><div>
                        <p>
                            TEMAT: GYGŻYDŁO <br/>
                            Rozszerzenie projektu z pracowni Artbook o narrację transmedialną. <br/>
                            Stworzenie własnej miejskiej legendy / creepypasty popartej istnieniem w sieci. Na stronie w odpowiednim miejscu trzeba wpisywać hasła, które będą odblokowywały dostęp do kolejnych części historii i tworzonych do nich ilustracji. <br/>
                            Hasła będą pojawiały się na plakatach rozieszonych w przestrzeni publicznej oraz w postach na social mediach. Trzeba będzie je rozszyfrować. <br/>
                            Projekt zostanie podsumowany stworzeniem fizycznego artbooka w postaci katalogu / encyklopedii, gdzie linorytowe ilustracje będą opisane odpowiednimi historiami. <br/>

                        </p>
                    </div></li>
                    <li><div>
                        <p>
                            INSPIRACJE: "Systemy Interfejsów" - _9mother9horse9eyes, SCP Foundation</p>
                    </div></li>
                    <li><div>
                        <p>
                            RESEARCH: Promocje nowych albumów Twenty One Pilots, nowego sezonu Mr Robot, komentarze na Reddicie użytkownika 9mother9horse9eyes, Capture the Flag</p>
                    </div></li>
                    <li><div>
                        <p>
                            ŚRODKI WYRAZU: Posty w Social Mediach, Plakaty w mieście, Strona internetowa, Artbook</p>
                    </div></li>
                    <li><div>
                        <p>
                            NARZĘDZIA / OPROGRAMOWANIE: Strona www, Reddit, Facebook, X, Threads, TikTok</p>
                    </div></li>
                    <li><div>
                        <p>
                            FORMA PREZENTACJI PROJEKTU: Prezentacja dokumentująca poszczególne etapy projektu, artbook, strona internetowa</p>
                    </div></li>
                </ol>
                <div>
                    <button className='uppercase border p-[5px] hover:border-white hover:text-white' onClick={ReloadPage}>Back</button>
                </div>
            </div>
        </div>
    )
}
export default Description
