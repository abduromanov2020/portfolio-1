import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#032a3b] flex justify-center p-4">
            <form method="POST" action="https://getform.io/f/884eeaa7-7406-46ca-95ce-35ef48e3ec8f" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#b6a488] text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">// Submit the form below or shoot me an email - alfatihdevs@gmail.com</p>
                </div>
                <input className="p-3 bg-[#ccd6f6] font-semibold" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-3 bg-[#ccd6f6] font-semibold" type="email" placeholder="Email" name="email" />
                <textarea className="p-3 bg-[#ccd6f6] font-semibold" name="message" name="message" placeholder="Message" rows="10"></textarea>
                <button className="text-white border-2 hover:bg-[#b6a488] hover:border-[#b6a488] hover:text-[#032a3b] font-semibold px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact