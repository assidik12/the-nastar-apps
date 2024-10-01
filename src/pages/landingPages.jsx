import { Link } from "react-router-dom";
import ColorButtons from "../component/element/Button";

const LandingPages = () => {
  const listButton = [
    {
      link: "#",
      text: "Coklat",
      bg: "bg-[#8D5B5B]",
      width: "w-[50px]",
      height: "h-[50px]",
      fontSize: "text-[14px]",
      className: "font-permanentMarker px-4 py-2 text-white rounded-full",
    },
    {
      link: "#",
      text: "Kurma",
      bg: "bg-[#8D5B5B]",
      width: "w-[50px]",
      height: "h-[50px]",
      fontSize: "text-[14px]",
      className: "font-permanentMarker px-4 py-2 text-white rounded-full",
    },
  ];

  return (
    <div className="container bg-[#F5E7B2] py-4 flex flex-col items-center max-w-full max-h-full">
      <section className="bg-[#973131] py-4 w-[90%] h-3/4 rounded-md relative">
        <h1 className="font-permanentMarker text-white text-center my-4 text-2xl md:text-4xl lg:text-[100px] lg:my-10">
          NASTAR MAPEL
        </h1>
        <div className="flex flex-col w-full md:flex-row md:grid-cols-2 md:ml-4">
          <div className="px-2 lg:mt-7 lg:w-1/2">
            <img
              className="heroImage py-4 lg:w-[579px] lg:h-[386px]"
              src="src/assets/Image/hero.jpeg"
              alt="nastar"
            />
          </div>
          <div className="desc flex flex-col px-4 mx-4 mt-4 w-[70%] md:w-[90%] gap-2">
            <h2 className="font-roboto text-white text-[16px] font-bold md:text-[25px] lg:text-[39px] lg:mt-6">
              Kami Menjual Berbagai Rasa Nastar
            </h2>
            <p className="text-white font-roboto text-[12px] font-normal md:text-[18px] lg:text-[20px]">
              Rasakan kelembutan sempurna dan cita rasa istimewa di setiap
              gigitan. Kami menggunakan bahan-bahan terbaik untuk memberikan
              pengalaman yang berbeda di setiap kotaknya.
            </p>
            <button className="bg-[#E3C8C8] shadow-md border-2 border-black shadow-black flex items-center justify-center w-[150px] mt-6 px-4 rounded-lg md:py-2 lg:w-[312px] lg:h-[83px] lg:mt-16 transition-colors duration-300 hover:bg-[#f7dcdc]">
              <Link
                to="#"
                className="text-slate-900 font-permanentMarker text-[14px] lg:text-[32px] font-bold lg:rounded-xl"
              >
                Beli Sekarang
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="flex mt-10 px-4 w-full">
        <div className="leftSection w-1/2">
          <h1 className="font-permanentMarker text-[#973131] my-4 text-xl md:text-4xl lg:text-[96px]">
            VARIAN RASA YANG TERSEDIA
          </h1>
          <p className="font-roboto hidden my-4 text-[10px] md:text-xl lg:text-[32px] md:flex">
            Kami Memiliki berbagai Jenis varian rasa Seperti Cokelat,
            Strawberry, keju, Nanas dan juga Apel
          </p>
          <div className="listButton flex gap-4 w-full flex-wrap bg-slate-200">
            {listButton.map((item, index) => (
              <ColorButtons
                key={index}
                link={item.link}
                text={item.text}
                bg={item.bg}
                width={item.width}
                height={item.height}
                fontSize={item.fontSize}
                className={item.className}
              />
            ))}
          </div>
        </div>
        <div className="rightSection w-1/2">
          <div>
            <img className="transform" src="src/assets/Image/blob.svg" alt="" />
            <img
              className="transform -translate-y-40"
              src="src/assets/Image/nastar2.png"
              alt="natar"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPages;
