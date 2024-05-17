import React from 'react'

export default function LegalDocument() {
    let image=[
        {imageLink:'https://www.professionalutilities.com/upload/pvt_ltd_company_certificate_sample.png'},
        {imageLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnLHRqGrR0MTxKsstDEjuZehH1Uptetmhuak6QkozzRzJ4Xj_TkDsBaaUaY74KDLe4AU&usqp=CAU'},
        {imageLink:'https://static1.s123-cdn-static-a.com/uploads/5513493/400_635f71c103248.png'},
        {imageLink:'https://loans.creditenable.com/in/wp-content/uploads/sites/2/2022/05/PAN-card-e1653906310373.jpg'},
        {imageLink:'https://vakilsearch.com/blog/wp-content/uploads/2021/07/ISO-Certification.jpg'},
        {imageLink:'https://www.taxreturnwala.com/wp-content/uploads/2020/09/2.jpg'}
    ]
  return (
    <div>
      <div className='w-full h-auto'>
        <div className='w-full h-[350px] relative' style={{backgroundImage:'URL("https://www.smindia.org/images/contact-title-bg.jpg")'}}>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-2xl font-serif font-bold w-60 px-3 md:left-[25%] md:text-4xl md:w-96'>
                <h1>Legal Documents</h1>
            </div>
        </div>
        <div className='w-full h-auto mt-10 flex justify-center items-center'>
            <div className='max-w-6xl h-auto m-auto md:flex md:flex-wrap md:justify-evenly '>
                {
                    image.map((data)=>(
                        <img className='h-[350px] w-[350px] mb-5' src={data.imageLink} alt=""  />
                    ))
                }
            </div>

        </div>
      </div>
    </div>
  )
}
