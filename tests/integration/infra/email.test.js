import email from "infra/email";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

describe("infra/email.js", () => {
  test("send()", async () => {
    await orchestrator.deleteAllEmails();

    await email.send({
      from: "MG <contato@MG.com.br>",
      to: "contato@curso.dev",
      subject: "Teste de assunto",
      text: "Texto daora blz",
    });

    const lastEmail = await orchestrator.getLastEmail();

    console.log(lastEmail);
    expect(lastEmail.sender).toBe("<contato@mg.com.br>");
    expect(lastEmail.recipients[0]).toBe("<contato@curso.dev>");
    expect(lastEmail.subject).toBe("Teste de assunto");
    expect(lastEmail.text).toBe("Texto daora blz\n");
  });
});
