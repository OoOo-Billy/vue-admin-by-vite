import { defineComponent, reactive } from 'vue';
import { SearchFormRule } from './form';

const SearchForm = defineComponent<{
  rule: SearchFormRule[];
}>((props, { emit }) => {
  const getInitialData: () => Record<string, unknown> = () => {
    const result = Object.create(null);
    props.rule.forEach(rule => (result[rule.field] = rule.value ?? null));
    return result;
  };

  const model = reactive(getInitialData());

  const submitForm = () => {
    emit('submit', model);
  };
  const resetForm = () => {
    let data = getInitialData();
    for (let key in model) model[key] = data[key];

    emit('reset');
  };

  const _renderFormItem = () => {
    return props.rule.map(rule => (
      <el-form-item label={rule.label}>{_renderFormField(rule)}</el-form-item>
    ));
  };

  const _renderFormField = (rule: SearchFormRule) => {
    const placeholder = rule.placeholder;
    switch (rule.type) {
      case 'input':
        return (
          <el-input
            v-model={model[rule.field]}
            placeholder={placeholder}
          ></el-input>
        );
      case 'select':
        const options = rule.options || [];
        return (
          <el-select
            v-model={model[rule.field]}
            placeholder={placeholder}
            options={options}
          ></el-select>
        );

      default:
        return null;
    }
  };

  return () => (
    <el-card>
      <el-form model={model}>
        {_renderFormItem()}
        <el-form-item>
          <el-button type="primary" onClick={submitForm}>
            搜 索
          </el-button>
          <el-button onClick={resetForm}>重 置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  );
});

SearchForm.props = {
  rule: Array,
};

export default SearchForm;
