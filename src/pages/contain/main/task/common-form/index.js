import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CommonForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
    this.props.handleReset();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        {
          this.props.formConfig.map(item => {
            return (
              <FormItem key={item.fieldName}>
                {getFieldDecorator(item.fieldName, {
                  rules: item.rule ? [{ required: true, message: item.rule }] : '',
                })(
                  <Input {...item.props} />
                )}
              </FormItem>
            )
          })
        }
        <FormItem>
          <Button type="primary" htmlType="submit">搜索</Button>
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.handleReset}>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
export default Form.create()(CommonForm)