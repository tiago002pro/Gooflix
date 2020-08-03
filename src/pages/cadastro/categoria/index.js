import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm  } = useForm(valoresIniciais);
  
  const [categorias, setCategorias] = useState([]);

  // useEffect(() => {
  //   const URL_TOP  = window.location.hostname.includes('localhost')
  //     ? 'http´://localhost:3000'
  //     : 'https://devgooflix.herokuapp.com/categorias';
  //   fetch(URL_TOP)
  //     .then(async (respostaDoServidor) => {
  //       const resposta = await respostaDoServidor.json();
  //       setCategorias([
  //         ...resposta,
  //       ])
  //     })
  // });

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://devgooflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange} />

        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange} />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField label="Cor" type="color" name="cor" value={values.cor} onChange={handleChange} />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {/* {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )} */}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
          })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
