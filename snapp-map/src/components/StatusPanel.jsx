import storeLogo from '../assets/logo.png';

function StatusPanel() {
  return (
    <div className="absolute bottom-0 w-full z-[1000] bg-white rounded-t-3xl shadow-[0px_0px_31px_0px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center"> 
      
        {/* 1. دستگیره (Drag Handle) */}
        <div className="w-10 h-1 bg-gray-300 rounded-full mb-6"></div>


        {/* 2. وضعیت سفارش */}
        <h1 className="text-right text-xl font-bold text-gray-800 mb-6">
            در انتظار تایید فروشگاه...
        </h1>


        {/*  3. نام فروشگاه  */}
        <div className="flex items-center w-full justify-start pb-4 mb-4">
            <img 
                src={storeLogo}
                alt="Store Logo" 
                className="h-5 flex-shrink-0 ml-3" 
            />
            <p className="text-gray-900 font-bold">آی تک</p>
        </div> 


        <div className="w-full pt-2"> 
            {/* الف) ساعت تحویل */}
            <div className="flex items-center mb-4">
                <p className="text-gray-500 text-sm">تحویل تا</p>
                <p className=" font-bold text-black">13:51</p>
            </div>

            {/* ب) آدرس مقصد */}

            <div className="flex items-start pb-4 ">
                <span className="text-teal-600 ml-3 mt-1 text-xl">📍</span>
                
                <div>
                    <span className="inline-block bg-green-600 text-white rounded-md px-2 py-0.5 mb-2"> 
                        <p className="font-semibold text-white text-sm px-1 py-0.5">محل کار</p>
                    </span>
                    
                    <p className="text-sm text-gray-500 leading-relaxed">
                        تهران، ونک، خ. ولیعصر، خ. عطار، م. عطار نیشابوری، ساختمان اعتصامی، پلاک 26، واحد 303
                    </p>
                </div>
            </div>
        </div>

        {/* 5. مراحل سفارش (Progress Steps) */}
        <div className="w-full flex justify-between items-start mt-4 mb-4 px-15">

            {/* مرحله ۱: تایید فروشگاه (Active) */}
            <div className="flex flex-col items-center">
                {/* دایره وضعیت */}
                <div className="w-4 h-4 rounded-full bg-teal-600 mb-1"></div>
                {/* متن راهنما */}
                <p className="text-xs font-semibold text-teal-600">تایید</p> 
            </div>

            {/* مرحله ۲: آماده سازی (Inactive) */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gray-300 mb-1"></div>
                <p className="text-xs text-gray-500">آماده‌سازی</p> 
            </div>

            {/* مرحله ۳: پیک در مسیر */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gray-300 mb-1"></div>
                <p className="text-xs text-gray-500">پیک در مسیر</p> 
            </div>

            {/* مرحله ۴: تحویل شده */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gray-300 mb-1"></div>
                <p className="text-xs text-gray-500">تحویل شده</p> 
            </div>

        </div>

        {/* 6. متن راهنمای وضعیت */}
        <p className="text-sm text-center text-gray-600 border-t pt-4">
            پس از تایید فروشگاه، فرآیند آماده سازی شروع می‌شود.
        </p>

      
    </div>
  );
}

export default StatusPanel;