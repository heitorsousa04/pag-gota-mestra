import React, { useState } from 'react';

const allComments = [
  { name: "Fernanda R.", time: "3 dias atrás", stars: 5, text: "Eu tinha muito medo de usar receita caseira e acabar queimando minha orquídea de vez. Mas a diluição da Gota Mestra é tão certinha que ela reagiu em menos de 3 dias sem sofrer nenhum dano. Nunca vi nada igual! Já indiquei pra minha vizinha 🌿" },
  { name: "Camila T.", time: "5 dias atrás", stars: 5, text: "sempre achei q tinha dedo podre porque tudo morria na minha mão kkk mas com o dossie entendi q o problema era o substrato compactado q eu comprava e nao eu!! finalmente vi uma folha nova brotar na minha monstera 😭🌱" },
  { name: "Juliana M.", time: "1 semana atrás", stars: 5, text: "Tava prestes a jogar minha Zamioculca fora, ela tava travada há meses. Segui o passo a passo e ela soltou TRÊS brotos de uma vez. Fui conferir duas vezes achando que tava enganada kkkkk" },
  { name: "Patrícia S.", time: "1 semana atrás", stars: 5, text: "Passava horas vendo video no youtube e cada um dizia uma coisa diferente. O Dossie é outra coisa, abro, comparo a foto com minha planta e ja sei o que fazer. Valeu cada centavo!" },
  { name: "Renata K.", time: "2 semanas atrás", stars: 5, text: "achei q ia ter q correr em loja especializada mas ja tinha tudo na minha lavanderia e cozinha 😱 fiz a Gota Mestra em 5 minutinhos e minha Jiboia começou a brotar em 2 dias!!" },
  { name: "Larissa F.", time: "2 semanas atrás", stars: 5, text: "Quando vi cochonilha na minha Monstera entrei em pânico. Usei o Dossiê Invasão Zero e eliminei tudo com ingredientes da minha cozinha. Minha selva urbana tá intacta 💚" },
  { name: "Márcia Silveira", time: "1 dia atrás", stars: 5, text: "Luciana vc é um anjo! Minha monstera tava com as folha tudo amarela e murcha, achei que ia perder ela. Apliquei a gota mestra e hj ela ja ta bem mais firme. vlw msm!" },
  { name: "Ricardo Santos", time: "2 dias atrás", stars: 4, text: "confesso que achei q era so mais um guia de internet, mas o negocio de ferver na terra eh vdd msm kkk. meu cacto q tava apodrecendo parece q parou de piorar. vamo ver nos prox dias." },
  { name: "Juliana M.", time: "3 dias atrás", stars: 3, text: "Comprei ontem e ja to lendo. O material eh bem explicativo mas achei q ia ter mais fotos de cactos especificos. Mas as receitas parecem boas, vou testar hj na minha jiboia." },
  { name: "Thiago Oliveira", time: "4 dias atrás", stars: 5, text: "Comprei o acesso básico e me arrependi, tive q fazer o upgrade pro completo pq o guia de pragas eh mto necessario pra quem mora em ap. agr sim minha urban jungle ta protegida." },
  { name: "Beatriz F.", time: "1 semana atrás", stars: 4, text: "Minha zamioculca tava travada faz quase um ano sem broto nenhum. Fiz o adubo que ela ensina nos bonus e ja apareceu um olhinho verde no caule. mto feliz!!" },
  { name: "Carla Souza", time: "2 semanas atrás", stars: 5, text: "Nunca mais compro terra preta em floricultura! O capitulo do substrato blindado abriu meus olhos. Minhas gorduchas estao lindas e o vaso nao fica mais encharcado." },
  { name: "Marcos Paulo", time: "2 dias atrás", stars: 5, text: "A orquidea da minha esposa tava sentida, quase sem raiz nenhuma. O dossie ajudou a identificar q era fungo. a gota mestra salvou o presente de aniversario dela." },
  { name: "Fernanda Lima", time: "5 dias atrás", stars: 4, text: "Adorei o bonus de plant styling! meu ap mudou de cara soh mudando as plantas de lugar. soh nao dou 5 estrelas pq demorei um pouco pra achar o email de acesso." },
  { name: "Sandra Regina", time: "1 mês atrás", stars: 5, text: "Gente, funciona de vdd. Eu nao tinha dedo verde nenhum, matava ate arruda kkk. Agora minhas plantas nao morrem mais e o guia visual ajuda mto a saber o que cada mancha significa." },
  { name: "João Victor", time: "6 dias atrás", stars: 3, text: "bom o material mas podia ser um pouco mais curto. muita informaçao. mas as receitas funcionam, os ingrediente eu ja tinha tudo na lavanderia de casa." },
  { name: "Luciana Costa", time: "2 dias atrás", stars: 5, text: "O guia de detox de folhas deixou minha ficus com um brilho de vitrine real. Parece q passei verniz mas foi so o segredo que a Lu ensina no bonus. recomendo mto." },
  { name: "Patrícia Gomes", time: "1 semana atrás", stars: 4, text: "Cochonilha eh um inferno né? Quase perdi minha jiboia mas o dossie invasao zero ajudou a acabar com tudo sem precisar usar veneno quimico. meus gatos agradecem!" },
  { name: "Roberto M.", time: "3 dias atrás", stars: 5, text: "Descobri que tava afogando minha planta msm regando pouco. a terra tava compactada demais igual ela explica. O substrato blindado eh vida." },
  { name: "Aline Pereira", time: "4 dias atrás", stars: 5, text: "O efeito da gota fervendo na terra eh mto doido kkk parece que a planta respira na hora. Minha zamioculca black agradece o resgate." },
  { name: "Daniela Silva", time: "2 semanas atrás", stars: 4, text: "Peguei o completo por causa do checklist de iluminaçao. Finalmente entendi onde por cada vaso no meu ap, pq antes eu botava tudo no sol e queimava as ponta tudo." },
  { name: "Felipe Braga", time: "8 dias atrás", stars: 5, text: "Achei os ingrediente mto facil de achar, ja tinha quase tudo em casa. O guia visual eh otimo pq eu nunca sabia se a mancha era falta de agua ou fungo." },
  { name: "Tânia Mara", time: "2 dias atrás", stars: 3, text: "comprei o material mas achei q ia vim pelo correio kkk mas eh digital. mas ja to lendo aqui no cel msm e as dicas sao boas." },
  { name: "Helena Santos", time: "3 dias atrás", stars: 5, text: "Minha orquidea tava mto sentida e agora depois da gota mestra soltou uma haste floral nova. To mto feliz e emocionada de ver ela voltando." },
  { name: "Paulo Roberto", time: "2 semanas atrás", stars: 5, text: "O melhor investimento pra quem quer ter uma urban jungle bonita de vdd sem gastar fortuna em garden center toda semana." },
  { name: "Solange B.", time: "4 dias atrás", stars: 4, text: "Apliquei hj a receita nas minhas suculentas gorduchas. O material eh mto lindo e cheio de foto, facilita mto pra quem ta começando agora." },
  { name: "Mariana T.", time: "10 dias atrás", stars: 5, text: "Ja fiz 3 mudas de zamioculca soh com o bonus de fabrica de mudas. Vlw mto o investimento, o guia se paga sozinho soh com o que economizei de comprar planta nova." },
  { name: "Gustavo N.", time: "12 dias atrás", stars: 4, text: "tava bem cético no começo mas o resultado em 24h eh real msm. A planta fica com a folha mais firme, parece que tomou uma vitamina. aprovado." },
  { name: "Cláudia R.", time: "5 dias atrás", stars: 5, text: "Lu explica mto bem, linguagem simples pra gente que eh dona de casa e nao entende nada de botanica. Minhas filhas estao agradecidas." },
  { name: "André Luiz", time: "1 semana atrás", stars: 4, text: "O segredo eh o substrato blindado msm. A terra preta de mercado soh matava minhas planta por dentro enquanto por fora parecia bem. agora entendi o ciclo." },
];

const INITIAL_VISIBLE = 6;
const LOAD_MORE = 5;

export function Comments() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [stars, setStars] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [userComments, setUserComments] = useState<typeof allComments>([]);

  const allVisible = [...allComments, ...userComments];
  const visible = allVisible.slice(0, visibleCount);
  const hasMore = visibleCount < allVisible.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setUserComments([...userComments, {
      name: name.trim(),
      time: "agora mesmo",
      stars,
      text: text.trim()
    }]);
    setName('');
    setText('');
    setStars(5);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2 text-ink">
          O Que Dizem Sobre o Dossiê
        </h2>
        <p className="text-center text-gray-400 mb-12 text-sm">
          +{allVisible.length + 847} comentários
        </p>

        <div className="space-y-6 mb-8">
          {visible.map((comment, i) => (
            <div key={i} className="border-b border-[#e5e5d8] pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#2d6a4f] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {comment.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-ink">{comment.name}</p>
                    <p className="text-xs text-gray-400">{comment.time}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 shrink-0">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className={s < comment.stars ? "text-yellow-400 text-sm" : "text-gray-200 text-sm"}>★</span>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-3">{comment.text}</p>

              <button
                onClick={() => setReplyingTo(replyingTo === i ? null : i)}
                className="text-xs text-primary font-medium hover:underline"
              >
                ↩ Responder
              </button>

              {replyingTo === i && (
                <div className="mt-3 ml-4 border-l-2 border-[#e5e5d8] pl-4">
                  <textarea
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                    rows={2}
                    placeholder="Escreva sua resposta..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-primary resize-none mb-2"
                  />
                  <button
                    onClick={() => { setReplyingTo(null); setReplyText(''); }}
                    className="text-xs bg-[#2d6a4f] text-white px-4 py-1.5 rounded-lg font-medium hover:bg-[#1b4332] transition-colors"
                  >
                    Enviar resposta
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mb-12">
            <button
              onClick={() => setVisibleCount(v => v + LOAD_MORE)}
              className="text-sm text-gray-400 hover:text-primary transition-colors underline underline-offset-4"
            >
              ver mais comentários
            </button>
          </div>
        )}

        <div className="bg-[#fafaef] rounded-2xl p-6 border border-[#e5e5d8]">
          <h3 className="font-display font-bold text-lg text-ink mb-1">Deixe um comentário</h3>
          <p className="text-xs text-gray-400 mb-6">O seu e-mail não será publicado.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Comentário *</label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary resize-none"
                placeholder="Compartilhe sua experiência..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Nome *</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-primary"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Avaliação</label>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStars(s)}
                      className={`text-2xl transition-colors ${s <= stars ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {submitted && (
              <p className="text-green-600 text-sm font-medium">Comentário enviado! Obrigada pelo feedback 🌿</p>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#1b4332] text-white font-display font-bold uppercase tracking-widest text-sm hover:bg-[#2d6a4f] transition-all"
            >
              PUBLICAR COMENTÁRIO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
