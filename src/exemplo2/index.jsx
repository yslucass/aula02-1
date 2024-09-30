import { useEffect, useState } from "react";

export default function App() {
  
  const [fotos, setFotos] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados = await resposta.json();        
        setFotos(dados);
    }
    buscarUsuario();
  }, [])

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {fotos.map(fotos => (
          <li key={fotos.id}>
            <h2>{fotos.title}</h2>
            <p>{fotos.albumId}</p>   
            <img src={fotos.url} alt={fotos.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
