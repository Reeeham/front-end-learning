import React from "react";
import popularDestinations from "./data/popularDestinations";
import DestinationCard from "./components/DestinationCard";


export default function App() {
    return (
        <div>
            <div class="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
                <div class="px-8 py-12 space-y-6 max-w-md mx-auto xl:mr-0  sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2 ">
                    <div class="xl:max-w-xl">
                        <img class="h-10" src="img/logo-brand.svg" alt="workcation" />
                        <img class=" rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                            src="img/beach-work.jpg" alt="women workcation on the beach" />
                        <h1 class="font-headline tracking-tight text-2xl font-semibold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">You can work
                        from anywhere.
                    <br class="hidden lg:inline" />
                            <span class="text-brand"> Take advantage of it</span>
                        </h1>
                        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl"> Workcation helps you find work-friendly rentals in
                    beautiful locations so you can enjoy some nice weather even when you're not on vacation.</p>
                        <div class="mt-4 space-x-1 sm:mt-6">
                            <a href="#" class="btn btn-primary hover:-translate-y-0.5 transform transition">Book your escape</a>
                            <a href="#" class="btn btn-secondary">Learn more</a>

                        </div>
                    </div>
                </div>

                <div class=" relative hidden lg:block 2xl:col-span-3">
                    <img class="absolute inset-0 w-full h-full object-cover object-center" src="img/beach-work.jpg"
                        alt="women workcation on the beach" />
                </div>

            </div>
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
                <h2 className="text-xl text-gray-900">Popular destinations</h2>
                <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {popularDestinations.map((destination) => (
                        <DestinationCard destination={destination} key={destination.city} />
                    ))}
                </div>
            </div>
        </div>
    )
}