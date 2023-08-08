/* This code requires Tailwind CSS v2.0+ */


const skills =['ReactJs', 'Flask', 'React-three/fiber', 'react-three/drei', 'NextJs'];
const extraCurriculars = ['playing Table tennis', 'investing in Indian stocks'];
const achievements=['Awarded with special recognition award for my Team work and contribution to LiDAR projects during my Trainee Period']
export default function Example() {
  return (
    <div className="relative bg-gray-50">

      <main>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          
          <div className="px-4 px-8">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block">Saichandu Juluri</span> 
              {/* <span className="block text-indigo-600">online business</span> */}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">
              R3f Developer
            </p>
         
          </div>
        </div>

        {/* <div className="relative w-full h-64 h-72">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div> */}

        {/**experience hedding*/}
        <div className="mx-auto max-w-7xl w-full pt-12 pb-12 text-center">
          <div className="px-4 px-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
                <span className="underline block text-indigo-600">Experience</span>
              </h1>
            </div>
        </div>

        {/**Experience at HM descriiption*/}
        <div className="mx-auto max-w-7xl w-full text-center pb-4">
        {/* <div className="px-4 px-8"> */}
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
              {/* <span className="block">Saichandu Juluri</span>  */}
              <span className="text-3xl block text-orange-500">Research Engineer at Hyundai Mobis from August 2021 to August 2023</span>
            </h1>

            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
              {/* <span className="block">Saichandu Juluri</span>  */}
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">Developed 3D web applications in ADAS domain</p>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">Experienced the realworld use of the r3f library and interacted with authors of the drei library through twitter, discord and github while developing web annotation tool</p>
            </h1>
          {/* </div> */}
        </div>

        {/**Libraries and frmwks heading and list*/}
        <div className="mx-auto max-w-7xl w-full pt-12 pb-12 text-center bg-gray-200">
          <div className="px-4 px-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
                {/* <span className="block">Saichandu Juluri</span>  */}
                <span className="underline block text-indigo-600">Libraries & Frameworks</span>
                  {skills.map((skl=>{
                    return <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">{skl}</p>
                      
                  })) }
              </h1>
            </div>
        </div>

        {/**achievements*/}
        <div className="mx-auto max-w-7xl w-full pt-12 pb-12 text-center">
          <div className="px-4 px-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
                {/* <span className="block">Saichandu Juluri</span>  */}
                <span className="underline block text-indigo-600">Achievements</span>
                  {achievements.map((skl=>{
                    return <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">{skl}</p>
                      
                  })) }
              </h1>
            </div>
        </div>

        {/**Extra curriculars*/}
        <div className="mx-auto max-w-7xl w-full pb-12 pt-4 text-center bg-gray-200">
          <div className="px-4 px-8">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-5xl">
                {/* <span className="block">Saichandu Juluri</span>  */}
                <span className="underline block text-indigo-600">Extracurriculars</span>
                  {extraCurriculars.map((skl=>{
                    return <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 text-xl">{skl}</p>
                      
                  })) }
              </h1>
            </div>
        </div>


      </main>
    </div>
  )
}
