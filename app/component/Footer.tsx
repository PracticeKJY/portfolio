"use client"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="bg-primary">
          <div className="container px-5 py-6 mx-auto flex justify-center items-center">
            <p className="text-sm text-gray-500  sm:mt-0">
              © {year} - kim jong yeop all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
