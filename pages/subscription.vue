<template>
    <div class="bg-white">
        <NavigationBar />
        <div class="bg-white">       
          <main>
            <!-- Pricing section -->
            <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
              <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-base font-semibold leading-7 text-indigo-600">Pricing</h1>
                <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing plans for teams of&nbsp;all&nbsp;sizes</p>
              </div>
              <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
              <div class="mt-16 flex justify-center">
                <fieldset aria-label="Payment frequency">
                  <div class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
                    <!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
                    <label class="cursor-pointer rounded-full px-2.5 py-1">
                      <input type="radio" name="frequency" value="monthly" class="sr-only">
                      <span>Monthly</span>
                    </label>
                    <!-- Checked: "bg-indigo-600 text-white", Not Checked: "text-gray-500" -->
                    <label class="cursor-pointer rounded-full px-2.5 py-1">
                      <input type="radio" name="frequency" value="annually" class="sr-only">
                      <span>Annually</span>
                    </label>
                  </div>
                </fieldset>
              </div>
              <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                <div class="rounded-3xl p-8 ring-1 ring-gray-200">
                  <h2 id="tier-hobby" class="text-lg font-semibold leading-8 text-gray-900">Basic Individual Coaching</h2>
                  <p class="mt-4 text-sm leading-6 text-gray-600">The essentials to provide your best work for clients.</p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <!-- Price, update based on frequency toggle state -->
                    <span class="text-3xl font-bold tracking-tight text-gray-900">₦39,999</span>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <span class="text-sm font-semibold leading-6 text-gray-600">/bi-monthly</span>
                  </p>
                  <a href.native="#" @click="proceedToPay('39999')" aria-describedby="tier-hobby" class="mt-6 cursor-pointer block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
                  <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      5 products
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Up to 1,000 subscribers
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Basic analytics
                    </li>
                  </ul>
                </div>
                <div class="rounded-3xl p-8 ring-1 ring-gray-200">
                  <h2 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">Basic Group Coaching</h2>
                  <p class="mt-4 text-sm leading-6 text-gray-600">The essentials to provide your best work for clients.</p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <!-- Price, update based on frequency toggle state -->
                    <span class="text-3xl font-bold tracking-tight text-gray-900">₦139,999</span>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <span class="text-sm font-semibold leading-6 text-gray-600">/bi-monthly</span>
                  </p>
                  <a @click="proceedToPay('139999')" aria-describedby="tier-freelancer" class="mt-6 block cursor-pointer rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
                  <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      5 products
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Up to 1,000 subscribers
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Basic analytics
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      48-hour support response time
                    </li>
                  </ul>
                </div>
                <div class="rounded-3xl p-8 ring-2 ring-indigo-600">
                  <h2 id="tier-startup" class="text-lg font-semibold leading-8 text-indigo-600">Premium Individual Coaching</h2>
                  <p class="mt-4 text-sm leading-6 text-gray-600">A plan that scales with your rapidly growing business.</p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <!-- Price, update based on frequency toggle state -->
                    <span class="text-3xl font-bold tracking-tight text-gray-900">₦99,999</span>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <span class="text-sm font-semibold leading-6 text-gray-600">/bi-monthly</span>
                  </p>
                  <a href.native="#" @click="proceedToPay('99999')" aria-describedby="tier-startup" class="mt-6 cursor-pointer block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
                  <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      25 products
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Up to 10,000 subscribers
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Advanced analytics
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      24-hour support response time
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Marketing automations
                    </li>
                  </ul>
                </div>
                <div class="rounded-3xl p-8 ring-1 ring-gray-200">
                  <h2 id="tier-enterprise" class="text-lg font-semibold leading-8 text-gray-900">Premium Group Coaching</h2>
                  <p class="mt-4 text-sm leading-6 text-gray-600">Dedicated support and infrastructure for your company.</p>
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <!-- Price, update based on frequency toggle state -->
                    <span class="text-3xl font-bold tracking-tight text-gray-900">₦369,999</span>
                    <!-- Payment frequency, update based on frequency toggle state -->
                    <span class="text-sm font-semibold leading-6 text-gray-600">/bi-monthly</span>
                  </p>
                  <a href.native="#" @click="proceedToPay('369999')"  aria-describedby="tier-enterprise" class="mt-6 cursor-pointer block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy plan</a>
                  <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Unlimited products
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Unlimited subscribers
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Advanced analytics
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      1-hour, dedicated support response time
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Marketing automations
                    </li>
                    <li class="flex gap-x-3">
                      <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                      </svg>
                      Custom reporting tools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        
            <!-- Logo cloud -->
            <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
              <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48">
                <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48">
                <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48">
              </div>
              <div class="mt-16 flex justify-center">
                <p class="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
                  <span class="hidden md:inline">Transistor saves up to $40,000 per year, per employee by working with us.</span>
                  <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span> See our case study <span aria-hidden="true">&rarr;</span></a>
                </p>
              </div>
            </div>
        
            <!-- Testimonial section -->
            <div class="mx-auto mt-24 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
              <div class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
                <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0" src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="">
                <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
                <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                  <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                </div>
                <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl" aria-hidden="true">
                  <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                </div>
                <div class="relative mx-auto max-w-2xl lg:mx-0">
                  <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="">
                  <figure>
                    <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                      <p>“You’ve always been beautiful. Now you’re just deciding to be healthier, fitter, faster and stronger!”</p>
                    </blockquote>
                    <figcaption class="mt-6 text-base text-white">
                      <div class="font-semibold">Dr Adaeze</div>
                      <div class="mt-1">CEO of Stress Free Weight Loss.</div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
        
            <!-- FAQ section -->
            <frequently-asked-questions></frequently-asked-questions>
          </main>
        
          <!-- Footer -->
          <footer-section></footer-section>
        </div>
        
        <!-- <main class="">
            <div class="isolate overflow-hidden">
                <div class="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
                        <div class="relative z-10">
                            <h1 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                                Simple pricing, no commitment</h1>
                            <p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">Lorem ipsum
                                dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
                                molestiae voluptatum quos odit doloribus.</p>
                            <div class="mt-16 flex justify-center">
                                <fieldset
                                    class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                                    <legend class="sr-only">Payment frequency</legend>
                                    <label :class="[subscriptionDuration === 'monthly' ? 'bg-indigo-500' : '']"
                                        class="cursor-pointer rounded-full px-2.5 py-1">
                                        <input type="radio" v-model="subscriptionDuration" name="frequency"
                                            value="monthly" class="sr-only">
                                        <span>Monthly</span>
                                    </label>
                                    <label :class="[subscriptionDuration === 'annually' ? 'bg-indigo-500' : '']"
                                        class="cursor-pointer rounded-full px-2.5 py-1">
                                        <input type="radio" v-model="subscriptionDuration" name="frequency"
                                            value="annually" class="sr-only">
                                        <span>Annually</span>
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                        <div
                            class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                            <svg viewBox="0 0 1208 1024" aria-hidden="true"
                                class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                                <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604"
                                    ry="512" />
                                <defs>
                                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                                        <stop stop-color="#7775D6" />
                                        <stop offset="1" stop-color="#E935C1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <div class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                                aria-hidden="true"></div>
                            <div
                                class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 id="tier-starter" class="text-sm font-semibold leading-6 text-white">BASIC
                                        COACHING PLAN</h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <p class="text-4xl font-bold tracking-tight text-white">65,000</p>
                                            <div class="text-sm leading-5">
                                                <p class="text-white">NGN</p>
                                                <p class="text-gray-400">Billed monthly</p>
                                            </div>
                                        </div>
                                        <p class="text-gray-400">Promo price: 40k for a 2-month (60 days) coaching
                                            period.
                                        </p>
                                        <label for="Toggle1"
                                            class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span>Group</span>
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div
                                                    class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400">
                                                </div>
                                                <div
                                                    class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                                </div>
                                            </span>
                                            <span>Individual</span>
                                        </label>

                                        <button href="#" aria-describedby="tier-starter" @click="proceedToPay('65000')"
                                            class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white">Buy
                                            this plan</button>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white">
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Group coaching registration @ 20k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Group Weekly reviews @ 5k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Online support group @ 10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Monthly Health Consultation @ 10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Review of all meals posted during coaching period @10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Review of exercise activities posted during coaching period @ 10k per
                                                month
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="relative rounded-2xl z-10 bg-white shadow-xl ring-1 ring-gray-900/10">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 id="tier-scale" class="text-sm font-semibold leading-6 text-gray-900">
                                        STANDARD COACHING PLAN</h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <p class="text-4xl font-bold tracking-tight text-gray-900">160,000</p>
                                            <div class="text-sm leading-5">
                                                <p class="text-gray-900">NGN</p>
                                                <p class="text-gray-500">Billed monthly</p>
                                            </div>
                                        </div>
                                        <p class="text-gray-400">Promo price: 40k for a 2-month (60 days) coaching
                                            period.
                                        </p>
                                        <label for="StandardPlan"
                                            class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                                            <span>Group</span>
                                            <span class="relative">
                                                <input id="StandardPlan" type="checkbox" class="hidden peer">
                                                <div
                                                    class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400">
                                                </div>
                                                <div
                                                    class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                                </div>
                                            </span>
                                            <span>Individual</span>
                                        </label>
                                        <button href="#" aria-describedby="tier-scale" @click="proceedToPay('5000')"
                                            class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600">Buy
                                            this plan</button>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600">
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Individual coaching registration @ 60k month per
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Monthly Health Consultation @ 10k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Daily review of all meals posted during coaching period @60k per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Daily review of all exercise activities posted during coaching period @
                                                30k per month
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 id="tier-growth" class="text-sm font-semibold leading-6 text-white">PREMIUM
                                        COACHING PLAN
                                    </h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <p class="text-4xl font-bold tracking-tight text-white">350,000</p>
                                            <div class="text-sm leading-5">
                                                <p class="text-white">NGN</p>
                                                <p class="text-gray-400">Billed monthly</p>
                                            </div>
                                        </div>
                                        <p class="text-gray-400">Promo price: 40k for a 2-month (60 days) coaching
                                            period.
                                        </p>
                                        <label for="premiumPlan"
                                            class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span>Group</span>
                                            <span class="relative">
                                                <input id="premiumPlan" type="checkbox" class="hidden peer">
                                                <div
                                                    class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400">
                                                </div>
                                                <div
                                                    class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800">
                                                </div>
                                            </span>
                                            <span>Individual</span>
                                        </label>
                                        <a href="#" aria-describedby="tier-growth"
                                            class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white">Buy
                                            this plan</a>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white">
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Dietician consultation and personalized meal plan @ 40k per plan.
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Individualised exercise coaching @ per month.
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Group exercise coaching @ per month
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Meal planning consultation 30k per hour
                                            </li>
                                            <li class="flex gap-x-3 py-2">
                                                <svg class="h-6 w-5 flex-none text-gray-500" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                Shopping consultation 30k per hour
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main> -->
    </div>

</template>

<script setup lang="ts">
import { useFlutterwaveSDK } from '@/composables/payment/flutterwave'
const { handlePayment, paymentForm, setAmount } = useFlutterwaveSDK()

const proceedToPay = (amount: number) => {
    console.log(amount, 'amount here')
    setAmount(amount)
    handlePayment()
}

const planType = ref('basic-group')


const subscriptionDuration = ref('monthly')

const groupCoaching = (amount: number) => {
    setAmount(amount)
    handlePayment()
}
const maxHeight = ref(0)
const openId = ref(null)
const toggle = (id: any) => {
    openId.value = openId.value === id ? null : id
    // Adjust maxHeight to fit your content or calculate dynamically
    maxHeight.value = openId.value ? 200 : 0 // Example static height
}
const isOpen = (id: any) => {
    return openId.value === id
}
const isClose = (id: any) => {
    return openId.value !== id
}
</script>