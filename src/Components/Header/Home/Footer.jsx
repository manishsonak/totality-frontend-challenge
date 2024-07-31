
function Footer() {
  return (
    <footer className="px-8 py-8 mt-1 text-white bg-gray-800">
    <div className="container flex flex-wrap justify-around mx-auto">
        <div className="w-full mb-6 sm:w-1/4 sm:mb-0">
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-gray-400">
            Welcome to Property Rental Website, your trusted partner in finding the perfect rental property. Whether you&apos;re looking for a cozy apartment in the city or a spacious house in the suburbs, we provide a wide range of listings to suit every lifestyle and budget. Our mission is to make the rental process seamless and hassle-free for both renters and property owners.
            </p>
        </div>
        <div className="w-full mb-6 sm:w-1/4 sm:mb-0">
            <h3 className="mb-4 text-lg font-semibold md:text-center">Quick Links</h3>
            <ul className="flex flex-col justify-center md:text-center">
                <li><a  href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a  href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a  href="#properties" className="text-gray-400 hover:text-white">Properties</a></li>
                <li><a  href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
        </div>
        <div className="w-full mb-6 sm:w-1/4 sm:mb-0">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400">Email: manishsonak9@gmail.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Address: 123 Street, City, Country</p>
        </div>
        <div className="w-full sm:w-1/4">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100025851462616" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/ManishSonak" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/manish_sonak/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/manish-sonak-26233129a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    </div>
    <div className="pt-4 mt-8 border-t border-gray-700">
        <p className="text-center text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer