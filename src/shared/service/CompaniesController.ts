import { rstApi } from './api'
import { useQuery } from '@tanstack/react-query'

interface ICompaniesControllerShowResponse {
  id: string
  nome: string
  nome_empresa: string
  email: string
  password: string
  document: string
  updated_at: string
  created_at: string
}

export const useQueryCompaniesControllerShow = ({ id }: { id: string }) =>
  useQuery<ICompaniesControllerShowResponse>(['companiesControllerShow'], () =>
    rstApi({
      url: 'https://agendamentos2.herokuapp.com/companies/' + id + '/',
      method: 'GET'
    })
  )

useQueryCompaniesControllerShow.queryKey = ['companiesControllerShow']
