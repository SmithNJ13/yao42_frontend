import './Profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faFileLines } from '@fortawesome/free-solid-svg-icons'


const index = () => {
  return (
    <>
   
<div className="h-screen overflow-hidden flex items-center justify-center">

    <div className="bg-orange-200">
    
        <div className="container mx-auto my-40 p-5">
            <div className="md:flex no-wrap md:-mx-2 ">
                {/* <!-- Left Side --> */}
                <div className="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Profile Card --> */}
                    <div className="bg-white p-3 border-t-4 border-green-400">
                        <div className="image overflow-hidden">
                            <img className="h-auto w-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt=""/>
                        </div>
                        <div className="text-center my-2">
                            <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt=""/>
                        </div>
                        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 text-center">Bob</h1>
                    </div>
                    {/* <!-- End of profile card --> */}
                    <div className="my-4"></div>
               
                </div>
                {/* <!-- Right Side --> */}
                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* <!-- Profile tab -->
                    <!-- About Section --> */}

                    <div className="bg-white p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span className="text-green-500">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">Bob</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">Bobbers</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href="mailto:jane@example.com">bob@example.com</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                    <div className="px-4 py-2">Feb 06, 1998</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of about section --> */}
    
                    <div className="my-4"></div>
{/*     
                    <!-- My recipes --> */}
                    <div className="bg-white p-3 shadow-sm rounded-sm">
    
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <FontAwesomeIcon icon={faFileLines} />
                                    </span>
                                    <span className="tracking-wide">My Recipes</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">My Recipe 1.</div>
                                        <div className="text-gray-500 text-xs">My Recipe 1</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <!-- End of My recipes --> */}
                    </div>
    
                    <div className="my-4"></div>
    
                    {/* <!-- Liked recipes --> */}
                    <div className="bg-white p-3 shadow-sm rounded-sm">
    
                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span className="text-green-500">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                    <span className="tracking-wide"> Liked Recipes</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">My Recipe 1.</div>
                                        <div className="text-gray-500 text-xs">My Recipe 1</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* <!-- End of Liked recipes --> */}
                    </div>
                    
                    {/* <!-- End of profile tab --> */}
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default index
