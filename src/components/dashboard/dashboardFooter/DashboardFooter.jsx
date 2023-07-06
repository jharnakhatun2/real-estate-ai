
export default function DashboardFooter() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 px-4 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} ReaEstateGenious. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Powered by OpenAI | <a href="/privacy" className="text-[#a3a5a7] hover:text-[#7C6EE4]">Privacy Policy</a> | <a href="/terms" className="text-[#a3a5a7] hover:text-[#7C6EE4]">Terms of Service</a>
        </p>
      </div>
      </div>
  )
}

