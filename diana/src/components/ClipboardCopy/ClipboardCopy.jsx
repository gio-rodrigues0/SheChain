import { Icon, message } from 'antd';
import Clipboard from 'clipboard';

export default function CopyIcon({
    text
}) {
    const componentDidMount = () => {
      this.clipboard = new Clipboard('.copy-button');
      this.clipboard.on('success', () => {
        message.success('Texto copiado!');
      });
    }
  
    const componentWillUnmount = () => {
      this.clipboard.destroy();
    }
      return (
        <Icon
          type="copy"
          className="copy-button"
          data-clipboard-text={text}
        />
      );
  }
  