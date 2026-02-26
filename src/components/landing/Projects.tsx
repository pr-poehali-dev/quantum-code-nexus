import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    slug: "iphone",
    title: "iPhone",
    shortDescription: "Флагманские смартфоны Apple — iPhone 16, 16 Pro и Pro Max. Самые современные камеры и чип A18.",
    mainImage: "/portfolio-images/saas-dashboard-1.jpg",
  },
  {
    id: 2,
    slug: "macbook",
    title: "MacBook",
    shortDescription: "MacBook Air и MacBook Pro на чипах M3 и M4 — мощность и автономность для работы и творчества.",
    mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
  },
  {
    id: 3,
    slug: "ipad",
    title: "iPad & Apple Watch",
    shortDescription: "iPad Pro, iPad Air и Apple Watch Series — универсальные устройства для учёбы, работы и спорта.",
    mainImage: "/portfolio-images/ai-platform-1.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Популярные
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">категории</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Широкий ассортимент оригинальной техники Apple — от смартфонов до ноутбуков и умных часов.
        Все устройства новые, в официальной упаковке с гарантией производителя.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Смотреть все{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Получить консультацию
        </a>
      </div>
    </section>
  )
}