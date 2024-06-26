'use client' // Error components must be Client Components

import Image from 'next/image'
import { useEffect } from 'react'
import ErrorTrooper from '@/public/images/error-trooper.jpeg'

export default function Error({ error, reset }) {
    useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    }, [error])

    return (
        <section className="min-h-screen text-center flex pt-12 bg-secondary">
          <div className="min-h-screen text-center mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
            <Image
              src={ErrorTrooper}
              alt='Error Trooper'
            />
            </figure>

            <div className="card-body">
              <h2 className="card-title font-bold">Something Went Wrong!
              <div className="badge badge-error">ERROR</div>

              </h2>
              <p className='text-error underline'>{error.message}</p>
              <div className="card-actions justify-center">
                <button
                  className='btn'
                  onClick={() => reset()}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
          </div>
          
        </section>
    )
}