import Image from "next/image";
import logo from './../../../img/FullLogo_Transparent.png'

export default function Footer(){
    return(
        
<footer className="bg-white dark:bg-gray-900">
<div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
<div className="sm:flex sm:items-center sm:justify-between">



</div>

<div
className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800"
>
<div className="text-teal-600 dark:text-teal-300 flex items-center">
 <Image src={logo} alt="Logo" width={100} height={100} />
</div>
<div>
<p className="font-medium text-gray-900 dark:text-white">Services</p>

<ul className="mt-6 space-y-4 text-sm">
  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      1on1 Coaching
    </a>
  </li>

  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      Company Review
    </a>
  </li>

  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      Accounts Review
    </a>
  </li>

  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      HR Consulting
    </a>
  </li>

  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      SEO Optimisation
    </a>
  </li>
</ul>
</div>

<div>
<p className="font-medium text-gray-900 dark:text-white">Company</p>

<ul className="mt-6 space-y-4 text-sm">
  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      About
    </a>
  </li>

  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      Meet the Team
    </a>
  </li>

  <li>
    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
      Accounts Review
    </a>
  </li>
</ul>
</div>


<div>
<p className="font-medium  mb-4 text-gray-900 dark:text-white ">Social media</p>

<ul className="mt-8 flex md:justify-start gap-6 sm:mt-0 sm:justify-end">
  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
    >
      <span className="sr-only">Facebook</span>

      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
    >
      <span className="sr-only">Instagram</span>

      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
    >
      <span className="sr-only">GitHub</span>

      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
         <path fill-rule="evenodd" d="M23,11.9972 C23,15.0688707 22.7080514,16.9571365 22.0247481,18.1281724 C21.3347709,19.3777602 20.5269977,19.7708297 18.8782989,19.8862992 C17.7148693,19.9542414 14.794638,20 12.0026667,20 C9.2044172,20 6.28275714,19.9542562 5.10860514,19.8855427 C3.47493151,19.7708031 2.66701263,19.37838 1.97791182,18.142374 C1.29279472,16.9480084 1,15.052042 1,12.0084 C1,8.94737365 1.29138368,7.06090428 1.97193166,5.86259947 C2.67010997,4.61046509 3.49111627,4.21325835 5.11100471,4.1184917 C6.23144506,4.04250638 8.99660854,4 12.0026667,4 C15.002263,4 17.766208,4.04252223 18.8782989,4.11790083 C20.5073007,4.21303163 21.3281267,4.60936303 22.020213,5.8580297 C22.7108012,7.06048454 23,8.93778123 23,11.9972 Z M20.283329,6.84963647 C19.9603324,6.26505017 19.7713697,6.17346202 18.752413,6.11391338 C17.6926261,6.04212137 14.954737,6 12.0026667,6 C9.04424331,6 6.3050775,6.04210674 5.2370951,6.1144916 C4.22844212,6.17352647 4.03674592,6.26627 3.71489655,6.84342165 C3.2475376,7.66638709 3,9.26898917 3,11.9972 C3,14.7270394 3.24886149,16.33852 3.71873501,17.1577995 C4.03565111,17.7261665 4.22600958,17.8186276 5.23703026,17.8897046 C6.34874254,17.9546989 9.24212825,18 12.0026667,18 C14.7569983,18 17.6489264,17.9546849 18.7500936,17.8904464 C19.7737637,17.8187098 19.961409,17.7274 20.2855157,17.1409953 C20.752236,16.3407623 21,14.7382734 21,12.0084 C21,9.25771396 20.7535449,7.66399511 20.283329,6.84963647 Z M10,9 L15,12 L10,15 L10,9 Z"/>
      </svg>
      
    </a>
  </li>

  <li>
    <a
      href="#"
      rel="noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
    >
      <span className="sr-only">whatsapp</span>

      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
       <path d='M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z'/><path d='M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z'/>
      </svg>
    </a>
  </li>
</ul>
</div>
</div>

<p className="text-xs text-gray-500 dark:text-gray-400">
&copy; 2025 Company Name. All rights reserved.
</p>
</div>
</footer>
    )
}