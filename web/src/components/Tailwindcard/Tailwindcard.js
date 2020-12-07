
import logo from 'src/components/Navbar/shiptrustlogo.png'




const Tailwindcard = () => {
  return (
    <div>

 <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-1">
  <div class="relative py-0 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-1 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">

          <img src={logo} alt="Shiptrust" class="object-fill	  h-18sm:h-18 " />

        <div class="divide-y divide-gray-200">
          <div class="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>This is your current uploaded DP FMEA. DP FMEA's are the verbiage and tabulation that provide an overview of the various vessel systems redundancy.</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="green">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Easily manage the status of your FMEA

                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="green">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                 Instant feedback on open findings

                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="green">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">Get the Shiptrust stamped approval showing your vessel is compliant</p>
              </li>
            </ul>
            <p>A solution for marine data management</p>
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p>Want to try out ShipTrust?</p>
            <p>
              <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> see the roadmap &rarr; </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Tailwindcard
