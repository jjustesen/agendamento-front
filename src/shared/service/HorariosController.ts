import { rstApi } from './api'
import { useQuery } from '@tanstack/react-query'

export interface IHorariosControllerResponse {
  id: string
  id_client: string
  cliente: {
    nome: string
  }
  id_dia: string
  horario_atend: string

  updated_at: string
  created_at: string
}

export const useQueryHorariosControllerShow = ({ id_func }: { id_func: string | undefined }) =>
  useQuery<IHorariosControllerResponse[]>(
    [`HorariosController-${id_func}`],
    () =>
      rstApi({
        url: 'https://agendamentos2.herokuapp.com/horarios/' + id_func + '/',
        method: 'GET'
      }),
    { enabled: !!id_func }
  )

useQueryHorariosControllerShow.queryKey = ({ id_func }: { id_func: string | undefined }) => [
  `HorariosController-${id_func}`
]
