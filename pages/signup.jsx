export default function Signup() {
  return (
    <div className="w-full h-screen m-auto flex flex-row items-center justify-center ">
      <form action="POST" className="flex flex-row flex-wrap    border-2 p-6 w-1/2">
        <div className="mb-4 w-full">
          <label htmlFor="full_name" className="block font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2   w-full  rounded-lg p-2.5"
            placeholder="arogya"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full rounded-lg p-2.5"
            placeholder="arogya@gmail.com"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full  rounded-lg p-2.5"
            placeholder="arogya12"
            required
          />
        </div>
        <div className="mt-4 w-full grid place-content-center">
        <button type="submit" className="bg-cyan-500 transition-all hover:bg-cyan-600  font-bold font-sans p-3 rounded-md mr-8 p-2.5">
          Signup
        </button>
        </div>
      </form>
    </div>
  );
}
