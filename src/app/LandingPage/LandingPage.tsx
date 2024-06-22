
import donationPicture from '@/assets/landingPage/Charityblue.png'
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GiftIcon className="h-6 w-6" />
          <span className="sr-only">Charity Org</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Impact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth">
            Get Involved
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/auth">
            Donate
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-4">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
                alt="LOGO"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src={donationPicture.src}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Communities Through Compassionate Giving
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Join us in making a lasting impact on the lives of those in need. Your donation can transform
                    communities and create a brighter future.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#007bff] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#0056b3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007bff] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#007bff] dark:text-gray-900 dark:hover:bg-[#0056b3]/90 dark:focus-visible:ring-[#007bff]"
                    href="/auth"
                  >
                   Get Involved 
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="/auth"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold tracking-tighter sm:text-5xl py-7">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Communities, Transforming Lives
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our organization is dedicated to making a positive impact on the lives of those in need. Through our
                  various programs and initiatives, we strive to provide essential resources, support, and opportunities
                  to empower individuals and strengthen communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Food Security</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We work to ensure that families have access to nutritious meals and essential food items.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Education Assistance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide scholarships, tutoring, and educational resources to help students succeed.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Disaster Relief</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We respond quickly to natural disasters, offering emergency aid and long-term recovery support.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Healthcare Access</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We work to improve access to quality healthcare services and medical supplies.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Job Training</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide job skills training and career development opportunities to empower individuals.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Community Outreach</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We engage with local communities to understand their needs and collaborate on impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get Involved and Make a Difference
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                There are many ways you can support our mission and help create a better future for those in need.
                Explore the options below to find the best fit for you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Your support can change lives. Join us in making a lasting impact.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CreditCardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function GiftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}
