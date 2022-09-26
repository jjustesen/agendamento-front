import { rstApi } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { iClient, iEmploye, iMeet } from 'shared/interface/public'

export interface iMeetsControllerResponse extends iMeet {
  client: iClient
  employe: iEmploye
}

interface iMeetsControllerShowParams {
  date?: string | undefined
  employe?: string | undefined
}

export const useQueryMeetsControllerShow = (params: iMeetsControllerShowParams) =>
  useQuery<iMeetsControllerResponse[]>([`MeetsController-${params.date}-${params.employe}`], () =>
    rstApi({
      url: 'https://agendamentos2.herokuapp.com/meets/',
      method: 'GET',
      params: params
    })
  )

useQueryMeetsControllerShow.queryKey = (params: iMeetsControllerShowParams) => [
  `MeetsController-${params.date}-${params.employe}`
]

export const useMutationMeetsControllerCancel = ({ employe_id }: { employe_id: string }) =>
  useMutation(() => {
    return rstApi({
      url: 'https://agendamentos2.herokuapp.com/meets/' + employe_id + '/cancel/',
      method: 'post'
    })
  })
