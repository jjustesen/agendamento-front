import { rstApi } from './api'
import { useQuery } from '@tanstack/react-query'
import { iEmploye } from 'shared/interface/public'

export type iEmployesControllerResponse = iEmploye

export const useQueryEmployesController = () =>
  useQuery<iEmployesControllerResponse[]>(['EmployesController'], () =>
    rstApi({
      url: 'https://agendamentos2.herokuapp.com/employes/',
      method: 'GET'
    })
  )

useQueryEmployesController.querykey = ['EmployesController']
