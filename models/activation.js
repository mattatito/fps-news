import email from "infra/email";

async function sendEmailToUser(user) {
  await email.send({
    from: "FpsNews <contato@fpsnews.dev>",
    to: user.email,
    subject: "Ative seu cadastro no FpsNews!",
    text: `${user.username}, clique no link abaixo para ativar seu cadastro no FpsNews:
      
https://link...

Atenciosamente,
Equipe FpsNews.
    `,
  });
}

const activation = {
  sendEmailToUser,
};

export default activation;
