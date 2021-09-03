import { Ref } from 'vue';

export type FieldType = 'input' | 'select';

export interface SearchFormRule {
  field: string;
  label: string;
  type: FieldType;
  value?: unknown;
  placeholder?: string;
  options?: SelectOption[] | Ref<SelectOption[]>;
  props?: object;
}
