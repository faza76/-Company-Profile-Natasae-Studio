const Footer = () => {
  return (
        <footer className="bg-neutral-950">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="items-center justify-center flex">
                            <iframe className="w-full md:w-auto" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.0317310881008!2d107.67085524287766!3d-6.979345089168915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c30ae9785db1%3A0x56e2c91b07bed6f6!2sNatasae%20Studio%20Desain%20Arsitektur%26Interior!5e0!3m2!1sen!2sid!4v1724472262687!5m2!1sen!2sid">
                            </iframe>
                    </div>
                    <div className="md:mx-8 md:mt-0 my-4 ">
                        <h2 className="mb-2 text-sm font-semibold text-white">Natasae Studio</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="https://flowbite.com/" className="hover:underline">Bentang artha residence, Blok p22, Bojongsoang, Kab Bandung</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Telp: +6281111119572 </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Email: </a>
                                </li>
                            </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="/about" className="hover:underline">Tentang</a>
                                </li>
                                <li>
                                    <a href="/portfolio" className="hover:underline">Portofolio</a>
                                </li>
                                <li>
                                    <a href="/work-phase" className="hover:underline whitespace-nowrap">Tahapan Kerja</a>
                                </li>
                                <li>
                                    <a href="/blog" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.natasaestudio.com/" className="hover:underline">Natasae Studio</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 2 20 20">
                            <path fill="currentColor"  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">Twitter page</span>
                    </a>


                    
                    
                </div>
            </div>
            </div>
        </footer>

  )
}

export default Footer