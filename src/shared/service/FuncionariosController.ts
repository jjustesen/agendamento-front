import { rstApi } from './api'
import { useQuery } from '@tanstack/react-query'

export interface IFuncionariosControllerResponse {
  id: string
  id_empresa: string
  nome: string
  email: string
  password: string
  data_inicio: string
  data_fim: string
  time_atend: string
  updated_at: string
  created_at: string
}

export const useQueryFuncionariosController = () =>
  useQuery<IFuncionariosControllerResponse[]>(['FuncionariosController'], () =>
    rstApi({
      url: 'https://agendamentos2.herokuapp.com/funcionarios/',
      method: 'GET'
    })
  )

useQueryFuncionariosController.queryKey = ['FuncionariosController']
