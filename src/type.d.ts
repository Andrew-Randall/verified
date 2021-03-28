interface PhoneNumberType {
  phoneNumber: string;
}

interface PhoneNumber extends PhoneNumberType {
  id: number;
  phoneNumber?: string;
}

interface PhoneNumberProps {
  phoneNumber: PhoneNumberType;
}

interface VerifiedDataProps{
  verifiedData: VerifiedData
}

interface VerifiedData {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type: string;
}

type ApiDataType = {
  message?: string;
  status: number;
  statusText: string;
  headers: string;
  config: any;
  data: any;
  valid?: boolean;
  number?: string;
  local_format?: string;
  international_format?: string;
  country_prefix?: string;
  country_code?: string;
  country_name?: string;
  location?: string;
  carrier?: string;
  line_type?: string;
}
