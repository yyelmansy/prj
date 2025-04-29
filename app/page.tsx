export default function Home() {
  return (
    <main className="container mx-auto mt-10 flex flex-col gap-20">
      <div className=" flex flex-col gap-4">
        <h1 className="text-2xl font-bold">🚀 Project Goal</h1>
        <p className="text-lg leading-relaxed text-gray-100">
          The goal of this project is to simulate a complete website migration
          from an on-premises environment (hosted on a virtual machine with IIS)
          to an Azure App Service platform. This hands-on experience includes
          creating the source environment, deploying a landing zone with
          scalable and authenticated web services, setting up the website in
          IIS, and completing the final migration to the cloud using Azure
          Migrate.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ol className="list-decimal text-lg leading-relaxed text-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <li className="flex flex-col gap-2 items-center rounded-lg border-2 border-gray-300 p-4 hover:transform hover:translate-y-[-6px] cursor-pointer transition duration-300">
            <strong>⚖️ Scalability</strong>
            <p className="text-center">
              Azure App Service provides auto-scaling to handle traffic
              variations efficiently.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center rounded-lg border-2 border-gray-300 p-4 hover:transform hover:translate-y-[-6px] cursor-pointer transition duration-300">
            <strong>🛠️ Maintenance</strong>
            <p className="text-center">
              Cloud-based hosting reduces operational costs by eliminating
              physical infrastructure needs.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center rounded-lg border-2 border-gray-300 p-4 hover:transform hover:translate-y-[-6px] cursor-pointer transition duration-300">
            <strong>🔐 Security</strong>
            <p className="text-center">
              Microsoft Entra Authentication enhances security with identity and
              access management.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center rounded-lg border-2 border-gray-300 p-4 hover:transform hover:translate-y-[-6px] cursor-pointer transition duration-300">
            <strong>🛡️ Reliability</strong>
            <p className="text-center">
              High availability and redundancy in Azure ensure minimal downtime
              and disaster recovery options.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center rounded-lg border-2 border-gray-300 p-4 hover:transform hover:translate-y-[-6px] cursor-pointer transition duration-300">
            <strong>📊 Management</strong>
            <p className="text-center">
              Automated management and monitoring with Azure tools simplifies
              updates and performance tracking.
            </p>
          </li>
          <li className="flex flex-col gap-2 items-center rounded-lg border-2 border-gray-300 p-4 hover:transform hover:translate-y-[-6px] cursor-pointer transition duration-300">
            <strong>🌐 Accessibility</strong>
            <p className="text-center">
              Cloud accessibility allows secure remote access from anywhere,
              improving productivity and collaboration.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}
