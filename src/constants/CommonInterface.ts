
type statusType = 'idle' | 'success' | 'loading' | 'failed'


interface ResponseError {
  message: string
  status: string
}

interface CommonInitialState {
  status: statusType
  error: ResponseError
}

export {
  CommonInitialState,
  statusType,
  ResponseError,
}