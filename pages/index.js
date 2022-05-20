import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content'


export default function Home() {
  return (
    <>
      <Head>
        <title>Extala</title>
        <meta name="description" content="CRM website" />
        <link rel="shortcut icon" type="image/jpg" href="./favicon.png" />
      </Head>
      <Navbar />
      <div className="hero min-h-screen " >
        <div className="hero-content text-center md:text-left flex flex-col justify-center items-center md:flex-row-reverse md:gap-x-32">
          <img src="./1.png" className="md:max-w-xl px-5 rounded-lg " />
          <div>
            <h1 className="md:text-5xl text-4xl text-one-primary font-bold">Extala</h1>
            <p className="py-6 md:text-xl text-lg">Extend your possibilities of managing and analysing interactions </p>
            <button className="btn text-white bg-one-primary duration-500 border-one-primary hover:bg-comp hover:text-gray-800 hover:border-comp drop-shadow-md ">Get Started</button>
          </div>
        </div>
      </div>
      <section className="lg:mx-32 lg:px-10 md:p-5 p-2 bg-comp bg-opacity-80 rounded-lg ">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center  lg:justify-between lg:flex ">
            <div>
              <h1 className="text-4xl font-bold text-center text-one-primary mb-10 lg:text-left">About Us</h1>
              <p className="mt-4 md:text-xl text-lg italic lg:max-w-lg text-justify">
                Extala is a<span className="font-bold text-one-primary capitalize"> cloud solution provider .</span> We help organizations achieve more from technology through Microsoft Power Platform and Microsoft Dynamics 365.
              </p>
              <p className="mt-4 md:text-xl text-lg lg:max-w-lg text-justify">
                By collecting existing and potential customer data, CRM tools can access customers&apos; interaction histories and sales data. This enables CRM systems to identify the required services and products to improve sales processes. Overall, the software helps businesses understand their customers better.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img className="object-cover object-center w-full  rounded-md" src="./2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 lg:mx-32 lg:p-10 md:p-5 p-2 rounded-lg ">
        <div className="container px-6 py-8">
          <div className="items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-center text-one-primary capitalize mb-20 lg:text-left">our services</h1>
            </div>
            <div className="md:grid lg:grid-cols-3 md:gap-x-20 md:gap-y-5 text-gray-900">
              <div className="h-64 px-5 bg-white lg:col-span-1  md:col-span-3 md:col-start-1 rounded-lg shadow-lg mb-5 md:mb-0 flex flex-col items-center justify-center text-center">
                <img className="object-cover object-center w-full rounded-md" src="./3.png" />
                <h2 className="text-center text-lg font-semibold capitalize">Digital Transformation using Microsoft D365</h2>
              </div>
              <div className="h-64 px-5 bg-white lg:col-span-1 lg:row-span-3 md:col-span-3 md:col-start-2 rounded-lg shadow-lg mb-5 md:mb-0 flex flex-col items-center justify-center text-center">
                <img className="object-cover object-center rounded-md w-3/6" src="https://www.firstdigital.co.uk/wp-content/uploads/2021/04/bl2-1-1355x1020.jpg" />
                <h2 className="text-center text-lg font-semibold capitalize">Microsoft Power Platform</h2>
              </div>
              <div className="h-64 px-5 bg-white lg:col-span-1  md:col-span-3 md:col-start-1 col-start-2 rounded-lg shadow-lg mb-5 md:mb-0 flex flex-col items-center justify-center text-center">
                <img className="object-cover object-center rounded-md w-3/6" src="./4.svg" />
                <h2 className="text-center text-lg font-semibold mt-5 capitalize">E-Commerce</h2>
              </div>

              <div className="h-64 px-5 bg-white lg:col-span-1  md:col-span-3 md:col-start-2  rounded-lg col-start-1 shadow-lg mb-5 md:mb-0 flex flex-col items-center justify-center text-center">
                <img className="object-cover object-center rounded-md w-3/6" src="./5.svg" />
                <h2 className="text-center text-lg font-semibold mt-5 capitalize">Website Development</h2>
              </div>

              <div className="h-64 px-5 bg-white lg:col-span-1 md:col-span-3 md:col-start-1 lg:col-start-3 rounded-lg shadow-lg mb-5 md:mb-0 flex flex-col items-center justify-center text-center">
                <img className="object-cover object-center rounded-md w-3/6" src="./6.png" />
                <h2 className="text-center text-lg font-semibold mt-5 capitalize">Power BI and Azure AI</h2>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className=" lg:mx-32 w lg:px-10 md:p-5 p-2 rounded-lg ">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:justify-between lg:flex ">
            <div className="lg:w-3/6">
              <h1 className="text-4xl font-bold text-center text-[#FB3D28]  capitalize mb-10 lg:text-left">Why us?</h1>
              <ul class="list-disc px-4 text-lg lg:text-xl text-justify"><li class="mt-2">Extala understands the capabilities and functional capacity of Microsoft Power Platform and Microsoft Dynamics 365 to its full extent.</li><li class="mt-2">An experienced, committed and well equipped team which understands the platform and its applications well to deliver the best results.</li><li class="mt-2">Training employees to give their best, Extala can also assists in training your employees as well. In order to provide a seamless transition of using the platform.</li></ul>
            </div>
            <div class="divider lg:divider-horizontal"></div>
            <div className="mt-8 lg:w-3/6">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img src="../img1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mx-32 lg:my-20 lg:px-10 md:p-5 p-2 bg-comp bg-opacity-80 rounded-lg ">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center  lg:justify-between lg:flex ">
            <div>
              <h1 className="text-4xl font-bold text-center text-one-primary mb-10 lg:text-left">Contact Us</h1>
              <div className="text-xl py-10 text-gray-800"><h1 className="font-bold w-5/6">Corporate Headquarters</h1><h2 className="text-justify pt-3 w-5/6">302, Varsha Avenue,  104, Anand Park,  Aundh Pune-411 007</h2><h2 className="text-justify pt-1 w-5/6"><span className="font-bold pr-2">Telephone : </span>020 25881123/ 24</h2><h2 className="text-justify pt-1 w-5/6"><span className="font-bold pr-2">Email: </span><a className="decoration-[1px] underline underline-offset-4" href="mailto:Sales@extala.com">Sales@extala.com</a></h2></div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-2/3">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img className="object-cover object-center w-full rounded-md" src="./7.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}
