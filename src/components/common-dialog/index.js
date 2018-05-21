import React, {Component} from 'react';
import { Modal } from 'antd';

class CommonDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }
  dialogRef = React.createRef();
  show = () => {
    this.setState({
      visible: true,
    });
  }
  hiddle = () => {
    this.setState({
      visible: false,
    });
  }
  handleOk = (e) => {
    this.props.handleOk ? this.props.handleOk() : '';
  }
  handleCancel = (e) => {
    this.props.handleCancel ? this.props.handleCancel() : this.setState({visible: false,});
  }
  render() {
    return (
      <div>
        <Modal
          title={this.props.title ? this.props.title: '弹出框'}
          footer={this.props.footer}
          {...this.props.modelConfig}
          ref={this.dialogRef}
          mask
          maskClosable={false}
          destroyOnClose
          keyboard
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText={this.props.cancelText ? this.props.cancelText : '取消'}
          okText={this.props.okText ? this.props.okText : '确定'}
        >
          { this.props.children }
        </Modal>
      </div>
    );
  }
}

export default CommonDialog;