import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import { toast } from 'react-toastify';

export default function Categoria() {
	const initialData = { title: '', description: '', color: '' };
	const { handleChange, values, clearForm } = useForm(initialData);

	function handleSubmit(e) {
		e.preventDefault();

		categoriasRepository
			.create({
				titulo: values.title,
				descricao: values.description,
				cor: values.color,
			})
			.then(() => {
				toast.success('Categoria cadastrada.');
				console.log('Cadastrado com sucesso!');
				clearForm();
			});
	}

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
				<h1>Cadasto de categorias</h1>
				<FormField
					label="Título"
					type="text"
					name="title"
					value={values.title}
					onChange={handleChange}
				/>
				<FormField
					label="Descrição"
					type="textarea"
					name="description"
					value={values.description}
					onChange={handleChange}
				></FormField>
				<FormField
					label="Cor"
					type="color"
					name="color"
					value={values.color}
					onChange={handleChange}
				/>
				<Button type="submit">Cadastrar</Button>
        <br/> <br/>
				<Link to="/cadastro/video">Cadastrar Vídeo</Link>
			</form>
      <br/> <br/>
    </PageDefault>
  );
}

