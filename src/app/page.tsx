import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css'

import Image from 'next/image'
import GroupImage from "./imgs/Group 35704.png"
import Person1 from "./imgs/person1.png"
import Person2 from "./imgs/person2.png"

import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
}) 
const GelatoLuxe = localFont({ src: "./fonts/Gelatoluxe.ttf" })


async function getDate(){
  return [
    {
      img: Person1,
      text: "\"I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt.\"",
      name: "John Smith",
      job: "Travel Blogger",
      stars: 5
    },

    {
      img: Person2,
      text: "\"I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt.\"",
      name: "John Smith",
      job: "Travel Blogger",
      stars: 4
    },

    {
      img: Person1,
      text: "\"I was looking for a unique travel experience, and I found it on Ithaka. I booked a private tour of the Pyramids with a local guide, and it was amazing! The guide was knowledgeable and passionate about Egypt.\"",
      name: "John Smith",
      job: "Travel Blogger",
      stars: 4
    }
  ]
}


export default async function Home() {
  const data = await getDate()
  return (
    <main className={styles.main}>
      <Image 
        src={GroupImage}
        loading="lazy"
        quality={100}
        className={styles.bgImg}
      />

      <div className={styles.testimonialsContainer}>
        <p 
          className={
            [
              styles.testimonialsHeader,
              poppins.className
            ].join(" ")
          }
        >
        Clients' Testimonials
        </p>

        <h1 className={
            [
              GelatoLuxe.className,
              styles.testimonialsTitle
            ].join(" ")
          }
        >
          Unforgettable Travel Experiences
        </h1>

        <div
          className={
            [
              "container",
              "row",
              styles.testimonialsRow,
              "g-3"
            ].join(" ")
          }
        >
          {
            data.map( (testimonial, index) => {
              return (
                <div className={!index ? "col-12 col-lg-4" : "col-lg-4 d-none d-lg-flex"}>
                  <div className={
                      [
                        styles.testimonialsCard
                      ].join(" ")
                    }

                    style={index%2!=0 ? {
                      background: "#FF785A 0% 0% no-repeat padding-box"
                    } : {}}
                  >
                    <Image 
                      src={testimonial.img}
                      loading="lazy"
                      quality={100}
                      className={styles.testimonialsImg}
                    />

                    <p className={styles.testimonialsText}
                      style={index%2!=0 ? {
                        color: "white"
                      } : {}}
                    >{testimonial.text}</p>
                    
                    <p className={styles.testimonialsName}
                      style={index%2!=0 ? {
                        color: "white"
                      } : {}}
                    >{testimonial.name}</p>
                    
                    <p className={styles.testimonialsJob}
                      style={index%2!=0 ? {
                        color: "white"
                      } : {}}
                    >{testimonial.job}</p>

                    <div className={styles.testimonialsStarContainer}>
                      { [...Array(testimonial.stars)].map( _ => {
                        return (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })
          }
          
        
        </div>       
      </div>

    </main>
  )
}
