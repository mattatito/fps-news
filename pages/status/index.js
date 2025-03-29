import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <StatusData />
    </>
  );
}

function StatusData() {
  const response = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return (
    <>
      <UpdatedAt data={response.data} isLoading={response.isLoading} />
      <DatabaseHealth data={response.data} isLoading={response.isLoading} />
    </>
  );
}

function UpdatedAt({ data, isLoading }) {
  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DatabaseHealth({ data, isLoading }) {
  const databaseVersionText = data?.dependencies.database.version;
  const maxConnectionsText = data?.dependencies.database.max_connections;
  const oppenedConnectionsText = data?.dependencies.database.opened_connections;

  function handleLoadingData(text) {
    if (isLoading && !text) {
      return "Carregando...";
    }

    return text;
  }
  return (
    <>
      <div>
        Versão do banco de dados: {handleLoadingData(databaseVersionText)}
      </div>
      <div>Máximo de conexões: {handleLoadingData(maxConnectionsText)}</div>
      <div>
        Quantidade de conexões abertas:{" "}
        {handleLoadingData(oppenedConnectionsText)}
      </div>
    </>
  );
}
