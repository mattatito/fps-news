import React, { useState, useEffect } from "react";

const positiveMessages = [
  "Acredite no seu potencial ✨",
  "Seu sorriso pode iluminar o dia de alguém 😊",
  "Você é mais forte do que imagina 💪",
  "Pequenos passos também levam ao sucesso 🚶",
  "A gratidão transforma a vida 🙏",
  "Cada dia é uma nova oportunidade 🌟",
  "Você tem um brilho único 🌈",
  "Respire fundo e siga com confiança 🌬️",
  "O universo está ao seu favor 🌍",
  "Seja gentil consigo mesmo 💖",
  "Toda jornada começa com um primeiro passo 🏁",
  "Confie no processo ⏳",
  "Você é capaz de coisas incríveis 🚀",
  "Celebre suas conquistas, grandes ou pequenas 🎉",
  "A vida é cheia de possibilidades 🔮",
  "Espalhe gentileza e receba em dobro ❤️",
  "Faça o seu melhor e deixe o resto fluir 🌊",
  "Paciência e persistência levam longe 🌱",
  "A felicidade está nas pequenas coisas 🍀",
  "Você merece amor e respeito 🏆",
  "Cada desafio traz um aprendizado 🧩",
  "Sonhe grande e vá atrás 🎯",
  "Valorize cada instante ⏰",
  "Você é uma inspiração para alguém 💡",
  "O tempo certo sempre chega 🔑",
  "Acredite: tudo tem um propósito 🌀",
  "Você tem tudo o que precisa dentro de si 🔥",
  "Sua energia cria sua realidade ⚡",
  "Hoje é um ótimo dia para ser feliz ☀️",
  "O bem que você faz sempre retorna 🌻",
  "Seu esforço vale a pena 💫",
  "Espalhe luz por onde passar 🔆",
  "Seja sua própria fonte de felicidade 🌞",
  "A vida é cheia de surpresas boas 🎈",
  "A sorte está ao seu lado 🐞",
  "Aproveite cada amanhecer 🌄",
  "Cada dia é um novo capítulo 📖",
  "Suba a montanha dos seus sonhos 🏔️",
  "Harmonia e equilíbrio te levam longe 🎶",
  "Encontre alegria nas pequenas coisas 🎭",
  "Pinte a vida com cores vibrantes 🖌️",
  "O caminho certo se revela com o tempo 👣",
  "Cuide bem do seu corpo e mente 🍎",
  "Enfrente desafios com coragem 🌊",
  "Transformação faz parte da jornada 🦋",
  "Você tem tudo para vencer 🥇",
  "O mundo fica mais bonito com seu sorriso 🌸",
  "O futuro é construído com suas escolhas 🛤️",
  "Aprenda algo novo todos os dias 🔎",
  "Respire e renove suas energias 🌲",
  "Abrace a vida com gratidão 🤗",
  "Cultive boas vibrações 💐",
  "A paz interior é seu maior presente 🧘",
  "Foque no que realmente importa 🎯",
  "Navegue com confiança pelo seu destino 🚢",
  "Liberdade é a chave da felicidade 🐦",
  "Encontre aconchego nas pequenas coisas 🏡",
  "Desafios fazem parte do crescimento 🌀",
  "Sua autenticidade é valiosa 💎",
  "Você pode mudar o mundo ao seu redor 🌍",
  "Gentileza sempre volta em dobro 🎀",
  "Desfrute o momento presente 🍂",
  "Paz começa dentro de você 🕊️",
  "Sonhe grande e acredite 💭",
  "Sua dedicação te leva longe 🏅",
  "O universo conspira a seu favor 🖖",
  "Faça de hoje um dia memorável 📆",
  "Conecte-se com quem te faz bem 🔗",
  "Mesmo nas noites escuras, há luz 🌛",
  "Renovação faz parte da jornada 🍃",
  "A felicidade dança ao ritmo do seu coração 🎵",
  "Você é digno de amor e sucesso 👑",
  "Avance no seu próprio tempo 🚦",
  "Aproveite o passeio da vida 🎡",
  "Construa a vida dos seus sonhos 🛠️",
  "Seu caminho está cheio de possibilidades 🛤️",
  "Pequenos prazeres tornam o dia melhor 🍰",
  "Você está exatamente onde precisa estar 📍",
  "Aprenda algo novo e expanda horizontes 🎓",
  "Explore novos caminhos e oportunidades 🗺️",
  "Encare desafios com estilo 🕶️",
  "Mantenha o foco e siga em frente 🎯",
  "A jornada é tão importante quanto o destino 🚗",
  "Viva sua verdade com autenticidade 🎭",
  "Suas palavras têm poder, use-as com sabedoria 💬",
  "Pequenos prazeres tornam o dia mais gostoso 🍕",
  "O melhor ainda está por vir 🛫",
  "Tire um momento para relaxar e recarregar 🏖️",
  "Seu brilho único ilumina o mundo 🦄",
  "Energize-se com gratidão e positividade 🔋",
  "Sua presença faz a diferença 🌍",
  "Amor e bondade sempre encontram seu caminho 🥰",
  "Siga com leveza e alegria 🐬",
  "Cada dia é um presente 🎀",
  "Ilumine seu caminho e inspire outros 🌞",
  "Compartilhe boas energias e transforme vidas 📢",
];

function Home() {
  const randomPositiveMessage = () =>
    positiveMessages[Math.floor(Math.random() * positiveMessages.length)];

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    setMensagem(randomPositiveMessage());
  }, []);

  const styles = {
    body: {
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    card: {
      backgroundColor: "#161b22",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "300px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      textAlign: "start",
    },
    message: {
      fontSize: "16px",
      paddingTop: "16px",
      paddingBottom: "16px",
    },
    button: {
      marginTop: "15px",
      backgroundColor: "#238636",
      border: "none",
      padding: "8px 12px",
      color: "#ffffff",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  function showAnotherPositiveMessage() {
    setMensagem(randomPositiveMessage());
  }

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <div style={styles.title}>💡 Mensagem Positiva</div>
        <div style={styles.message}>{mensagem}</div>
        <button style={styles.button} onClick={showAnotherPositiveMessage}>
          🔄 Nova Mensagem
        </button>
      </div>
    </div>
  );
}

export default Home;
