import axios, { AxiosResponse } from "axios"


const baseUrl: string = "http://localhost:7000/api/verifier/phoneNumbers/"

export const getVerifiedData = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const verifiedData: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl
    )
    console.log(verifiedData)
    return verifiedData.data
  } catch (error) {
    throw new Error(error)
  }
}

export const verifyNumber = async (
  formData: PhoneNumberType
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const phoneNumber: Omit<PhoneNumberType, "id"> = {
      phoneNumber: formData.phoneNumber
    }
    const sendPhoneNumber: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl,
      phoneNumber
    )
    return sendPhoneNumber
  } catch (error) {
    throw new Error(error)
  }
}