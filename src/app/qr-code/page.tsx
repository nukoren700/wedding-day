
export default function QRCodePage() {
    return (
      <div>
    <section className="bg-pink p-7 text-white text-center rounded-md">
          <h1 className="text-4xl font-bold font-darleston">QR CODE</h1>
    </section>
    <section className="flex flex-col lg:flex-row items-center justify-center gap-40 mt-10 px-4 text-center">
        {/* Text Section */}
      <div className="text-center">
        <h2 className="text-5xl lg:text-[80px] text-yellow-700 font-darleston mb-10">QR CODE</h2>
        <p className="text-3xl lg:text-6xl font-semibold text-rose-400 font-darleston mb-10 ">ThankYou so much</p>
      </div>

        {/* Image Section */}
      <div className="overflow-hidden shadow-lg w-72 h-120 lg:w-80 lg:h-120">
        <img src="/images/S__14131223.jpg" alt="qrcode" className="w-full h-full object-cover"/>
      </div>
      </section>
      </div>
    );
  }
  