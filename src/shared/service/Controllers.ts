import { rstApi } from './api'
import { useMutation } from '@tanstack/react-query'
import { iAuthResponse } from 'shared/providers/auth'

interface IAuthLogin {
  email: string
  password: string
}

export const useMutationControllerAuthLogin = () =>
  useMutation<iAuthResponse, unknown, IAuthLogin>((e: IAuthLogin) => {
    return rstApi({
      url: 'https://agendamentos2.herokuapp.com/auth',
      method: 'post',
      payload: e
    })
  })
