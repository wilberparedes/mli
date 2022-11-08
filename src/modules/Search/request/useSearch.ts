import { useContext } from 'react'
import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import { AxiosContext } from '../../../contexts/apiProvider/apiProvider'
import { configAuth } from '../../../config'
import { search } from '../../../react-query/query.keys'
import { endPoints } from '../../../react-query/endpoints'
import { UseSearchProps } from './useSearch.props'

export const useSearch = ({ query, onSuccess, onError }: UseSearchProps) => {
  const axios = useContext(AxiosContext)

  const getProductsBySearch = async ({ queryKey }) => {
    if (!axios) return null
    const q = queryKey[1]

    axios.defaults.baseURL = configAuth.baseUrl
    const response: AxiosResponse = await axios.get(`${endPoints.search}?q=${q}`)

    if (!response) {
      return null
    }

    return response.data
  }

  return useQuery([search, query], getProductsBySearch, {
    onSuccess,
    onError,
  })
}
