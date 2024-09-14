import portolist from "@/data/data.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SwiperComp from "@/components/SwiperComp";

export async function generateStaticParams() {
  return portolist.map((p) => ({
    slug: p.id,
  }));
}

const DetailPortfolio = ({ params }) => {
  const { slug } = params;
  const project = portolist.find((p) => p.id === slug);

  if (!project) {
    return <div className="container mx-auto py-8 px-4 bg-white text-center">Project not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container  py-8 px-4">

        {/* Breadcrumb Navigation */}
        <div className="bg-white shadow-md rounded-md mb-6 p-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold text-gray-800">{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Project Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{project.title}</h1>

        {/* Project Image */}
        <div className="mb-6">
          {/* Uncomment the following line to display the project image */}
          {/* <img src={project.img} alt={project.title} className="w-full h-auto rounded-md shadow-lg" /> */}
        </div>

        {/* Swiper Component for Project Images */}
        <div className="mb-8">
          <SwiperComp folderId={project.imgDir} />
        </div>

        {/* Project Description */}
        <div className="text-gray-700 mb-6 grid grid-cols-1 sm:grid-cols-3">
          <div className="col-span-2">
            <h1 className="font-bold text-lg">Narasi Proyek</h1>
            <p className="text-lg mb-4 pt-4 mr-4 sm:mr-8 cutoff-text whitespace-pre-line">{project.desc.narasi}</p>
            <input type="checkbox" className="expand-btn px-4 mb-8" />
          </div>
          <div className="col-span-1">
            <p className="text-lg"> <span className="font-bold">Project Type</span></p>
            <p className="text-md mb-4">{project.desc.data.type}</p>
            <p className="text-lg"> <span className="font-bold">Location</span></p>
            <p className="text-md mb-4">{project.desc.data.location}</p>
            <p className="text-lg"> <span className="font-bold">Province</span></p>
            <p className="text-md mb-4">{project.desc.data.province}</p>
            <p className="text-lg"> <span className="font-bold">Country</span></p>
            <p className="text-md mb-4">{project.desc.data.country}</p>
            <p className="text-lg"> <span className="font-bold">Land Area</span></p>
            <p className="text-md mb-4">{project.desc.data.land}</p>
            <p className="text-lg"> <span className="font-bold">Building Area</span></p>
            <p className="text-md mb-4">{project.desc.data.building}</p>
            <p className="text-lg"> <span className="font-bold">Project Start</span></p>
            <p className="text-md mb-4">{project.desc.data.date}</p>
            <p className="text-lg"> <span className="font-bold">Project Phase</span></p>
            <p className="text-md mb-4">{project.desc.data.phase}</p>
          </div>
          {/* <p className="text-lg">{project.desc.desc2}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DetailPortfolio;
