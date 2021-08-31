export type FieldType = 'input' | 'select';

export interface SearchFormRule {
  field: string;
  label: string;
  type: FieldType;
  value?: unknown;
  placeholder?: string;
  options?: { value: unknown; label: string }[];
}
