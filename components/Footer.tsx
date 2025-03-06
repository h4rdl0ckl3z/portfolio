export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-4">
            <div className="container mx-auto">
                <p>&copy; { new Date().getFullYear() } My Portfolio. All rights reserved.</p>
                {/* <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="hover:text-gray-400"><i className="fab fa-github"></i></a>
                </div> */}
            </div>
        </footer>
    );
}