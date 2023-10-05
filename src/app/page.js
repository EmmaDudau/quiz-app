
export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

            <div className="max-w-md mx-auto">
              <div className="text-2xl font-extrabold text-gray-900">Welcome to your Quiz App!</div>
              <p className="mt-2 text-gray-600">Get started by clicking the button below.</p>
              <div className="mt-12">
                <button className="py-3 px-4 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl transform transition duration-200 hover:scale-110 text-white font-semibold w-full sm:w-auto">
                  Start Quiz
                </button>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-sm text-center">
              <span className="text-gray-900 font-bold">QuizApp</span> is powered by Next.js and connected to the ChatGPT API for custom quizzes.
            </p>
          </div>
        </div>
      </div>
  )
}
