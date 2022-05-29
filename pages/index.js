import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import { Form } from "../components/kontakt-form";
import { motion } from "framer-motion";
import Nyhedsbrev from "../components/nyhedsbrev";
export default function Home() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Head>
          <title>Primusweb - hjemmesider til overkommelige priser</title>
        </Head>
        <section className="h-screen w-screen flex justify-center flex-col items-center">
          <h1 className="text-5xl lg:text-8xl font-black uppercase text-center text-white px-10 mb-2">
            HJEMMESIDER MED GARANTI
          </h1>
          <h2 className="text-white px-4 font-200 text-center mb-10 text-lg">
            Leder du efter hjemmesider til overkommelige priser? Så er vi de
            rette. Vi i PrimusWeb stiller garanti for alt det vi laver og giver
            derfor fuld refundering hvis du er utilfreds med vores produkt.
          </h2>
          <Link href="/#kontakt">
            <div className="cursor-pointer rounded-md px-4 py-2 lg:px-10 lg:text-2xl lg:py-4 uppercase bg-blue-600 font-black text-white">
              Kontakt os
            </div>
          </Link>
        </section>
        <section className="mb-40 w-full flex flex-col lg:flex-row items-start px-4">
          <div className="w-full lg:w-1/2 relative h-1/3 overflow-hidden lg:h-full lg:order-2">
            <Image
              src="/step-1.jpg"
              width="1080"
              height="720"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="w-full flex flex-col mt-10 lg:w-1/2 lg:order-1 lg:m-auto lg:p-4">
            <h2 className="text-4xl lg:text-6xl font-black uppercase text-transparent text-white mb-5">
              Hvem er vi?
            </h2>
            <p className="text-lg mb-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              orci odio, tincidunt vitae scelerisque varius, mollis nec mas
              Integer et nisl et libero dignissim aliqua. Donec ut arcu
              tristique nulla mattis sollicitudin.
            </p>
            <Link href="/om-os">
              <div className="cursor-pointer rounded-md px-4 py-2 lg:px-10 lg:text-2xl lg:py-4 uppercase bg-blue-600 font-black text-white w-auto text-center max-w-[10rem] lg:max-w-[15rem]">
                Læs mere
              </div>
            </Link>
          </div>
        </section>
        <section className="gap-x-8 px-8 w-screen flex flex-col lg:px-4 mt-1/2 text-center lg:grid grid-cols-2 grid-rows-2 mb-40">
          <h2 className="col-span-2 text-4xl lg:text-6xl font-black lg:self-end uppercase text-white ">
            Vores services
          </h2>
          <div className="lg:h-4/5 lg:w-3/5 lg:mx-auto self-center lg:after:left-0 row-start-2 mt-4 lg:mt-0 w-full flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl px-4 py-8">
            <h4 className="text-2xl lg:text-3xl ">Online visitkort</h4>
            <h5 className="relative text-xl lg:text-xl">
              Når du skal gå online
            </h5>
            <p className="text-center mt-4">
              Hvis du gerne vil gøre din virksomhed synlig på nettet og samtidig
              fortælle om din virksomhed, så er kontaktsiden det perfekte til
              dig.
            </p>
          </div>
          <div className="lg:h-4/5 lg:w-3/5 self-center lg:mx-auto row-start-2 mt-8 lg:mt-0 w-full flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl px-4 py-8">
            <h4 className="text-2xl lg:text-3xl">Ecommerce site</h4>
            <h5 className="relative text-xl lg:text-xl">
              Til den lille virksomhed
            </h5>
            <p className="text-center mt-4">
              En online butik til dig, der vil have en elegant online præsens,
              men stadig have fuld kontrol over siden ved overdragelse.
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col items-center lg:max-w-3xl lg:mx-auto text-white px-2 overlay">
          <div className="flex w-full flex-col lg:flex-row h-1/4 mb-10 lg:mb-0 p-2 lg:p-0 lg:shadow-none shadow-2xl">
            <div className="flex flex-col justify-center">
              <span className="font-medium">Step 1</span>
              <h3 className="font-black mb-4 text-2xl">Introduktions møde</h3>
              <p className="mb-2">
                Vi gennemgår, hvad der skal være på hjemmesiden sammen med dig,
                så vi er sikker på, at du får en hjemmeside som DU ønsker det.
                Dette er bl.a. farvevalg, fonttyper, sidetal, tekst og ellers
                andet du ønsker til siden.
              </p>
            </div>
            <div className="h-1/3 w-full">
              <Image
                src="/step-1.jpg"
                width="1000"
                height="1000"
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row h-1/4 mb-10 lg:mb-0 p-2 lg:p-0 lg:shadow-none shadow-2xl">
            <div className="flex flex-col justify-center">
              <span className="font-medium">Step 2</span>
              <h3 className="font-black mb-4 text-2xl">Udkast og revidering</h3>
              <p className="mb-2">
                Vi kommer med det første udkast til siden og gennemgår
                eventuelle rettelser. Siden gennemgås indtil du er HELT tilfreds
                med, hvad du betaler for.
              </p>
            </div>
            <div className="h-1/3 w-full order-1">
              <Image
                src="/step-2.jpg"
                width="1080"
                height="720"
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row h-1/4 mb-10 lg:mb-0 p-2 lg:p-0 lg:shadow-none shadow-2xl">
            <div className="flex flex-col justify-center">
              <span className="font-medium">Step 3</span>
              <h3 className="font-black mb-4 text-2xl">Overdragelse</h3>
              <p className="mb-2">
                Nu er hjemmesiden helt færdig og din. Der er ingen binding,
                intet abonnement, ingen hemmelige gebyrer. Prisen er den vi
                fortæller dig i starten.
              </p>
            </div>
            <div className="h-1/3 w-full">
              <Image
                src="/step-3.webp"
                width="1080"
                height="720"
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center text-white px-2">
          <Image
            src="/contact.jpg"
            width="1080"
            height="720"
            objectFit="cover"
            layout="responsive"
          />
          <Image
            src="/contact.jpg"
            width="1080"
            height="720"
            objectFit="cover"
            layout="responsive"
          />
        </section>
        <section>
          <h2 className="col-span-2 text-4xl text-center mb-4 lg:text-6xl font-black self-center uppercase text-transparent text-white">
            Kontakt os
          </h2>
          <Form />
        </section>
        <Nyhedsbrev />
      </motion.div>
    </>
  );
}
