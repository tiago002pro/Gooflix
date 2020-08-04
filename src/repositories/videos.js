import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
    return fetch(`${URL_CATEGORIES}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error('Não foi possível pegas os dados :(');
        });
}

export default {
    create,
};