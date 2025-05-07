"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const companies = [
    {
        "name": "atlassian",
        "path": "/companies/atlas.png",
        "id": 1
    },
    {
      "name": "google",
      "path": "/companies/google.png",
      "id": 2
    },
    {
      "name": "meta",
      "path": "/companies/meta.png",
      "id": 3
    },
    {
      "name": "microsoft",
      "path": "/companies/micro.png",
      "id": 4
    },
    {
      "name": "netflix",
      "path": "/companies/netflix.png",
      "id": 5
    },
    {
        "name": "amazon",
        "path": "/companies/amazon.png",
        "id": 6
    },
    
]
const CompanyCarousel = () => {
  return (
    <Carousel className="w-full py-20"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
        <CarouselContent className="flex items-center gap-10 ">
            {companies.map((company) => {
                return (
                    <CarouselItem className="basis-1/3 lg:basis-1/4" key={company.id}>
                        <Image src={company.path} alt={company.name} width={100} height={100} className='h-9 w-auto object-contain' />
                    </CarouselItem>
                )
            })}
        </CarouselContent>
    </Carousel>
  )
}

export default CompanyCarousel