// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[500px]' src={assets.store} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quae hic eligendi tenetur asperiores, doloremque dolorem nisi consequuntur ut ipsam id ullam est mollitia nam. Fuga animi consequatur nam ipsum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam officiis sapiente consequuntur velit similique esse veritatis perferendis cumque dolorem iste. Iusto sit doloribus labore sint facilis quaerat quas eligendi voluptatum.</p>
          <b className='tesx-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id consequatur aspernatur facere dolore officia accusamus, ipsam nulla illum alias corrupti sapiente eaque ipsa similique, quidem temporibus tempora cumque inventore odit!</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} /> 
      </div>     

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-8 md:px-16 py-4 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt hic alias aut earum neque sapiente ut laborum veritatis aliquid, qui nostrum. Atque dolorem vel mollitia repellendus reprehenderit, alias ipsum.</p>
        </div>
        <div className='border px-10 md:px-16 py-4 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam distinctio neque ad delectus. Sint id tempore explicabo distinctio dolorem eveniet? Ea placeat voluptatibus odit, autem laboriosam commodi? Ratione, porro minus?</p>
        </div>
        <div className='border px-10 md:px-16 py-4 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customeer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, cum. Nam ullam quidem eveniet labore quas. Reprehenderit dolorum asperiores consequatur quia quaerat mollitia quibusdam nam, voluptas laudantium doloremque distinctio. Ut?</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
