import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Maria Luiza',
      categoria: enums.Categoria.FAMILIA,
      email: 'testeJuan@gmail.com',
      tel: '11912345678',
      id: 1
    },
    {
      nome: 'Jobeane',
      categoria: enums.Categoria.FAMILIA,
      email: 'testeAndrea@gmail.com',
      tel: '11912345678',
      id: 2
    },
    {
      nome: 'Ana Beatriz',
      categoria: enums.Categoria.FAMILIA,
      email: 'testeBeatriz@gmail.com',
      tel: '11912345678',
      id: 3
    },
    {
      nome: 'Diego Ribeiro',
      categoria: enums.Categoria.TRABALHO,
      email: 'testeFelipe@gmail.com',
      tel: '11912345678',
      id: 4
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um cadastro com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
