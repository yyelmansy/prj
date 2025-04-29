import Image from "next/image";

export default function TeamMembers() {
  return (
    <main className="container mx-auto mt-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">👨🏻‍💻Team Members</h1>

      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <a
          href="https://www.linkedin.com/in/youssef-elmansy-117915274"
          className="flex flex-col items-center gap-2"
        >
          <Image
            src="/youssef-elmansy.jpg"
            priority
            quality={100}
            width={200}
            height={200}
            alt="Elmansy"
            className="w-56 h-56 rounded-full object-cover"
          />
          <h2 className="text-lg font-bold">Youssef Elmansy</h2>
          <p className="text-gray-400 text-center">
            Cloud Administrator | Solutions Architect
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/ma2003"
          className="flex flex-col items-center gap-2"
        >
          <Image
            src="/mohamed-adel.jpg"
            priority
            quality={100}
            width={200}
            height={200}
            alt="Mohamed"
            className="w-56 h-56 rounded-full object-cover"
          />
          <h2 className="text-lg font-bold">Mohamed Adel</h2>
          <p className="text-gray-400 text-center">
            Cloud Engineer | DevOps Enthusiast | Huawei Cloud Ambassador
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-ayman111"
          className="flex flex-col items-center gap-2"
        >
          <Image
            src="/mohamed-aymen.jpg"
            priority
            quality={100}
            width={200}
            height={200}
            alt="Mahmoud"
            className="w-56 h-56 rounded-full object-cover"
          />
          <h2 className="text-lg font-bold">Mohamed Aymen</h2>
          <p className="text-gray-400 text-center">
            Cloud Engineer | Smart Grids Undergrad
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-mansour-301377298/"
          className="flex flex-col items-center gap-2"
        >
          <Image
            src="/ahmed-mansour.jpg"
            priority
            quality={100}
            width={200}
            height={200}
            alt="Ahmed"
            className="w-56 h-56 rounded-full object-cover"
          />
          <h2 className="text-lg font-bold">Ahmed Mansour</h2>
          <p className="text-gray-400 text-center">
            Cloud Engineer | Communication Engineering Undergrad
          </p>
        </a>
      </section>
    </main>
  );
}
