export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-gray-200">Mirai Media</p>
          <p>Yaratıcı medya ve dijital çözümler.</p>
        </div>

        <div className="space-y-1">
          <p>
            E-posta:{" "}
            <a href="mailto:info@miraimedia.com" className="text-gray-200 hover:underline">
              info@miraimedia.com
            </a>
          </p>
          <p>Telefon: +90 5xx xxx xx xx</p>
          <p>İstanbul / Türkiye</p>
        </div>

        <p>© {new Date().getFullYear()} Mirai Media. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
