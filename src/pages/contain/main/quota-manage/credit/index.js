import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;
class CompresiveCredit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  handleOk = () => {

  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  handleShowDialog = () => {
    this.setState({
      visible: true
    })
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    let modalPro = {
      title: "Basic Modal",
      visible: this.state.visible,
      onOk: this.handleOk,
      onCancel: this.handleCancel
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal {...modalPro}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="姓名"
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入姓名' }],
            })(
              <Input />
            )}
          </FormItem>
          
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(CompresiveCredit);