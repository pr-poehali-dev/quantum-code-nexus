import { ShieldCheck, Truck, BadgeCheck } from "lucide-react"

const services = [
  {
    id: 1,
    title: "100% оригинал",
    description: "Продаём только оригинальную технику Apple. Каждое устройство проходит проверку подлинности перед отправкой.",
    icon: BadgeCheck,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Официальная гарантия",
    description: "Гарантия производителя на все устройства. Сервисная поддержка и помощь при гарантийных случаях.",
    icon: ShieldCheck,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Быстрая доставка",
    description: "Доставка по всей России в течение 1-3 дней. Бесплатная доставка при заказе от 10 000 рублей.",
    icon: Truck,
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Почему выбирают
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">нас</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Мы работаем только с оригинальной продукцией Apple и делаем покупку максимально удобной и безопасной.
        Тысячи довольных покупателей по всей России.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}