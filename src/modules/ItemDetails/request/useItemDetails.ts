import { useContext } from 'react'
import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import { AxiosContext } from '../../../contexts/apiProvider/apiProvider'
import { configAuth } from '../../../config'
import { productDetails } from '../../../react-query/query.keys'
import { endPoints } from '../../../react-query/endpoints'
import { ResponseItemWithDescription, UseItemDetailsProps } from './useItemDetails.props'

export const useItemDetails = ({
  onError,
  onSuccess,
  productId,
}: UseItemDetailsProps) => {
  const axios = useContext(AxiosContext)

  const getItemDetails = async ({ queryKey }) => {
    if (!axios) return null
    const q = queryKey[1]
    axios.defaults.baseURL = configAuth.baseUrl
    const response: AxiosResponse<ResponseItemWithDescription> = await axios.get(
      `${endPoints.itemDetails}/${q}`
    )
    if (!response?.data) {
      return null
    }
    return response.data
  }

  return useQuery([productDetails, productId], getItemDetails, {
    onSuccess,
    onError,
  })
}
