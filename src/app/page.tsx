

export default function Home() {

    return (
    <main className="bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="bg-black shadow sticky top-0 z-50 border-b border-[#a88932]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif font-bold text-[#a88932]">MParfum</h1>
          <div className="space-x-6 text-sm text-[#d4af37]">
            <a href="#historia" className="hover:text-white">Nossa História</a>
            <a href="#consultoria" className="hover:text-white">Consultoria</a>
            <a href="#beneficios" className="hover:text-white">Benefícios</a>
            <a href="#depoimentos" className="hover:text-white">Depoimentos</a>
            <a href="#catalogo" className="hover:text-white">Catálogo</a>
            <a href="#formulario" className="hover:text-white">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white py-32 px-6 text-center">
        <div className="backdrop-blur-sm bg-black/60 p-8 rounded-2xl max-w-xl mx-auto border border-[#d4af37]">
          <h1 className="text-4xl font-serif font-semibold leading-tight text-[#fff6d9]">
            Descubra o Perfume que Traduz sua Essência
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#fff1b8]">
            Uma jornada olfativa guiada pelo perfumista da MParfum
          </p>
          <a
            href="#consultoria"
            className="inline-block mt-6 bg-[#a88932] hover:bg-[#c1a640] transition text-white py-3 px-8 rounded-full text-base"
          >
            Agendar Consultoria Olfativa
          </a>
        </div>
      </section>

      {/* História */}
      <section id="historia" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6 text-[#d4af37]">Mais que um perfume, uma história</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          A MParfum nasceu do desejo de transformar fragrâncias em experiências marcantes. Cada essência criada carrega a identidade do nosso perfumista — um artista sensorial que acredita que todo perfume deve contar uma história. Ao invés de simplesmente vender um aroma, oferecemos uma jornada: uma consultoria que te guia até encontrar sua verdadeira assinatura olfativa.
        </p>
      </section>

      {/* Consultoria */}
      <section id="consultoria" className="bg-[#111] py-24 px-6 text-center">
        <div className="mb-10 h-64 bg-black rounded-xl flex items-center justify-center border border-[#a88932]">
          <span className="text-[#d4af37]">Imagem da Consultoria Agendada</span>
        </div>
        <h2 className="text-3xl font-serif mb-4 text-[#d4af37]">Sua jornada começa aqui</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-300">
          Ao agendar sua consultoria olfativa, você será guiado pessoalmente pelo perfumista — ou por especialistas treinados para replicar sua linguagem — em uma conversa íntima sobre sua identidade, desejos e emoções. Ao final, você descobrirá não só uma fragrância, mas um reflexo invisível da sua essência.
        </p>
        <a
          href="https://wa.me/SEUNUMERO"
          className="inline-block bg-[#a88932] hover:bg-[#c1a640] transition text-white py-3 px-8 rounded-full text-base"
        >
          Quero viver essa experiência
        </a>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 px-6 max-w-2xl mx-auto space-y-12">
        <h2 className="text-3xl font-serif text-center text-[#d4af37]">
          O que torna a MParfum única
        </h2>

        <div className="space-y-8">
          <div className="bg-[#111] p-6 rounded-2xl shadow text-center border border-[#a88932]">
            <div className="mb-4 h-40 bg-black rounded-xl flex items-center justify-center">
              <span className="text-[#d4af37]">Imagem da Consultoria</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[#d4af37]">Atendimento humano e artístico</h3>
            <p className="text-gray-300">Guiado pelo próprio criador das fragrâncias, cada conversa é única e revela quem você é.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl shadow text-center border border-[#a88932]">
            <div className="mb-4 h-40 bg-black rounded-xl flex items-center justify-center">
              <span className="text-[#d4af37]">Imagem dos Perfumes</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[#d4af37]">Perfumes que contam histórias</h3>
            <p className="text-gray-300">Criados artesanalmente, com matérias-primas nobres e um toque de emoção em cada acorde.</p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl shadow text-center border border-[#a88932]">
            <div className="mb-4 h-40 bg-black rounded-xl flex items-center justify-center">
              <span className="text-[#d4af37]">Imagem da Entrega</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[#d4af37]">Entrega com presença e memória</h3>
            <p className="text-gray-300">Receba seu perfume em uma embalagem que emociona, com instruções personalizadas e o toque da marca.</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-[#111] py-24 px-6 text-center">
        <h2 className="text-3xl font-serif mb-10 text-[#d4af37]">O que dizem nossos clientes</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-black p-6 rounded-xl border border-[#a88932]">
            <p className="italic text-gray-300 mb-4">“Nunca imaginei que um perfume poderia me representar tão bem. A consultoria foi reveladora.”</p>
            <p className="font-semibold text-[#d4af37]">— Carla Mendes</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-[#a88932]">
            <p className="italic text-gray-300 mb-4">“É como se eu tivesse recebido uma fragrância feita sob medida. Que experiência única!”</p>
            <p className="font-semibold text-[#d4af37]">— Rafael Oliveira</p>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="bg-black py-24 px-6 text-center">
        <h2 className="text-3xl font-serif mb-4 text-[#d4af37]">Conheça Nosso Catálogo</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-300">
          Explore as fragrâncias autorais da MParfum e descubra aquelas que mais se conectam com sua história.
        </p>
        <a
          href="/catalogo.pdf"
          target="_blank"
          className="inline-block bg-[#5c4c1d] hover:bg-[#7a642a] transition text-white py-3 px-8 rounded-full text-base"
        >
          Acessar Catálogo Completo
        </a>
      </section>

      {/* Chamada Final */}
      <section className="bg-[#111] py-24 px-6 text-center">
        <h2 className="text-3xl font-serif text-[#d4af37]">Você não escolhe um MParfum. Ele escolhe você.</h2>
        <p className="mt-6 max-w-xl mx-auto text-gray-300">
          Se algo nesta página tocou sua curiosidade ou sua intuição, talvez seja hora de agendar sua experiência. Porque um verdadeiro perfume é mais do que cheiro: é presença, memória e verdade.
        </p>
        <a
          href="https://wa.me/SEUNUMERO"
          className="inline-block mt-8 bg-[#a88932] hover:bg-[#c1a640] transition text-white py-3 px-8 rounded-full text-base"
        >
          Quero encontrar meu MParfum
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center text-sm space-y-2 border-t border-[#a88932]">
        <p>© 2025 MParfum • Todos os direitos reservados</p>
        <div>
          <a href="#" className="underline text-white/80 hover:text-white mx-2">Instagram</a>
          <a href="#" className="underline text-white/80 hover:text-white mx-2">WhatsApp</a>
          <a href="#" className="underline text-white/80 hover:text-white mx-2">Política de Privacidade</a>
        </div>
      </footer>
    </main>
  );
}

  