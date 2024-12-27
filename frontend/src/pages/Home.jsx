import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is SkillForge?",
      answer:
        "SkillForge is a platform that helps users learn DSA, master computer science concepts, design systems, and prepare for technical interviews.",
    },
    {
      question: "Is SkillForge free to use?",
      answer:
        "SkillForge offers both free and premium content. You can explore many features at no cost, while premium features require a subscription.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions provided.",
    },
    {
      question: "Can I contribute to SkillForge content?",
      answer:
        "Yes, we welcome contributions! You can reach out to us through the 'Contact' page to discuss how you can contribute.",
    },
    {
      question: "What topics are covered on SkillForge?",
      answer:
        "SkillForge covers a variety of topics, including Data Structures, Algorithms, System Design, Operating Systems, and Competitive Programming.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support through the 'Contact' page or by emailing support@skillforge.com.",
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleDSA = () => {
    navigate('/dsa-sheet');
  }

  return (
    <>
      {/* <div className='flex justify-center mt-10 border-2 border-gray-700 hover:border-blue-500 transition duration-500 rounded-3xl ml-24 mr-24 h-72 mb-36 items-center flex-col'>

        <h1 className='text-6xl text-white mb-4'>
          <span className="text-yellowColor">cout</span>
          <span className="text-purple-500"> &lt;&lt; </span>
          <span className="text-redColor font-medium">&quot;Just Code&quot;</span>
          <span className="text-purple-500"> &lt;&lt; </span>
          <span className="text-greenColor">endl;</span>
        </h1>


        <p className='text-2xl text-zinc-300'>
          Minimilist
          <span className="text-yellowColor"> Code</span> For Maximum
          <span className="text-redColor"> Result</span>
        </p>
      </div> */}

      <div>
        <h1 className="text-4xl flex justify-center mt-24">
          Get Ready for&nbsp;
          <strong className="text-red-600">Excellence</strong>
          &nbsp;: Your Ultimate Learning Platform!
        </h1>
        <p className="text-sm mt-5 flex justify-center text-zinc-500">
          Embark on Your Journey: Master DSA, Dive Deep into CS Concepts, Design Scalable Systems, Sharpen Competitive Skills, and Crack Interviews with Confidence!
        </p>
      </div>


      <div className="flex ml-48 gap-14 mt-24">

        <div className=" h-80 w-80 mt-10 rounded-2xl border-2 border-zinc-700 hover:border-zinc-200 transition duration-200">
          <div className='h-24 w-24 bg-zinc-800 rounded-2xl mt-5 ml-5 flex items-center justify-center'>
            <img className='w-14 h-14' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735226686/dsa_dorquu.png" alt="DSA image" />
          </div>
          <h1 className='mt-5 ml-5 text-xl'>Exclusive DSA Sheet</h1>
          <p className='mt-2 ml-5 text-sm text-zinc-500'>Boost your DSA with our exclusive cheetsheet</p>
          <button onClick={handleDSA} className='mt-5 ml-5 border-2 px-4 py-2 rounded-2xl'>Try it -&gt; </button>
        </div>

        <div className=" h-80 w-80 mt-10 rounded-2xl border-2 border-zinc-700 hover:border-zinc-200 transition duration-200">
          <div className='h-24 w-24 bg-zinc-800 rounded-2xl mt-5 ml-5 flex items-center justify-center'>
            <img className='h-14 w-14' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735226686/os_qkyuvj.png" alt="Operating System" />
          </div>
          <h1 className='mt-5 ml-5 text-xl'>Operating System</h1>
          <p className='mt-2 ml-5 text-sm text-zinc-500'>Learn the core of computing with our Operating System module</p>
          <button className='mt-5 ml-5 border-2 px-4 py-2 rounded-2xl'>Try it -&gt; </button>
        </div>


        <div className=" h-80 w-80 mt-10 rounded-2xl border-2 border-zinc-700 hover:border-zinc-200 transition duration-200">
          <div className='h-24 w-24 bg-zinc-800 rounded-2xl mt-5 ml-5 flex items-center justify-center'>
            <img className='h-14 w-14' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735226686/networks_fs6n4w.png" alt="Commputer Networks" />
          </div>
          <h1 className='mt-5 ml-5 text-xl'>Computer Networks</h1>
          <p className='mt-2 ml-5 text-sm text-zinc-500'>Explore connectivity with our Computer Networks guide.</p>
          <button className='mt-5 ml-5 border-2 px-4 py-2 rounded-2xl'>Try it -&gt; </button>
        </div>
      </div>


      <div className="flex ml-48 gap-14">

        <div className=" h-80 w-80 mt-10 rounded-2xl border-2 border-zinc-700 hover:border-zinc-200 transition duration-200">
          <div className='h-24 w-24 bg-zinc-800 rounded-2xl mt-5 ml-5 flex items-center justify-center'>
            <img className='h-14 w-14' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735226687/operational-system_xcwjmf.png" alt="System Design" />
          </div>
          <h1 className='mt-5 ml-5 text-xl'>System Design</h1>
          <p className='mt-2 ml-5 text-sm text-zinc-500'>Design scalable systems effortlessly.</p>
          <button className='mt-5 ml-5 border-2 px-4 py-2 rounded-2xl'>Try it -&gt; </button>
        </div>


        <div className=" h-80 w-80 mt-10 rounded-2xl border-2 border-zinc-700 hover:border-zinc-200 transition duration-200">
          <div className='h-24 w-24 bg-zinc-800 rounded-2xl mt-5 ml-5 flex items-center justify-center'>
            <img className='h-14 w-14' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735227719/database-storage_nb9rxk.png" alt="DBMS" />
          </div>
          <h1 className='mt-5 ml-5 text-xl'>Learn DBMS</h1>
          <p className='mt-2 ml-5 text-sm text-zinc-500'>Master data with our DBMS essentials</p>
          <button className='mt-5 ml-5 border-2 px-4 py-2 rounded-2xl'>Try it -&gt; </button>
        </div>


        <div className=" h-80 w-80 mt-10 rounded-2xl border-2 border-zinc-700 hover:border-zinc-200 transition duration-200">
          <div className='flex items-center justify-center h-24 w-24 bg-zinc-800 rounded-2xl mt-5 ml-5'>
            <img className='h-14 w-14' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735226686/design_rqmqjb.png" alt="OOPS" />
          </div>
          <h1 className='mt-5 ml-5 text-xl'>Learn OOPS</h1>
          <p className='mt-2 ml-5 text-sm text-zinc-500'>Simplify coding with our OOPs primer</p>
          <button className='mt-5 ml-5 border-2 px-4 py-2 rounded-2xl'>Try it -&gt; </button>
        </div>


      </div>


      <div className='mt-48'>
        <h1 className='text-6xl flex justify-center'>Why Choose Us?</h1>
        <p className='flex justify-center mt-4 text-zinc-500 text-lg'>Unlock Your Potential with Our Comprehensive Learning Approach</p>

        <div className='mt-16'>
          <div className='flex justify-center gap-16'>
            <div className="h-80 w-96 mt-10 pr-3 rounded-2xl border border-transparent hover:border-red-200 transition duration-500">
              <h1 className='mt-5 ml-5 text-2xl font-sans'>01</h1>
              <h1 className='mt-1 ml-5 text-2xl text-red-500 font-semibold'>Expert-Crafted Learning</h1>
              <p className='mt-2 ml-5'>Our team of accomplished engineers, with impressive coding profiles across various programming platforms, hails from top tech companies like Google, Amazon, Meta, and Microsoft. They also boast a proven track record of successful teaching.</p>
            </div>

            <div className="h-80 w-96 mt-10 pr-3 rounded-2xl border border-transparent hover:border-red-200 transition duration-500">
              <div>
                <h1 className='mt-5 ml-5 text-2xl font-sans'>02</h1>
              </div>
              <h1 className='mt-1 ml-5 text-2xl text-red-500 font-semibold'>Structured Learning Path</h1>
              <p className='mt-2 ml-5'>Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects – all through premium blog posts and in-depth video solutions.</p>
            </div>


            <div className="h-80 w-96 mt-10 pr-3 rounded-2xl border border-transparent hover:border-red-200 transition duration-500">
              <div>
                <h1 className='mt-5 ml-5 text-2xl font-sans'>03</h1>
              </div>
              <h1 className='mt-1 ml-5 text-2xl text-red-500 font-semibold'>Unmatched Content Depth</h1>
              <p className='mt-2 ml-5'>We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free and paid courses. Our focus is on developing problem-solving skills through intuitive explanations.</p>
            </div>
          </div>
        </div>

        <h1 className='text-red-500 flex justify-center mt-56 text-xl mb-6'>Testimonials</h1>
        <h1 className='flex justify-center text-4xl'>Discover the Success Stories of Our Students</h1>

        <div className="flex ml-24 gap-14 mt-20">
          <div className="h-80 w-96 mt-10 rounded-2xl border-2 border-zinc-800 border-transparent hover:border-zinc-600 transition duration-200">
            <div className='h-52 w-auto rounded-md flex items-center justify-center m-5 text-sm'>
              <p>SkillForge transformed my coding journey. The platform's easy-to-use interface and helpful resources made mastering DSA and problem-solving a breeze. With personalized feedback and a supportive community, I feel confident tackling technical interviews. Highly recommended!</p>
            </div>
            <div className='flex items-center h-12 w-auto'>
              <div className='h-12 w-12 rounded-full mt-3 ml-3 mb-3 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735230999/user1_yuktem.jpg" alt="user1" />
              </div>
              <div className='ml-3'>
                <p className='text-white font-semibold'>James Anderson</p>
                <p className='text-white text-xs font-extralight'>Software Engineer at @ Google</p>
              </div>
            </div>
          </div>

          <div className="h-80 w-96 mt-10 rounded-2xl border-2 border-zinc-800 border-transparent hover:border-zinc-600 transition duration-200">
            <div className='h-52 w-auto rounded-md flex items-center justify-center m-5 text-sm'>
              <p>I’ve used many platforms before, but SkillForge stands out with its clear explanations and well-structured practice materials. It's been instrumental in sharpening my coding skills and improving my performance in competitive programming</p>
            </div>
            <div className='flex items-center h-12 w-auto'>
              <div className='h-12 w-12 rounded-full mt-3 ml-3 mb-3 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735230999/user4_i0rhip.jpg" alt="user1" />
              </div>
              <div className='ml-3'>
                <p className='text-white font-semibold'>David Brown</p>
                <p className='text-white text-xs font-extralight'>Software Engineer at @ Microsoft</p>
              </div>
            </div>
          </div>


          <div className="h-80 w-96 mt-10 rounded-2xl border-2 border-zinc-800 border-transparent hover:border-zinc-600 transition duration-200">
            <div className='h-52 w-auto rounded-md flex items-center justify-center m-5 text-sm'>
              <p>As a beginner, I found SkillForge to be a great place to start my coding journey. The tutorials are easy to follow, and the DSA challenges helped me build a solid foundation in computer science concepts. I highly recommend it to others looking to grow their skills.</p>
            </div>
            <div className='flex items-center h-12 w-auto'>
              <div className='h-12 w-12 rounded-full mt-3 ml-3 mb-3 overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735230998/user2_e2drde.jpg" alt="user1" />
              </div>
              <div className='ml-3'>
                <p className='text-white font-semibold'>Emma Williams</p>
                <p className='text-white text-xs font-extralight'>Software Engineer at @ Amazon</p>
              </div>
            </div>
          </div>


        </div>

        <div className='flex justify-center gap-4'>
          <div className='bg-zinc-800 rounded-full mt-24 h-16 w-16 cursor-pointer text-4xl flex items-center justify-center border-2 border-transparent hover:border-zinc-200 transition duration-200'>&lt;</div>
          <div className='bg-red-500 rounded-full mt-24 h-16 w-16 text-4xl flex items-center justify-center cursor-pointer'>&gt;</div>
        </div>

        <div>
          <h1 className='text-red-500 text-xl flex justify-center mt-48'>INSTRUCTOR</h1>
          <h1 className='text-4xl flex justify-center mt-10'>Meet Our Exceptional Instructor</h1>
        </div>

        <div className='flex justify-center m-10'>
          <div className="h-96 w-128 mr-10">
            <img
              src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735232482/instructor_iejwxf.jpg"
              alt="instructor_image"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>

          <div className="h-96 w-128 rounded-lg">
            <div className="h-20 w-auto flex items-center">
              <div className="h-12 w-12 rounded-full ml-3 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735233294/__azfje8.jpg"
                  alt="user1"
                />
              </div>
              <div className="ml-3">
                <p className="text-white font-semibold">Issac Newton</p>
                <p className="text-white text-xs font-extralight">Software Engineer at @ Google</p>
              </div>
            </div>
            <ul className="ml-8 mt-4 text-white list-disc space-y-1">
              <li>Strong analytical skills</li>
              <li>Expert in JavaScript and Python</li>
              <li>5+ years of software development experience</li>
              <li>Proven track record in building scalable systems</li>
              <li>Expert in Machine Learning algorithms</li>
              <li>Passionate about problem-solving and optimization</li>
              <li>Dedicated to continuous learning and growth</li>
            </ul>

            <div className="mt-6 flex justify-start gap-8 ml-8">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735233904/google_1_nwytv5.png"
                  alt="Google"
                />
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735233904/microsoft_b2kbti.png"
                  alt="Microsoft"
                />
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735234596/facebook_1_y5bixj.png"
                  alt="Facebook"
                />
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735234596/oracle_dvirqj.png"
                  alt="Oracle"
                />
              </div>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dgxqggj5o/image/upload/v1735234596/nvidia_kfhfxi.png"
                  alt="Nvidia"
                />
              </div>
            </div>
          </div>





        </div>



        <div className="flex justify-center flex-col items-center mt-24 px-4 mb-24">
          <h1 className="text-4xl mb-10">Frequently Asked Questions</h1>
          <div className="w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-zinc-700 py-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg text-zinc-300">{faq.question}</h2>
                  {expandedIndex === index && (
                    <p className="text-sm text-zinc-500 mt-2">{faq.answer}</p>
                  )}
                </div>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="text-xl text-zinc-400 hover:text-red-500 transition duration-200"
                >
                  {expandedIndex === index ? "−" : "+"}
                </button>
              </div>
            ))}
          </div>
        </div>




      </div>
      <Footer />
    </>
  );
};

export default Home;
