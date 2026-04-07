import Icon from "@/components/ui/icon"

const features = [
  { name: "Децентрализация", icon: "Globe" },
  { name: "Смарт-контракты", icon: "Cpu" },
  { name: "Защита данных", icon: "Shield" },
  { name: "Шифрование", icon: "Lock" },
  { name: "Слои блоков", icon: "Layers" },
  { name: "Быстрые транзакции", icon: "Zap" },
  { name: "Распределённая БД", icon: "Database" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {features.map((item) => (
        <div key={item.name} className="flex items-center gap-2 text-gray-500">
          <Icon name={item.icon} fallback="Circle" size={16} />
          <span className="text-sm font-medium">{item.name}</span>
        </div>
      ))}
    </section>
  )
}