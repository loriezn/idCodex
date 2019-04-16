export interface Profile {
  active: boolean;
  id: number;
  name: {
    first: string;
    middle: string;
    last: string;
  };
  dob: string;
  licence: {
    number: string;
    expiry: string;
    card: number;
    back: number;
  };
  medicare: {
    number: number;
    ref: number;
    expiry: string;
  };
  tax: {
    tfn: string;
    abn: string;
  };
  creditRating: {
    score: number;
    rating: string;
  };
}
