import React from 'react'

//OMPORTAÇÃO DAS FUNÇÕES UTILIZADAS NAS ROTAS
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//IMPORTA OS ARQUIVOS "HTML" DAS PAGINA
import Landing from './pages/landing'
import OrphanagesMap from './pages/orphanagesMap'

//DEFINE AS ROTAS BASEADO NA NO CAMINHO ELES DEVEMS ESTAR DENTRO DA TAG BROWSERROUTER OBRIGATORIAMENTE E OPCIONALMENTE DA TAG SWITCH PARA FAZER COM QUE SOMENTE UMA ROTA SEJA ABERTA POR VEZ

function routes() {
    return (
        <BrowserRouter>
            <Switch>

                {/* ASTAGS ROUTE DEFINE O CAMINHO COM O ATRIBUTO PATH E O COMPONENTE A SER CHAMADO NA INDEX USA-SE A TAG EXACT PARA SO ELA SER CHAMADA NA INDEX */}
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    )
}


export default routes