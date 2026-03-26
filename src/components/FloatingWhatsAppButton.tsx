import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const DEFAULT_WHATSAPP_NUMBER = "5511999999999";

function normalizeWhatsAppNumber(value?: string) {
  // `wa.me` espera apenas dígitos (com DDI), então removemos qualquer caractere
  // para evitar links quebrados caso o usuário cole com espaços/traços.
  const digits = (value ?? "").replace(/\D/g, "");
  return digits.length > 0 ? digits : DEFAULT_WHATSAPP_NUMBER;
}

export default function FloatingWhatsAppButton() {
  const number = normalizeWhatsAppNumber(import.meta.env.VITE_WHATSAPP_NUMBER);
  const href = `https://wa.me/${number}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

