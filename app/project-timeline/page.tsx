export default function ProjectTimeline() {
  return (
    <main className="container mx-auto mt-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-10">📅 Project Timeline</h1>

      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">
            🖥️ Week 1: Create Source Environment on Azure
          </h2>
          <ul className="list-disc pl-10 text-lg">
            <li>
              🆕 Deploy a Virtual Machine (VM) running Windows Server 2022.
            </li>
            <li>
              ⚙️ Configure the VM to use three fault domains and two update
              domains for enhanced availability.
            </li>
            <li>
              🌐 Install and enable IIS (Internet Information Services) to serve
              web content.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">
            🌐 Week 2: Build Landing Zone Website
          </h2>
          <ul className="list-disc pl-10 text-lg">
            <li>
              ☁️ Create an Azure App Service with the Standard S1 Plan,
              configured for ASP.NET 4.8 framework.
            </li>
            <li>📝 Create a staging slot for deployment testing.</li>
            <li>🔐 Enable Microsoft Entra ID (Azure AD) for authentication.</li>
            <li>
              📈 Configure manual scaling with a maximum of three instances.
            </li>
            <li>🖥️ Test website accessibility from a local machine.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">
            📦 Week 3: Import Website into Source Server
          </h2>
          <ul className="list-disc pl-10 text-lg">
            <li>
              📥 Download the sample website file (<code>index.html</code>).
            </li>
            <li>
              🌐 Set up a new website on the IIS server (VM from Week 1) using
              the downloaded file.
            </li>
            <li>
              🔍 Verify the website is running by accessing it via the local IP.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">
            🚀 Week 4: Website Migration to Azure App Service
          </h2>
          <ul className="list-disc pl-10 text-lg">
            <li>🔄 Set up Azure Migrate to manage the migration process.</li>
            <li>
              📝 Perform an assessment of the on-premises IIS website for
              compatibility and readiness.
            </li>
            <li>
              🚚 Migrate the website from the source VM to the App Service
              created in Week 2.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
