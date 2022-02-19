import { useMemo } from 'react'

const getErrors = (validateSchema: any, stringToValidate: string) => {
  try {
    validateSchema.validateSync(stringToValidate, {
      abortEarly: false,
      strict: false,
    })
    return []
  } catch (err: any) {
    return err?.errors
  }
}

const useYupFieldValidator = (
  validateSchema: any,
  stringToValidate: string
): string[] => {
  return useMemo(() => {
    return getErrors(validateSchema, stringToValidate)
  }, [validateSchema, stringToValidate])
}

export default useYupFieldValidator
