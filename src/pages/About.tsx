import NavbarWhite from "../components/NavbarWhite";


function About() {
  return (
    <div className="min-h-screen bg-white">
        <NavbarWhite />
        
        {/* Hero Image Section */}
        <section className="relative h-[500px]">
            <img 
            src="/images/about_hero.webp"
            alt="NIT Agartala Campus"
            className="w-full h-full object-cover"
            />
        </section>

        {/* About Us Section */}
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-5xl font-bold mb-16">
                ABOUT <span className="text-green-600">US</span>
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
                National Institute of Technology Agartala (NIT Agartala) is a premier institute of higher education in 
                India, renowned for its excellence in engineering, technology, and research. Established in 1965 as 
                Tripura Engineering College and later upgraded to NIT status in 2006, the institute has consistently 
                strived to provide world-class education, fostering innovation and academic brilliance. Located in the 
                serene surroundings of Agartala, the capital of Tripura, NIT Agartala offers a dynamic learning 
                environment with state-of-the-art infrastructure, cutting-edge laboratories, and a vibrant campus 
                culture. The institute offers undergraduate, postgraduate, and doctoral programs across various 
                disciplines, emphasizing a multidisciplinary approach to problem-solving and industry-oriented 
                learning. With a dedicated faculty, active research initiatives, and collaborations with leading industries 
                and institutions, NIT Agartala plays a vital role in advancing technological education and contributing to 
                the nation's growth. The institute actively encourages student engagement through technical clubs, 
                entrepreneurship initiatives, cultural fests, and sports activities, nurturing well-rounded professionals 
                equipped to tackle real-world challenges. As a hub of knowledge and innovation in the Northeast, NIT 
                Agartala continues to strengthen its position as a center of academic and industrial excellence, 
                empowering the next generation of engineers, researchers, and leaders.
            </p>
            </div>
        </section>

        {/* VIEW MORE & VIEW MAGAZINE SECTION */}
        <section className="py-16 bg-white border-t border-2 border-black">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center">
                    <div className="relative flex flex-col justify-between items-center w-[20%]">
                        <button className="w-full mb-5 bg-[#1B3129] border-2 border-[#1B3129] text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-[#264439] transition-colors">
                            VIEW MORE
                        </button>
                        <button className="bg-white w-full text-[#1B3129] border-2 border-[#1B3129] font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                            VIEW MAGAZINE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;