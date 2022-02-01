import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Criptos from '../components/Criptos';
import TablaApi from '../components/TablaApi';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'HOME',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'LISTAS',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'PERFIL',
    component: Perfil,
  },
  {
    id: 4,
    path: '/Criptos',
    title: 'CRIPTOS',
    component: Criptos,
  },
  {
    id: 5,
    path: '/top-cripto',
    title: 'TOP CRIPTO',
    component: TablaApi,
  },
];
