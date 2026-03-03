import { LucideShieldCheck, LucideBriefcase, LucideTrendingUp, LucideArrowRight, LucideCheckCircle2, LucideMail, LucidePhone, LucideMapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Singulare
              </span>
              <span className="ml-2 text-sm font-medium text-gray-500 uppercase tracking-wider hidden sm:block">
                Contabilidade
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#inicio" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Início</a>
              <a href="#servicos" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Contato</a>
            </div>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Fale Conosco
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-linear-to-l from-blue-50 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Contabilidade <span className="text-indigo-600">estratégica</span> para o crescimento do seu negócio
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Na Singulare, unimos tecnologia e expertise humana para oferecer soluções contábeis personalizadas. Focamos no seu sucesso financeiro enquanto você foca no que realmente importa: sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group cursor-pointer">
                  Começar Agora
                  <LucideArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer">
                  Nossos Serviços
                </button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  {[
                    "Gestão Fiscal e Tributária",
                    "Abertura e Regularização de Empresas",
                    "Planejamento Estratégico Financeiro",
                    "Folha de Pagamento Digital"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold">
                        <LucideCheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluções Completas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desenvolvemos processos inteligentes para facilitar sua rotina empresarial e garantir total conformidade com a legislação.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <LucideBriefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessoria Empresarial</h3>
              <p className="text-gray-600 leading-relaxed">
                Suporte completo desde a abertura até a consolidação do seu negócio no mercado.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <LucideShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança Fiscal</h3>
              <p className="text-gray-600 leading-relaxed">
                Auditoria e conformidade para que sua empresa esteja sempre em dia com o fisco.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <LucideTrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultoria Financeira</h3>
              <p className="text-gray-600 leading-relaxed">
                Análise de dados para decisões mais precisas e rentáveis para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua gestão?</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
                Deixe a burocracia com a gente e foque no crescimento da sua empresa. Entre em contato para uma consultoria gratuita.
              </p>
              <button className="bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg cursor-pointer">
                Agendar Consultoria
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 border-4 border-white rounded-full"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 border-4 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6 text-white">
                <span className="text-2xl font-bold">Singulare</span>
                <span className="ml-2 text-sm font-medium uppercase tracking-wider">Contabilidade</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Singulare Contabilidade: Oferecendo excelência e inovação em serviços contábeis em Juiz de Fora e região.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contatos</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <LucidePhone className="w-5 h-5 text-indigo-400" />
                  <span>(32) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <LucideMail className="w-5 h-5 text-indigo-400" />
                  <span>contato@singulare.com.br</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Localização</h4>
              <div className="flex gap-3">
                <LucideMapPin className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <address className="not-italic text-sm leading-relaxed">
                  Avenida Presidente Itamar Franco 3840, Sala 403<br />
                  Cascatinha, CEP 36.033-318<br />
                  Juiz de Fora, Minas Gerais
                </address>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              <p>&copy; 2026 Singulare Contabilidade. Todos os direitos reservados.</p>
              <p className="mt-1 text-gray-500 italic">CNPJ: 50123581000127</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
