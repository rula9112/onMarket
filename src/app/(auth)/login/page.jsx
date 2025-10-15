import SigninForm from "@/components/Signin";

export default function login() {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
              <div className="flex flex-col justify-center items-center h-full select-none">
                  <div className="flex flex-col items-center justify-center gap-2 mb-8">
                      <a href="https://amethgalarcio.web.app/" target="_blank">
                          <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" className="w-8" />
                      </a>
                      <p className="m-0 text-[16px] font-semibold dark:text-white">Login to your Account</p>
                      <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">To complete your purchases and benefit from our offers, please login
                      </span>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                      <label className="font-semibold text-xs text-gray-400 ">Username</label>
                      <input className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="Username" />
  
                  </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold text-xs text-gray-400 ">Password</label>
                  <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="••••••••" />
  
              </div>
              <div classNameName="mt-5">
                  <button className="btn btn-orange w-full cursor-pointer select-none">Login</button>
              </div>
          </div>
      </div>
  </div>
    
        );
  }