import { createContext } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { configAuth } from '../../config'

export const AxiosContext = createContext<null | AxiosInstance>(null)

export const ApiProvider = ({ children }: any) => {
  const configAxios = {
    baseURL: configAuth.baseUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  const axiosClient = axios.create(configAxios)

  axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    const token = 'wilber paredes'
    // eslint-disable-next-line
    Object.assign(config.headers, { Authorization: `${token}` })
    return config
  })
  return (
    <AxiosContext.Provider value={axiosClient}>
      {children}
    </AxiosContext.Provider>
  )
}
