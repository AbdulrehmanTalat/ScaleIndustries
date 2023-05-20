import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2013' />
              <p className='desc-p'>At Scale Inc, we are driven by a strong work ethic and unwavering loyalty to our clients' vision of growth. With excellence, innovation, and a commitment to their success, we deliver customized solutions that align with their unique needs. We are catalysts for transformation, empowering our clients to focus on their core business while we handle their technology requirements. Together, let's unlock your business's true potential and achieve remarkable growth.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Successful cases</h3>
                </div>
                {/* <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div> */}
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At Scale Inc, we specialize in various areas of expertise, including web development, app development, and data science. Our team is dedicated to delivering high-quality solutions that cater to our clients' specific needs.

In the field of web development, we leverage modern technologies and frameworks to create responsive, user-friendly, and visually appealing websites. We are experienced in front-end development using HTML, CSS, and JavaScript, as well as back-end development using languages such as Python, Node.js, and PHP.

When it comes to app development, we excel in building robust and scalable applications for both mobile and desktop platforms. Whether it's iOS, Android, or cross-platform development, we employ industry best practices and cutting-edge tools to deliver feature-rich and intuitive applications.

In the realm of data science, we harness the power of data to derive valuable insights and drive informed decision-making. Our expertise includes data analysis, machine learning, and artificial intelligence. We use advanced algorithms and techniques to extract patterns, predict trends, and solve complex problems.

At Scale Inc, we are committed to staying at the forefront of technology trends, continuously learning and evolving to provide innovative solutions that exceed our clients' expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand /> */}
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
