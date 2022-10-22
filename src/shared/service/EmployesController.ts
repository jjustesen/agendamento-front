import { rstApi } from './api'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { iEmploye } from 'shared/interface/public'

export type iEmployesControllerResponse = iEmploye

export const useQueryEmployesController = (config?: UseQueryOptions<iEmployesControllerResponse[], unknown>) =>
  useQuery<iEmployesControllerResponse[]>(
    ['EmployesController'],
    () =>
      rstApi({
        url: 'https://agendamentos2.herokuapp.com/employes/',
        method: 'GET'
      }),
    config
  )

useQueryEmployesController.querykey = ['EmployesController']

export type iEmployesControllerShowResponse = iEmploye

export const useQueryEmployesControllerShow = ({ employe_id }: { employe_id: string }) =>
  useQuery<iEmployesControllerShowResponse>(['EmployesController'], () =>
    rstApi({
      url: 'https://agendamentos2.herokuapp.com/employes/' + employe_id + '/',
      method: 'GET'
    })
  )

useQueryEmployesControllerShow.querykey = ({ employe_id }: { employe_id: string }) => [
  'EmployesControllerShow' + employe_id
]

interface iEmployesControllerUpdatePayload {
  name: string
  email: string
  start_time: string
  end_time: string
  time_per_work: string
}

export const useMutationEmployesControllerUpdate = ({ employe_id }: { employe_id: string }) =>
  useMutation((payload: iEmployesControllerUpdatePayload) => {
    return rstApi({
      url: 'https://agendamentos2.herokuapp.com/employes/' + employe_id + '/',
      method: 'PUT',
      payload: payload
    })
  })
