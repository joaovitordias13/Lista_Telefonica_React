import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral'
import ListaDeContatos from '../../container/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostratFiltros />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)
export default Home
