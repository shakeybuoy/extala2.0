import Head from 'next/head'
import Footer from '../components/Footer'
import { useEffect } from 'react';
import Services from '../components/Services'

export default function Home() {

  return (
    <>
      <Head>
        <title>Extala</title>
        <link rel="shortcut icon" type="image/jpg" href="./Extala_Logo.JPG" />
        <link rel="icon" type="image/x-icon" href="./favicon.png" />
        <meta property="og:title" content="Extala | Extend your management possibilities" />
        <meta name="author" content="Abhishek Sharma" />
        <meta name="description" content="'Extend your management possibilities'. Extala is a cloud solution provider . We help organizations achieve more from technology through Microsoft Power Platform and Microsoft Dynamics 365." />
        <meta name="keywords" content="CRM Website, SEO,Extala,Online CRM,CRM company,India CRM,USA CRM" />
      </Head>
      <nav className="navbar z-20 bg-one-primary fixed top-0 left-0 lg:px-20 drop-shadow-lg">
        <div className="navbar-start ">
          <img className="w-32 rounded-lg cursor-pointer" src="./extalaLogo.jpg" />
        </div>
      </nav>
      <header className="z-50 bg-one-primary absolute flex lg:flex-row flex-col justify-center items-center w-full min-h-screen">
        <div className="flex lg:h-screen lg:w-5/12 w-full lg:justify-between justify-center items-center z-20">
          <img src="./hero.jpg" className="lg:w-5/6 w-4/6 md:w-3/6 z-20" />
        </div>
        <div className="hero-lines bg-white rounded z-20 flex h-96 lg:h-[70vh] lg:w-5/12 w-10/12 justify-center items-center text-center">
          <p className="pb-6 lg:text-3xl lg:font-semibold z-20 italic text-xl capitalize">&quot; Extend your management possibilities &quot;</p>
        </div>
      </header>
      <div className="min-h-screen mb-20"></div>
      <section className="lg:mx-32 py-28 lg:px-10 lg:mb-0 mb-10 flex items-center p-2 ">
        <div className="container px-6 py-8 mx-auto">
          <div>
            <div className="flex mb-10 gap-x-5 items-center justify-center" >
              <div className="h-1 lg:w-2/6 w-1/6 bg-one-primary"></div>
              <h1 className="lg:text-6xl text-3xl md:text-5xl uppercase font-bold font-heading text-one-primary py-4 lg:text-left ">About Us
              </h1>
              <div className="h-1 lg:w-2/6 w-1/6 bg-one-primary"></div>
            </div>
          </div>
          <div className="items-center lg:justify-between gap-x-2 lg:flex ">
            <div>
              <p className="mt-4 lg:text-xl text-lg lg:max-w-lg text-justify">
                Extala is a<span className="font-bold text-one-primary capitalize"> cloud solution provider .</span> We help organizations achieve more from technology through Microsoft Power Platform and Microsoft Dynamics 365.
              </p>
              <p className="mt-4 lg:text-xl text-lg lg:max-w-lg text-justify">
                By collecting existing and potential customer data, CRM tools can access customers&apos; interaction histories and sales data. This enables CRM systems to identify the required services and products to improve sales processes. Overall, the software helps businesses understand their customers better.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-2/6 ">
              <div className="flex items-center justify-center">
                <div className="lg:max-w-lg md:w-4/6 w-5/6">
                  <img className="object-cover object-center w-full  rounded-lg" src="./2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:m-20 py-28 md:mx-5 lg:px-10 containerOne p-2 bg-one-primary rounded-lg ">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:justify-between lg:flex ">
            <div className="lg:w-6/6 w-full text-lg">
              <div className="flex items-center justify-center">
                <div className="h-1 lg:w-2/6 w-1/6 bg-white"></div>
                <h1 className="lg:text-6xl text-3xl md:text-5xl px-10 text-center uppercase font-bold font-heading text-white pb-6 lg:text-left ">Why us?
                </h1>
                <div className="h-1 lg:w-2/6 w-1/6 bg-white"></div>
              </div>
              <div className="lg:grid lg:mx-10 mt-20 gap-y-10 lg:space-y-0 space-y-10 lg:grid-cols-12 lg:grid-rows-3 text-white">
                <div className="flex lg:flex-row flex-col lg:col-span-6 lg:col-start-1 items-center justify-start mb-3 text-justify">
                  <svg className="lg:w-36 self-start" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path className="fill-white" d="M24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q27.75 4 31 5.2Q34.25 6.4 36.85 8.5L34.7 10.65Q32.5 8.9 29.8 7.95Q27.1 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 22.5 40.775 21.075Q40.55 19.65 40.1 18.3L42.4 16Q43.2 17.85 43.6 19.85Q44 21.85 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM21.05 33.1 12.8 24.8 15.05 22.55 21.05 28.55 41.75 7.85 44.05 10.1Z" />
                  </svg>
                  <h2 className="px-2 lg:px-0">Extala understands the capabilities and functional capacity of Microsoft Power Platform and Microsoft Dynamics 365 to its full extent.</h2>
                </div>
                <div className="flex lg:flex-row flex-col lg:col-span-6 lg:col-start-4 items-center justify-start mb-3 text-justify">
                  <svg className="lg:w-36 self-start" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path className="fill-white" d="M24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q27.75 4 31 5.2Q34.25 6.4 36.85 8.5L34.7 10.65Q32.5 8.9 29.8 7.95Q27.1 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 22.5 40.775 21.075Q40.55 19.65 40.1 18.3L42.4 16Q43.2 17.85 43.6 19.85Q44 21.85 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM21.05 33.1 12.8 24.8 15.05 22.55 21.05 28.55 41.75 7.85 44.05 10.1Z" /></svg>
                  <h2 className="px-2 lg:px-0">An experienced, committed and well equipped team which understands the platform and its applications well to deliver the best results.</h2>
                </div>
                <div className="flex lg:flex-row flex-col lg:col-span-6 lg:col-start-8 lg:row-start-3 items-center justify-start text-justify">
                  <svg className="lg:w-36 self-start" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path className="fill-white" d="M24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q27.75 4 31 5.2Q34.25 6.4 36.85 8.5L34.7 10.65Q32.5 8.9 29.8 7.95Q27.1 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 22.5 40.775 21.075Q40.55 19.65 40.1 18.3L42.4 16Q43.2 17.85 43.6 19.85Q44 21.85 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM21.05 33.1 12.8 24.8 15.05 22.55 21.05 28.55 41.75 7.85 44.05 10.1Z" /></svg>
                  <h2 className="px-2 lg:px-0">Training employees to give their best, Extala can also assists in training your employees as well. In order to provide a seamless transition of using the platform.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="lg:m-20 lg:px-10 py-28 md:mx-5 p-2 containerOne  bg-one-primary rounded-lg">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center gap-10 text-xl text-white ">
            <div className="flex items-center justify-center">
              <div className="h-1 lg:w-3/12 w-1/12 bg-white"></div>
              <h1 className="lg:text-6xl text-3xl md:text-5xl px-5 text-center uppercase font-bold font-heading text-white pb-6 lg:text-left ">Let&apos;s Talk!
              </h1>
              <div className="h-1 lg:w-3/12 w-1/12 bg-white"></div>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:my-20 justify-items-center items-center lg:grid-rows-2 gap-x-4 text-base">
              <div className="hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path className="fill-white" d="M39.75 42Q33.65 42 27.625 39Q21.6 36 16.8 31.2Q12 26.4 9 20.375Q6 14.35 6 8.25Q6 7.3 6.65 6.65Q7.3 6 8.25 6H15.25Q15.95 6 16.475 6.475Q17 6.95 17.15 7.75L18.5 14.05Q18.6 14.75 18.475 15.325Q18.35 15.9 17.95 16.3L12.95 21.35Q15.75 26 19.225 29.45Q22.7 32.9 27.1 35.3L31.85 30.4Q32.35 29.85 33 29.625Q33.65 29.4 34.3 29.55L40.25 30.85Q41 31 41.5 31.6Q42 32.2 42 33V39.75Q42 40.7 41.35 41.35Q40.7 42 39.75 42ZM11.45 18.6 15.5 14.5Q15.5 14.5 15.5 14.5Q15.5 14.5 15.5 14.5L14.35 9Q14.35 9 14.35 9Q14.35 9 14.35 9H9Q9 9 9 9Q9 9 9 9Q9 10.95 9.6 13.275Q10.2 15.6 11.45 18.6ZM39 39Q39 39 39 39Q39 39 39 39V33.65Q39 33.65 39 33.65Q39 33.65 39 33.65L33.85 32.6Q33.85 32.6 33.85 32.6Q33.85 32.6 33.85 32.6L29.9 36.75Q31.95 37.7 34.35 38.3Q36.75 38.9 39 39ZM29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75Q29.9 36.75 29.9 36.75ZM11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Q11.45 18.6 11.45 18.6Z" /></svg>
              </div>
              <div className="hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path className="fill-white" d="M24 33.1Q29.2 28.9 31.85 25.025Q34.5 21.15 34.5 17.8Q34.5 14.85 33.425 12.8Q32.35 10.75 30.775 9.45Q29.2 8.15 27.35 7.575Q25.5 7 24 7Q22.5 7 20.65 7.575Q18.8 8.15 17.225 9.45Q15.65 10.75 14.575 12.8Q13.5 14.85 13.5 17.8Q13.5 21.15 16.15 25.025Q18.8 28.9 24 33.1ZM24 36.9Q17.15 31.75 13.825 27.05Q10.5 22.35 10.5 17.8Q10.5 14.4 11.725 11.825Q12.95 9.25 14.9 7.5Q16.85 5.75 19.25 4.875Q21.65 4 24 4Q26.35 4 28.75 4.875Q31.15 5.75 33.1 7.5Q35.05 9.25 36.275 11.825Q37.5 14.4 37.5 17.8Q37.5 22.35 34.175 27.05Q30.85 31.75 24 36.9ZM24 21Q25.45 21 26.475 19.975Q27.5 18.95 27.5 17.5Q27.5 16.05 26.475 15.025Q25.45 14 24 14Q22.55 14 21.525 15.025Q20.5 16.05 20.5 17.5Q20.5 18.95 21.525 19.975Q22.55 21 24 21ZM10.5 44V41H37.5V44ZM24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Q24 17.8 24 17.8Z" /></svg>
              </div>
              <div className="hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path className="fill-white" d="M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V37Q44 38.2 43.1 39.1Q42.2 40 41 40ZM24 24.9 7 13.75V37Q7 37 7 37Q7 37 7 37H41Q41 37 41 37Q41 37 41 37V13.75ZM24 21.9 40.8 11H7.25ZM7 13.75V11V13.75V37Q7 37 7 37Q7 37 7 37Q7 37 7 37Q7 37 7 37Z" /></svg>
              </div>
              <div className="px-5 hidden lg:block py-2 self-start">
                <div className="border-y p-2">
                  <h2 className="font-bold text-lg">India</h2>
                  <h2 className="text-justify pt-1"><span className="font-bold pr-2">Tel - </span>+91 20 25881123 / 24</h2>
                  <h2 className="text-justify pt-1"><span className="font-bold pr-2">M - </span>+91 90110 08456</h2>
                </div>
                <div className="border-b mt-2 pb-2 px-2">
                  <h2 className="font-bold text-lg">USA</h2>
                  <h2 className="text-justify pt-1"><span className="font-bold pr-2">Tel - </span>+1 614-596-9988</h2>
                </div>
              </div>
              <div className="px-5 hidden lg:flex py-2 flex-col self-start">
                <div className="border-y p-2">
                  <h2 className="font-bold text-lg">India</h2>
                  <h2 className="text-justify">302, Varsha Avenue,  104, Anand Park,  Aundh Pune-411 007</h2>
                </div>
                <div className="border-b mt-2 pb-2 px-2">
                  <h2 className="font-bold text-lg">USA</h2>
                  <h2 className="text-justify pt-3 ">5900 Sawmill Road, Suite 200 Dublin, OH 43017-2588</h2>
                </div>
              </div>
              <div className="px-5 hidden lg:block py-2 self-start">
                <h2 className="text-justify text-lg pt-1 "><span className="font-bold pr-2">Email - </span> <a className="underline underline-offset-4" href="mailto:sales@extala.com">sales@extala.com</a> </h2>
              </div>
              <div className="px-5 lg:hidden py-2 self-start">
                <div className="border-y p-2">
                  <h2 className="font-bold text-lg">India</h2>
                  <h2 className="text-justify pt-1"><span className="font-bold pr-2">Tel - </span>+91 20 25881123 / 24</h2>
                  <h2 className="text-justify pt-1"><span className="font-bold pr-2">M - </span>+91 90110 08456</h2>
                  <h2 className="text-justify mt-2">302, Varsha Avenue,  104, Anand Park,  Aundh Pune-411 007</h2>
                </div>
                <div className="border-b p-2">
                  <h2 className="font-bold text-lg">USA</h2>
                  <h2 className="text-justify pt-1"><span className="font-bold pr-2">Tel - </span>+1 614-596-9988</h2>
                  <h2 className="text-justify mt-2">5900 Sawmill Road, Suite 200 Dublin, OH 43017-2588</h2>
                </div>
              </div>
              <div className="px-5 lg:hidden py-2 self-start">
                <h2 className="text-justify px-2 text-lg"><span className="font-bold px-1">Email - </span> <a className="underline underline-offset-4" href="mailto:sales@extala.com">sales@extala.com</a> </h2>
              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
