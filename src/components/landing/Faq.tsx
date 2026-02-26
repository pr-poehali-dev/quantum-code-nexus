import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Вся техника оригинальная?",
    answer:
      "Да, мы продаём только 100% оригинальную технику Apple. Все устройства поступают от официальных поставщиков и проходят проверку подлинности перед отправкой покупателю.",
  },
  {
    id: 2,
    question: "Какая гарантия на устройства?",
    answer:
      "На все устройства распространяется официальная гарантия Apple — 1 год. Дополнительно вы можете приобрести AppleCare+ для расширенного покрытия на 2 года.",
  },
  {
    id: 3,
    question: "Как быстро доставите заказ?",
    answer:
      "Доставка по Москве и Санкт-Петербургу — 1 день. По остальным городам России — 2-3 рабочих дня. Отслеживание посылки доступно сразу после отправки.",
  },
  {
    id: 4,
    question: "Можно ли вернуть или обменять товар?",
    answer:
      "Да, в течение 14 дней вы можете вернуть устройство в надлежащем состоянии и получить полный возврат средств. Обмен также возможен при наличии нужной модели в наличии.",
  },
  {
    id: 5,
    question: "Какие способы оплаты принимаете?",
    answer:
      "Принимаем оплату картой онлайн, переводом по СБП, наличными при получении. Возможна рассрочка и кредит через банки-партнёры без переплат.",
  },
  {
    id: 6,
    question: "Есть ли возможность проверить товар при получении?",
    answer:
      "Конечно! При курьерской доставке вы можете осмотреть устройство и проверить его работоспособность до оплаты. Мы ничего не скрываем.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые частые вопросы о покупке техники Apple. Если не нашли ответ — напишите нам, поможем быстро.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}