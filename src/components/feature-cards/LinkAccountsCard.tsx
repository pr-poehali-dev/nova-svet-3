import { Wallet, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const wallets = [
  { name: "Иван Петров", info: "0x4f3a...c912", code: "TLX-001" },
  { name: "Анна Смирнова", info: "0x78bd...a341", code: "TLX-042" },
  { name: "Олег Кузнецов", info: "0x1ec7...f820", initials: "ОК", color: "bg-gray-600" },
  { name: "Алина Новак", info: "0x9a0d...b567", initials: "АН", color: "bg-gray-700" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Wallet className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Все кошельки в одном месте</h3>
      <p className="mb-4 text-sm text-gray-400">Управляйте адресами блокчейна aSmej и отслеживайте балансы TLX в едином интерфейсе</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {wallets.map((wallet, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${wallet.color || "bg-gray-600"} text-white text-xs`}>
                  {wallet.initials ||
                    wallet.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{wallet.name}</p>
                <p className="text-xs text-gray-500">{wallet.info}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{wallet.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Добавить адрес
        </Button>
      </div>
    </div>
  )
}
