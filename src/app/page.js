import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform rotate-3 -skew-y-6 sm:skew-y-0 sm:rotate-40 sm:rounded-3xl animation-float"
            style={{animation: "float 4s ease-in-out infinite"}}></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

            <div className="max-w-md mx-auto">
              <div className="text-2xl font-extrabold text-gray-900">Q U I Z Z I E </div>
              <p className="mt-2 text-gray-600">Începe pregătirea pentru examenul de Bacalaureat!</p>
              <div className="mt-12">
                  <Link href="/dashboard">
                  <button className="justify-center py-3 px-4 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl transform transition duration-200 hover:scale-110 text-white font-semibold w-full sm:w-auto"
                >Incepe pregatirea</button>
                  </Link>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-sm text-center">
              <span className="text-gray-900 font-bold">Quizzie</span> is powered by Next.js and connected to the ChatGPT API for custom quizzes.
            </p>
          </div>
        </div>
      </div>
  )
}
