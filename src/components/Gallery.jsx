import React from 'react'

const Gallery = () => {
    return (
        <>
            <section className="py-6 dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        <img className="object-cover w-full rounded-3xl dark:bg-gray-500 aspect-square" src="https://media.licdn.com/dms/image/D4D22AQE2yhHQrBpKgQ/feedshare-shrink_800/0/1680523198883?e=2147483647&v=beta&t=4Wxd0RF3D2HjbtXrH_14n5qsZsf06xsocnUqcmND98o" />
                        <img className="object-cover w-full rounded-3xl dark:bg-gray-500 aspect-square" src="https://media.licdn.com/dms/image/D4D22AQES7sGSe46nZA/feedshare-shrink_800/0/1703312907136?e=1706140800&v=beta&t=EmrqyyYzZ5jyhZVc3TwY1Xmay4eVr2PvHdKkrxpYV5k" />
                        <img className="object-cover w-full rounded-3xl dark:bg-gray-500 aspect-square" src="https://media.licdn.com/dms/image/D4E22AQFf7g4h78a2fA/feedshare-shrink_800/0/1699072648192?e=1706140800&v=beta&t=LHK1tm33nY596YEPrOtVxGLdD0rUdVDkKgMxHHCMmgg" />
                        <img className="object-cover w-full rounded-3xl dark:bg-gray-500 aspect-square" src="https://media.licdn.com/dms/image/sync/C561FAQG5NknnpSgRfw/feedshare-document-cover-images_800/0/1657719352946?e=1704103200&v=beta&t=8v7a3EL7DgONNASgc2zJ6mfPH-jdN4_rsGKOxGaXhaI" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery