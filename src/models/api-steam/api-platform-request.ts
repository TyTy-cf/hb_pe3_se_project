
export interface ApiPlatformRequest<T> {
  "hydra:member": Array<T>;
  "hydra:totalItems": number;
  "hydra:view": {
    "hydra:first": string;
    "hydra:last": string;
    "hydra:next": string;
    "hydra:previous": string;
  };
}
