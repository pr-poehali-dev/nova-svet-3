import { Shield, ArrowUpRight, Key, ChevronDown, Info } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Shield className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Управление доступом</h3>
      <p className="mb-4 text-sm text-gray-400">Настраивайте права на подпись транзакций, лимиты и мультиподписи для команды</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gray-700 text-white">АП</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Алексей Петров</p>
              <p className="text-xs text-gray-500">0x4f3a...c912</p>
            </div>
          </div>
          <button className="text-sm text-gray-400 hover:text-white transition-colors">Изменить</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Тип авторизации <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Мультиподпись 2-из-3</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Подтверждение двух ключей из трёх.</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#262626]">
                <Key className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Аппаратный ключ</p>
                <p className="text-xs text-gray-500">Ledger · подключён</p>
              </div>
            </div>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">Изменить</button>
          </div>
        </div>

        <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold">Продолжить</Button>
      </div>
    </div>
  )
}
