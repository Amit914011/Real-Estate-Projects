import React from 'react'

export default function CompanyProfile() {
  return (
    <div>
      <div className='w-full h-auto'>
        <div className='w-full h-[300px] bg-no-repeat relative' style={{backgroundImage:"URL('http://paramark.wpengine.com/wp-content/uploads/2017/09/Paramark-Header-1.jpg')"}}>
           <div className='w-[70%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:font-bold md:px-7 py-2'>
                <h1 className='md:text-6xl text-2xl font-bold'>
                    Company Profile
                </h1>
           </div>
        </div>  
        <div className='w-full h-auto'>
            <div className='w-[80%] m-auto'>
            <h1 className='text-5xl font-serif font-bold'>Company <span className='text-orange-500'>Profile</span></h1>
            <p className='mt-5 text-justify'><p className='text-2xl font-bold'>OUR COMPANY</p>
Founded in 1971 and headquartered in Rochester, Minnesota, Paramark Real Estate Services provides premium Commercial and Residential Property Management, Facility, and Commercial Brokerage Services for private investors, institutions, corporations, not-for-profits, home owner associations, and cooperatives.

We are proud of our company’s many accomplishments and our clients appreciate the fact Paramark is a closely held Corporation owned and operated by its shareholders.  We employ over 200 team members and currently operate in Minnesota, Iowa, Wisconsin, and Illinois. Paramark’s integrated, team-based approach facilitates effective, responsive communication and our proactive approach to management ensures that the operational and financial performance of your property is always our highest priority.

Paramark is recognized by the Institute of Real Estate Management (IREM) as an Accredited Management Organization (AMO ®) and is one of only approximately 500 such firms worldwide. This designation recognizes excellence in Real Estate Management firms and is the result of having achieved the highest levels of performance, experience, and financial stability in our industry.  We value the continuing education of our team and strive to provide opportunities for our staff to grow and improve every day as evidenced by the many designations our staff holds including:</p>
<p className='text-justify mt-5'><p className='font-bold text-2xl'>OUR HISTORY</p>
Paramark Real Estate Services was originally founded in 1971 under the name Weis Management Company.  In the early years, we provided residential property management services exclusively to support the affordable housing development of Joe and Gene Weis of Weis Builders.  Eventually, the company grew and branched out into 3rd party residential and commercial fee management.

In early 2006, Weis Management made a strategic move to clear up any brand confusion in the market with its sister company Weis Builders by changing its name to Paragon Property Management.  In late 2006, Paramark was formed through the merger of two well-established real estate service companies: Paragon Property Management and Lanmark Property Advisors.  Founded in 1993, Lanmark Property Advisors provided property management and brokerage services for residential and commercial assets.  In addition, Lanmark provided facility services both within their portfolio, as well as to standalone Facility Services clients.

The merged company selected the name “Paramark” to reflect and retain the strengths, reputation, and legacies of both Paragon and Lanmark.  Today Paramark manages over 5,000 housing units, over 1 million square feet of commercial property, brokers over 60 commercial lease and sale transactions a year, and oversees a portfolio worth $1 Billion in asset value.</p>
            </div>
           
        </div>
      </div>
    </div>
  )
}
