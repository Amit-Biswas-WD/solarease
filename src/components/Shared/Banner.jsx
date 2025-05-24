export default function Banner({ data }) {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="se-h1 text-se-white">{data.title}</h1>
            <p className="se-h3 se-my3-6 font-medium text-se-white">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
